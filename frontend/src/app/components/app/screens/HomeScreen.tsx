import { Bell, Plus, Car, TrendingUp, Calendar, MapPin } from 'lucide-react';
import { Button } from '../../ui/button';
import { mockUser, mockCars, mockBookings } from '../../../lib/mockData';
import { motion } from 'motion/react';

interface HomeScreenProps {
  userRole: 'owner' | 'renter' | null;
}

export function HomeScreen({ userRole }: HomeScreenProps) {
  const upcomingBooking = mockBookings.find(b => b.status === 'confirmed');
  const nearestCars = mockCars.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Главная</h1>
              <p className="text-sm text-slate-400">Добро пожаловать, {mockUser.name.split(' ')[0]}!</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="relative p-2 hover:bg-slate-800 rounded-xl transition">
                <Bell className="w-6 h-6" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-4"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/30 rounded-2xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-2xl font-bold">{mockUser.totalTrips}</div>
            </div>
            <div className="text-sm text-slate-400">Всего поездок</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-700/30 rounded-2xl p-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold">{mockUser.ratingAsOwner}</div>
            </div>
            <div className="text-sm text-slate-400">Рейтинг</div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Быстрые действия</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-700/30 hover:border-emerald-600 rounded-2xl p-6 transition-all group text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold mb-1">Добавить авто</div>
              <div className="text-sm text-slate-400">Начните зарабатывать</div>
            </button>

            <button className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/30 hover:border-blue-600 rounded-2xl p-6 transition-all group text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="font-bold mb-1">Найти авто</div>
              <div className="text-sm text-slate-400">Аренда по соседству</div>
            </button>
          </div>
        </motion.div>

        {/* Upcoming Booking */}
        {upcomingBooking && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Ближайшая аренда</h2>
              <button className="text-sm text-blue-400 hover:text-blue-300">Все брони</button>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-slate-700/50 transition">
              <div className="flex items-start space-x-4">
                <img
                  src={upcomingBooking.car.image}
                  alt={`${upcomingBooking.car.make} ${upcomingBooking.car.model}`}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold">{upcomingBooking.car.make} {upcomingBooking.car.model}</div>
                      <div className="text-sm text-slate-400">{upcomingBooking.car.year}</div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-full px-3 py-1 text-xs text-emerald-400">
                      Подтверждено
                    </div>
                  </div>
                  <div className="space-y-1 text-sm text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{upcomingBooking.startDate} — {upcomingBooking.endDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{upcomingBooking.meetingLocation}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Available Cars Nearby */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Авто рядом с вами</h2>
            <button className="text-sm text-blue-400 hover:text-blue-300">Все авто</button>
          </div>
          <div className="space-y-3">
            {nearestCars.map((car, index) => (
              <div
                key={car.id}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-slate-700/50 transition"
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-bold">{car.make} {car.model}</div>
                        <div className="text-sm text-slate-400">{car.year} • {car.transmission}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-400">{car.pricePerDay} ₽</div>
                        <div className="text-xs text-slate-500">за сутки</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <span>★</span>
                        <span>{car.rating}</span>
                      </div>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{car.reviewsCount} отзывов</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
