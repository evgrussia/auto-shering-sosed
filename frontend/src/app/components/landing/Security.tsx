import { ShieldCheck, FileCheck, Camera, FileText, BadgeCheck, Database } from 'lucide-react';
import { motion } from 'motion/react';

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: 'Верификация через Госуслуги',
    description: 'Автоматическая проверка паспорта и водительского удостоверения каждого пользователя',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: BadgeCheck,
    title: 'Рейтинги и отзывы',
    description: 'После каждой аренды стороны оставляют отзывы, формируя репутацию в системе',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Camera,
    title: 'Арбитраж с фото',
    description: 'Обязательные фото "до" и "после" аренды для быстрого разрешения спорных ситуаций',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: FileText,
    title: 'Типовой договор',
    description: 'Каждая аренда оформляется договором и актом приёма-передачи автомобиля',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: FileCheck,
    title: 'Слот КАСКО',
    description: 'Post-MVP: возможность застраховать авто на время аренды через партнёров',
    color: 'from-pink-500 to-rose-500'
  },
  {
    icon: Database,
    title: 'Данные в РФ',
    description: 'Все данные хранятся на территории РФ в соответствии с требованиями 152-ФЗ',
    color: 'from-indigo-500 to-blue-500'
  }
];

export function Security() {
  return (
    <section id="security" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-emerald-400">Безопасность и доверие</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Максимальная{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              безопасность
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Многоуровневая система защиты для владельцев и арендаторов
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl p-6 hover:border-slate-700/50 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-slate-400">верифицированных пользователей</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">152-ФЗ</div>
              <div className="text-sm text-slate-400">соответствие закону о данных</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Фото</div>
              <div className="text-sm text-slate-400">до и после каждой аренды</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
