'use client';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-900 dark:to-dark-800">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-primary-600 mb-4">Ibrahim Graphic</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">منصة احترافية لإدارة أعمال التصميم الجرافيكي</p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
          >
            تسجيل الدخول
          </a>
          <a
            href="/signup"
            className="inline-block px-8 py-3 bg-gray-200 dark:bg-dark-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-dark-600 transition"
          >
            إنشاء حساب
          </a>
        </div>
      </div>
    </main>
  );
}
