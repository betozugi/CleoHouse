# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing-page.spec.ts >> Mobile Specific UI/UX >> mobile sticky bottom bar should appear on scroll
- Location: tests\e2e\landing-page.spec.ts:107:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Chat Zalo Đặt Lịch').first().locator('..')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('text=Chat Zalo Đặt Lịch').first().locator('..')

```

```yaml
- main:
  - link "Cle'O House":
    - /url: /
  - button "Toggle menu"
  - img "Spa background"
  - text: ✨ Spa trị mụn & sẹo hàng đầu
  - heading "Trị Mụn Theo Phác Đồ Cá Nhân Hóa" [level=1]
  - paragraph:
    - text: Lấy nhân mụn bằng
    - strong: tăm bông vô khuẩn
    - text: . Cải thiện rõ rệt chỉ sau 1 liệu trình chuyên sâu tại Cle'O House.
  - button "Đặt Lịch Khám Da Ngay":
    - link "Đặt Lịch Khám Da Ngay":
      - /url: https://zalo.me/0888722723
  - button "Tìm hiểu giải pháp":
    - link "Tìm hiểu giải pháp":
      - /url: "#solutions"
  - text: ✓ Không ép mua gói ✓ Chuyên viên 5+ năm
  - heading "Vì Sao Bạn Trị Mụn Mãi Không Hết?" [level=2]
  - paragraph: Hàng ngàn khách hàng đến với Cle'O House trong tình trạng da tổn thương nặng vì từng mắc phải những sai lầm này tại nhà.
  - heading "Tự nặn mụn sai cách" [level=3]
  - paragraph: Dùng tay bẩn hoặc cố nặn mụn viêm chưa chín, dẫn đến thâm đen và sẹo rỗ vĩnh viễn.
  - heading "Dùng mỹ phẩm trôi nổi" [level=3]
  - paragraph: Sử dụng kem trộn, rượu thuốc làm bào mòn hàng rào bảo vệ da, khiến da yếu và mụn bùng phát nặng hơn.
  - heading "Bỏ qua bước làm sạch sâu" [level=3]
  - paragraph: Chỉ rửa mặt bằng nước hoặc sữa rửa mặt không phù hợp, để lại bã nhờn bít tắc lỗ chân lông.
  - heading "Thiếu kiên nhẫn & phác đồ" [level=3]
  - paragraph: Thử nhiều cách nhưng không theo một quy trình chuẩn, đổi sản phẩm liên tục khiến da bị 'bội thực'.
  - text: CẢNH BÁO
  - heading "6 Hệ Lụy Nghiêm Trọng Khi Tự Điều Trị Sai Cách" [level=2]
  - text: 🌋
  - heading "Sẹo rỗ chằng chịt" [level=3]
  - text: 🌑
  - heading "Thâm mụn kéo dài" [level=3]
  - text: 🦠
  - heading "Viêm nhiễm lan rộng" [level=3]
  - text: 🥀
  - heading "Da mỏng yếu, nhạy cảm" [level=3]
  - text: 🍂
  - heading "Lão hóa sớm" [level=3]
  - text: 😔
  - heading "Tự ti trong giao tiếp" [level=3]
  - heading "Hiệu Quả Thực Tế Khách Hàng Tại Cle'O House" [level=2]
  - paragraph: Hàng ngàn khách hàng đã tìm lại sự tự tin với làn da sạch mụn.
  - region:
    - group:
      - img "Before After"
      - text: BEFORE AFTER Khách hàng giảm 80% mụn viêm sau 4 tuần
    - group:
      - img "Before After"
      - text: BEFORE AFTER Mờ thâm, đầy sẹo sau liệu trình chuyên sâu
    - group:
      - img "Before After"
      - text: BEFORE AFTER Phục hồi da nhiễm corticoid
    - button "Previous slide"
    - button "Next slide"
  - button "Nhận Tư Vấn Phác Đồ Ngay":
    - link "Nhận Tư Vấn Phác Đồ Ngay":
      - /url: https://zalo.me/0888722723
  - text: "1"
  - heading "Giải Pháp Đột Phá Chỉ Có Tại Cle'O House" [level=2]
  - img "Lấy Nhân Mụn Tăm Bông Vô Khuẩn"
  - heading "Lấy Nhân Mụn Tăm Bông Vô Khuẩn" [level=3]
  - paragraph: Kỹ thuật độc quyền hạn chế tối đa tổn thương, không dùng lực tì đè mạnh như nặn tay, giảm đau, ngừa thâm sẹo hiệu quả.
  - list:
    - listitem: Sử dụng tăm bông y tế dùng 1 lần
    - listitem: Rút nhân mụn tận gốc, không sót cồi
    - listitem: Giảm 80% nguy cơ lây lan vi khuẩn
  - img "Phác Đồ Chăm Sóc Cá Nhân Hóa"
  - heading "Phác Đồ Chăm Sóc Cá Nhân Hóa" [level=3]
  - paragraph: Không áp dụng 1 công thức cho mọi loại da. Mỗi khách hàng được chuyên gia đánh giá và thiết kế liệu trình chuyên biệt.
  - list:
    - listitem: Kết hợp Peel da, Điện di, Meso tùy tình trạng
    - listitem: Theo dõi sát sao tiến triển sau mỗi buổi
    - listitem: Sản phẩm chuẩn Y khoa, an toàn cho da yếu
  - text: "2"
  - heading "Bảng Giá Dịch Vụ Minh Bạch & Rõ Ràng" [level=2]
  - paragraph: Cle'O House cam kết chi phí hợp lý, không phát sinh trong suốt quá trình.
  - tablist:
    - tab "Chăm sóc da mụn" [selected]
    - tab "Peel (bao gồm mụn)"
    - tab "Mụn Body"
    - tab "Sẹo"
    - tab "Dịch vụ khác"
  - tabpanel "Chăm sóc da mụn": Xử lí nhân mụn y khoa 350.000đ 299.000đ Xử lí nhân mụn chuyên sâu 630.000đ 530.000đ Detox CO2 - xử lí nhân mụn 880.000đ 670.000đ Detox Glow - xử lí nhân mụn 1.100.000đ 690.000đ Elight Therapy - xử lí nhân mụn 770.000đ 593.000đ Chăm sóc da công nghệ Cle'O Pure T-zone 1.290.000đ 900.000đ Bắn mụn thịt, nốt ruồi 50k-100k/nốt
  - button "Nhận Báo Giá Tình Trạng Da":
    - link "Nhận Báo Giá Tình Trạng Da":
      - /url: https://zalo.me/0888722723
  - text: "3"
  - heading "3 Cam Kết Vàng Làm Nên Uy Tín Cle'O House" [level=2]
  - heading "Không ép mua thẻ/gói dài hạn" [level=3]
  - paragraph: Khách hàng hoàn toàn tự nguyện đăng ký dịch vụ theo từng buổi. Chúng tôi không bao giờ chèo kéo, ép buộc mua gói lớn.
  - heading "Tư vấn trung thực 100%" [level=3]
  - paragraph: Khám đúng bệnh, tư vấn đúng giải pháp. Không vẽ thêm dịch vụ không cần thiết để moi tiền khách hàng.
  - heading "Đồng hành đến khi sạch mụn" [level=3]
  - paragraph: Chuyên viên theo sát tình trạng da sau mỗi buổi, sẵn sàng hỗ trợ giải đáp thắc mắc 24/7 qua Zalo.
  - text: "4"
  - heading "Đội Ngũ Chuyên Viên Giàu Kinh Nghiệm" [level=2]
  - paragraph: 100% chuyên viên được đào tạo bài bản về cấu trúc da và kỹ thuật tăm bông vô khuẩn độc quyền.
  - img "Mỹ Sinh (SySy)"
  - heading "Mỹ Sinh (SySy)" [level=3]
  - paragraph: Founder - Chuyên Gia Da Liễu
  - text: Bằng Dược sĩ Bằng Y sĩ Kinh nghiệm 7+ năm
  - img "Thanh Trúc"
  - heading "Thanh Trúc" [level=3]
  - paragraph: Trưởng Kỹ Thuật Viên
  - text: Chứng chỉ hành nghề Spa Kinh nghiệm 5+ năm
  - img "Ngọc Mai"
  - heading "Ngọc Mai" [level=3]
  - paragraph: Kỹ Thuật Viên
  - text: Đào tạo tăm bông vô khuẩn Kinh nghiệm 3+ năm
  - img "Thảo Vy"
  - heading "Thảo Vy" [level=3]
  - paragraph: Kỹ Thuật Viên
  - text: Đào tạo tại O2 Skin Kinh nghiệm 4+ năm 5
  - heading "Cảm Nhận Thực Tế Từ Khách Hàng" [level=2]
  - paragraph: Hàng ngàn tin nhắn cảm ơn là minh chứng rõ nhất cho chất lượng tại Cle'O House.
  - region:
    - group:
      - img "Testimonial placeholder"
      - text: "[Chờ ảnh Feedback Zalo thật]"
    - group:
      - img "Testimonial placeholder"
      - text: "[Chờ ảnh Feedback Zalo thật]"
    - group:
      - img "Testimonial placeholder"
      - text: "[Chờ ảnh Feedback Zalo thật]"
    - group:
      - img "Testimonial placeholder"
      - text: "[Chờ ảnh Feedback Zalo thật]"
    - button "Previous slide"
    - button "Next slide"
  - text: 0+ Năm kinh nghiệm 0+ Khách hàng điều trị 0% Tỷ lệ hài lòng 0% Tăm bông vô khuẩn 6
  - heading "Không Gian Trị Liệu & Công Nghệ Hiện Đại" [level=2]
  - img "Không gian Cle'O House"
  - img "Giường trị liệu"
  - img "Sản phẩm"
  - heading "Đa dạng công nghệ hỗ trợ" [level=3]
  - paragraph: Bên cạnh kỹ thuật lấy nhân mụn tăm bông cốt lõi, Cle'O House trang bị đầy đủ máy móc công nghệ cao giúp đẩy nhanh quá trình phục hồi, tiêu viêm và mờ thâm sẹo.
  - text: Elight Therapy Cle'O Pure T-zone Detox CO2 & Glow Peel đa hoạt chất 7
  - heading "Quy Trình 5 Bước Chuyên Nghiệp & Khép Kín" [level=2]
  - text: "1"
  - heading "Kiểm tra tình trạng da" [level=3]
  - paragraph: Chuyên viên soi da, đánh giá mức độ mụn, nền da yếu hay khỏe, nguyên nhân gây mụn.
  - text: "2"
  - heading "Thiết kế phác đồ cá nhân" [level=3]
  - paragraph: Tư vấn lộ trình rõ ràng, số buổi dự kiến và chi phí minh bạch trước khi bắt đầu.
  - text: "3"
  - heading "Lấy nhân mụn tăm bông vô khuẩn" [level=3]
  - paragraph: Xử lý sạch cồi mụn bằng 2 cây tăm bông y tế dùng 1 lần, hạn chế sưng viêm lây lan.
  - text: "4"
  - heading "Chăm sóc & Phục hồi chuyên sâu" [level=3]
  - paragraph: Ứng dụng máy công nghệ cao (Elight, Điện di, Meso...) tùy phác đồ để làm dịu da ngay lập tức.
  - text: "5"
  - heading "Hướng dẫn skincare tại nhà" [level=3]
  - paragraph: Theo dõi 1:1, hướng dẫn cách làm sạch, bôi thoa tại nhà để ngăn mụn tái phát.
  - heading "Lựa Chọn Nào Tốt Hơn Cho Làn Da Của Bạn?" [level=2]
  - heading "Trị Mụn Tại Nhà" [level=3]
  - heading "Tại Cle'O House" [level=3]
  - text: Tự mò mẫm cách trị mụn trên mạng Phác đồ cá nhân hóa dựa trên tình trạng da thực tế Nặn mụn bằng tay/cây nặn mụn sắt gây tổn thương Lấy nhân mụn bằng tăm bông vô khuẩn, giảm đau, ngừa sẹo Thử sai liên tục, tốn nhiều tiền mua mỹ phẩm Tiết kiệm chi phí, cam kết minh bạch không phát sinh Chỉ bôi thoa ngoài da, cồi mụn vẫn nằm sâu bên trong Xử lý triệt để ổ viêm kết hợp máy công nghệ cao Da ngày càng mỏng yếu, dễ bùng phát mụn lại Phục hồi hàng rào bảo vệ da, hướng dẫn duy trì tại nhà
  - button "Thay Đổi Làn Da Ngay Hôm Nay":
    - link "Thay Đổi Làn Da Ngay Hôm Nay":
      - /url: https://zalo.me/0888722723
  - text: "8"
  - heading "Câu Hỏi Thường Gặp" [level=2]
  - heading "Lấy mụn bằng tăm bông có đau không?" [level=3]:
    - button "Lấy mụn bằng tăm bông có đau không?"
  - heading "Một liệu trình điều trị kéo dài bao lâu?" [level=3]:
    - button "Một liệu trình điều trị kéo dài bao lâu?"
  - heading "Cle'O House có ép khách mua gói dịch vụ thẻ dài hạn không?" [level=3]:
    - button "Cle'O House có ép khách mua gói dịch vụ thẻ dài hạn không?"
  - heading "Làm thế nào để đặt lịch hẹn?" [level=3]:
    - button "Làm thế nào để đặt lịch hẹn?"
  - heading "Có phát sinh chi phí trong quá trình điều trị không?" [level=3]:
    - button "Có phát sinh chi phí trong quá trình điều trị không?"
  - heading "Cle'O House Spa" [level=3]
  - paragraph: Tự hào là đơn vị tiên phong ứng dụng kỹ thuật lấy nhân mụn bằng tăm bông vô khuẩn. Mang đến phác đồ trị mụn cá nhân hóa an toàn, hiệu quả.
  - text: "183 Hoa Lan, Phường Cầu Kiệu, Quận Phú Nhuận, TP.HCM Hotline / Zalo: 0888.722.723 Giờ mở cửa: 10:00 - 20:00 (Thứ 2 - Chủ Nhật)"
  - iframe
  - paragraph: Hộ kinh doanh Cle'O House
  - paragraph: © 2026 Cle'O House Spa. All rights reserved.
  - link "FB":
    - /url: "#"
  - link "IG":
    - /url: "#"
