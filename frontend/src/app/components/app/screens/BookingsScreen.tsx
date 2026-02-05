import { useState } from 'react';
import { Calendar, Clock, User, MapPin, MessageCircle, CheckCircle, XCircle } from 'lucide-react';
import { Button } from '../../ui/button';
import { mockBookings } from '../../../lib/mockData';
import { motion } from 'motion/react';

interface BookingsScreenProps {
  userRole: 'owner' | 'renter' | null;
}

type BookingStatus = 'all' | 'pending' | 'confirmed' | 'active' | 'completed' | 'cancelled';

export function BookingsScreen({ userRole }: BookingsScreenProps) {
  const [activeTab, setActiveTab] = useState<BookingStatus>('all');

  const statusBadge = (status: string) => {
    const styles = {
      pending: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
      confirmed: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
      active: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
      completed: 'bg-slate-500/10 border-slate-500/30 text-slate-400',
      cancelled: 'bg-red-500/10 border-red-500/30 text-red-400'
    };
    const labels = {
      pending: 'Ожидает',
      confirmed: 'Подтверждено',
      active: 'Активно',
      completed: 'Завершено',
      cancelled: 'Отменено'
    };
    return (
      <span className={`text-xs px-2 py-1 rounded-full border ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const filteredBookings = activeTab === 'all'
    ? mockBookings
    : mockBookings.filter(b => b.status === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Мои бронирования</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Tabs */}
        <div className="flex overflow-x-auto space-x-2 pb-2 -mx-4 px-4">
          {(['all', 'pending', 'confirmed', 'active', 'completed'] as BookingStatus[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition ${
                activeTab === tab
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'all' ? 'Все' : tab === 'pending' ? 'Ожидают' : tab === 'confirmed' ? 'Подтверждённые' : tab === 'active' ? 'Активные' : 'Завершённые'}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-3">
          {filteredBookings.map((booking) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 hover:border-slate-700/50 transition"
            >
              <div className="flex items-start space-x-4 mb-3">
                <img
                  src={booking.car.image}
                  alt={`${booking.car.make} ${booking.car.model}`}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-bold">{booking.car.make} {booking.car.model}</div>
                      <div className="text-sm text-slate-400">{booking.car.year}</div>
                    </div>
                    {statusBadge(booking.status)}
                  </div>
                  <div className="space-y-1 text-sm text-slate-400">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{booking.startDate} — {booking.endDate}</span>
                    </div>
                    {booking.meetingLocation && (
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{booking.meetingLocation}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Booking Info */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                <div className="flex items-center space-x-3">
                  <img
                    src={booking.renterAvatar}
                    alt={booking.renterName}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <div className="text-sm font-medium">{booking.renterName}</div>
                    <div className="text-xs text-slate-400">★ {booking.renterRating}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-emerald-400">{booking.totalPrice} ₽</div>
                </div>
              </div>

              {/* Actions */}
              {booking.status === 'pending' && userRole === 'owner' && (
                <div className="flex gap-2 mt-3">
                  <Button size="sm" className="flex-1 bg-emerald-600 hover:bg-emerald-700 border-0">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Подтвердить
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-red-500/30 text-red-400 hover:bg-red-500/10">
                    <XCircle className="w-4 h-4 mr-1" />
                    Отклонить
                  </Button>
                </div>
              )}

              {booking.status === 'confirmed' && (
                <Button size="sm" className="w-full mt-3 bg-blue-600 hover:bg-blue-700 border-0">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Написать
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {filteredBookings.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Нет бронирований</p>
          </div>
        )}
      </div>
    </div>
  );
}
