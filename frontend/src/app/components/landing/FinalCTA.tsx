import { Car, Users, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

export function FinalCTA({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/50 rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl"
        >
          {/* Background Gradient Orbs */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Car className="w-12 h-12 text-blue-400" />
                  <Users className="w-6 h-6 text-emerald-400 absolute -bottom-1 -right-1" />
                </div>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Начать в{' '}
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                  Telegram
                </span>
              </h2>

              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                Присоединяйтесь к растущему сообществу владельцев и арендаторов. Доступно в нескольких городах России, и мы постоянно расширяемся.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0 text-lg px-10 py-6 h-auto"
                onClick={onGetStarted}
              >
                Открыть в Telegram
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-600 hover:bg-slate-800 text-lg px-10 py-6 h-auto"
              >
                Узнать больше
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-700/50"
            >
              <div>
                <div className="text-2xl font-bold text-white mb-1">2,500+</div>
                <div className="text-sm text-slate-400">Пользователей</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">380+</div>
                <div className="text-sm text-slate-400">Автомобилей</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-slate-400">Городов</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white mb-1">4.8</div>
                <div className="text-sm text-slate-400">Средний рейтинг</div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center justify-center space-x-6 mt-8 text-sm text-slate-500"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Верификация через Госуслуги</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Данные защищены (152-ФЗ)</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}