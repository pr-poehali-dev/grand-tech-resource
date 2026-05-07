import { useState } from 'react';
import Icon from '@/components/ui/icon';

type FormType = 'price' | 'contact';

export default function ContactForm() {
  const [formType, setFormType] = useState<FormType>('price');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    product: '',
    volume: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0b0d]" />
      <div className="absolute inset-0 texture-grid opacity-50" />

      {/* Amber glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d97706]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#d97706]" />
              <span className="font-mono-ibm text-[#d97706] text-[11px] tracking-[0.3em] uppercase">Связаться с нами</span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold text-white mb-6">
              ЗАПРОС<br /><span className="text-[#d97706]">ПРЕДЛОЖЕНИЯ</span>
            </h2>

            <p className="font-ibm text-[#6b7280] text-[14px] leading-relaxed mb-10 max-w-md">
              Оставьте заявку — наш менеджер свяжется с вами в течение 2 часов и подготовит
              индивидуальное коммерческое предложение с актуальными ценами и условиями поставки.
            </p>

            {/* Contact details */}
            <div className="space-y-5">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (800) 000-00-00', sub: 'Пн–Пт, 9:00–18:00' },
                { icon: 'Mail', label: 'Email', value: 'info@grandtechresurs.ru', sub: 'Ответим в течение дня' },
                { icon: 'MapPin', label: 'Офис', value: 'г. Москва, ул. Промышленная, 12', sub: 'По предварительной записи' },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-[rgba(217,119,6,0.1)] clip-corner mt-0.5">
                    <Icon name={c.icon} fallback="Phone" size={15} className="text-[#d97706]" />
                  </div>
                  <div>
                    <div className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide mb-0.5">{c.label}</div>
                    <div className="font-oswald text-[15px] text-white tracking-wide">{c.value}</div>
                    <div className="font-ibm text-[11px] text-[#6b7280] mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* INN etc */}
            <div className="mt-10 p-4 border-l-2 border-[#d97706]/30 pl-5">
              <div className="font-oswald text-[13px] text-[#9ca3af] tracking-wide mb-1">ООО «ГрандТехРесурс»</div>
              <div className="font-mono-ibm text-[11px] text-[#454b56] space-y-0.5">
                <div>ИНН: 7700000000</div>
                <div>ОГРН: 1000000000000</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="steel-card clip-corner-lg p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-[rgba(217,119,6,0.15)] clip-corner mb-5">
                  <Icon name="CheckCircle" size={28} className="text-[#d97706]" />
                </div>
                <h3 className="font-oswald text-2xl text-white mb-2">Заявка принята!</h3>
                <p className="font-ibm text-[#6b7280] text-[13px] max-w-xs leading-relaxed">
                  Наш менеджер свяжется с вами в течение 2 рабочих часов.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 font-oswald text-[12px] tracking-widest uppercase text-[#d97706] border border-[rgba(217,119,6,0.3)] px-5 py-2 hover:bg-[rgba(217,119,6,0.1)] transition-colors"
                >
                  Новый запрос
                </button>
              </div>
            ) : (
              <>
                {/* Form type toggle */}
                <div className="flex gap-2 mb-7">
                  <button
                    onClick={() => setFormType('price')}
                    className={`flex-1 font-oswald text-[12px] tracking-widest uppercase py-2.5 transition-all duration-200 ${
                      formType === 'price'
                        ? 'bg-[#d97706] text-[#0a0b0d]'
                        : 'border border-[rgba(255,255,255,0.08)] text-[#6b7280] hover:text-[#d97706]'
                    }`}
                  >
                    Запрос цены
                  </button>
                  <button
                    onClick={() => setFormType('contact')}
                    className={`flex-1 font-oswald text-[12px] tracking-widest uppercase py-2.5 transition-all duration-200 ${
                      formType === 'contact'
                        ? 'bg-[#d97706] text-[#0a0b0d]'
                        : 'border border-[rgba(255,255,255,0.08)] text-[#6b7280] hover:text-[#d97706]'
                    }`}
                  >
                    Написать нам
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Company & Name */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide block mb-1.5">Компания *</label>
                      <input
                        name="company"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="ООО «Название»"
                        className="w-full bg-[#0a0b0d] border border-[rgba(255,255,255,0.07)] text-[#e8eaed] placeholder:text-[#2a2d35] text-[13px] px-3 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm"
                      />
                    </div>
                    <div>
                      <label className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide block mb-1.5">Контактное лицо *</label>
                      <input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Имя и фамилия"
                        className="w-full bg-[#0a0b0d] border border-[rgba(255,255,255,0.07)] text-[#e8eaed] placeholder:text-[#2a2d35] text-[13px] px-3 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide block mb-1.5">Телефон *</label>
                      <input
                        name="phone"
                        required
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+7 (___) ___-__-__"
                        className="w-full bg-[#0a0b0d] border border-[rgba(255,255,255,0.07)] text-[#e8eaed] placeholder:text-[#2a2d35] text-[13px] px-3 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm"
                      />
                    </div>
                    <div>
                      <label className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide block mb-1.5">Email *</label>
                      <input
                        name="email"
                        required
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="email@company.ru"
                        className="w-full bg-[#0a0b0d] border border-[rgba(255,255,255,0.07)] text-[#e8eaed] placeholder:text-[#2a2d35] text-[13px] px-3 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm"
                      />
                    </div>
                  </div>

                  {/* Conditional fields */}
                  {formType === 'price' ? (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide block mb-1.5">Интересующий продукт</label>
                        <input
                          name="product"
                          value={form.product}
                          onChange={handleChange}
                          placeholder="Название / тип масла"
                          className="w-full bg-[#0a0b0d] border border-[rgba(255,255,255,0.07)] text-[#e8eaed] placeholder:text-[#2a2d35] text-[13px] px-3 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm"
                        />
                      </div>
                      <div>
                        <label className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide block mb-1.5">Объём (тонн/год)</label>
                        <select
                          name="volume"
                          value={form.volume}
                          onChange={handleChange}
                          className="w-full bg-[#0a0b0d] border border-[rgba(255,255,255,0.07)] text-[#e8eaed] text-[13px] px-3 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm"
                        >
                          <option value="">— Выберите —</option>
                          <option>до 5 тонн</option>
                          <option>5–20 тонн</option>
                          <option>20–100 тонн</option>
                          <option>более 100 тонн</option>
                        </select>
                      </div>
                    </div>
                  ) : null}

                  {/* Message */}
                  <div>
                    <label className="font-ibm text-[11px] text-[#454b56] uppercase tracking-wide block mb-1.5">
                      {formType === 'price' ? 'Дополнительные требования' : 'Сообщение *'}
                    </label>
                    <textarea
                      name="message"
                      required={formType === 'contact'}
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={formType === 'price' ? 'Укажите тип техники, условия эксплуатации...' : 'Ваш вопрос или предложение...'}
                      className="w-full bg-[#0a0b0d] border border-[rgba(255,255,255,0.07)] text-[#e8eaed] placeholder:text-[#2a2d35] text-[13px] px-3 py-2.5 outline-none focus:border-[#d97706] transition-colors font-ibm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full font-oswald text-[13px] tracking-widest uppercase bg-[#d97706] text-[#0a0b0d] py-3.5 clip-corner hover:bg-[#f59e0b] transition-colors duration-200 font-semibold flex items-center justify-center gap-2 amber-glow"
                  >
                    <Icon name="Send" size={14} />
                    {formType === 'price' ? 'Отправить запрос цены' : 'Отправить сообщение'}
                  </button>

                  <p className="font-ibm text-[10px] text-[#2a2d35] text-center leading-relaxed">
                    Отправляя форму, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
