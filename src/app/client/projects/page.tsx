'use client';

import { ClientLayout } from '@/components/client/ClientLayout';
import { DataTable } from '@/components/admin/DataTable';

const mockProjects = [
  { id: '1', name: 'تصميم شعار الشركة', status: 'قيد الإنجاز', startDate: '2024-01-10', deadline: '2024-02-28' },
  { id: '2', name: 'بطاقات العمل', status: 'قيد الإنجاز', startDate: '2024-01-20', deadline: '2024-02-20' },
  { id: '3', name: 'تصميم الموقع', status: 'مكتمل', startDate: '2023-12-15', deadline: '2024-02-10' },
];

export default function ProjectsPage() {
  return (
    <ClientLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">مشاريعي</h1>
          <p className="text-gray-600 dark:text-gray-400">متابعة تقدم مشاريعك الحالية</p>
        </div>

        <DataTable
          title="قائمة المشاريع"
          columns={[
            { key: 'name', label: 'اسم المشروع' },
            { key: 'status', label: 'الحالة' },
            { key: 'startDate', label: 'تاريخ البداية' },
            { key: 'deadline', label: 'الموعد النهائي' },
          ]}
          data={mockProjects}
        />
      </div>
    </ClientLayout>
  );
}
