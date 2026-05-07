import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    desc: 'Все материалы сертифицированы и соответствуют международным стандартам API, ACEA, ISO.',
  },
  {
    icon: 'Truck',
    title: 'Надёжные поставки',
    desc: 'Собственная логистика и складские запасы обеспечивают бесперебойные поставки в срок.',
  },
  {
    icon: 'Users',
    title: 'B2B снабжение',
    desc: 'Комплексное снабжение промышленных предприятий: от разовых поставок до долгосрочных контрактов.',
  },
  {
    icon: 'Wrench',
    title: 'Техническая поддержка',
    desc: 'Профессиональные рекомендации по подбору материалов для конкретного оборудования.',
  },
  {
    icon: 'BarChart3',
    title: 'Индивидуальные условия',
    desc: 'Гибкая ценовая политика и персональные условия для крупных корпоративных клиентов.',
  },
  {
    icon: 'Globe',
    title: 'Ведущие бренды',
    desc: 'Официальный дистрибьютор мировых производителей смазочных материалов.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0e1015]" />
      <div className="absolute inset-0 texture-steel" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#d97706] to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#d97706]" />
              <span className="font-mono-ibm text-[#d97706] text-[11px] tracking-[0.3em] uppercase">О компании</span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
              НАДЁЖНЫЙ ПАРТНЁР<br />
              <span className="text-[#d97706]">В ПРОМЫШЛЕННОСТИ</span>
            </h2>
            <div className="space-y-4">
              <p className="font-ibm text-[#9ca3af] leading-relaxed">
                ГрандТехРесурс — ведущий поставщик смазочных материалов для автомобильного транспорта
                и промышленных предприятий. Более 15 лет мы обеспечиваем надёжное снабжение B2B клиентов
                высококачественными расходными материалами.
              </p>
              <p className="font-ibm text-[#9ca3af] leading-relaxed">
                Наша специализация — подбор и поставка масел, смазок и технических жидкостей
                для грузового и легкового транспорта, строительной техники и промышленного оборудования.
                Высокая надёжность поставляемых материалов гарантирует работу вашей техники.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#d97706]/10 to-transparent rounded-sm blur-xl" />
            <div className="relative clip-corner-lg overflow-hidden border border-[rgba(255,255,255,0.07)]">
              <img
                src="https://cdn.poehali.dev/projects/f95b400b-6e56-46c5-9ed2-d0ebf9bd3cc6/bucket/79e31da9-bf71-4981-81cc-0a26ec4b2969.png"
                alt="Команда ГрандТехРесурс"
                className="w-full h-72 object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015]/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="font-mono-ibm text-[10px] text-[#d97706] tracking-[0.2em] uppercase">
                  Профессиональная команда · 15+ лет опыта
                </div>
              </div>
            </div>
            {/* Corner accents */}
            <div className="absolute top-0 right-0 w-6 h-px bg-[#d97706]" />
            <div className="absolute top-0 right-0 w-px h-6 bg-[#d97706]" />
            <div className="absolute bottom-0 left-0 w-6 h-px bg-[#d97706]" />
            <div className="absolute bottom-0 left-0 w-px h-6 bg-[#d97706]" />
          </div>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group relative steel-card p-6 clip-corner hover:border-[rgba(217,119,6,0.25)] transition-all duration-300"
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-4 h-4">
                <div className="absolute top-0 right-0 w-4 h-px bg-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-px h-4 bg-[#d97706] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="w-10 h-10 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 bg-[#d97706]/10 clip-corner" />
                <Icon name={adv.icon} fallback="Shield" size={18} className="text-[#d97706] relative" />
              </div>

              <h3 className="font-oswald text-lg text-white mb-2 tracking-wide group-hover:text-[#d97706] transition-colors">
                {adv.title}
              </h3>
              <p className="font-ibm text-[13px] text-[#6b7280] leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}