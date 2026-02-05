import { useState } from 'react';
import { Car, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface OnboardingScreenProps {
  onComplete: (role: 'owner' | 'renter') => void;
}

const slides = [
  {
    title: 'Добро пожаловать!',
    description: 'Авто-Шеринг-Сосед — это P2P каршеринг между соседями. Зарабатывайте на простое или арендуйте дешевле.',
    icon: CheckCircle,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Безопасность',
    description: 'Все пользователи проходят верификацию через Госуслуги. Рейтинги, отзывы и арбитраж с фото.',
    icon: CheckCircle,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Выберите роль',
    description: 'Что вы хотите сделать в первую очередь?',
    icon: CheckCircle,
    color: 'from-violet-500 to-purple-500'
  }
];

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSkip = () => {
    setCurrentSlide(slides.length - 1);
  };

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

      <div className="relative w-full max-w-md">
        <AnimatePresence mode="wait">
          {currentSlide < slides.length - 1 ? (
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl"
            >
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className={`w-24 h-24 bg-gradient-to-br ${slides[currentSlide].color} rounded-3xl flex items-center justify-center`}>
                  <CurrentIcon className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Content */}
              <h2 className="text-3xl font-bold text-center mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg text-slate-400 text-center mb-8 leading-relaxed">
                {slides[currentSlide].description}
              </p>

              {/* Dots */}
              <div className="flex justify-center space-x-2 mb-8">
                {slides.slice(0, -1).map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-gradient-to-r from-blue-500 to-emerald-500'
                        : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  onClick={handleSkip}
                  className="text-slate-400 hover:text-white"
                >
                  Пропустить
                </Button>
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0"
                >
                  Далее
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="role-selection"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-center mb-4">
                Выберите роль
              </h2>
              <p className="text-lg text-slate-400 text-center mb-8">
                Что вы хотите сделать в первую очередь?
              </p>

              {/* Role Cards */}
              <div className="space-y-4 mb-6">
                <button
                  onClick={() => onComplete('owner')}
                  className="w-full bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border-2 border-emerald-700/50 hover:border-emerald-600 rounded-2xl p-6 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Car className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xl font-bold mb-1">Сдавать авто</div>
                      <div className="text-sm text-slate-400">Монетизируйте простой вашего автомобиля</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>

                <button
                  onClick={() => onComplete('renter')}
                  className="w-full bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-2 border-blue-700/50 hover:border-blue-600 rounded-2xl p-6 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-xl font-bold mb-1">Арендовать</div>
                      <div className="text-sm text-slate-400">Найти авто на 30-50% дешевле</div>
                    </div>
                    <ArrowRight className="w-6 h-6 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </div>

              <Button
                variant="ghost"
                onClick={() => onComplete('renter')}
                className="w-full text-slate-400 hover:text-white"
              >
                Пока смотреть
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}