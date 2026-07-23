'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';

const mockOrders = [
  { id: '1', clientName: 'أحمد محمد', service: 'تصميم شعار', status: 'في الانتظار', dueDate: '2024-02-15', amount: '$300' },
  { id: '2', clientName: 'فاطمة علي', service: 'بطاقات عمل', status: 'قيد الإنجاز', dueDate: '2024-02-10', amount: '$150' },
  { id: '3', clientName: 'محمود أحمد', service: 'تصميم موقع', status: 'مكتمل', dueDate: '2024-01-20', amount: '$1200' },
  { id: '4', clientName: 'سارة علي', service: 'هوية بصرية', status: 'قيد الإنجاز', dueDate: '2024-02-20', amount: '$500' },
];

export default function OrdersPage() {
  const [orders, setOrders] = useState(mockOrders);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setOrders(orders.filter(o => o.id !== id));
    setSuccessMessage('تم حذف الطلب بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEdit = (order: any) => {
    console.log('Edit order:', order);
    setSuccessMessage('تم فتح نموذج التعديل');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleAdd = () => {
    setSuccessMessage('تم فتح نموذج إضافة طلب جديد');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة الطلبات</h1>
          <p className="text-gray-600 dark:text-gray-400">عرض وإدارة جميع طلبات التصميم</p>
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
          title="قائمة الطلبات"
          columns={[
            { key: 'clientName', label: 'اسم العميل' },
            { key: 'service', label: 'الخدمة' },
            { key: 'status', label: 'الحالة' },
            { key: 'dueDate', label: 'تاريخ الاستحقاق' },
            { key: 'amount', label: 'المبلغ' },
          ]}
          data={orders}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  );
}
