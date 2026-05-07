import Icon from '@/components/ui/icon';

const advantages = [
  {
    icon: 'Zap',
    title: 'Газопоршневые установки',
    desc: 'Специализированные масла для ГПУ Jenbacher, Caterpillar, Wärtsilä, MAN — подбор под конкретный тип двигателя.',
  },
  {
    icon: 'Truck',
    title: 'Коммерческий транспорт',
    desc: 'Полный ассортимент для грузовых автомобилей, автобусов и спецтехники ведущих мировых брендов.',
  },
  {
    icon: 'Car',
    title: 'Легковые автомобили',
    desc: 'Моторные, трансмиссионные масла и технические жидкости для всего модельного ряда.',
  },
  {
    icon: 'Factory',
    title: 'Промышленное снабжение',
    desc: 'Комплексное B2B снабжение предприятий: от разовых поставок до долгосрочных контрактов.',
  },
  {
    icon: 'Shield',
    title: 'Гарантия качества',
    desc: 'Все материалы сертифицированы и соответствуют международным стандартам API, ACEA, ISO.',
  },
  {
    icon: 'BarChart3',
    title: 'Индивидуальные условия',
    desc: 'Гибкая ценовая политика и персональные условия для крупных корпоративных клиентов.',
  },
];

const segments = [
  { label: 'ГПУ', sub: 'Газопоршневые установки', icon: 'Zap' },
  { label: 'Коммерч. транспорт', sub: 'Грузовые · Автобусы · Спецтехника', icon: 'Truck' },
  { label: 'Легковые авто', sub: 'Бензин · Дизель · Гибрид', icon: 'Car' },
  { label: 'Промышленность', sub: 'B2B снабжение предприятий', icon: 'Factory' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0e1015]" />
      <div className="absolute inset-0 texture-steel" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#d97706] to-transparent opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Top: text */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#d97706]" />
              <span className="font-mono-ibm text-[#d97706] text-[11px] tracking-[0.3em] uppercase">О компании</span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
              НАДЁЖНЫЙ ПАРТНЁР<br />
              <span className="text-[#d97706]">В ПРОМЫШЛЕННОСТИ</span>
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-ibm text-[#9ca3af] leading-relaxed">
                ГрандТехРесурс — специализированный поставщик смазочных материалов для газопоршневых
                установок, коммерческого транспорта и легковых автомобилей. Более 15 лет обеспечиваем
                надёжное снабжение B2B клиентов высококачественными расходными материалами.
              </p>
              <p className="font-ibm text-[#9ca3af] leading-relaxed">
                Ключевая специализация — подбор масел для ГПУ: Jenbacher, Caterpillar, Wärtsilä,
                MAN Energy Solutions. Высокая надёжность поставляемых материалов гарантирует
                бесперебойную работу оборудования и снижение эксплуатационных затрат.
              </p>
            </div>
          </div>

          {/* Team photo + segment chips */}
          <div className="flex flex-col gap-4 lg:mt-4">
            {/* Team image */}
            <div className="relative clip-corner-lg overflow-hidden border border-[rgba(255,255,255,0.07)]">
              <img
                src="https://cdn.poehali.dev/projects/f95b400b-6e56-46c5-9ed2-d0ebf9bd3cc6/files/04fc748c-93ad-4f61-b2da-803337663fce.jpg"
                alt="Команда специалистов ГрандТехРесурс"
                className="w-full h-52 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1015]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="font-mono-ibm text-[10px] text-[#d97706] tracking-[0.2em] uppercase">Профессиональная команда</span>
                <span className="font-mono-ibm text-[10px] text-[#6b7280]">15+ лет опыта</span>
              </div>
              <div className="absolute top-0 right-0 w-5 h-px bg-[#d97706]" />
              <div className="absolute top-0 right-0 w-px h-5 bg-[#d97706]" />
            </div>

            {/* Segment chips */}
            <div className="grid grid-cols-2 gap-2">
              {segments.map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]">
                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center bg-[rgba(217,119,6,0.1)] clip-corner">
                    <Icon name={s.icon} fallback="Zap" size={13} className="text-[#d97706]" />
                  </div>
                  <div>
                    <div className="font-oswald text-[12px] text-white tracking-wide leading-tight">{s.label}</div>
                    <div className="font-ibm text-[10px] text-[#454b56] leading-tight mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Oil visual banner */}
        <div className="relative mb-6 clip-corner-lg overflow-hidden border border-[rgba(255,255,255,0.07)] h-40">
          <img
            src="https://cdn.poehali.dev/projects/f95b400b-6e56-46c5-9ed2-d0ebf9bd3cc6/files/7092b6e1-3aea-4a3d-8875-14c4b31cd1fe.jpg"
            alt="Смазочные материалы высокого качества"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1015]/90 via-[#0e1015]/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <div className="font-mono-ibm text-[10px] text-[#d97706] tracking-[0.3em] uppercase mb-1">Наши преимущества</div>
              <div className="font-oswald text-2xl text-white font-bold tracking-wide">
                КАЧЕСТВО, ПОДТВЕРЖДЁННОЕ<br />
                <span className="text-[#d97706]">ПРАКТИКОЙ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="group relative steel-card p-6 clip-corner hover:border-[rgba(217,119,6,0.25)] transition-all duration-300"
            >
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