import { Smartphone, CreditCard, ShieldCheck, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    icon: Smartphone,
    title: 'Умные замки',
    description: 'Открытие и закрытие автомобиля прямо из приложения без передачи физических ключей',
    status: 'В разработке',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: CreditCard,
    title: 'Оплата в приложении',
    description: 'Безопасная оплата аренды и эксцесса через ЮKassa с автоматическими чеками 54-ФЗ',
    status: 'В разработке',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: ShieldCheck,
    title: 'КАСКО на время аренды',
    description: 'Партнёрский слот страхования для защиты автомобиля на период аренды',
    status: 'Планируется',
    color: 'from-violet-500 to-purple-500'
  }
];

export function SmartFeatures() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-4">
            <Calendar className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-400">Roadmap • Post-MVP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Скоро на платформе
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Мы работаем над новыми функциями, которые сделают аренду ещё удобнее и безопаснее
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-8 hover:border-slate-700/50 transition-all duration-300 h-full">
                {/* Status Badge */}
                <div className="absolute top-6 right-6">
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1 text-xs text-amber-400">
                    {feature.status}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Следите за обновлениями</h3>
              <p className="text-slate-400">Подпишитесь на уведомления о запуске новых функций</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3">
                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-300">MVP • Запущено</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/50 border border-slate-700/50 rounded-xl px-4 py-3">
                <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                <span className="text-sm text-slate-300">Post-MVP • Q2 2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
