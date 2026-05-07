import Icon from '@/components/ui/icon';

const clients = [
  { name: 'КАМАЗ-Лизинг', industry: 'Грузовой транспорт', years: '8 лет', volume: '500+ т/год' },
  { name: 'СибирьАгро', industry: 'Сельхозтехника', years: '5 лет', volume: '120+ т/год' },
  { name: 'УралМеталлургСтрой', industry: 'Металлургия', years: '10 лет', volume: '800+ т/год' },
  { name: 'ТрансЛогистик', industry: 'Транспортная компания', years: '6 лет', volume: '300+ т/год' },
  { name: 'ЕвроАвтоПарк', industry: 'Автотранспорт', years: '4 года', volume: '200+ т/год' },
  { name: 'РегионСтройГрупп', industry: 'Строительная техника', years: '7 лет', volume: '250+ т/год' },
  { name: 'ГорнякМаш', industry: 'Горнодобывающая', years: '9 лет', volume: '1100+ т/год' },
  { name: 'АгроИнвест', industry: 'Агропромышленность', years: '3 года', volume: '90+ т/год' },
];

const testimonials = [
  {
    text: 'Сотрудничаем уже более 8 лет. ГрандТехРесурс — это надёжность поставок и качественная техническая поддержка. Рекомендуем как проверенного партнёра.',
    author: 'Алексей Воронов',
    position: 'Директор по логистике, КАМАЗ-Лизинг',
  },
  {
    text: 'Благодаря правильно подобранным смазочным материалам значительно снизили расходы на обслуживание горнодобывающего оборудования. Профессиональный подход к каждому запросу.',
    author: 'Сергей Михайлов',
    position: 'Главный инженер, ГорнякМаш',
  },
  {
    text: 'Оперативная поставка в любые объёмы, конкурентные цены, всегда в наличии нужные позиции. Работаем с ГрандТехРесурс как с основным поставщиком ГСМ.',
    author: 'Марина Соколова',
    position: 'Начальник снабжения, УралМеталлургСтрой',
  },
];

export default function References() {
  return (
    <section id="references" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0e1015]" />
      <div className="absolute inset-0 texture-steel" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d97706] to-transparent opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#d97706]" />
          <span className="font-mono-ibm text-[#d97706] text-[11px] tracking-[0.3em] uppercase">Референц-лист</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white">
            НАШИ<br /><span className="text-[#d97706]">КЛИЕНТЫ</span>
          </h2>
          <p className="font-ibm text-[#6b7280] text-[14px] max-w-sm leading-relaxed">
            Долгосрочные партнёрские отношения с ведущими предприятиями различных отраслей промышленности.
          </p>
        </div>

        {/* Clients grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
          {clients.map((c, i) => (
            <div
              key={i}
              className="group relative steel-card p-4 clip-corner hover:border-[rgba(217,119,6,0.2)] transition-all duration-300"
            >
              {/* Number */}
              <div className="font-mono-ibm text-[10px] text-[#d97706]/40 mb-2 tracking-wide">
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="font-oswald text-[15px] text-white group-hover:text-[#d97706] transition-colors leading-tight mb-2">
                {c.name}
              </div>

              <div className="font-ibm text-[11px] text-[#454b56] mb-3 leading-tight">{c.industry}</div>

              <div className="flex gap-3">
                <div>
                  <div className="font-mono-ibm text-[10px] text-[#d97706] block">{c.years}</div>
                  <div className="font-ibm text-[9px] text-[#454b56] uppercase tracking-wide">сотрудничество</div>
                </div>
                <div className="w-px bg-[rgba(255,255,255,0.05)]" />
                <div>
                  <div className="font-mono-ibm text-[10px] text-[#9ca3af] block">{c.volume}</div>
                  <div className="font-ibm text-[9px] text-[#454b56] uppercase tracking-wide">поставки</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[rgba(255,255,255,0.15)]" />
            <span className="font-mono-ibm text-[#6b7280] text-[11px] tracking-[0.3em] uppercase">Отзывы партнёров</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="steel-card p-6 clip-corner relative">
                <div className="absolute top-4 right-5">
                  <Icon name="Quote" size={20} className="text-[#d97706]/20" />
                </div>
                <div className="font-ibm text-[13px] text-[#9ca3af] leading-relaxed mb-5 italic">
                  "{t.text}"
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-4">
                  <div className="font-oswald text-[13px] text-white tracking-wide">{t.author}</div>
                  <div className="font-ibm text-[11px] text-[#454b56] mt-0.5">{t.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
