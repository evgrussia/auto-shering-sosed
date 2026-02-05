import { DollarSign, ShieldCheck, Star, Lock, Wallet, FileCheck } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Дополнительный доход',
    description: 'Монетизируйте простой вашего автомобиля без создания собственного парка',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: ShieldCheck,
    title: 'Проверенные арендаторы',
    description: 'Все пользователи проходят верификацию через Госуслуги с проверкой паспорта и прав',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Star,
    title: 'Рейтинги и арбитраж',
    description: 'Система отзывов и фото до/после аренды для разрешения спорных ситуаций',
    color: 'from-violet-500 to-purple-500'
  },
  {
    icon: Lock,
    title: 'Умные замки',
    description: 'Post-MVP: открытие авто из приложения без необходимости передавать ключи',
    color: 'from-amber-500 to-orange-500',
    badge: 'Скоро'
  },
  {
    icon: FileCheck,
    title: 'Слот КАСКО',
    description: 'Post-MVP: возможность оформить КАСКО на время аренды для защиты вашего авто',
    color: 'from-pink-500 to-rose-500',
    badge: 'Скоро'
  },
  {
    icon: Wallet,
    title: 'Удобная оплата',
    description: 'Получение оплаты через платформу с использованием ЮKassa. Прозрачные условия',
    color: 'from-indigo-500 to-blue-500'
  }
];

export function ForOwners() {
  return (
    <section id="for-owners" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm text-emerald-400">Для владельцев</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Зарабатывай на простое{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                своего авто
              </span>
            </h2>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Ваша машина стоит в гараже большую часть времени? Превратите простой в стабильный дополнительный доход. Все арендаторы проверены, а вы полностью контролируете процесс.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8 p-6 bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-2xl">
              <div>
                <div className="text-3xl font-bold text-emerald-400 mb-1">до 45,000₽</div>
                <div className="text-sm text-slate-400">в месяц с одного авто</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-1">20-25%</div>
                <div className="text-sm text-slate-400">комиссия платформы</div>
              </div>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-0 text-lg px-8"
            >
              Добавить авто
            </Button>
          </motion.div>

          {/* Right Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
