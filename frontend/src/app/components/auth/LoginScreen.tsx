import { Car, Users, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'motion/react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
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
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center">
                <Car className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center border-4 border-slate-900">
                <Users className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-center mb-3">
            Авто-Шеринг-Сосед
          </h1>
          <p className="text-center text-slate-400 mb-8">
            P2P-каршеринг между соседями
          </p>

          {/* Login Button */}
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 border-0 text-lg py-6 mb-6"
            onClick={onLogin}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 mr-3" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.61 3.73-.53.36-1.01.54-1.44.52-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.48 1.02-.73 3.99-1.73 6.65-2.87 7.98-3.43 3.8-1.58 4.59-1.85 5.1-1.86.11 0 .37.03.53.16.14.11.17.26.19.37-.01.06-.01.24-.03.38z"/>
            </svg>
            Войти через Telegram
          </Button>

          {/* Security Info */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span>Безопасный вход без паролей</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Минимум запрашиваемых данных</span>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-slate-500">
            Нажимая кнопку, вы соглашаетесь с{' '}
            <a href="#" className="text-blue-400 hover:underline">
              Правилами платформы
            </a>{' '}
            и{' '}
            <a href="#" className="text-blue-400 hover:underline">
              Политикой конфиденциальности
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
