# PRODUCT BRIEF: Landing Page Cle'O House
**Vai trò:** Product Manager
**Đối tượng đọc:** AI Coding Agent (Cursor / Antigravity / Claude Code…)
**Ngày:** 18/08/2026
**Reference design/layout:** https://o2skin.vn/chuyen-tri-mun-theo-phac-do-ca-nhan-hoa-cung-bac-si-da-lieu/

---

## 0. LƯU Ý QUAN TRỌNG TRƯỚC KHI BẮT ĐẦU (đọc kỹ, không được bỏ qua)

Trang tham khảo (O2 Skin) là **phòng khám da liễu có giấy phép y tế, có bác sĩ CKI/CKII**. Cle'O House là **spa chăm sóc da tại nhà (home spa model)**, KHÔNG phải phòng khám, KHÔNG có bác sĩ da liễu.

➜ Agent PHẢI tuân thủ khi viết content/copy:
- **KHÔNG** dùng từ "bác sĩ", "điều trị y khoa", "khám bệnh", "phác đồ điều trị của bác sĩ" cho đội ngũ Cle'O House.
- **ĐƯỢC** dùng: "chuyên viên", "kỹ thuật viên", "chuyên gia chăm sóc da mụn", nhấn vào kinh nghiệm thực tế (5+ năm, đào tạo tại O2 Skin, kỹ thuật tăm bông vô khuẩn).
- Founder Mỹ Sinh (SySy) có bằng Dược sĩ + Y sĩ → được nhắc bằng cấp thật, KHÔNG được gọi là "bác sĩ".
- Mọi con số (giá, tỷ lệ %, số khách hàng) chỉ được đưa vào nếu có dữ liệu thật từ Cle'O House — nếu chưa có, để placeholder `[CẦN SỐ LIỆU THẬT]` cho chủ shop điền, TUYỆT ĐỐI không bịa số như "489.000 khách hàng" của O2 Skin.
- Đây là **kiến trúc/bố cục (layout, UX flow, cách trình bày)** được học theo O2 Skin — KHÔNG copy nguyên văn text, hình ảnh, hay số liệu của O2 Skin.

---

## 1. MỤC TIÊU DỰ ÁN

Xây landing page 1 trang (long-form, dạng "advertorial") cho **Cle'O House** — spa trị mụn/sẹo tại TP.HCM — để:
1. Thay thế website cũ cleohouse.com
2. Chuyển đổi traffic từ quảng cáo Facebook/TikTok thành **lượt đặt lịch** (qua Zalo Mini App / nút gọi Zalo)
3. Xây dựng niềm tin (trust) bằng cách trình bày quy trình chuyên nghiệp, kinh nghiệm đội ngũ, kết quả khách hàng thật

**KPI chính:** tỷ lệ chuyển đổi (visitor → click đặt lịch/chat Zalo), tốc độ load trên mobile (đa số traffic từ ads mobile).

---

## 2. CẤU TRÚC TRANG (Information Architecture — học theo layout O2 Skin)

Thứ tự section, mapping từ trang tham khảo sang nội dung thật của Cle'O House:

