export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Ibrahim Graphic</h1>
        <p className="text-xl mb-8">منصة إدارة مشاريع التصميم الجرافيكي</p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block px-8 py-3 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition"
          >
            تسجيل الدخول
          </a>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-transparent text-white font-bold border-2 border-white rounded-lg hover:bg-white hover:text-primary-600 transition"
          >
            إنشاء حساب
          </a>
        </div>
      </div>
    </div>
  );
}
