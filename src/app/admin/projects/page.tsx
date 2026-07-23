'use client';

import { AdminLayout } from '@/components/admin/AdminLayout';
import { DataTable } from '@/components/admin/DataTable';
import { useState } from 'react';
import { Alert } from '@/components/common/Alert';

const mockProjects = [
  { id: '1', name: 'براند مطعم البيتزا', client: 'أحمد محمد', status: 'قيد الإنجاز', startDate: '2024-01-10', deadline: '2024-03-15' },
  { id: '2', name: 'ديزاين موقع العلامة', client: 'فاطمة علي', status: 'مكتمل', startDate: '2023-12-01', deadline: '2024-02-01' },
  { id: '3', name: 'دعاية الزفاف', client: 'محمود أحمد', status: 'قيد الإنجاز', startDate: '2024-01-20', deadline: '2024-02-28' },
  { id: '4', name: 'تغليف المنتجات', client: 'سارة علي', status: 'قيد الانتظار', startDate: '2024-02-05', deadline: '2024-03-30' },
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState(mockProjects);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
    setSuccessMessage('تم حذف المشروع بنجاح');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleEdit = (project: any) => {
    console.log('Edit project:', project);
    setSuccessMessage('تم فتح نموذج التعديل');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleAdd = () => {
    setSuccessMessage('تم فتح نموذج إضافة مشروع جديد');
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">إدارة المشاريع</h1>
          <p className="text-gray-600 dark:text-gray-400">عرض وإدارة مشاريع التصميم</p>
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
          title="قائمة المشاريع"
          columns={[
            { key: 'name', label: 'اسم المشروع' },
            { key: 'client', label: 'اسم العميل' },
            { key: 'status', label: 'الحالة' },
            { key: 'startDate', label: 'تاريخ البداية' },
            { key: 'deadline', label: 'آخر موعد' },
          ]}
          data={projects}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </AdminLayout>
  );
}
