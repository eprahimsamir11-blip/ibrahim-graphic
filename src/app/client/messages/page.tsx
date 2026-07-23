'use client';

import { ClientLayout } from '@/components/client/ClientLayout';
import { useState } from 'react';
import { Send } from 'lucide-react';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

const initialMessages = [
  {
    id: '1',
    sender: 'admin',
    name: 'فريق الدعم',
    message: 'مرحباً! شكراً لك على اختيارك لخدماتنا. كيف يمكننا مساعدتك؟',
    timestamp: '2024-02-23 10:30',
  },
  {
    id: '2',
    sender: 'client',
    name: 'أنت',
    message: 'أريد شعار احترافي لشركتي الجديدة',
    timestamp: '2024-02-23 10:45',
  },
  {
    id: '3',
    sender: 'admin',
    name: 'فريق الدعم',
    message: 'رائع! سنساعدك بكل سرور. هل لديك أي أفكار معينة؟',
    timestamp: '2024-02-23 11:00',
  },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: String(prev.length + 1),
          sender: 'client',
          name: 'أنت',
          message: inputMessage,
          timestamp: new Date().toLocaleTimeString('ar-SA', {
            hour: '2-digit',
            minute: '2-digit',
          }),
        },
      ]);
      setInputMessage('');
      setIsLoading(false);
    }, 800);
  };

  return (
    <ClientLayout>
      <div className="space-y-6 animate-fadeIn h-full">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">الرسائل</h1>
          <p className="text-gray-600 dark:text-gray-400">تواصل مع فريق الدعم</p>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 h-[600px] flex flex-col">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'client' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.sender === 'client'
                      ? 'bg-primary-100 dark:bg-primary-900/30 text-gray-900 dark:text-white'
                      : 'bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white'
                  }`}
                >
                  <p className="text-xs font-semibold mb-1">{msg.name}</p>
                  <p className="text-sm">{msg.message}</p>
                  <p className="text-xs mt-2 opacity-70">{msg.timestamp}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="border-t border-gray-200 dark:border-dark-700 p-4">
            <form onSubmit={handleSendMessage} className="flex gap-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="اكتب رسالتك..."
                disabled={isLoading}
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-dark-600 rounded-lg bg-gray-50 dark:bg-dark-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
              >
                {isLoading ? (
                  <LoadingSpinner size="sm" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    إرسال
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
