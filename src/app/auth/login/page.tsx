'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { Alert } from '@/components/common/Alert';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // محاكاة تسجيل الدخول
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!formData.email || !formData.password) {
        setError('الرجاء ملء جميع الحقول');
        setLoading(false);
        return;
      }

      // تحديد نوع المستخدم بناءً على البريد
      const role = formData.email.includes('admin') ? 'admin' : 'client';

      // تسجيل الدخول
      login({
        id: '1',
        name: role === 'admin' ? 'مدير النظام' : 'أحمد محمد',
        email: formData.email,
        role: role,
      });

      // التوجيه
      router.push(role === 'admin' ? '/admin/dashboard' : '/client/dashboard');
    } catch (err) {
      setError('خطأ في تسجيل الدخول. حاول مرة أخرى');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-600 mb-2">IG</h1>
          <p className="text-gray-600 dark:text-gray-400">تسجيل الدخول</p>
        </div>

        {/* Card */}
        <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-dark-700">
          {error && (
            <Alert
              type="error"
              title="خطأ"
              message={error}
              onClose={() => setError(null)}
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
              <p className="text-xs text-gray-500 mt-1">جرب: admin@example.com أو client@example.com</p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">جرب: admin123</p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'جاري التحميل...' : 'تسجيل الدخول'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300 dark:border-dark-600"></div>
            <div className="px-3 text-sm text-gray-500 dark:text-gray-400">أو</div>
            <div className="flex-1 border-t border-gray-300 dark:border-dark-600"></div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            ليس لديك حساب؟{' '}
            <Link
              href="/register"
              className="text-primary-600 font-semibold hover:underline"
            >
              إنشاء حساب
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
