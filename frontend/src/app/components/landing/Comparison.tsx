import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

const comparisonData = [
  {
    feature: 'Цена за сутки',
    competitor: '~6,000₽',
    us: '~3,500₽',
    highlight: true
  },
  {
    feature: 'Верификация',
    competitor: 'Паспорт + карта',
    us: 'Госуслуги (паспорт + ВУ)',
    highlight: true
  },
  {
    feature: 'Фокус на соседей',
    competitor: false,
    us: true,
    highlight: true
  },
  {
    feature: 'Домовые чаты',
    competitor: false,
    us: true,
    highlight: false
  },
  {
    feature: 'Арбитраж с фото',
    competitor: 'Частично',
    us: 'До и после каждой аренды',
    highlight: true
  },
  {
    feature: 'Умные замки',
    competitor: 'Редко',
    us: 'Post-MVP',
    highlight: false
  },
  {
    feature: 'Комиссия платформы',
    competitor: '15-20%',
    us: '20-25%',
    highlight: false
  },
  {
    feature: 'Выгода для арендатора',
    competitor: 'Стандартная',
    us: 'Экономия 30-50%',
    highlight: true
  }
];

export function Comparison() {
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
          <div className="inline-block bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-4">
            <span className="text-sm text-violet-400">Сравнение</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Чем мы отличаемся
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Сравнение с коммерческим каршерингом и другими P2P-платформами
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl overflow-hidden"
        >
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-slate-800/50 bg-slate-800/30">
            <div className="text-sm font-semibold text-slate-400">Параметр</div>
            <div className="text-sm font-semibold text-slate-400 text-center">
              Конкуренты
            </div>
            <div className="text-sm font-semibold text-center">
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Авто-Шеринг-Сосед
              </span>
            </div>
          </div>

          {/* Comparison Rows */}
          {comparisonData.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
              className={`grid grid-cols-3 gap-4 p-6 border-b border-slate-800/30 ${
                row.highlight ? 'bg-blue-500/5' : ''
              } hover:bg-slate-800/20 transition-colors`}
            >
              <div className="flex items-center">
                <span className="text-sm font-medium">{row.feature}</span>
                {row.highlight && (
                  <div className="ml-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                )}
              </div>

              <div className="flex items-center justify-center">
                {typeof row.competitor === 'boolean' ? (
                  row.competitor ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <X className="w-5 h-5 text-slate-600" />
                  )
                ) : (
                  <span className="text-sm text-slate-400 text-center">{row.competitor}</span>
                )}
              </div>

              <div className="flex items-center justify-center">
                {typeof row.us === 'boolean' ? (
                  row.us ? (
                    <Check className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <X className="w-5 h-5 text-slate-600" />
                  )
                ) : (
                  <span className="text-sm font-medium text-center">{row.us}</span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-700/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">30-50%</div>
            <div className="text-sm text-slate-300">Дешевле коммерческого каршеринга</div>
          </div>

          <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-700/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
            <div className="text-sm text-slate-300">Верификация через Госуслуги</div>
          </div>

          <div className="bg-gradient-to-br from-violet-900/30 to-violet-800/20 border border-violet-700/30 rounded-2xl p-6">
            <div className="text-3xl font-bold text-violet-400 mb-2">P2P</div>
            <div className="text-sm text-slate-300">Соседи помогают соседям</div>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}
