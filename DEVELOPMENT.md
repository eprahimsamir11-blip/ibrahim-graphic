# تعليمات التطوير - Ibrahim Graphic

## 🛠️ إعداد بيئة التطوير

### المتطلبات المسبقة

- Node.js 18+
- npm أو yarn
- قاعدة بيانات (MongoDB أو PostgreSQL)
- حساب Cloudinary (اختياري)

### خطوات الإعداد

```bash
# 1. استنساخ المشروع
git clone https://github.com/eprahimsamir11-blip/Ibrahim-Graphic.git
cd Ibrahim-Graphic

# 2. تثبيت المتعلقات
npm install

# 3. إنشاء ملف .env.local
cp .env.example .env.local

# 4. تشغيل الخادم
npm run dev
```

## 📚 أوامر npm

```bash
# تطوير
npm run dev          # تشغيل خادم التطوير

# البناء والإنتاج
npm run build        # بناء التطبيق
npm run start        # تشغيل التطبيق المبني

# الاختبارات
npm run test         # تشغيل الاختبارات
npm run test:watch   # تشغيل الاختبارات مع المراقبة
npm run test:e2e     # اختبارات End-to-End

# جودة الكود
npm run lint         # فحص الأخطاء
npm run format       # تنسيق الكود

# قاعدة البيانات
npm run db:migrate   # تطبيق الهجرات
npm run db:seed      # إدراج البيانات التجريبية
npm run db:reset     # إعادة تعيين قاعدة البيانات
```

## 🗂️ هيكل المشروع

```
src/
├── app/                 # تطبيق Next.js 13+
│   ├── admin/          # صفحات لوحة الإدارة
│   ├── client/         # صفحات لوحة العميل
│   ├── auth/           # صفحات المصادقة
│   ├── api/            # مسارات API
│   └── layout.tsx      # التخطيط الرئيسي
├── components/          # المكونات القابلة لإعادة الاستخدام
│   ├── admin/          # مكونات الإدارة
│   ├── client/         # مكونات العميل
│   ├── auth/           # مكونات المصادقة
│   └── common/         # مكونات عامة
├── styles/              # ملفات CSS
│   ├── globals.css     # الأنماط العامة
│   └── variables.css   # متغيرات CSS
├── store/               # إدارة الحالة (Zustand)
│   ├── authStore.ts
│   └── uiStore.ts
├── types/               # تعريفات TypeScript
│   ├── index.ts
│   ├── user.ts
│   ├── order.ts
│   └── project.ts
├── utils/               # دوال مساعدة
│   ├── api.ts
│   ├── validation.ts
│   └── formatting.ts
└── lib/                 # مكتبات
    ├── prisma.ts
    ├── auth.ts
    └── email.ts
```

## 🎨 المكونات الرئيسية

### AdminLayout
تخطيط لوحة الإدارة مع شريط جانبي وعنوان

```tsx
import { AdminLayout } from '@/components/admin/AdminLayout';

export default function Page() {
  return (
    <AdminLayout>
      {/* المحتوى */}
    </AdminLayout>
  );
}
```

### ClientLayout
تخطيط لوحة العميل

```tsx
import { ClientLayout } from '@/components/client/ClientLayout';

export default function Page() {
  return (
    <ClientLayout>
      {/* المحتوى */}
    </ClientLayout>
  );
}
```

### DataTable
جدول بيانات مع البحث والعمليات

```tsx
import { DataTable } from '@/components/admin/DataTable';

<DataTable
  title="العملاء"
  columns={[
    { key: 'name', label: 'الاسم' },
    { key: 'email', label: 'البريد' },
  ]}
  data={data}
  onAdd={handleAdd}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

## 🔐 المصادقة

### تخزين الحالة

```tsx
import { useAuthStore } from '@/store/authStore';

const { user, login, logout } = useAuthStore();
```

### ProtectedRoute

```tsx
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

<ProtectedRoute requiredRole="admin">
  {/* محتوى محمي */}
</ProtectedRoute>
```

## 🎯 الإرشادات

### إضافة صفحة جديدة

1. إنشاء المجلد: `src/app/admin/my-page/`
2. إنشاء الملف: `page.tsx`
3. استخدام `AdminLayout`:

```tsx
'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';

export default function MyPage() {
  return (
    <AdminLayout>
      <div>
        <h1>صفحتي</h1>
      </div>
    </AdminLayout>
  );
}
```

### إضافة مكون جديد

```tsx
interface Props {
  title: string;
  children?: React.ReactNode;
}

export function MyComponent({ title, children }: Props) {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
```

### إضافة API Route

```tsx
// src/app/api/my-endpoint/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // المنطق هنا
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'خطأ' },
      { status: 500 }
    );
  }
}
```

## 🎨 Tailwind CSS

### الألوان المتاحة

```css
/* الألوان الأساسية */
primary-50 إلى primary-900

/* الألوان الإضافية */
blue, green, red, orange, purple
```

### مثال على الاستخدام

```tsx
<div className="bg-primary-600 text-white p-4 rounded-lg">
  <h3 className="text-lg font-bold">العنوان</h3>
  <p className="text-sm text-primary-100">النص</p>
</div>
```

## 🧪 الاختبارات

### اختبار الوحدة

```tsx
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

test('يعرض المحتوى', () => {
  render(<MyComponent />);
  expect(screen.getByText('المحتوى')).toBeInTheDocument();
});
```

### اختبارات E2E

```bash
npm run test:e2e
```

## 📝 معايير الكود

- استخدم TypeScript لجميع الملفات
- اتبع معايير ESLint
- استخدم Prettier للتنسيق
- اكتب اختبارات للمكونات الجديدة
- وثق الكود المعقد

## 🐛 استكشاف الأخطاء

### المشكلة: الخادم لا يعمل

```bash
# تأكد من تثبيت المتعلقات
npm install

# تحقق من ملف .env.local
ls -la .env.local

# استعد قاعدة البيانات
npm run db:reset
```

### المشكلة: أخطاء في TypeScript

```bash
# تحقق من الأخطاء
npm run lint

# أصلح الأخطاء تلقائياً
npm run lint:fix
```

### المشكلة: مشاكل في البيانات

```bash
# أعد قاعدة البيانات
npm run db:reset

# أدرج بيانات تجريبية
npm run db:seed
```

## 📚 الموارد الإضافية

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Zustand Docs](https://github.com/pmndrs/zustand)

## 🚀 النشر

### Vercel

```bash
# ربط مع Vercel
vercel

# تعيين متغيرات البيئة
vercel env add DATABASE_URL

# نشر
vercel deploy
```

### Docker

```bash
# بناء صورة
docker build -t ibrahim-graphic .

# تشغيل الحاوية
docker run -p 3000:3000 ibrahim-graphic
```

## ❓ الأسئلة الشائعة

**س: كيف أضيف مستخدم جديد؟**
ج: استخدم صفحة التسجيل أو أنشئ مستخدماً عبر قاعدة البيانات مباشرة.

**س: كيف أغير الألوان الأساسية؟**
ج: عدّل ملف `tailwind.config.ts`.

**س: كيف أضيف لغة جديدة؟**
ج: أنشئ ملف ترجمة جديد في `src/locales/` واستخدم i18n.

---

للمزيد من المساعدة، اتصل بنا على [البريد الإلكتروني](mailto:ibrahim.graphic11@gmail.com).
