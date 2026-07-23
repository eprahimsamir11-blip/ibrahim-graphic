'use client';

import { AlertCircle, CheckCircle, InfoIcon, XCircle } from 'lucide-react';
import { ReactNode } from 'react';

type AlertType = 'success' | 'error' | 'warning' | 'info';

interface AlertProps {
  type: AlertType;
  title?: string;
  message: string | ReactNode;
  onClose?: () => void;
}

const alertStyles = {
  success: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    icon: 'text-green-600',
    text: 'text-green-800 dark:text-green-200',
    title: 'text-green-900 dark:text-green-100',
  },
  error: {
    bg: 'bg-red-50 dark:bg-red-900/20',
    border: 'border-red-200 dark:border-red-800',
    icon: 'text-red-600',
    text: 'text-red-800 dark:text-red-200',
    title: 'text-red-900 dark:text-red-100',
  },
  warning: {
    bg: 'bg-yellow-50 dark:bg-yellow-900/20',
    border: 'border-yellow-200 dark:border-yellow-800',
    icon: 'text-yellow-600',
    text: 'text-yellow-800 dark:text-yellow-200',
    title: 'text-yellow-900 dark:text-yellow-100',
  },
  info: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    icon: 'text-blue-600',
    text: 'text-blue-800 dark:text-blue-200',
    title: 'text-blue-900 dark:text-blue-100',
  },
};

const iconMap = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: InfoIcon,
};

export function Alert({ type, title, message, onClose }: AlertProps) {
  const style = alertStyles[type];
  const Icon = iconMap[type];

  return (
    <div className={`${style.bg} ${style.border} border rounded-lg p-4 animate-slideInUp`}>
      <div className="flex items-start gap-3">
        <Icon className={`${style.icon} w-5 h-5 mt-0.5 flex-shrink-0`} />
        <div className="flex-1">
          {title && <h3 className={`${style.title} font-semibold mb-1`}>{title}</h3>}
          <p className={`${style.text} text-sm`}>{message}</p>
        </div>
        {onClose && (
          <button onClick={onClose} className={`${style.text} hover:opacity-70`}>
            ×
          </button>
        )}
      </div>
    </div>
  );
}
