import { useState } from 'react';
import { 
  User, Star, Car, Settings, Shield, FileText, 
  HelpCircle, LogOut, ChevronRight, Bell, Moon, Sun,
  CheckCircle, Plus, Edit
} from 'lucide-react';
import { Button } from '../../ui/button';
import { Switch } from '../../ui/switch';
import { mockUser, mockCars, mockReviews } from '../../../lib/mockData';
import { motion } from 'motion/react';

interface ProfileScreenProps {
  userRole: 'owner' | 'renter' | null;
  onLogout: () => void;
}

type ProfileTab = 'main' | 'cars' | 'settings';

export function ProfileScreen({ userRole, onLogout }: ProfileScreenProps) {
  const [activeTab, setActiveTab] = useState<ProfileTab>('main');
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  if (activeTab === 'cars') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button onClick={() => setActiveTab('main')} className="text-blue-400">
                ← Назад
              </button>
              <h1 className="text-2xl font-bold">Мои авто</h1>
              <div className="w-16"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
          <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-0 py-6">
            <Plus className="w-5 h-5 mr-2" />
            Добавить авто
          </Button>

          {mockCars.map((car) => (
            <div
              key={car.id}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4"
            >
              <div className="flex items-start space-x-4 mb-3">
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold">{car.make} {car.model}</div>
                      <div className="text-sm text-slate-400">{car.year} • {car.transmission}</div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 text-xs text-emerald-400">
                      Активно
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <span className="text-emerald-400 font-bold">{car.pricePerDay} ₽/сутки</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{car.rating}</span>
                    <span>•</span>
                    <span>{car.reviewsCount} отзывов</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 pt-3 border-t border-slate-800">
                <Button size="sm" variant="outline" className="flex-1 border-slate-700">
                  <Edit className="w-4 h-4 mr-2" />
                  Редактировать
                </Button>
                <Button size="sm" variant="outline" className="border-slate-700">
                  Скрыть
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'settings') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Header */}
        <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <button onClick={() => setActiveTab('main')} className="text-blue-400">
                ← Назад
              </button>
              <h1 className="text-2xl font-bold">Настройки</h1>
              <div className="w-16"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-slate-400" />
                <div>
                  <div className="font-medium">Уведомления</div>
                  <div className="text-sm text-slate-400">Push в Telegram о заявках</div>
                </div>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="flex items-center space-x-3">
                {darkMode ? <Moon className="w-5 h-5 text-slate-400" /> : <Sun className="w-5 h-5 text-slate-400" />}
                <div>
                  <div className="font-medium">Тёмная тема</div>
                  <div className="text-sm text-slate-400">Системная</div>
                </div>
              </div>
              <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0">
            Сохранить
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Профиль</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* User Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6"
        >
          <div className="flex items-start space-x-4 mb-4">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-20 h-20 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h2 className="text-xl font-bold">{mockUser.name}</h2>
                {mockUser.verified && (
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                )}
              </div>
              <div className="text-sm text-slate-400 mb-3">{mockUser.username}</div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{mockUser.ratingAsOwner}</span>
                </div>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{mockUser.totalTrips} поездок</span>
              </div>
            </div>
          </div>

          {mockUser.verified ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-3 flex items-center space-x-2">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-sm text-emerald-400">Верифицирован через Госуслуги</span>
            </div>
          ) : (
            <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0">
              Пройти верификацию
            </Button>
          )}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4">
            <div className="text-sm text-slate-400 mb-1">Как владелец</div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-2xl font-bold">{mockUser.ratingAsOwner}</span>
            </div>
          </div>
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4">
            <div className="text-sm text-slate-400 mb-1">Как арендатор</div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-2xl font-bold">{mockUser.ratingAsRenter}</span>
            </div>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden">
          <button
            onClick={() => setActiveTab('cars')}
            className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition border-b border-slate-800"
          >
            <div className="flex items-center space-x-3">
              <Car className="w-5 h-5 text-slate-400" />
              <span>Мои авто</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-slate-400" />
              <span>Верификация</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition border-b border-slate-800"
          >
            <div className="flex items-center space-x-3">
              <Settings className="w-5 h-5 text-slate-400" />
              <span>Настройки</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-slate-400" />
              <span>Правила</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-800/50 transition">
            <div className="flex items-center space-x-3">
              <HelpCircle className="w-5 h-5 text-slate-400" />
              <span>Поддержка</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Logout */}
        <Button
          variant="outline"
          className="w-full border-red-500/30 text-red-400 hover:bg-red-500/10"
          onClick={onLogout}
        >
          <LogOut className="w-5 h-5 mr-2" />
          Выйти
        </Button>
      </div>
    </div>
  );
}
