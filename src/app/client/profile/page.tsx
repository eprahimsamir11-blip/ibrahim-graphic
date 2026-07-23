'use client';

import { ClientLayout } from '@/components/client/ClientLayout';
import { useAuthStore } from '@/store/authStore';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';
import { Edit2, Save, X } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '+966',
    company: user?.company || '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setSuccessMessage('تم تحديث البيانات بنجاح');
    setIsEditing(false);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <ClientLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">الملف الشخصي</h1>
          <p className="text-gray-600 dark:text-gray-400">أدر بيانات حسابك الشخصية</p>
        </div>

        {successMessage && (
          <Alert
            type="success"
            title="نجح!"
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}

        <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200 dark:border-dark-700">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">بيانات الحساب</h2>
              <p className="text-gray-600 dark:text-gray-400">عدّل معلوماتك الشخصية</p>
            </div>
            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                <Edit2 className="w-5 h-5" />
                تعديل
              </button>
            )}
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium mb-2">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-medium mb-2">الشركة / المؤسسة</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:opacity-70 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-gray-200 dark:border-dark-700">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
              >
                <Save className="w-5 h-5" />
                حفظ التغييرات
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 px-6 py-2 bg-gray-200 dark:bg-dark-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-dark-600 transition"
              >
                <X className="w-5 h-5" />
                إلغاء
              </button>
            </div>
          )}
        </div>
      </div>
    </ClientLayout>
  );
}
