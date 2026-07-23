export type UserRole = 'admin' | 'client';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  company?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData extends LoginCredentials {
  name: string;
  confirmPassword: string;
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: Date;
  deadline?: Date;
  files?: string[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  icon?: string;
  createdAt: Date;
}

export interface Order {
  id: string;
  clientId: string;
  serviceId: string;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed' | 'rejected';
  totalPrice: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  read: boolean;
  createdAt: Date;
}

export interface DashboardStats {
  totalClients: number;
  totalOrders: number;
  totalRevenue: number;
  completedProjects: number;
  pendingOrders: number;
}
