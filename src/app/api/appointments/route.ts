import { NextResponse } from 'next/server';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, appointment } = body;
    // action could be 'add', 'update', 'delete' 
    // for now we handle 'add' and 'update' via appending, or we can actually find the row and update it.
    
    const email = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !privateKey || !sheetId) {
      return NextResponse.json({ error: 'Missing Google credentials' }, { status: 500 });
    }

    let formattedKey = privateKey;
    if (formattedKey.startsWith('"') && formattedKey.endsWith('"')) {
      formattedKey = formattedKey.slice(1, -1);
    } else if (formattedKey.startsWith("'") && formattedKey.endsWith("'")) {
      formattedKey = formattedKey.slice(1, -1);
    }
    formattedKey = formattedKey.replace(/\\n/g, '\n');

    const serviceAccountAuth = new JWT({
      email: email,
      key: formattedKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

    await doc.loadInfo();
    
    let sheet = doc.sheetsByTitle['booking'];
    if (!sheet) {
      sheet = await doc.addSheet({ headerValues: ['ID', 'Ngày hẹn', 'Khung giờ', 'Tên khách hàng', 'Số điện thoại', 'Trạng thái', 'Ngày tạo'], title: 'booking' });
    }

    // Try to load headers, if fails, set them
    try {
      await sheet.loadHeaderRow();
    } catch (e) {
      await sheet.setHeaderRow(['ID', 'Ngày hẹn', 'Khung giờ', 'Tên khách hàng', 'Số điện thoại', 'Trạng thái', 'Ngày tạo']);
    }

    const statusMap: Record<string, string> = {
      "BOOKED": "Khách đặt lịch",
      "DONE": "Đã làm",
      "CANCELLED": "Đã huỷ"
    };

    if (action === 'delete') {
      // find and delete
      const rows = await sheet.getRows();
      const rowToDelete = rows.find(r => r.get('ID') === appointment.id);
      if (rowToDelete) {
        await rowToDelete.delete();
      }
      return NextResponse.json({ success: true, message: 'Deleted from Google Sheets' });
    }

    if (action === 'update' || action === 'add') {
      const rows = await sheet.getRows();
      const existingRow = rows.find(r => r.get('ID') === appointment.id);

      const statusText = statusMap[appointment.status] || appointment.status;

      if (existingRow) {
        existingRow.assign({
          'Ngày hẹn': appointment.date,
          'Khung giờ': appointment.time,
          'Tên khách hàng': appointment.name,
          'Số điện thoại': appointment.phone,
          'Trạng thái': statusText,
          // keep 'Ngày tạo' as is or update it? Keep it.
        });
        await existingRow.save();
        return NextResponse.json({ success: true, message: 'Updated in Google Sheets' });
      } else {
        await sheet.addRow({
          'ID': appointment.id,
          'Ngày hẹn': appointment.date,
          'Khung giờ': appointment.time,
          'Tên khách hàng': appointment.name,
          'Số điện thoại': appointment.phone,
          'Trạng thái': statusText,
          'Ngày tạo': new Date().toISOString()
        });
        return NextResponse.json({ success: true, message: 'Saved to Google Sheets' });
      }
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });

  } catch (error: any) {
    console.error('Google Sheets Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to save to Google Sheets' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const email = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!email || !privateKey || !sheetId) {
      return NextResponse.json({ error: 'Missing Google credentials' }, { status: 500 });
    }

    let formattedKey = privateKey;
    if (formattedKey.startsWith('"') && formattedKey.endsWith('"')) {
      formattedKey = formattedKey.slice(1, -1);
    } else if (formattedKey.startsWith("'") && formattedKey.endsWith("'")) {
      formattedKey = formattedKey.slice(1, -1);
    }
    formattedKey = formattedKey.replace(/\\n/g, '\n');

    const serviceAccountAuth = new JWT({
      email: email,
      key: formattedKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);

    await doc.loadInfo();
    const sheet = doc.sheetsByTitle['booking'];
    if (!sheet) {
      return NextResponse.json([]);
    }

    const rows = await sheet.getRows();
    const reverseStatusMap: Record<string, string> = {
      "Khách đặt lịch": "BOOKED",
      "Đã làm": "DONE",
      "Đã huỷ": "CANCELLED"
    };

    const appointments = rows.map(r => ({
      id: r.get('ID') || '',
      date: r.get('Ngày hẹn') || '',
      time: r.get('Khung giờ') || '',
      name: r.get('Tên khách hàng') || '',
      phone: r.get('Số điện thoại') || '',
      status: reverseStatusMap[r.get('Trạng thái')] || 'BOOKED'
    }));

    return NextResponse.json(appointments);
  } catch (error: any) {
    console.error('Google Sheets GET Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
