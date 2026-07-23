'use client';

import { AlertCircle, CheckCircle, XCircle, AlertTriangle, X } from 'lucide-react';

interface AlertProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  onClose: () => void;
}

export function Alert({ type, title, message, onClose }: AlertProps) {
  const iconMap = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertTriangle,
    info: AlertCircle,
  };

  const colorMap = {
    success: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
    error: 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800',
    warning: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800',
    info: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  };

  const Icon = iconMap[type];

  return (
    <div
      className={`p-4 rounded-lg border flex items-start gap-3 animate-slideIn ${
        colorMap[type]
      }`}
    >
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm opacity-90">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="flex-shrink-0 p-1 hover:opacity-70 transition"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
