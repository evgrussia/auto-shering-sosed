import { Car, Users, Mail, FileText, Shield, HelpCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="faq" className="relative py-16 border-t border-slate-800/50 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Car className="w-8 h-8 text-blue-500" />
                <Users className="w-4 h-4 text-emerald-400 absolute -bottom-1 -right-1" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Авто-Шеринг-Сосед
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              P2P-каршеринг между соседями в Telegram. Безопасно, выгодно, просто.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span>Работаем в 5 городах России</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-sm text-slate-400 hover:text-white transition">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#for-owners" className="text-sm text-slate-400 hover:text-white transition">
                  Для владельцев
                </a>
              </li>
              <li>
                <a href="#for-renters" className="text-sm text-slate-400 hover:text-white transition">
                  Для арендаторов
                </a>
              </li>
              <li>
                <a href="#security" className="text-sm text-slate-400 hover:text-white transition">
                  Безопасность
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Документы</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition">
                  <FileText className="w-4 h-4" />
                  <span>Правила платформы</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition">
                  <Shield className="w-4 h-4" />
                  <span>Политика конфиденциальности</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition">
                  <FileText className="w-4 h-4" />
                  <span>Пользовательское соглашение</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition">
                  <FileText className="w-4 h-4" />
                  <span>Договор аренды (шаблон)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition">
                  <HelpCircle className="w-4 h-4" />
                  <span>FAQ и помощь</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition">
                  <Mail className="w-4 h-4" />
                  <span>Связаться с нами</span>
                </a>
              </li>
              <li>
                <div className="text-sm text-slate-400">
                  <div className="mb-1">Telegram: @autosharing</div>
                  <div>Email: support@autosharing.ru</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-500">
              © {currentYear} Авто-Шеринг-Сосед. Все права защищены.
            </div>

            <div className="flex items-center space-x-6 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Данные защищены 152-ФЗ</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span>Верификация через Госуслуги</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}
