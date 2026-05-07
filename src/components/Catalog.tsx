import { useState } from 'react';
import Icon from '@/components/ui/icon';

type VehicleType = 'all' | 'truck' | 'passenger' | 'industrial';
type Category = 'all' | 'engine' | 'transmission' | 'hydraulic' | 'grease' | 'coolant';

interface Product {
  id: number;
  name: string;
  brand: string;
  vehicleTypes: VehicleType[];
  category: Category;
  viscosity: string;
  spec: string;
  volume: string;
  badges: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Моторное масло Long Life FE',
    brand: 'TOTAL',
    vehicleTypes: ['truck'],
    category: 'engine',
    viscosity: '5W-30',
    spec: 'API CK-4 / ACEA E6',
    volume: '20 л / 200 л',
    badges: ['Синтетика', 'Дизель'],
  },
  {
    id: 2,
    name: 'Quartz 9000 Future',
    brand: 'TOTAL',
    vehicleTypes: ['passenger'],
    category: 'engine',
    viscosity: '5W-40',
    spec: 'API SN / ACEA A3/B4',
    volume: '1 л / 4 л / 20 л',
    badges: ['Синтетика', 'Бензин/Дизель'],
  },
  {
    id: 3,
    name: 'Трансмиссионное масло HD',
    brand: 'SHELL',
    vehicleTypes: ['truck', 'industrial'],
    category: 'transmission',
    viscosity: '75W-90',
    spec: 'API GL-5 / MAN 341 Type E2',
    volume: '20 л / 200 л',
    badges: ['Полусинтетика'],
  },
  {
    id: 4,
    name: 'Hydraulic S2 M 46',
    brand: 'SHELL',
    vehicleTypes: ['industrial'],
    category: 'hydraulic',
    viscosity: 'ISO VG 46',
    spec: 'DIN 51524-2 HLP',
    volume: '20 л / 200 л',
    badges: ['Минеральное', 'Промышленность'],
  },
  {
    id: 5,
    name: 'Gadus S3 V220C',
    brand: 'SHELL',
    vehicleTypes: ['truck', 'industrial'],
    category: 'grease',
    viscosity: 'NLGI 2',
    spec: 'DIN 51826 KP2K',
    volume: '180 кг / 400 г',
    badges: ['Смазка', 'Высокотемп.'],
  },
  {
    id: 6,
    name: 'Coolelf Auto Supra',
    brand: 'TOTAL',
    vehicleTypes: ['passenger', 'truck'],
    category: 'coolant',
    viscosity: '—',
    spec: 'ASTM D3306 / BS 6580',
    volume: '1 л / 5 л / 20 л',
    badges: ['Антифриз', 'G12+'],
  },
  {
    id: 7,
    name: 'Руriа EP 320',
    brand: 'MOBIL',
    vehicleTypes: ['industrial'],
    category: 'transmission',
    viscosity: 'ISO VG 320',
    spec: 'AGMA EP 6',
    volume: '20 л / 200 л',
    badges: ['Редукторное', 'EP-присадки'],
  },
  {
    id: 8,
    name: 'Delvac MX Extra 10W-40',
    brand: 'MOBIL',
    vehicleTypes: ['truck'],
    category: 'engine',
    viscosity: '10W-40',
    spec: 'API CI-4 / ACEA E7',
    volume: '20 л / 200 л',
    badges: ['Полусинтетика', 'Дизель'],
  },
  {
    id: 9,
    name: 'ATF Dexron VI',
    brand: 'TOTAL',
    vehicleTypes: ['passenger'],
    category: 'transmission',
    viscosity: 'ATF',
    spec: 'GM DEXRON VI',
    volume: '1 л / 4 л / 20 л',
    badges: ['АКПП', 'Синтетика'],
  },
];

const vehicleFilters: { key: VehicleType; label: string; icon: string }[] = [
  { key: 'all', label: 'Все', icon: 'LayoutGrid' },
  { key: 'truck', label: 'Грузовые', icon: 'Truck' },
  { key: 'passenger', label: 'Легковые', icon: 'Car' },
  { key: 'industrial', label: 'Промышленность', icon: 'Factory' },
];

const categoryFilters: { key: Category; label: string }[] = [
  { key: 'all', label: 'Все виды' },
  { key: 'engine', label: 'Моторные масла' },
  { key: 'transmission', label: 'Трансмиссионные' },
  { key: 'hydraulic', label: 'Гидравлические' },
  { key: 'grease', label: 'Смазки' },
  { key: 'coolant', label: 'Охлаждающие' },
];

