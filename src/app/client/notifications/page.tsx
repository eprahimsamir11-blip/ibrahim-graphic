'use client';

import { ClientLayout } from '@/components/client/ClientLayout';
import { Bell } from 'lucide-react';

const mockNotifications = [
  {
    id: '1',
    title: 'تم تحديث المشروع',
    message: 'تم إنجاز 75% من مشروع شعار شركتك',
    timestamp: '2024-02-23 14:30',
    read: false,
    type: 'update',
  },
  {
    id: '2',
    title: 'رسالة جديدة',
    message: 'لديك رسالة جديدة من فريق الدعم',
    timestamp: '2024-02-23 12:15',
    read: false,
    type: 'message',
  },
  {
    id: '3',
    title: 'المشروع مكتمل',
    message: 'تم إكمال تصميم موقعك بنجاح',
    timestamp: '2024-02-22 10:00',
    read: true,
    type: 'success',
  },
];

export default function NotificationsPage() {
  return (
    <ClientLayout>
      <div className="space-y-6 animate-fadeIn">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">الإشعارات</h1>
          <p className="text-gray-600 dark:text-gray-400">تابع آخر تحديثاتك</p>
        </div>

        <div className="space-y-4">
          {mockNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-6 rounded-xl border transition cursor-pointer hover:shadow-lg ${
                notification.read
                  ? 'bg-white dark:bg-dark-800 border-gray-200 dark:border-dark-700'
                  : 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  notification.type === 'update'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600'
                    : notification.type === 'message'
                    ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600'
                    : 'bg-green-100 dark:bg-green-900/30 text-green-600'
                }`}>
                  <Bell className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {notification.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{notification.timestamp}</p>
                </div>
                {!notification.read && (
                  <div className="w-3 h-3 bg-primary-600 rounded-full flex-shrink-0 mt-2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ClientLayout>
  );
}
