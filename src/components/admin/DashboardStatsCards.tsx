'use client';

import { Users, ShoppingBag, TrendingUp, CheckCircle } from 'lucide-react';
import { DashboardStats } from '@/types';

interface StatCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  trend?: number;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

const colorClasses = {
  blue: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    text: 'text-blue-600 dark:text-blue-400',
    icon: 'bg-blue-100 dark:bg-blue-900/40',
  },
  green: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    text: 'text-green-600 dark:text-green-400',
    icon: 'bg-green-100 dark:bg-green-900/40',
  },
  purple: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    text: 'text-purple-600 dark:text-purple-400',
    icon: 'bg-purple-100 dark:bg-purple-900/40',
  },
  orange: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    text: 'text-orange-600 dark:text-orange-400',
    icon: 'bg-orange-100 dark:bg-orange-900/40',
  },
};

function StatCard({ title, value, icon, trend, color }: StatCardProps) {
  const styles = colorClasses[color];
  return (
    <div className={`${styles.bg} rounded-xl p-6 border border-gray-200 dark:border-dark-700`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{title}</p>
          <p className={`text-3xl font-bold ${styles.text}`}>{value}</p>
          {trend !== undefined && (
            <div className="flex items-center gap-1 mt-2 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>{trend > 0 ? '+' : ''}{trend}% من الشهر الماضي</span>
            </div>
          )}
        </div>
        <div className={`${styles.icon} p-3 rounded-lg`}>{icon}</div>
      </div>
    </div>
  );
}

export function DashboardStatsCards() {
  // Mock data - في التطبيق الحقيقي ستأتي من API
  const stats: DashboardStats = {
    totalClients: 24,
    totalOrders: 45,
    totalRevenue: 12500,
    completedProjects: 38,
    pendingOrders: 7,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="إجمالي العملاء"
        value={stats.totalClients}
        icon={<Users className="w-6 h-6" />}
        trend={12}
        color="blue"
      />
      <StatCard
        title="الطلبات"
        value={stats.totalOrders}
        icon={<ShoppingBag className="w-6 h-6" />}
        trend={8}
        color="purple"
      />
      <StatCard
        title="المشاريع المكتملة"
        value={stats.completedProjects}
        icon={<CheckCircle className="w-6 h-6" />}
        trend={15}
        color="green"
      />
      <StatCard
        title="إجمالي الإيرادات"
        value={`$${stats.totalRevenue}`}
        icon={<TrendingUp className="w-6 h-6" />}
        trend={5}
        color="orange"
      />
    </div>
  );
}
