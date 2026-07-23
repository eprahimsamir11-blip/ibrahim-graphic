'use client';

import { ClientLayout } from '@/components/client/ClientLayout';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';
import { Send } from 'lucide-react';

const serviceOptions = [
  { value: 'logo', label: 'تصميم شعار' },
  { value: 'business-cards', label: 'بطاقات عمل' },
  { value: 'branding', label: 'هوية بصرية' },
  { value: 'website', label: 'تصميم موقع' },
  { value: 'packaging', label: 'تغليف منتجات' },
  { value: 'other', label: 'أخرى' },
];

export default function NewRequestPage() {
  const [formData, setFormData] = useState({
    title: '',
    service: '',
    description: '',
    budget: '',
    deadline: '',
    attachments: [] as File[],
  });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        attachments: [...prev.attachments, ...Array.from(e.target.files || [])],
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.service || !formData.description) {
      setSuccessMessage('الرجاء ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage('تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً');
      setFormData({
        title: '',
        service: '',
        description: '',
        budget: '',
        deadline: '',
        attachments: [],
      });
      setTimeout(() => setSuccessMessage(null), 3000);
    }, 1500);
  };

  return (
    <ClientLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">طلب تصميم جديد</h1>
          <p className="text-gray-600 dark:text-gray-400">أخبرنا عن متطلبات مشروعك</p>
        </div>

        {successMessage && (
          <Alert
            type={successMessage.includes('الرجاء') ? 'warning' : 'success'}
            title={successMessage.includes('الرجاء') ? 'تنبيه' : 'نجح!'}
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}

        <form onSubmit={handleSubmit} className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="md:col-span-1">
              <label className="block text-sm font-medium mb-2">عنوان المشروع *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="مثال: شعار شركتي الجديد"
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
            </div>

            {/* Service Type */}
            <div>
              <label className="block text-sm font-medium mb-2">نوع الخدمة *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              >
                <option value="">اختر خدمة</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium mb-2">الميزانية المتوقعة</label>
              <input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                placeholder="مثال: $500"
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-sm font-medium mb-2">الموعد النهائي</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Description */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">وصف المشروع *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="اشرح بالتفصيل ما تريده..."
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                required
              />
            </div>

            {/* File Upload */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">أرفق ملفات إضافية</label>
              <div className="border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-lg p-6 text-center hover:border-primary-500 transition cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="text-gray-600 dark:text-gray-400">
                    <p className="font-semibold mb-1">اختر ملفات أو اسحبها</p>
                    <p className="text-sm">صور، ملفات PDF، إلخ</p>
                  </div>
                </label>
              </div>
              {formData.attachments.length > 0 && (
                <div className="mt-3 space-y-1">
                  {formData.attachments.map((file, index) => (
                    <p key={index} className="text-sm text-gray-600 dark:text-gray-400">✓ {file.name}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-8 flex items-center justify-center gap-2 w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
          </button>
        </form>
      </div>
    </ClientLayout>
  );
}