export default function Catalog() {
  const [vehicle, setVehicle] = useState<VehicleType>('all');
  const [category, setCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');

  const filtered = products.filter((p) => {
    const matchVehicle = vehicle === 'all' || p.vehicleTypes.includes(vehicle);
    const matchCategory = category === 'all' || p.category === category;
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase());
    return matchVehicle && matchCategory && matchSearch;
  });

  return (
    <section id="catalog" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0b0d]" />
      <div className="absolute inset-0 texture-dots opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#d97706]" />
          <span className="font-mono-ibm text-[#d97706] text-[11px] tracking-[0.3em] uppercase">Каталог продукции</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white">
            СМАЗОЧНЫЕ<br /><span className="text-[#d97706]">МАТЕРИАЛЫ</span>
          </h2>
          {/* Search */}
          <div className="relative md:w-64">
            <Icon name="Search" size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]" />
            <input
              type="text"
              placeholder="Поиск по наименованию..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a1d24] border border-[rgba(255,255,255,0.08)] text-[#e8eaed] placeholder:text-[#454b56] text-[13px] pl-9 pr-4 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm"
            />
          </div>
        </div>

        {/* Vehicle filter tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {vehicleFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setVehicle(f.key)}
              className={`flex items-center gap-2 font-oswald text-[12px] tracking-widest uppercase px-4 py-2 transition-all duration-200 clip-corner ${
                vehicle === f.key
                  ? 'bg-[#d97706] text-[#0a0b0d]'
                  : 'border border-[rgba(255,255,255,0.1)] text-[#9ca3af] hover:border-[#d97706] hover:text-[#d97706]'
              }`}
            >
              <Icon name={f.icon} fallback="LayoutGrid" size={13} />
              {f.label}
            </button>
          ))}
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categoryFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setCategory(f.key)}
              className={`font-ibm text-[12px] px-3 py-1.5 transition-all duration-200 ${
                category === f.key
                  ? 'bg-[rgba(217,119,6,0.2)] text-[#d97706] border border-[#d97706]/40'
                  : 'text-[#6b7280] border border-[rgba(255,255,255,0.07)] hover:text-[#9ca3af] hover:border-[rgba(255,255,255,0.15)]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Products grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#454b56] font-ibm">
            <Icon name="SearchX" size={40} className="mx-auto mb-3 opacity-40" />
            <p>Ничего не найдено. Попробуйте изменить фильтры.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group relative steel-card clip-corner hover:border-[rgba(217,119,6,0.3)] transition-all duration-300 p-5"
              >
                {/* Brand stripe */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#d97706]/20 group-hover:bg-[#d97706]/50 transition-colors" />

                <div className="pl-3">
                  {/* Brand & badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono-ibm text-[10px] text-[#d97706] tracking-[0.2em] uppercase">{p.brand}</span>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {p.badges.slice(0, 2).map((b) => (
                        <span key={b} className="font-mono-ibm text-[9px] text-[#6b7280] border border-[rgba(255,255,255,0.07)] px-1.5 py-0.5">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-oswald text-lg text-white group-hover:text-[#d97706] transition-colors leading-tight mb-4">
                    {p.name}
                  </h3>

                  {/* Specs table */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#454b56] font-ibm">Вязкость</span>
                      <span className="font-mono-ibm text-[#9ca3af]">{p.viscosity}</span>
                    </div>
                    <div className="h-px bg-[rgba(255,255,255,0.04)]" />
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#454b56] font-ibm">Спецификация</span>
                      <span className="font-mono-ibm text-[#9ca3af] text-right max-w-[160px]">{p.spec}</span>
                    </div>
                    <div className="h-px bg-[rgba(255,255,255,0.04)]" />
                    <div className="flex items-center justify-between text-[12px]">
                      <span className="text-[#454b56] font-ibm">Фасовка</span>
                      <span className="font-mono-ibm text-[#9ca3af]">{p.volume}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full font-oswald text-[11px] tracking-widest uppercase text-[#d97706] border border-[rgba(217,119,6,0.2)] py-2 hover:bg-[#d97706] hover:text-[#0a0b0d] transition-all duration-200 flex items-center justify-center gap-2">
                    <Icon name="FileText" size={12} />
                    Запросить цену
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Count */}
        <div className="mt-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" />
          <span className="font-mono-ibm text-[11px] text-[#454b56] tracking-wide">
            Показано {filtered.length} из {products.length} позиций
          </span>
          <div className="h-px flex-1 bg-[rgba(255,255,255,0.05)]" />
        </div>

        {/* Note */}
        <div className="mt-6 p-4 border border-[rgba(217,119,6,0.15)] bg-[rgba(217,119,6,0.04)] flex gap-3 items-start">
          <Icon name="Info" size={14} className="text-[#d97706] mt-0.5 flex-shrink-0" />
          <p className="font-ibm text-[12px] text-[#6b7280] leading-relaxed">
            Каталог представлен в сокращённом виде. Для получения полного прайс-листа с более чем 1200 позициями
            и индивидуальных условий — отправьте запрос через форму ниже.
          </p>
        </div>
      </div>
    </section>
  );
}
