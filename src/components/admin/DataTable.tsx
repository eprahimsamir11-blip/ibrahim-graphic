import React from 'react';

interface DataTableProps {
  title: string;
  columns: { key: string; label: string }[];
  data: any[];
  onAdd?: () => void;
  onEdit?: (item: any) => void;
  onDelete?: (id: string) => void;
}

export function DataTable({
  title,
  columns,
  data,
  onAdd,
  onEdit,
  onDelete,
}: DataTableProps) {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-dark-700 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {onAdd && (
          <button
            onClick={onAdd}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
          >
            + إضافة جديد
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {data.length === 0 ? (
          <div className="p-12 text-center text-gray-600 dark:text-gray-400">
            لا توجد بيانات
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
                {(onEdit || onDelete) && (
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">
                    الإجراءات
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
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
                  {(onEdit || onDelete) && (
                    <td className="px-6 py-4 text-sm">
                      <div className="flex gap-2">
                        {onEdit && (
                          <button
                            onClick={() => onEdit(item)}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded hover:bg-blue-200 dark:hover:bg-blue-900/50 transition text-xs"
                          >
                            تعديل
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => onDelete(item.id)}
                            className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50 transition text-xs"
                          >
                            حذف
                          </button>
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
