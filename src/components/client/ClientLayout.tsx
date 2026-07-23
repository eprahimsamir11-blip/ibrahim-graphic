'use client';

import React, { ReactNode, useState } from 'react';
import { ClientSidebar, ClientHeader } from './Sidebar';
import { ProtectedRoute } from '@/components/auth/ProtectedRoute';

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ProtectedRoute requiredRole="client">
      <div className="flex h-screen bg-gray-50 dark:bg-dark-900">
        {/* Sidebar */}
        <ClientSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Header */}
          <ClientHeader onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

          {/* Content */}
          <main className="flex-1 overflow-auto">
            <div className="p-6 max-w-6xl">{children}</div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
