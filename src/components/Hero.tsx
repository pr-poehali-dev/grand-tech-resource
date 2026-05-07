import Icon from '@/components/ui/icon';



const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '500+', label: 'B2B клиентов' },
  { value: '1500+', label: 'позиций в каталоге' },
  { value: '99%', label: 'надёжность поставок' },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/f95b400b-6e56-46c5-9ed2-d0ebf9bd3cc6/files/e6ab6db9-ce18-4729-9b35-a89951b591dd.jpg"
          alt="Промышленное предприятие"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0d] via-[#0a0b0d]/85 to-[#0a0b0d]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-transparent to-[#0a0b0d]/50" />
      </div>

      {/* Grid texture overlay */}
      <div className="absolute inset-0 texture-grid opacity-40" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 256 256" className="w-full h-full">
          <polygon points="256,0 256,256 0,0" fill="#d97706" />
        </svg>
      </div>

      {/* Technical decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d97706] to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in animate-delay-100">
            <div className="w-8 h-px bg-[#d97706]" />
            <span className="font-mono-ibm text-[#d97706] text-[11px] tracking-[0.3em] uppercase">
              ГПУ · Коммерческий транспорт · Промышленность
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-4 opacity-0 animate-fade-in animate-delay-200">
            ТЕХНОЛОГИИ<br />
            <span className="text-[#d97706] amber-text-glow">НА СЛУЖБЕ</span><br />
            ВАШЕГО УСПЕХА
          </h1>

          <div className="w-16 h-1 bg-[#d97706] mb-6 opacity-0 animate-fade-in animate-delay-300" />

          <p className="font-ibm text-[#9ca3af] text-lg leading-relaxed max-w-xl mb-10 opacity-0 animate-fade-in animate-delay-400">
            Поставка специализированных смазочных материалов для газопоршневых установок,
            коммерческого транспорта и легковых автомобилей. Комплексное снабжение промышленных
            предприятий. Надёжность, гарантирующая бесперебойную работу вашей техники и оборудования.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-in animate-delay-500">
            <button
              onClick={() => scrollTo('#catalog')}
              className="font-oswald text-sm tracking-widest uppercase bg-[#d97706] text-[#0a0b0d] px-8 py-3.5 clip-corner-lg hover:bg-[#f59e0b] transition-all duration-200 font-semibold amber-glow flex items-center gap-2"
            >
              <Icon name="BookOpen" size={16} />
              Смотреть каталог
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="font-oswald text-sm tracking-widest uppercase border border-[rgba(255,255,255,0.15)] text-white px-8 py-3.5 clip-corner-lg hover:border-[#d97706] hover:text-[#d97706] transition-all duration-200 flex items-center gap-2"
            >
              <Icon name="FileText" size={16} />
              Запросить КП
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in animate-delay-600">
            {stats.map((s, i) => (
              <div key={i} className="relative">
                <div className="absolute top-0 left-0 w-4 h-px bg-[#d97706]" />
                <div className="absolute top-0 left-0 w-px h-4 bg-[#d97706]" />
                <div className="pt-3 pl-3">
                  <div className="font-oswald text-3xl font-bold text-white amber-text-glow">{s.value}</div>
                  <div className="font-ibm text-[11px] text-[#6b7280] uppercase tracking-wider mt-1">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="font-mono-ibm text-[10px] tracking-[0.3em] text-[#6b7280] uppercase">Прокрутить</div>
        <div className="w-px h-8 bg-gradient-to-b from-[#6b7280] to-transparent" />
      </div>
    </section>
  );
}