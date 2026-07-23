'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';

const mockClients = [
  { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', phone: '+966501234567', company: 'شركة الإبداع', status: 'نشط' },
  { id: '2', name: 'فاطمة علي', email: 'fatima@example.com', phone: '+966502345678', company: 'ديزاين ستوديو', status: 'نشط' },
  { id: '3', name: 'محمود أحمد', email: 'mahmoud@example.com', phone: '+966503456789', company: 'براند ديزاين', status: 'نشط' },
];

export default function ClientsPage() {
  const [clients, setClients] = useState(mockClients);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setClients(clients.filter(c => c.id !== id));
    setSuccessMessage('تم حذف العميل بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEdit = (client: any) => {
    console.log('Edit client:', client);
    setSuccessMessage('تم فتح نموذج التعديل');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleAdd = () => {
    setSuccessMessage('تم فتح نموذج إضافة عميل جديد');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة العملاء</h1>
          <p className="text-gray-600 dark:text-gray-400">عرض وإدارة جميع عملائك</p>
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
          title="قائمة العملاء"
          columns={[
            { key: 'name', label: 'الاسم' },
            { key: 'email', label: 'البريد الإلكتروني' },
            { key: 'phone', label: 'الهاتف' },
            { key: 'company', label: 'الشركة' },
            { key: 'status', label: 'الحالة' },
          ]}
          data={clients}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  );
}
