'use client';

import { useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import { User } from '@/types';

const PUBLIC_ROUTES = ['/login', '/signup', '/'];
const ADMIN_ROUTES = ['/admin'];
const CLIENT_ROUTES = ['/client'];

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRole?: 'admin' | 'client';
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { user, token } = useAuthStore();

  useEffect(() => {
    if (!token || !user) {
      if (!PUBLIC_ROUTES.includes(pathname)) {
        router.push('/login');
      }
      return;
    }

    if (requiredRole && user.role !== requiredRole) {
      if (requiredRole === 'admin') {
        router.push('/client/dashboard');
      } else {
        router.push('/admin/dashboard');
      }
    }
  }, [token, user, pathname, requiredRole, router]);

  if (!token || !user) {
    return null;
  }

  if (requiredRole && user.role !== requiredRole) {
    return null;
  }

  return <>{children}</>;
}
