import { Car, Users, Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Hero({ onGetStarted }: { onGetStarted?: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Car className="w-8 h-8 text-blue-500" />
                <Users className="w-4 h-4 text-emerald-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Авто-Шеринг-Сосед
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                Как это работает
              </button>
              <button 
                onClick={() => scrollToSection('for-owners')}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                Для владельцев
              </button>
              <button 
                onClick={() => scrollToSection('for-renters')}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                Для арендаторов
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                Безопасность
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-sm text-slate-300 hover:text-white transition"
              >
                FAQ
              </button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0"
                onClick={onGetStarted}
              >
                Войти через Telegram
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-slate-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50"
          >
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-slate-300 hover:text-white py-2"
              >
                Как это работает
              </button>
              <button 
                onClick={() => scrollToSection('for-owners')}
                className="block w-full text-left text-slate-300 hover:text-white py-2"
              >
                Для владельцев
              </button>
              <button 
                onClick={() => scrollToSection('for-renters')}
                className="block w-full text-left text-slate-300 hover:text-white py-2"
              >
                Для арендаторов
              </button>
              <button 
                onClick={() => scrollToSection('security')}
                className="block w-full text-left text-slate-300 hover:text-white py-2"
              >
                Безопасность
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-slate-300 hover:text-white py-2"
              >
                FAQ
              </button>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0"
                onClick={onGetStarted}
              >
                Войти через Telegram
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-300">Аренда авто от соседей</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Арендуй авто у соседа{' '}
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  или сдавай своё
                </span>
              </h1>

              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                P2P-каршеринг между соседями в Telegram. Зарабатывай на простое своего авто или аренду машину на 30–50% дешевле коммерческого каршеринга. Безопасно, просто, выгодно.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0 text-lg px-8"
                  onClick={() => scrollToSection('how-it-works')}
                >
                  <Car className="w-5 h-5 mr-2" />
                  Найти авто
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-slate-700 hover:bg-slate-800 text-lg px-8"
                  onClick={() => scrollToSection('for-owners')}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Сдать авто
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-800/50">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">30-50%</div>
                  <div className="text-sm text-slate-400">дешевле</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-slate-400">безопасно</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">5 мин</div>
                  <div className="text-sm text-slate-400">на старт</div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800/50">
                <img 
                  src="https://images.unsplash.com/photo-1754175250395-cecec38542d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjYXIlMjBzaGFyaW5nJTIwbmVpZ2hib3JzJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3MDIxNzM2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Современный каршеринг"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Активных пользователей</div>
                    <div className="text-xl font-bold text-white">2,500+</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20"></div>
    </div>
  );
}