'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';
import { Trash2, Download } from 'lucide-react';

const mockGallery = [
  { id: '1', name: 'تصميم 1.jpg', size: '2.5 MB', date: '2024-02-20', type: 'صورة' },
  { id: '2', name: 'تصميم 2.png', size: '1.8 MB', date: '2024-02-19', type: 'صورة' },
  { id: '3', name: 'لويو .svg', size: '350 KB', date: '2024-02-18', type: 'رسومات' },
  { id: '4', name: 'براند.ai', size: '5.2 MB', date: '2024-02-17', type: 'ملفات' },
];

export default function GalleryPage() {
  const [gallery, setGallery] = useState(mockGallery);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setGallery(gallery.filter(g => g.id !== id));
    setSuccessMessage('تم حذف الملف بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleDownload = (file: any) => {
    setSuccessMessage(`بدء تحميل ${file.name}`);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleUpload = () => {
    setSuccessMessage('تم رفع الملف بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة المعرض</h1>
          <p className="text-gray-600 dark:text-gray-400">رفع وادارة الصور والملفات</p>
        </div>

        {successMessage && (
          <Alert
            type="success"
            title="نجح!"
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}

        {/* Upload Area */}
        <div className="bg-white dark:bg-dark-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-dark-600 p-12 text-center hover:border-primary-500 transition cursor-pointer">
          <input
            type="file"
            multiple
            onChange={() => handleUpload()}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <div className="text-gray-600 dark:text-gray-400">
              <p className="text-lg font-semibold mb-2">اضغط لاختيار ملفات أو اسحبها</p>
              <p className="text-sm">صيغ JPG, PNG, SVG, AI مجموع 5GB</p>
            </div>
          </label>
        </div>

        {/* Gallery Grid */}
        <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-dark-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">الملفات المحفوظة</h3>
          </div>

          {gallery.length === 0 ? (
            <div className="p-12 text-center text-gray-600 dark:text-gray-400">
              لا توجد ملفات
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-dark-700/50 border-b border-gray-200 dark:border-dark-700">
                  <tr>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">اسم الملف</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">النوع</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">الحجم</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">التاريخ</th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {gallery.map((file) => (
                    <tr key={file.id} className="border-b border-gray-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700/50 transition">
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{file.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{file.type}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{file.size}</td>
                      <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{file.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleDownload(file)}
                            className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition"
                            title="تحميل"
                          >
                            <Download className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete(file.id)}
                            className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                            title="حذف"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
