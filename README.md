# DrNesteD Hub

سایت اخبار و ویدیوی فارسی‌محور با تم سیاه‌وسفید. React + TypeScript + Vite.

## اجرا
```bash
npm install
npm run dev        # توسعه: http://localhost:5173
npm run build      # ساخت production در dist/
npm run preview    # پیش‌نمایش نسخه‌ی ساخته‌شده
```

## انتشار روی GitHub Pages
1. مخزن را در GitHub بسازید و `main` را push کنید.
2. Settings ← Pages ← Source: **GitHub Actions**.
3. هر push روی `main` به‌صورت خودکار ساخته و منتشر می‌شود (`.github/workflows/deploy.yml`).

## نکات امنیتی
- هیچ رمز، توکن یا کلید خصوصی داخل مخزن یا متغیرهای `VITE_*` قرار ندهید.
- بدون سرور، بخش ورود غیرفعال است. اجرای واقعی دسترسی فقط در سرور معنا دارد.
- `main` را با Branch protection و بازبینی اجباری محافظت کنید و 2FA را برای حساب‌های GitHub فعال کنید.
