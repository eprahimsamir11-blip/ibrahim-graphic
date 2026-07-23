# Ibrahim Graphic - منصة إدارة التصميم الجرافيكي

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0+-06B6D4?style=flat-square)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

منصة شاملة لإدارة مشاريع التصميم الجرافيكي بين المسؤولين والعملاء، مع نظام متطور لتتبع الطلبات والمشاريع والرسائل.

## 📋 المحتويات

- [المميزات](#المميزات)
- [المتطلبات](#المتطلبات)
- [التثبيت](#التثبيت)
- [البدء السريع](#البدء-السريع)
- [هيكل المشروع](#هيكل-المشروع)
- [الميزات الرئيسية](#الميزات-الرئيسية)
- [قاعدة البيانات](#قاعدة-البيانات)
- [التوثيق](#التوثيق)

## ✨ المميزات

### لوحة تحكم الإدارة
- 📊 **لوحة العمل**: عرض الإحصائيات والبيانات الرئيسية
- 👥 **إدارة العملاء**: إضافة وتعديل وحذف بيانات العملاء
- 📦 **إدارة الطلبات**: متتبع كامل لحالة الطلبات
- 📁 **إدارة المشاريع**: تنظيم وتتبع جميع المشاريع
- 🛠️ **إدارة الخدمات**: إدارة قائمة الخدمات والأسعار
- 💬 **إدارة الرسائل**: معالجة رسائل العملاء
- 🖼️ **المعرض**: إدارة الصور والملفات
- ⚙️ **الإعدادات**: تكوين إعدادات الموقع

### لوحة تحكم العميل
- 🏠 **الرئيسية**: عرض ملخص حسابك والمشاريع
- 👤 **الملف الشخصي**: إدارة بيانات حسابك
- 📝 **طلب جديد**: تقديم طلبات تصميم جديدة
- 📊 **المشاريع**: متتبع المشاريع الجارية
- 💬 **الرسائل**: التواصل المباشر مع الفريق
- 🔔 **الإشعارات**: تلقي آخر التحديثات

### ميزات عامة
- 🌓 **الوضع الليلي**: دعم الوضع المظلم
- 📱 **سريع الاستجابة**: تصميم متجاوب على جميع الأجهزة
- 🔐 **الأمان**: نظام مصادقة آمن مع JWT
- 🌍 **دعم اللغات**: واجهة عربية كاملة
- ⚡ **الأداء**: تحسينات في الأداء والسرعة

## 📋 المتطلبات

- **Node.js**: الإصدار 18 أو أحدث
- **npm**: الإصدار 9 أو أحدث
- **قاعدة البيانات**: MongoDB أو PostgreSQL
- **متصفح**: أي متصفح حديث

## 🚀 التثبيت

### 1. استنساخ المستودع

```bash
git clone https://github.com/eprahimsamir11-blip/Ibrahim-Graphic.git
cd Ibrahim-Graphic
```

### 2. تثبيت المتعلقات

```bash
npm install
```

### 3. إعداد متغيرات البيئة

إنشاء ملف `.env.local` في جذر المشروع:

```bash
# قاعدة البيانات
DATABASE_URL=your_database_url

# المصادقة
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# البريد الإلكتروني
EMAIL_FROM=your_email@example.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# التخزين السحابي (اختياري)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. إعداد قاعدة البيانات

```bash
npm run db:migrate
npm run db:seed
```

### 5. تشغيل الخادم

```bash
npm run dev
```

انتقل إلى `http://localhost:3000` في متصفحك.

## 🎯 البدء السريع

### إنشاء حساب مسؤول

```bash
npm run create:admin
```

### بيانات الاختبار

```bash
npm run seed:demo
```

### تشغيل الاختبارات

```bash
npm run test
npm run test:e2e
```

## 📁 هيكل المشروع

```
Ibrahim-Graphic/
├── src/
│   ├── app/                 # صفحات التطبيق
│   │   ├── admin/           # صفحات لوحة الإدارة
│   │   │   ├── dashboard/
│   │   │   ├── clients/
│   │   │   ├── orders/
│   │   │   ├── projects/
│   │   │   ├── services/
│   │   │   ├── messages/
│   │   │   ├── gallery/
│   │   │   └── settings/
│   │   ├── client/          # صفحات لوحة العميل
│   │   │   ├── dashboard/
│   │   │   ├── profile/
│   │   │   ├── new-request/
│   │   │   ├── projects/
│   │   │   ├── messages/
│   │   │   └── notifications/
│   │   ├── auth/            # صفحات المصادقة
│   │   └── api/             # API Routes
│   ├── components/          # المكونات المعاد استخدامها
│   │   ├── admin/           # مكونات لوحة الإدارة
│   │   ├── client/          # مكونات لوحة العميل
│   │   ├── auth/            # مكونات المصادقة
│   │   └── common/          # مكونات عامة
│   ├── styles/              # ملفات CSS
│   ├── store/               # حالة التطبيق (Zustand)
│   ├── types/               # تعريفات TypeScript
│   ├── utils/               # دوال مساعدة
│   └── lib/                 # مكتبات خارجية
├── public/                  # الملفات الثابتة
├── tests/                   # اختبارات
├── .env.local               # متغيرات البيئة
├── .env.example             # مثال على متغيرات البيئة
├── tailwind.config.ts       # إعدادات Tailwind
├── tsconfig.json            # إعدادات TypeScript
├── next.config.js           # إعدادات Next.js
└── package.json             # متعلقات المشروع
```

## 🌟 الميزات الرئيسية

### نظام المصادقة
- تسجيل دخول آمن باستخدام JWT
- دعم تسجيل دخول الإدارة والعملاء
- استرجاع كلمة المرور
- التحقق من البريد الإلكتروني

### لوحة الإدارة
- إحصائيات شاملة ولوحة عمل تفاعلية
- إدارة العملاء مع بحث وتصفية
- متتبع الطلبات مع تحديثات الحالة
- تنظيم المشاريع مع تواريخ الاستحقاق
- إدارة قائمة الخدمات والأسعار
- نظام الرسائل المدمج
- معرض لإدارة الصور والملفات
- إعدادات قابلة للتخصيص

### لوحة العميل
- ملخص حسابي يعرض المشاريع والطلبات
- تقديم طلبات تصميم جديدة
- متتبع المشاريع مع شريط التقدم
- نظام الرسائل المباشرة
- تنبيهات وإشعارات فورية
- ملف شخصي قابل للتعديل

## 💾 قاعدة البيانات

### الجداول الرئيسية

#### Users (ال��ستخدمون)
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  role ENUM('admin', 'client') DEFAULT 'client',
  avatar VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Projects (المشاريع)
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  client_id UUID NOT NULL,
  status ENUM('pending', 'in_progress', 'completed', 'cancelled'),
  start_date DATE,
  deadline DATE,
  progress INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES users(id)
);
```

#### Orders (الطلبات)
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY,
  client_id UUID NOT NULL,
  service_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  status ENUM('pending', 'in_progress', 'completed', 'on_hold'),
  budget DECIMAL(10, 2),
  amount DECIMAL(10, 2),
  deadline DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (client_id) REFERENCES users(id),
  FOREIGN KEY (service_id) REFERENCES services(id)
);
```

#### Services (الخدمات)
```sql
CREATE TABLE services (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(100),
  price DECIMAL(10, 2),
  icon VARCHAR(500),
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Messages (الرسائل)
```sql
CREATE TABLE messages (
  id UUID PRIMARY KEY,
  sender_id UUID NOT NULL,
  recipient_id UUID NOT NULL,
  subject VARCHAR(255),
  content TEXT NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (sender_id) REFERENCES users(id),
  FOREIGN KEY (recipient_id) REFERENCES users(id)
);
```

## 📚 التوثيق

### API Endpoints

#### المصادقة
- `POST /api/auth/register` - تسجيل حساب جديد
- `POST /api/auth/login` - تسجيل الدخول
- `POST /api/auth/logout` - تسجيل الخروج
- `POST /api/auth/refresh` - تحديث التوكن
- `POST /api/auth/forgot-password` - استرجاع كلمة المرور

#### العملاء
- `GET /api/clients` - قائمة العملاء
- `GET /api/clients/:id` - تفاصيل العميل
- `POST /api/clients` - إضافة عميل
- `PUT /api/clients/:id` - تحديث العميل
- `DELETE /api/clients/:id` - حذف العميل

#### الطلبات
- `GET /api/orders` - قائمة الطلبات
- `GET /api/orders/:id` - تفاصيل الطلب
- `POST /api/orders` - إضافة طلب
- `PUT /api/orders/:id` - تحديث الطلب
- `DELETE /api/orders/:id` - حذف الطلب

#### المشاريع
- `GET /api/projects` - قائمة المشاريع
- `GET /api/projects/:id` - تفاصيل المشروع
- `POST /api/projects` - إضافة مشروع
- `PUT /api/projects/:id` - تحديث المشروع
- `DELETE /api/projects/:id` - حذف المشروع

#### الخدمات
- `GET /api/services` - قائمة الخدمات
- `GET /api/services/:id` - تفاصيل الخدمة
- `POST /api/services` - إضافة خدمة
- `PUT /api/services/:id` - تحديث الخدمة
- `DELETE /api/services/:id` - حذف الخدمة

#### الرسائل
- `GET /api/messages` - قائمة الرسائل
- `GET /api/messages/:id` - تفاصيل الرسالة
- `POST /api/messages` - إرسال رسالة
- `PUT /api/messages/:id` - تحديث الرسالة
- `DELETE /api/messages/:id` - حذف الرسالة

### مثال على الطلب

```bash
curl -X GET http://localhost:3000/api/clients \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json"
```

## 🔒 الأمان

- ✅ تشفير كلمات المرور باستخدام bcrypt
- ✅ توكنات JWT آمنة
- ✅ حماية من هجمات CSRF
- ✅ التحقق من المدخلات
- ✅ تصفية الصور والملفات
- ✅ معدل محدود للطلبات

## 📝 الترخيص

هذا المشروع مرخص تحت رخصة MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## 🤝 المساهمة

نرحب بمساهماتك! الرجاء:

1. انسخ المستودع
2. إنشاء فرع للميزة الجديدة (`git checkout -b feature/amazing-feature`)
3. قم بالتزام التغييرات (`git commit -m 'Add amazing feature'`)
4. ادفع إلى الفرع (`git push origin feature/amazing-feature`)
5. فتح طلب سحب (Pull Request)

## 📞 التواصل

- البريد الإلكتروني: ibrahim.graphic11@gmail.com
- الموقع: https://ibrahim-graphic.com
- تويتر: [@IBGraphic](https://twitter.com/IBGraphic)

## 🙏 شكر وتقدير

شكر خاص للمساهمين وجميع من ساعد في هذا المشروع.

---

تم إنشاؤه بـ ❤️ بواسطة [إبراهيم جرافيك](https://github.com/eprahimsamir11-blip)
