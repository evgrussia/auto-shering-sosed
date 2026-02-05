import { MessageCircle, Users, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

export function CommunityChatIntegration() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-blue-400">Интеграция с сообществами</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Домовые и районные{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                чаты в Telegram
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Интегрируйтесь с домовыми чатами и находите авто прямо у соседей. Доверие начинается с близости — арендуйте у тех, кто живёт рядом с вами.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Бот в группе</div>
                  <p className="text-sm text-slate-400">Добавьте бота в домовой чат или закрепите ссылку в описании группы</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Поиск рядом</div>
                  <p className="text-sm text-slate-400">Находите авто и владельцев в вашем районе или доме</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-violet-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Доверие соседей</div>
                  <p className="text-sm text-slate-400">Арендуйте у тех, кого видите каждый день — дополнительная безопасность</p>
                </div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 text-lg px-8"
            >
              Подключить к чату
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Chat Flow Visualization */}
            <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
              {/* Step 1: Chat */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                  <div>
                    <div className="font-semibold">Домовой чат</div>
                    <div className="text-xs text-slate-400">156 участников</div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 text-sm">
                  <div className="text-slate-300">💬 Нужна машина на выходные, может у кого-то есть?</div>
                </div>
              </motion.div>

              {/* Arrow */}
              <div className="flex justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-blue-400" />
              </div>

              {/* Step 2: Bot Response */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-gradient-to-br from-blue-900/30 to-emerald-900/30 border border-blue-700/30 rounded-2xl p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Авто-Шеринг-Сосед</div>
                    <div className="text-xs text-slate-400">Бот</div>
                  </div>
                </div>
                <div className="bg-slate-900/50 rounded-xl p-3 text-sm mb-3">
                  <div className="text-slate-300 mb-2">🚗 Доступно 3 авто в вашем доме!</div>
                  <div className="text-xs text-slate-400">Toyota Camry • 3,500₽/сутки</div>
                  <div className="text-xs text-slate-400">Kia Rio • 2,800₽/сутки</div>
                  <div className="text-xs text-slate-400">Hyundai Solaris • 3,000₽/сутки</div>
                </div>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 border-0"
                >
                  Открыть в приложении
                </Button>
              </motion.div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 shadow-2xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">В вашем районе</div>
                  <div className="text-xl font-bold text-white">47 авто</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
