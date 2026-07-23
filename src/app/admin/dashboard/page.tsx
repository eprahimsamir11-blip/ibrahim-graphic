'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { DashboardStatsCards } from '@/components/admin/DashboardStatsCards';
import { DataTable } from '@/components/admin/DataTable';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';

const recentOrders = [
  { id: '1', clientName: 'أحمد محمد', service: 'تصميم شعار', status: 'في الانتظار', amount: '$300' },
  { id: '2', clientName: 'فاطمة علي', service: 'بطاقات عمل', status: 'قيد الإنجاز', amount: '$150' },
  { id: '3', clientName: 'محمود أحمد', service: 'تصميم موقع', status: 'مكتمل', amount: '$1200' },
];

const recentClients = [
  { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', phone: '+966501234567', joinDate: '2024-01-15' },
  { id: '2', name: 'فاطمة علي', email: 'fatima@example.com', phone: '+966502345678', joinDate: '2024-02-20' },
  { id: '3', name: 'محمود أحمد', email: 'mahmoud@example.com', phone: '+966503456789', joinDate: '2024-03-10' },
];

export default function AdminDashboard() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleAddOrder = () => {
    setSuccessMessage('تم إضافة الطلب بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-8 animate-fadeIn">
        {/* Page Title */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">لوحة التحكم</h1>
          <p className="text-gray-600 dark:text-gray-400">أهلاً وسهلاً بك في لوحة إدارة Ibrahim Graphic</p>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <Alert
            type="success"
            title="نجح!"
            message={successMessage}
            onClose={() => setSuccessMessage(null)}
          />
        )}

        {/* Stats Cards */}
        <DashboardStatsCards />

        {/* Recent Orders and Clients */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <DataTable
            title="الطلبات الأخيرة"
            columns={[
              { key: 'clientName', label: 'اسم العميل' },
              { key: 'service', label: 'الخدمة' },
              { key: 'status', label: 'الحالة' },
              { key: 'amount', label: 'المبلغ' },
            ]}
            data={recentOrders}
            onAdd={handleAddOrder}
          />
          <DataTable
            title="العملاء الأخيرون"
            columns={[
              { key: 'name', label: 'الاسم' },
              { key: 'email', label: 'البريد الإلكتروني' },
              { key: 'phone', label: 'الهاتف' },
              { key: 'joinDate', label: 'تاريخ الانضمام' },
            ]}
            data={recentClients}
          />
        </div>
      </div>
    </AdminLayout>
  );
}
