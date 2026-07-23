'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';

const mockServices = [
  { id: '1', name: 'تصميم الشعارات', description: 'تصميم شعارات احترافية', price: '$200', category: 'براندينج' },
  { id: '2', name: 'بطاقات العمل', description: 'بطاقات عمل احترافية', price: '$150', category: 'براندينج' },
  { id: '3', name: 'تصميم المواقع', description: 'قالب موقع احترافي', price: '$1000', category: 'ويب ديزاين' },
  { id: '4', name: 'هوية بصرية', description: 'هوية بصرية كاملة', price: '$500', category: 'براندينج' },
];

export default function ServicesPage() {
  const [services, setServices] = useState(mockServices);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setServices(services.filter(s => s.id !== id));
    setSuccessMessage('تم حذف الخدمة بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEdit = (service: any) => {
    console.log('Edit service:', service);
    setSuccessMessage('تم فتح نموذج التعديل');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleAdd = () => {
    setSuccessMessage('تم فتح نموذج إضافة خدمة جديدة');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة الخدمات</h1>
          <p className="text-gray-600 dark:text-gray-400">عرض وإدارة خدمات البراندينج</p>
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
          title="قائمة الخدمات"
          columns={[
            { key: 'name', label: 'اسم الخدمة' },
            { key: 'description', label: 'الوصف' },
            { key: 'category', label: 'الفئة' },
            { key: 'price', label: 'السعر' },
          ]}
          data={services}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  );
}
