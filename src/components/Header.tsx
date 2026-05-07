import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const navItems = [
  { label: 'О компании', href: '#about' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'Клиенты', href: '#references' },
  { label: 'Контакты', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0b0d]/95 backdrop-blur-md border-b border-[rgba(217,119,6,0.2)] shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 relative">
            <div className="absolute inset-0 bg-[#d97706] clip-corner" />
            <div className="absolute inset-[2px] bg-[#0a0b0d] clip-corner flex items-center justify-center">
              <div className="w-2 h-2 bg-[#d97706] rounded-full" />
            </div>
          </div>
          <div>
            <div className="font-oswald text-white text-sm font-semibold tracking-wider leading-none">
              ГРАНДТЕХ<span className="text-[#d97706]">РЕСУРС</span>
            </div>
            <div className="font-mono-ibm text-[#6b7280] text-[9px] tracking-[0.2em] uppercase leading-none mt-0.5">
              Смазочные материалы
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="font-ibm text-[13px] text-[#9ca3af] hover:text-[#d97706] transition-colors duration-200 tracking-wide uppercase relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d97706] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollTo('#contact')}
            className="font-oswald text-[13px] tracking-widest uppercase bg-[#d97706] text-[#0a0b0d] px-5 py-2 clip-corner hover:bg-[#f59e0b] transition-colors duration-200 font-medium"
          >
            Запрос цены
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#9ca3af] hover:text-[#d97706] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111318] border-t border-[rgba(217,119,6,0.15)] px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left font-ibm text-[14px] text-[#9ca3af] hover:text-[#d97706] transition-colors py-2 tracking-wide uppercase"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="w-full font-oswald text-[13px] tracking-widest uppercase bg-[#d97706] text-[#0a0b0d] px-5 py-2.5 clip-corner hover:bg-[#f59e0b] transition-colors mt-2 font-medium"
          >
            Запрос цены
          </button>
        </div>
      )}
    </header>
  );
}