| # | Section (O2 Skin) | Section (Cle'O House) | Nội dung |
|---|---|---|---|
| 1 | Sticky header + CTA "Đặt Hẹn Khám" | Sticky header + CTA "Đặt Lịch Ngay" | Logo, menu anchor, nút CTA nổi bật + nút gọi/Zalo sticky |
| 2 | Hero: tiêu đề + cam kết % cải thiện | Hero: tiêu đề + cam kết (dùng số liệu thật hoặc placeholder) | Ảnh nền spa, tagline, 1 CTA chính |
| 3 | "Vì sao tự trị mụn tại nhà mãi không hết" (pain point) | Giữ nguyên pattern pain-point, viết lại theo giọng Cle'O House | List 4 sai lầm phổ biến khi tự trị mụn |
| 4 | 6 hệ lụy trị mụn sai cách (icon grid) | Giữ pattern icon-grid cảnh báo | 6 hệ lụy, icon + text ngắn |
| 5 | Before/after carousel khách hàng | Before/after carousel khách hàng Cle'O House thật | Cần ảnh thật, có xin phép khách hàng |
| 6 | "2 giải pháp" (chăm sóc chuyên sâu + phác đồ cá nhân hóa) | "Giải pháp tại Cle'O House": lấy nhân mụn tăm bông vô khuẩn + liệu trình chăm sóc theo tình trạng da | Combo dịch vụ dạng card, mô tả kỹ thuật tăm bông (điểm khác biệt cốt lõi) |
| 7 | Bảng so sánh 3 mức phác đồ (giá/tái khám/thời gian) | Bảng so sánh các gói dịch vụ Cle'O House (nếu có phân gói) | Dùng `<Table>` hoặc card so sánh, giá thật |
| 8 | 3 cam kết (không ép buộc, không bán gói dài hạn, tư vấn trung thực) | Giữ nguyên 3 cam kết — rất phù hợp với mô hình spa nhỏ, đề cao uy tín | 3 icon-card |
| 9 | Đội ngũ 30+ bác sĩ (carousel profile) | Đội ngũ Cle'O House: founder Mỹ Sinh + 3 chuyên viên | Profile card: ảnh, tên, kinh nghiệm, KHÔNG dùng danh xưng "bác sĩ" |
| 10 | Cảm nhận khách hàng (ảnh testimonial) | Testimonial khách hàng Cle'O House (ảnh chụp màn hình Zalo/FB review thật) | Carousel |
| 11 | Stats số liệu ấn tượng | Stats thật của Cle'O House (vd: số năm hoạt động, doanh thu cao nhất tháng — cân nhắc có nên public số tiền hay không) | 3-4 số liệu, dùng CountUp animation |
| 12 | Cơ sở vật chất | Ảnh không gian spa (5 giường, khu vực trị liệu) | Grid ảnh + caption |
| 13 | Công nghệ điều trị (6 items) | Các bước/kỹ thuật chăm sóc da mà Cle'O House đang có (không bịa máy móc chưa có) | Grid icon 4-6 items tùy dịch vụ thật |
| 14 | Quy trình 5 bước chuẩn Y khoa | Quy trình 5 bước tại Cle'O House (khám da → tư vấn → lấy nhân mụn tăm bông → chăm sóc phục hồi → hướng dẫn tại nhà) | Timeline/step section |
| 15 | Bảng so sánh trị tại nhà vs tại Cle'O House | Giữ pattern, viết lại nội dung | 2 cột ✅/❌ |
| 16 | FAQ | FAQ thật liên quan tăm bông, mụn, giá, quy trình đặt lịch | Accordion |
| 17 | Hệ thống chi nhánh (map) | 1 địa chỉ Cle'O House (chưa cần multi-branch) | Map + địa chỉ + giờ mở cửa |
| 18 | Footer đầy đủ pháp lý | Footer: tên công ty/hộ kinh doanh, địa chỉ, hotline, Zalo, social | |
| 19 | Popup sticky CTA cuối trang / floating buttons | Floating: gọi điện, Zalo, Messenger | Sticky bottom bar (mobile) |
| 20 | Form đăng ký tư vấn (modal) | Modal form đặt lịch → gửi vào Zalo OA hoặc Google Sheet/CRM | Form: tên, SĐT, tình trạng da (optional) |

**Ghi chú UX quan trọng:** Đây là landing page dạng "long scroll một trang" tối ưu cho traffic quảng cáo lạnh (cold traffic) — không phải trang thông tin doanh nghiệp thông thường. Không bỏ section pain-point/cam kết vì đây là phần xây trust quan trọng nhất cho spa nhỏ chưa có thương hiệu lớn.

---

## 3. YÊU CẦU UI/UX — DESIGN STYLE CHỐT THEO REFERENCE (O2 Skin)

**Chỉ đạo của chủ shop: giao diện & cách trình bày phải bám sát reference https://o2skin.vn/... — không tự sáng tạo lệch layout.** Dưới đây là style spec cụ thể để agent code đúng ý, KHÔNG được tự do diễn giải khác.

