import { useState } from 'react';
import { ShieldCheck, CheckCircle, AlertCircle, Loader2, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

interface VerificationScreenProps {
  onComplete: () => void;
  onSkip: () => void;
}

type VerificationStatus = 'not_started' | 'in_progress' | 'verified' | 'error';

export function VerificationScreen({ onComplete, onSkip }: VerificationScreenProps) {
  const [status, setStatus] = useState<VerificationStatus>('not_started');

  const handleVerify = () => {
    setStatus('in_progress');
    // Симуляция верификации
    setTimeout(() => {
      setStatus('verified');
      setTimeout(() => {
        onComplete();
      }, 1500);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md"
      >
        <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-8 shadow-2xl">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            {status === 'verified' ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center"
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
            ) : status === 'in_progress' ? (
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center">
                <Loader2 className="w-12 h-12 text-white animate-spin" />
              </div>
            ) : status === 'error' ? (
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-rose-500 rounded-3xl flex items-center justify-center">
                <AlertCircle className="w-12 h-12 text-white" />
              </div>
            ) : (
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center">
                <ShieldCheck className="w-12 h-12 text-white" />
              </div>
            )}
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-center mb-3">
            {status === 'verified' ? 'Верификация пройдена!' : 'Проверка документов'}
          </h2>

          <p className="text-lg text-slate-400 text-center mb-8 leading-relaxed">
            {status === 'verified'
              ? 'Вы успешно верифицированы через Госуслуги'
              : status === 'in_progress'
              ? 'Проверяем ваши документы...'
              : status === 'error'
              ? 'Произошла ошибка. Попробуйте позже.'
              : 'Пройдите быструю проверку паспорта и водительского удостоверения через Госуслуги'}
          </p>

          {/* Benefits */}
          {status === 'not_started' && (
            <div className="space-y-3 mb-8">
              <div className="flex items-start space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Автоматическая проверка</div>
                  <div className="text-slate-400">Паспорт и ВУ проверяются автоматически</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Безопасность</div>
                  <div className="text-slate-400">Все данные защищены (152-ФЗ)</div>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold mb-1">Быстро</div>
                  <div className="text-slate-400">Занимает меньше минуты</div>
                </div>
              </div>
            </div>
          )}

          {/* Status Badge */}
          <div className="mb-6 p-4 bg-slate-800/50 border border-slate-700/50 rounded-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-slate-400" />
                <span className="text-sm font-medium">Статус верификации</span>
              </div>
              <div className="flex items-center space-x-2">
                {status === 'verified' ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">Верифицирован</span>
                  </>
                ) : status === 'in_progress' ? (
                  <>
                    <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                    <span className="text-sm font-semibold text-blue-400">В процессе</span>
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle className="w-5 h-5 text-red-400" />
                    <span className="text-sm font-semibold text-red-400">Ошибка</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5 text-slate-500" />
                    <span className="text-sm font-semibold text-slate-500">Не пройдена</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          {status === 'not_started' && (
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0 text-lg py-6"
                onClick={handleVerify}
              >
                Пройти проверку
              </Button>
              <Button
                variant="ghost"
                onClick={onSkip}
                className="w-full text-slate-400 hover:text-white"
              >
                Пропустить (можно пройти позже)
              </Button>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0 text-lg py-6"
                onClick={handleVerify}
              >
                Попробовать снова
              </Button>
              <Button
                variant="ghost"
                onClick={onSkip}
                className="w-full text-slate-400 hover:text-white"
              >
                Пропустить
              </Button>
            </div>
          )}

          {/* Footer Note */}
          {status === 'not_started' && (
            <p className="text-center text-xs text-slate-500 mt-6">
              Без верификации вы не сможете бронировать или сдавать авто
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
