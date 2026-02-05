import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, Calendar, Star } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { mockCars } from '../../../lib/mockData';
import { motion } from 'motion/react';

export function SearchScreen() {
  const [city, setCity] = useState('Москва');
  const [startDate, setStartDate] = useState('2026-02-10');
  const [endDate, setEndDate] = useState('2026-02-12');
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Поиск авто</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Search Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-4 space-y-3"
        >
          <div>
            <label className="text-sm text-slate-400 mb-2 block">Город</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="pl-10 bg-slate-800/50 border-slate-700"
                placeholder="Выберите город"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Начало</label>
              <Input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="bg-slate-800/50 border-slate-700"
              />
            </div>
            <div>
              <label className="text-sm text-slate-400 mb-2 block">Конец</label>
              <Input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="bg-slate-800/50 border-slate-700"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0">
              <Search className="w-5 h-5 mr-2" />
              Найти
            </Button>
            <Button
              variant="outline"
              className="border-slate-700"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-5 h-5" />
            </Button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="space-y-3 pt-3 border-t border-slate-800"
            >
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Цена за сутки</label>
                <div className="grid grid-cols-2 gap-2">
                  <Input placeholder="От" className="bg-slate-800/50 border-slate-700" />
                  <Input placeholder="До" className="bg-slate-800/50 border-slate-700" />
                </div>
              </div>
              <div>
                <label className="text-sm text-slate-400 mb-2 block">Класс</label>
                <div className="flex flex-wrap gap-2">
                  {['Эконом', 'Комфорт', 'Бизнес', 'Премиум'].map((cls) => (
                    <button
                      key={cls}
                      className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 hover:border-blue-500 rounded-lg text-sm transition"
                    >
                      {cls}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Найдено {mockCars.length} авто</h2>
          </div>

          <div className="space-y-3">
            {mockCars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700/50 transition"
              >
                <div className="flex">
                  <img
                    src={car.image}
                    alt={`${car.make} ${car.model}`}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-1 p-4">
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
                    <div className="flex items-center space-x-2 text-sm mb-2">
                      <div className="flex items-center space-x-1 text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{car.rating}</span>
                      </div>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400">{car.reviewsCount} отзывов</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {car.features.slice(0, 2).map((feature) => (
                        <span key={feature} className="text-xs bg-slate-800/50 px-2 py-1 rounded-lg text-slate-400">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
