const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[#070809]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d97706]/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="https://cdn.poehali.dev/projects/f95b400b-6e56-46c5-9ed2-d0ebf9bd3cc6/bucket/dcbbc5df-5ab4-46f5-8093-371b2c054362.png"
                alt="ГрандТехРесурс"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="font-ibm text-[12px] text-[#454b56] leading-relaxed max-w-xs mb-4">
              Поставка смазочных материалов для грузовых и легковых автомобилей, снабжение промышленных предприятий.
            </p>
            <div className="font-oswald text-[11px] text-[#d97706]/60 tracking-widest uppercase italic">
              «Технологии на службе Вашего успеха!»
            </div>
          </div>

          {/* Nav */}
          <div>
            <div className="font-oswald text-[12px] tracking-widest text-[#9ca3af] uppercase mb-4">Навигация</div>
            <ul className="space-y-2">
              {[
                { label: 'О компании', href: '#about' },
                { label: 'Каталог', href: '#catalog' },
                { label: 'Клиенты', href: '#references' },
                { label: 'Контакты', href: '#contact' },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="font-ibm text-[13px] text-[#454b56] hover:text-[#d97706] transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <div className="font-oswald text-[12px] tracking-widest text-[#9ca3af] uppercase mb-4">Контакты</div>
            <div className="space-y-2">
              <div className="font-ibm text-[13px] text-[#454b56]">+7 (800) 000-00-00</div>
              <div className="font-ibm text-[13px] text-[#454b56]">info@grandtechresurs.ru</div>
              <div className="font-ibm text-[12px] text-[#2a2d35] leading-snug mt-2">
                г. Москва,<br />ул. Промышленная, 12
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.04)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono-ibm text-[10px] text-[#2a2d35] tracking-wide">
            © {new Date().getFullYear()} ООО «ГрандТехРесурс». Все права защищены.
          </div>
          <div className="font-mono-ibm text-[10px] text-[#2a2d35] tracking-wide">
            ИНН 7700000000 · ОГРН 1000000000000
          </div>
        </div>
      </div>
    </footer>
  );
}