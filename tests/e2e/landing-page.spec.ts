import { test, expect } from '@playwright/test';

test.describe('CleO House Landing Page UI/UX', () => {
  
  test('should load the homepage with correct title', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/Cle'O House - Spa Trị Mụn & Sẹo Tại Nhà/);
    
    // Check hero heading
    const heading = page.locator('h1');
    await expect(heading).toContainText('Trị Mụn Theo Phác Đồ');
  });

  test('hero section CTA links should be correct', async ({ page }) => {
    await page.goto('/');
    
    const zaloLink = page.locator('a:has-text("Đặt Lịch Khám Da Ngay")');
    await expect(zaloLink).toHaveAttribute('href', 'https://zalo.me/0888722723');
    await expect(zaloLink).toHaveAttribute('target', '_blank');
  });

  test('desktop navigation smooth scroll', async ({ page, isMobile }) => {
    if (isMobile) return; // Skip on mobile
    
    await page.goto('/');
    
    // Click on "Bảng giá" link in desktop nav
    const pricingLink = page.locator('nav.hidden.lg\\:flex >> text=Bảng giá');
    await pricingLink.click();
    
    // Check if URL hash is updated
    await expect(page).toHaveURL(/#pricing/);
  });

  test('pricing tabs should switch content', async ({ page }) => {
    await page.goto('/');
    
    // By default "Chăm sóc da mụn" (value="mun") is selected
    const munTab = page.locator('button[role="tab"]:has-text("Chăm sóc da mụn")').first();
    await expect(munTab).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('text=Xử lí nhân mụn y khoa').first()).toBeVisible();
    
    // Click on "Peel (bao gồm mụn)" tab
    const peelTab = page.locator('button[role="tab"]:has-text("Peel (bao gồm mụn)")').first();
    await peelTab.click();
    
    // Check if state changed and new content is visible
    await expect(peelTab).toHaveAttribute('aria-selected', 'true');
    await expect(page.locator('text=Hoạt chất cho da mụn').first()).toBeVisible();
  });

  test('FAQ accordion should expand on click', async ({ page }) => {
    await page.goto('/');
    
    // Find the first FAQ trigger
    const firstFaqTrigger = page.locator('button[aria-expanded]').first();
    
    // By default it should be collapsed
    await expect(firstFaqTrigger).toHaveAttribute('aria-expanded', 'false');
    
    // Click to expand
    await firstFaqTrigger.click();
    
    // It should now be expanded
    await expect(firstFaqTrigger).toHaveAttribute('aria-expanded', 'true');
    
    // The content should be visible
    const contentId = await firstFaqTrigger.getAttribute('aria-controls');
    if (contentId) {
      const content = page.locator(`[id="${contentId}"]`);
      await expect(content).toBeVisible();
    }
  });

});

test.describe('Mobile Specific UI/UX', () => {
  // Use a mobile device config for these tests
  test.use({ viewport: { width: 375, height: 667 } });

  test('mobile menu should open and close', async ({ page, isMobile }) => {
    if (!isMobile) return;
    await page.goto('/');
    
    // Hamburger button
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    
    // Menu content should not be visible initially
    const mobileNav = page.locator('text=Đặt Lịch Zalo Ngay').first();
    await expect(mobileNav).not.toBeVisible();
    
    // Open menu
    await menuButton.click();
    await expect(mobileNav).toBeVisible();
    
    // Close menu by clicking a link
    const aboutLink = page.locator('div.lg\\:hidden >> text=Về Cle\'O House');
    await aboutLink.click();
    
    // Menu should be closed
    await expect(mobileNav).not.toBeVisible();
  });

  test('mobile sticky bottom bar should appear on scroll', async ({ page, isMobile }) => {
    if (!isMobile) return;
    await page.goto('/');
    
    const bottomBar = page.locator('text=Chat Zalo Đặt Lịch').first().locator('..'); // Get parent link
    
    // Should not be visible at the top
    await expect(bottomBar).not.toBeVisible();
    
    // Scroll down 600px
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.mouse.wheel(0, 600);
    
    // Wait a bit for scroll event listener state update
    await page.waitForTimeout(1000);
    
    // Should be visible
    await expect(bottomBar).toBeVisible();
  });
});
