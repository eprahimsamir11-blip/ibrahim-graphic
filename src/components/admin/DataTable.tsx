'use client';

import { useState } from 'react';
import { Eye, Edit, Trash2, Plus, Search } from 'lucide-react';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

interface DataTableProps {
  title: string;
  columns: Array<{
    key: string;
    label: string;
  }>;
  data: any[];
  isLoading?: boolean;
  onAdd?: () => void;
  onEdit?: (item: any) => void;
  onDelete?: (id: string) => void;
  onView?: (item: any) => void;
}

export function DataTable({
  title,
  columns,
  data,
  isLoading = false,
  onAdd,
  onEdit,
  onDelete,
  onView,
}: DataTableProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter((item) =>
    columns.some((col) =>
      String(item[col.key]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-dark-700">
        <div className="flex items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          {onAdd && (
            <button
              onClick={onAdd}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              <Plus className="w-5 h-5" />
              إضافة
            </button>
          )}
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="البحث..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-4 pr-10 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {isLoading ? (
          <div className="p-12 flex justify-center">
            <LoadingSpinner size="md" />
          </div>
        ) : filteredData.length === 0 ? (
          <div className="p-12 text-center text-gray-600 dark:text-gray-400">
            لا توجد ب��انات
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-dark-700/50 border-b border-gray-200 dark:border-dark-700">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100"
                  >
                    {col.label}
                  </th>
                ))}
                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={item.id || index}
                  className="border-b border-gray-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700/50 transition"
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100"
                    >
                      {item[col.key]}
                    </td>
                  ))}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {onView && (
                        <button
                          onClick={() => onView(item)}
                          className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition"
                          title="عرض"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      )}
                      {onEdit && (
                        <button
                          onClick={() => onEdit(item)}
                          className="p-2 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition"
                          title="تعديل"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
                          title="حذف"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
