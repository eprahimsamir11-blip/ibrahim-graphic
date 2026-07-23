'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';
import { format } from 'date-fns';
import { ar } from 'date-fns/locale';

const mockMessages = [
  { id: '1', from: 'أحمد محمد', subject: 'استفسار عن الآراء', preview: 'كم الوقت اللازم لتسليم الخدمة...', date: '2024-02-23', read: false },
  { id: '2', from: 'فاطمة علي', subject: 'عرض التدخل', preview: 'للأسف لن أكون متاحة للمزيد من العمل...', date: '2024-02-22', read: true },
  { id: '3', from: 'محمود أحمد', subject: 'ظهور مشكلة', preview: 'واجهت تروبل في التصفية...', date: '2024-02-20', read: false },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(mockMessages);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setMessages(messages.filter(m => m.id !== id));
    setSuccessMessage('تم حذف الرسالة بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEdit = (message: any) => {
    console.log('Read message:', message);
    setSuccessMessage('تم فتح الرسالة');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة الرسائل</h1>
          <p className="text-gray-600 dark:text-gray-400">عرض وعلاج رسائل العملاء</p>
        </div>

        {successMessage && (
          <Alert
            type="success"
            title="نجح!"
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}

        <DataTable
          title="قائمة الرسائل"
          columns={[
            { key: 'from', label: 'من' },
            { key: 'subject', label: 'الموضوع' },
            { key: 'preview', label: 'الميلاد' },
            { key: 'date', label: 'التاريخ' },
            { key: 'read', label: 'الحالة' },
          ]}
          data={messages.map(m => ({
            ...m,
            read: m.read ? 'مقروءة' : 'جديدة'
          }))}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  );
}
