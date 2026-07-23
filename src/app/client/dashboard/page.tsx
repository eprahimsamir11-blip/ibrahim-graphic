'use client';

import { ClientLayout } from '@/components/client/ClientLayout';
import { useAuthStore } from '@/store/authStore';
import { Briefcase, ShoppingBag, Mail, Clock } from 'lucide-react';

const statItems = [
  { label: 'المشاريع الكلية', value: 8, icon: Briefcase, color: 'blue' },
  { label: 'الطلبات قيد الإنجاز', value: 3, icon: ShoppingBag, color: 'purple' },
  { label: 'الرسائل الجديدة', value: 2, icon: Mail, color: 'orange' },
  { label: 'الطلبات المعلقة', value: 1, icon: Clock, color: 'red' },
];

const recentProjects = [
  { id: '1', name: 'تصميم شعار الشركة', status: 'قيد الإنجاز', dueDate: '2024-02-28', progress: 75 },
  { id: '2', name: 'بطاقات العمل', status: 'قيد الإنجاز', dueDate: '2024-02-20', progress: 50 },
  { id: '3', name: 'تصميم الموقع', status: 'مكتمل', dueDate: '2024-02-10', progress: 100 },
];

export default function ClientDashboard() {
  const { user } = useAuthStore();

  return (
    <ClientLayout>
      <div className="space-y-8 animate-fadeIn">
        {/* Welcome Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            أهلاً {user?.name}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">هنا يمكنك متابعة مشاريعك والتواصل معنا</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600',
              purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600',
              orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600',
              red: 'bg-red-50 dark:bg-red-900/20 text-red-600',
            }[item.color];

            return (
              <div
                key={index}
                className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-dark-700 hover:shadow-lg transition"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{item.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${colorClasses}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Projects */}
        <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-dark-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">المشاريع الأخيرة</h2>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-dark-700">
            {recentProjects.map((project) => (
              <div key={project.id} className="p-6 hover:bg-gray-50 dark:hover:bg-dark-700/50 transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'مكتمل'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                      <span>الموعد: {project.dueDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">الإنجاز: {project.progress}%</p>
                    <div className="w-32 h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-600 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="/client/new-request"
            className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-6 hover:shadow-lg transition"
          >
            <ShoppingBag className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">طلب تصميم جديد</h3>
            <p className="text-primary-100">قدم طلب تصميم جديد وحدد احتياجاتك</p>
          </a>
          <a
            href="/client/messages"
            className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-6 hover:shadow-lg transition"
          >
            <Mail className="w-8 h-8 mb-3" />
            <h3 className="text-xl font-bold mb-2">الرسائل</h3>
            <p className="text-blue-100">تواصل مع فريق الدعم لديك</p>
          </a>
        </div>
      </div>
    </ClientLayout>
  );
}
