'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter, usePathname } from 'next/navigation';
import { LogOut, Menu, X, Home, Briefcase, ShoppingBag, Mail, User, Bell } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import Link from 'next/link';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { label: 'الرئيسية', href: '/client/dashboard', icon: Home },
  { label: 'الملف الشخصي', href: '/client/profile', icon: User },
  { label: 'طلب تصميم جديد', href: '/client/new-request', icon: ShoppingBag },
  { label: 'مشاريعي', href: '/client/projects', icon: Briefcase },
  { label: 'الرسائل', href: '/client/messages', icon: Mail },
  { label: 'الإشعارات', href: '/client/notifications', icon: Bell },
];

export function ClientSidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { logout, user } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-screen w-64 bg-white dark:bg-dark-800 border-l border-gray-200 dark:border-dark-700 transform transition-transform duration-300 z-50 md:z-auto md:translate-x-0 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:relative md:translate-x-0`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-dark-700">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary-600">IG</h1>
            <button
              onClick={onClose}
              className="md:hidden p-1 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">لوحة العميل</p>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2 flex-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <button
                  onClick={onClose}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-dark-700 space-y-3">
          <div className="px-4 py-3 bg-gray-100 dark:bg-dark-700 rounded-lg">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
          >
            <LogOut className="w-5 h-5" />
            <span>تسجيل خروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export function ClientHeader({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="sticky top-0 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 z-40">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Ibrahim Graphic</h2>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
