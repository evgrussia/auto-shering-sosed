import { Percent, Clock, MessageCircle, Smartphone, CreditCard, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: Percent,
    title: 'Цена на 30-50% ниже',
    description: 'Арендуйте авто значительно дешевле коммерческого каршеринга благодаря P2P модели',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Clock,
    title: 'Верификация за пару кликов',
    description: 'Быстрая проверка через Госуслуги — паспорт и водительские права автоматически',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: MessageCircle,
    title: 'Прозрачные правила',
    description: 'Чёткие условия аренды, реальные отзывы от других арендаторов и рейтинг владельцев',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Smartphone,
    title: 'Открытие из приложения',
    description: 'Post-MVP: открывайте машину прямо из Telegram без встречи с владельцем',
    color: 'from-amber-500 to-orange-500',
    badge: 'Скоро'
  },
  {
    icon: CreditCard,
    title: 'Безопасная оплата',
    description: 'Post-MVP: оплата и обработка эксцесса через платформу с чеками 54-ФЗ',
    color: 'from-pink-500 to-rose-500',
    badge: 'Скоро'
  },
  {
    icon: FileText,
    title: 'Типовой договор',
    description: 'Все аренды оформляются по стандартному договору с актом приёма-передачи',
    color: 'from-indigo-500 to-blue-500'
  }
];

export function ForRenters() {
  return (
    <section id="for-renters" className="relative py-24 overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all duration-300"
                >
                  {benefit.badge && (
                    <div className="absolute top-3 right-3 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1 text-xs text-amber-400">
                      {benefit.badge}
                    </div>
                  )}

                  <div className={`w-12 h-12 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-blue-400">Для арендаторов</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Арендуй машину{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                у соседа
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Нужна машина на выходные или в поездку? Арендуйте авто у проверенных соседей по выгодной цене. Без скрытых платежей, с прозрачными условиями и отзывами.
            </p>

            {/* Comparison */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                <div className="text-sm text-slate-400 mb-2">Коммерческий каршеринг</div>
                <div className="text-2xl font-bold text-red-400">~6,000₽</div>
                <div className="text-xs text-slate-500">за сутки</div>
              </div>
              <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                <div className="text-sm text-slate-400 mb-2">Авто-Шеринг-Сосед</div>
                <div className="text-2xl font-bold text-emerald-400">~3,500₽</div>
                <div className="text-xs text-slate-500">за сутки</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 border-0 text-lg px-8"
              >
                Найти авто
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-slate-700 hover:bg-slate-800 text-lg px-8"
              >
                Как это работает
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
