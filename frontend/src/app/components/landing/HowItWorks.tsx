import { UserCheck, Shield, Search, Key } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: UserCheck,
    number: '01',
    title: 'Регистрация в Telegram',
    description: 'Один клик для входа через Telegram — никаких сложных форм и паролей',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    number: '02',
    title: 'Верификация через Госуслуги',
    description: 'Быстрая проверка паспорта и водительского удостоверения для безопасности всех участников',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Search,
    number: '03',
    title: 'Выбор или добавление авто',
    description: 'Найдите подходящее авто по городу и датам или добавьте своё с ценой и правилами',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Key,
    number: '04',
    title: 'Бронирование и передача',
    description: 'Встреча и передача ключей при бронировании. Скоро — открытие из приложения через умные замки',
    color: 'from-amber-500 to-orange-500'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-blue-400">Простой процесс</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Как это работает
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Всего 4 шага отделяют вас от первой аренды или сдачи автомобиля
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/20 via-emerald-500/20 to-amber-500/20"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-950 border-2 border-slate-800 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">Готовы начать?</p>
          <div className="inline-flex items-center space-x-2 text-sm text-slate-500">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span>Запуск занимает всего 5 минут</span>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