### 3.1 Bảng màu (Color Palette)
Reference O2 Skin dùng tông **xanh dương y tế** (trust, sạch sẽ, chuyên nghiệp) làm màu chủ đạo + **cam/đỏ** cho CTA và điểm nhấn cảnh báo/giá.

➜ **Áp dụng cho Cle'O House:** giữ nguyên cấu trúc phối màu (1 màu chủ đạo + 1 màu nhấn CTA) nhưng thay màu chủ đạo bằng **màu thương hiệu thật của Cle'O House** — xanh ngọc/teal + vàng đồng (gold), lấy đúng theo logo và bảng giá hiện có (nền trắng, viền/text màu xanh ngọc `#2C7A73`-tông, chữ vàng đồng cho tên thương hiệu, đỏ cho giá khuyến mãi). Đây là điều chỉnh **bắt buộc** vì dùng nguyên màu xanh dương của đối thủ (phòng khám) sẽ gây nhầm lẫn thương hiệu và không đúng bộ nhận diện Cle'O House đã có sẵn.

- Primary: xanh ngọc/teal (theo logo Cle'O House) — dùng cho header, tiêu đề section, border card, icon
- Accent/CTA: vàng đồng/gold hoặc cam ấm — dùng cho nút CTA chính, số thứ tự section (①②③), điểm nhấn
- Giá khuyến mãi: đỏ — giá cũ gạch ngang xám, giá mới đỏ đậm (giữ đúng pattern trong bảng giá gốc)
- Nền: trắng/be nhạt, xen kẽ block nền xanh ngọc rất nhạt (10-15% opacity) để tách section — đúng pattern reference (các section xen kẽ nền trắng/nền màu nhạt)

### 3.2 Typography
- Tiêu đề section: font chữ đậm (bold/black weight), cỡ lớn, kiểu chữ giống reference — tiêu đề chính giữa, 2 dòng (dòng 1 to đậm, dòng 2 nhỏ hơn là mô tả) — y hệt cấu trúc "TRỊ MỤN THEO PHÁC ĐỒ CÁ NHÂN HÓA / Cải thiện hơn 80%..." của reference
- Numbered headers: dùng số khoanh tròn kiểu ①②③ cho các tiêu đề section theo thứ tự (2 giải pháp, 3 cam kết, 5 bước quy trình...) — đây là dấu hiệu nhận diện rất đặc trưng của reference, PHẢI giữ
- Body text: font sans-serif dễ đọc, cỡ vừa, dùng ký hiệu ✔ ➜ ⚠️ trước mỗi ý (đúng pattern reference dùng nhiều bullet icon thay vì bullet chấm thường)

### 3.3 Layout pattern (bám sát reference)
- Full-width sticky header: logo bên trái, menu giữa (ẩn thành hamburger trên mobile), 1 nút CTA nổi bật bên phải
- Hero: full-bleed ảnh nền hoặc ảnh minh họa lớn, tiêu đề overlay, 1 CTA to ngay dưới tiêu đề
- Section pattern lặp lại xuyên suốt: **tiêu đề section căn giữa → mô tả ngắn → nội dung (card/grid/carousel) → CTA button căn giữa cuối section** — đúng nhịp điệu reference, mỗi 2-3 section có 1 CTA
- Card dịch vụ/combo: bo góc mềm (rounded-2xl), có border màu nhạt, ảnh minh họa phía trên, tên + mô tả ngắn phía dưới — giống card "Lấy nhân mụn + Điện di", "Lấy nhân mụn + Peel da"...
- Icon-grid cảnh báo (6 hệ lụy): grid 2-3 cột trên mobile, icon tròn + text ngắn, không viền, nền trong suốt
- Bảng so sánh: dùng layout card 3 cột (không phải bảng HTML truyền thống) như reference — mỗi cột là 1 gói, có nút "mở rộng thông tin" dạng accordion
- Carousel (before/after, testimonial, đội ngũ): horizontal scroll/swipe, có nút mũi tên ‹ › hai bên — đúng UX reference
- Stats số liệu: grid 4 cột (2 cột trên mobile), icon minh họa phía trên số liệu, dùng animation đếm số (CountUp)
- FAQ: accordion đóng mặc định, click mở rộng từng câu — đúng pattern reference
- Footer: nhiều cột (thông tin công ty, địa chỉ, hỗ trợ khách hàng), nền màu đậm hơn phần trên
- Floating elements: nút "Gọi cho tôi ngay" + banner nhỏ góc dưới ("Trong vòng 3-5 phút sẽ liên hệ") + nút chat Zalo/Messenger nổi góc phải — reference có cả 2 dạng này, giữ nguyên

### 3.4 Animation & micro-interaction
- Scroll-reveal nhẹ cho từng section khi cuộn tới (fade-up)
- CountUp cho số liệu thống kê
- Carousel auto-play chậm cho testimonial/before-after, dừng khi hover/touch
- Hover effect nhẹ (scale/shadow) trên card và button
- Dùng **Magic UI** components để làm các hiệu ứng trên (xem mục 4.2), giữ chuyển động tinh tế, không lạm dụng gây rối mắt — reference dùng animation vừa phải, ưu tiên rõ ràng dễ đọc hơn hiệu ứng hoa mỹ

### 3.5 Yêu cầu chung
- **Mobile-first bắt buộc** — 90%+ traffic từ Facebook/TikTok ads sẽ vào bằng mobile trong in-app browser.
- CTA lặp lại sau mỗi 2-3 section (giống reference), không chỉ ở đầu/cuối trang.
- Sticky bottom action bar trên mobile: [Gọi ngay] [Chat Zalo] [Đặt lịch].
- Ảnh before/after, testimonial: dùng lazy-load, tối ưu kích thước (đây là phần nặng nhất của trang reference).

> **Lưu ý cho agent:** "Giống reference" ở đây nghĩa là giống **layout, nhịp điệu section, kiểu component, pattern UX** (numbered headers, card style, carousel, sticky CTA...) — KHÔNG phải copy y nguyên màu xanh dương thương hiệu đối thủ. Màu sắc áp dụng theo bộ nhận diện Cle'O House (xanh ngọc + vàng đồng) đã có sẵn trên bảng giá/logo hiện tại.

---

## 4. KIẾN TRÚC KỸ THUẬT (Architecture)

### 4.1 Stack đề xuất
- **Framework:** Next.js 14+ (App Router), TypeScript
- **Styling:** Tailwind CSS
- **UI components:** [Magic UI](https://magicui.design/) cho các hiệu ứng động (marquee testimonial, number ticker cho stats, animated beam nếu cần minh họa quy trình, bento grid cho cơ sở vật chất/công nghệ, accordion cho FAQ) — kết hợp shadcn/ui cho các component chuẩn (button, dialog/modal form, card, table so sánh)
- **Hosting:** Vercel (tối ưu tốc độ, phù hợp landing page traffic ads)
- **Form submit:** gửi vào Google Sheet (qua API route) hoặc trực tiếp Zalo OA API — cần chốt với chủ shop kênh nhận lead nào là chính
- **Booking:** nút CTA chính trỏ vào **Zalo Mini App** (đã được nhắc tới trong định hướng dự án) — landing page đóng vai trò "cửa vào" dẫn traffic vào Mini App để đặt lịch, không tự làm hệ thống booking riêng
- **Analytics:** Google Analytics 4 + Facebook Pixel + TikTok Pixel (bắt buộc, vì đây là landing page cho ads)
- **SEO:** dùng Next.js metadata API, OG tags, ảnh có alt text tiếng Việt có dấu

### 4.2 Mapping section → Magic UI / shadcn component

| Section | Component gợi ý |
|---|---|
| Hero | Magic UI `Particles`/`AnimatedGradientText` cho tiêu đề, `ShimmerButton` cho CTA |
| Stats số liệu | Magic UI `NumberTicker` |
| Before/After, testimonial | Magic UI `Marquee` hoặc carousel (shadcn `Carousel`) |
| Đội ngũ chuyên viên | Bento-style grid (Magic UI `BentoGrid`) hoặc shadcn `Card` |
| Quy trình 5 bước | Magic UI `AnimatedBeam` hoặc timeline component tùy độ phức tạp |
| Bảng so sánh gói dịch vụ | shadcn `Table` hoặc pricing cards |
| FAQ | shadcn `Accordion` |
| Form đặt lịch | shadcn `Dialog` + `Form` (react-hook-form + zod validate) |
| Sticky CTA bar | custom component, `position: sticky` + Tailwind |

### 4.3 File structure gợi ý
```
/app
  /page.tsx                → landing page chính (compose các section)
  /api/lead/route.ts       → nhận form, forward Google Sheet/Zalo OA
/components
  /sections/               → 1 file / section theo bảng mục 2
  /ui/                      → shadcn + magic ui components
/lib
  /analytics.ts
/public/images
```

### 4.4 Performance requirements
- Lighthouse mobile score ≥ 85
- Ảnh dùng Next/Image, format WebP
- Lazy load mọi carousel/section dưới fold đầu tiên

---

## 5. NHỮNG GÌ CẦN CHỦ SHOP (Cle'O House) CUNG CẤP TRƯỚC KHI AGENT VIẾT CONTENT THẬT

- [x] Ảnh thật: **tạm dùng ảnh placeholder/stock cho bản dựng đầu tiên**, thay bằng ảnh thật khi có (agent nên tách riêng file ảnh dễ thay, không hard-code)
- [x] Bảng giá dịch vụ hiện tại — xem mục 7
- [x] Danh sách dịch vụ/công nghệ đang có — xem mục 7
- [ ] Testimonial thật (screenshot Zalo/FB hoặc video) — **chưa có, để placeholder card, không tự bịa lời khách hàng**
- [x] Địa chỉ, giờ mở cửa, số Zalo OA/hotline — xem mục 7
- [x] Link Zalo Mini App — **chưa có**, nên tạm thời để CTA chính là "Gọi ngay" / "Chat Zalo" trỏ tới số hotline, chừa sẵn chỗ (prop/config) để gắn link Mini App sau
- [x] Thông tin pháp lý — xem mục 7

---

## 7. DỮ LIỆU THẬT (dùng để viết content, KHÔNG được thay đổi số liệu)

### 7.1 Thông tin liên hệ & pháp lý
- **Tên thương hiệu:** Cle'O House Spa
- **Hộ kinh doanh:** Hộ kinh doanh Cle'O House
- **Địa chỉ:** 183 Hoa Lan, Phường Cầu Kiệu, Quận Phú Nhuận, TP.HCM
- **Giờ mở cửa:** 10:00 - 20:00 (hằng ngày, xác nhận lại với chủ shop nếu có ngày nghỉ)
- **Hotline/Zalo:** 0888.722.723

### 7.2 Bảng giá dịch vụ (chi nhánh Phú Nhuận)
Agent dựng trang giá theo đúng nhóm/số liệu dưới đây, giữ format "giá cũ gạch ngang → giá mới" cho các dịch vụ đang có khuyến mãi.

**Nhóm Chăm sóc da mụn (chuẩn Y khoa)**
| Dịch vụ | Giá gốc | Giá hiện tại |
|---|---|---|
| Xử lí nhân mụn y khoa | 350.000 | 299.000 |
| Xử lí nhân mụn chuyên sâu | 630.000 | 530.000 |
| Detox CO2 - xử lí nhân mụn | 880.000 | 670.000 |
| Detox Glow - xử lí nhân mụn | 1.100.000 | 690.000 |
| Elight Therapy - xử lí nhân mụn (công nghệ cao) | 770.000 | 593.000 |
| Chăm sóc da công nghệ độc quyền Cle'O Pure T-zone | 1.290.000 | 900.000 |
| Bắn mụn thịt, nốt ruồi | — | 50.000-100.000/nốt, full face 500.000 |

**Nhóm Peel (đã bao gồm lấy mụn)**
| Dịch vụ | Giá |
|---|---|
| Hoạt chất cho da mụn | 1.290.000 → 690.000 |
| Peel tảo | 1.200.000 |
| Hoạt chất phục hồi da | 1.500.000 |
| Hoạt chất cho da mụn nặng | 1.600.000 |
| Hoạt chất sáng da mờ thâm | 1.600.000 |
| Hoạt chất cho da sừng hoá | 1.790.000 |
| Hoạt chất trẻ hoá làm đẹp | 2.000.000 |
*(và nhiều dòng peel khác tùy tình trạng da — không liệt kê hết trên landing page, dùng câu này làm ghi chú)*

**Nhóm Body (đã bao gồm lấy mụn)**
| Dịch vụ | Giá |
|---|---|
| Xử lí nhân mụn | 500.000 |
| Peel tảo 1/2 lưng | 1.200.000 |
| Peel tảo full lưng | 1.500.000 |
| Peel sừng, mụn, thâm | 1.600.000 |
| Phi kim | 1.700.000 |

**Nhóm Sẹo (đã bao gồm lấy mụn)**
| Dịch vụ | Giá |
|---|---|
| Sẹo đỏ | 2.000.000 |
| Sẹo rỗ | 3.000.000 |

**Nhóm khác:** Meso (liên hệ tư vấn), Triệt lông (liên hệ tư vấn)

> UX cho bảng giá: KHÔNG nhồi hết vào 1 bảng dài gây rối mắt như ảnh gốc. Tách theo tab/accordion 5 nhóm (Chăm sóc da mụn / Peel / Body / Sẹo / Meso & Triệt lông), mobile-first, dùng shadcn `Tabs` hoặc `Accordion`. Giá khuyến mãi hiển thị dạng giá cũ gạch ngang + giá mới nổi bật (màu đỏ/nhấn) đúng như bảng giá gốc.

### 7.3 Danh sách công nghệ/dịch vụ đang có (dùng cho section "Công nghệ điều trị")
IPL, Điện di, Meso, Lăn kim, Peel (đa dạng hoạt chất), Elight Therapy, Detox CO2/Glow, công nghệ độc quyền Cle'O Pure T-zone, kỹ thuật lấy nhân mụn bằng tăm bông vô khuẩn (điểm khác biệt cốt lõi, luôn đặt lên đầu).

### 7.4 Ảnh & Testimonial
- **Ảnh:** dùng ảnh placeholder/stock phù hợp chủ đề spa/da liễu cho bản dựng v1 (đánh dấu rõ `// TODO: thay ảnh thật` trong code), không dùng ảnh có logo/thương hiệu khác.
- **Testimonial:** chưa có dữ liệu thật → dựng UI component sẵn (carousel) nhưng để 2-3 placeholder rõ ràng dạng "[Chờ testimonial thật]", KHÔNG tự viết lời khách hàng giả.
- **Link Zalo Mini App:** chưa có → CTA chính tạm thời là `tel:0888722723` và link Zalo chat (`https://zalo.me/0888722723`), code phải để config dễ thay khi có link Mini App.

---

## 6. OUT OF SCOPE (không làm ở phase này)
- Không xây hệ thống booking riêng (dùng Zalo Mini App có sẵn)
- Không làm đa chi nhánh (Cle'O House hiện 1 địa điểm)
- Không làm blog/kiến thức da liễu đầy đủ như O2 Skin (có thể làm sau nếu cần SEO dài hạn)

---

**Hướng dẫn cho Agent:** Xây dựng theo đúng thứ tự section ở mục 2, dùng bố cục/animation pattern học từ O2 Skin nhưng nội dung/copy phải viết lại 100% theo đúng thực tế Cle'O House, tuân thủ nghiêm mục 0. Khi thiếu dữ liệu thật, để rõ placeholder thay vì tự bịa.