- alert
```

# Test source

```ts
  24  |   test('desktop navigation smooth scroll', async ({ page, isMobile }) => {
  25  |     if (isMobile) return; // Skip on mobile
  26  |     
  27  |     await page.goto('/');
  28  |     
  29  |     // Click on "Bảng giá" link in desktop nav
  30  |     const pricingLink = page.locator('nav.hidden.lg\\:flex >> text=Bảng giá');
  31  |     await pricingLink.click();
  32  |     
  33  |     // Check if URL hash is updated
  34  |     await expect(page).toHaveURL(/#pricing/);
  35  |   });
  36  | 
  37  |   test('pricing tabs should switch content', async ({ page }) => {
  38  |     await page.goto('/');
  39  |     
  40  |     // By default "Chăm sóc da mụn" (value="mun") is selected
  41  |     const munTab = page.locator('button[role="tab"]:has-text("Chăm sóc da mụn")').first();
  42  |     await expect(munTab).toHaveAttribute('aria-selected', 'true');
  43  |     await expect(page.locator('text=Xử lí nhân mụn y khoa').first()).toBeVisible();
  44  |     
  45  |     // Click on "Peel (bao gồm mụn)" tab
  46  |     const peelTab = page.locator('button[role="tab"]:has-text("Peel (bao gồm mụn)")').first();
  47  |     await peelTab.click();
  48  |     
  49  |     // Check if state changed and new content is visible
  50  |     await expect(peelTab).toHaveAttribute('aria-selected', 'true');
  51  |     await expect(page.locator('text=Hoạt chất cho da mụn').first()).toBeVisible();
  52  |   });
  53  | 
  54  |   test('FAQ accordion should expand on click', async ({ page }) => {
  55  |     await page.goto('/');
  56  |     
  57  |     // Find the first FAQ trigger
  58  |     const firstFaqTrigger = page.locator('button[aria-expanded]').first();
  59  |     
  60  |     // By default it should be collapsed
  61  |     await expect(firstFaqTrigger).toHaveAttribute('aria-expanded', 'false');
  62  |     
  63  |     // Click to expand
  64  |     await firstFaqTrigger.click();
  65  |     
  66  |     // It should now be expanded
  67  |     await expect(firstFaqTrigger).toHaveAttribute('aria-expanded', 'true');
  68  |     
  69  |     // The content should be visible
  70  |     const contentId = await firstFaqTrigger.getAttribute('aria-controls');
  71  |     if (contentId) {
  72  |       const content = page.locator(`[id="${contentId}"]`);
  73  |       await expect(content).toBeVisible();
  74  |     }
  75  |   });
  76  | 
  77  | });
  78  | 
  79  | test.describe('Mobile Specific UI/UX', () => {
  80  |   // Use a mobile device config for these tests
  81  |   test.use({ viewport: { width: 375, height: 667 } });
  82  | 
  83  |   test('mobile menu should open and close', async ({ page, isMobile }) => {
  84  |     if (!isMobile) return;
  85  |     await page.goto('/');
  86  |     
  87  |     // Hamburger button
  88  |     const menuButton = page.locator('button[aria-label="Toggle menu"]');
  89  |     await expect(menuButton).toBeVisible();
  90  |     
  91  |     // Menu content should not be visible initially
  92  |     const mobileNav = page.locator('text=Đặt Lịch Zalo Ngay').first();
  93  |     await expect(mobileNav).not.toBeVisible();
  94  |     
  95  |     // Open menu
  96  |     await menuButton.click();
  97  |     await expect(mobileNav).toBeVisible();
  98  |     
  99  |     // Close menu by clicking a link
  100 |     const aboutLink = page.locator('div.lg\\:hidden >> text=Về Cle\'O House');
  101 |     await aboutLink.click();
  102 |     
  103 |     // Menu should be closed
  104 |     await expect(mobileNav).not.toBeVisible();
  105 |   });
  106 | 
  107 |   test('mobile sticky bottom bar should appear on scroll', async ({ page, isMobile }) => {
  108 |     if (!isMobile) return;
  109 |     await page.goto('/');
  110 |     
  111 |     const bottomBar = page.locator('text=Chat Zalo Đặt Lịch').first().locator('..'); // Get parent link
  112 |     
  113 |     // Should not be visible at the top
  114 |     await expect(bottomBar).not.toBeVisible();
  115 |     
  116 |     // Scroll down 600px
  117 |     await page.evaluate(() => window.scrollTo(0, 600));
  118 |     await page.mouse.wheel(0, 600);
  119 |     
  120 |     // Wait a bit for scroll event listener state update
  121 |     await page.waitForTimeout(1000);
  122 |     
  123 |     // Should be visible
> 124 |     await expect(bottomBar).toBeVisible();
      |                             ^ Error: expect(locator).toBeVisible() failed
  125 |   });
  126 | });
  127 | 
```