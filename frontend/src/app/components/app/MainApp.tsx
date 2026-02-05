import { useState } from 'react';
import { Home, Search, Calendar, MessageCircle, User } from 'lucide-react';
import { HomeScreen } from './screens/HomeScreen';
import { SearchScreen } from './screens/SearchScreen';
import { BookingsScreen } from './screens/BookingsScreen';
import { MessagesScreen } from './screens/MessagesScreen';
import { ProfileScreen } from './screens/ProfileScreen';

export type NavTab = 'home' | 'search' | 'bookings' | 'messages' | 'profile';

interface MainAppProps {
  userRole: 'owner' | 'renter' | null;
  onLogout: () => void;
}

export function MainApp({ userRole, onLogout }: MainAppProps) {
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen userRole={userRole} />;
      case 'search':
        return <SearchScreen />;
      case 'bookings':
        return <BookingsScreen userRole={userRole} />;
      case 'messages':
        return <MessagesScreen />;
      case 'profile':
        return <ProfileScreen userRole={userRole} onLogout={onLogout} />;
      default:
        return <HomeScreen userRole={userRole} />;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Main Content */}
      <div className="min-h-screen">
        {renderScreen()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-around h-16">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === 'home'
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Главная</span>
            </button>

            <button
              onClick={() => setActiveTab('search')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === 'search'
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Search className="w-6 h-6" />
              <span className="text-xs font-medium">Поиск</span>
            </button>

            <button
              onClick={() => setActiveTab('bookings')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all relative ${
                activeTab === 'bookings'
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-6 h-6" />
              <span className="text-xs font-medium">Брони</span>
              <div className="absolute top-1 right-2 w-2 h-2 bg-red-500 rounded-full"></div>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all relative ${
                activeTab === 'messages'
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-xs font-medium">Чаты</span>
              <div className="absolute top-1 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white">
                3
              </div>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-col items-center space-y-1 px-4 py-2 rounded-xl transition-all ${
                activeTab === 'profile'
                  ? 'text-blue-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <User className="w-6 h-6" />
              <span className="text-xs font-medium">Профиль</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
