import { MessageCircle, Send } from 'lucide-react';
import { mockMessages } from '../../../lib/mockData';
import { motion } from 'motion/react';

export function MessagesScreen() {
  const formatTime = (time: string) => {
    const date = new Date(time);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    
    if (hours < 1) return 'только что';
    if (hours < 24) return `${hours}ч назад`;
    return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Сообщения</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-2">
          {mockMessages.map((chat) => (
            <motion.button
              key={chat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-slate-700/50 transition text-left"
            >
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={chat.partnerAvatar}
                    alt={chat.partnerName}
                    className="w-12 h-12 rounded-full"
                  />
                  {chat.unreadCount > 0 && (
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
                      {chat.unreadCount}
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="font-bold">{chat.partnerName}</div>
                    <div className="text-xs text-slate-500">{formatTime(chat.lastMessageTime)}</div>
                  </div>
                  <div className="text-sm text-slate-400 mb-2 truncate">{chat.lastMessage}</div>
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <span>{chat.car.make} {chat.car.model}</span>
                    <span>•</span>
                    <span>{chat.car.year}</span>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {mockMessages.length === 0 && (
          <div className="text-center py-12">
            <MessageCircle className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Нет сообщений</p>
            <p className="text-sm text-slate-500 mt-2">Чаты появятся после бронирований</p>
          </div>
        )}
      </div>
    </div>
  );
}
