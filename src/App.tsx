import { ArtDecoSunburst } from "@/components/ArtDecoSunburst";
import { ArtDecoDivider } from "@/components/ArtDecoDivider";
import { ServiceCard } from "@/components/ServiceCard";
import { CTAForm } from "@/components/CTAForm";

function App() {
  return (
    <main className="min-h-screen bg-background dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <ArtDecoSunburst />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-primary" />
              <div className="w-3 h-3 rotate-45 border border-primary" />
              <div className="w-16 h-px bg-primary" />
            </div>
          </div>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">С 2014 года в Крыму</p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight">
            <span className="text-gold-gradient">Гарант</span> Крым
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
            Надёжное агентство недвижимости и юридической защиты. Покупка, продажа, аренда и полное правовое сопровождение сделок в Крыму.
          </p>

          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-primary" />
              <div className="w-2 h-2 rotate-45 bg-primary" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 5v14M5 12l7 7 7-7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наш подход</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-tight text-balance">
                Ваш интерес — под надёжной защитой
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                Мы работаем на полуострове с 2014 года и знаем специфику крымского рынка недвижимости изнутри. Каждая сделка сопровождается опытными юристами и риелторами — от первичной консультации до получения ключей.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Жилая и коммерческая недвижимость, земельные участки, новостройки и вторичный рынок — мы подберём объект под ваши цели и защитим сделку на каждом этапе.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Наши услуги</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Полный спектр услуг</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Купля-продажа недвижимости"
              description="Подбор объектов, проверка юридической чистоты, сопровождение сделки под ключ. Жильё, коммерция, земля — весь рынок Крыма."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              }
            />
            <ServiceCard
              title="Аренда и управление"
              description="Долгосрочная и посуточная аренда, управление объектами. Помогаем собственникам получать стабильный доход без лишних хлопот."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                </svg>
              }
            />
            <ServiceCard
              title="Юридическое сопровождение"
              description="Регистрация прав, оформление наследства, разрешение споров. Защищаем ваши интересы в любых правовых вопросах с недвижимостью."
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
                  <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ArtDecoDivider variant="stepped" />
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Ваш выбор</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground text-balance">Решать вам</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Самостоятельно */}
            <div className="relative p-8 border border-border/40 bg-card/30">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t border-l border-border/40" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t border-r border-border/40" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b border-l border-border/40" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b border-r border-border/40" />
              <h3 className="font-serif text-2xl text-muted-foreground mb-8 text-center">Действовать самостоятельно</h3>
              <ul className="space-y-5">
                {[
                  "Потратить много времени для изучения законодательной базы и разобраться в документах",
                  "Самому выработать стратегию и определить последовательность действий",
                  "Неверно поданные заявления и обращения могут привести к отрицательному результату",
                  "Риск заключить договор с неквалифицированным исполнителем или фирмой-однодневкой",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-muted-foreground/30 flex items-center justify-center">
                      <svg viewBox="0 0 12 12" className="w-3 h-3 text-muted-foreground/50" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M2 2l8 8M10 2l-8 8" />
                      </svg>
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* К юристу */}
            <div className="relative p-8 border border-primary/40 bg-card/50">
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
              <h3 className="font-serif text-2xl text-primary mb-8 text-center">Обратиться к земельному юристу</h3>
              <ul className="space-y-5">
                {[
                  "Юрист отлично разбирается в земельном законодательстве и знает как его применить",
                  "Юрист предложит вам наиболее оптимальный вариант решения вашего вопроса",
                  "Юрист имеет практику по схожей ситуации, знает какие документы и куда нужно подать",
                  "Юрист сотрудничает с проверенными кадастровыми инженерами и проектировщиками",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-primary/60 flex items-center justify-center">
                      <svg viewBox="0 0 12 12" className="w-3 h-3 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M2 6l3 3 5-5" />
                      </svg>
                    </span>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ArtDecoDivider variant="fan" />

          <div className="relative text-center py-12">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-primary/20 font-serif text-9xl leading-none">
              &ldquo;
            </div>

            <blockquote className="relative z-10">
              <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed italic mb-8">
                Продавали квартиру через Гарант Крым — всё прошло быстро и без единой проблемы. Юристы проверили каждый документ, сделка прошла чисто. Рекомендую всем, кто хочет надёжности.
              </p>
              <footer className="text-muted-foreground">
                <span className="text-primary">—</span> Клиент агентства,{" "}
                <span className="text-primary">Симферополь</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <ArtDecoSunburst />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <ArtDecoDivider variant="chevron" />
            <p className="text-primary tracking-[0.2em] uppercase text-sm mb-4">Бесплатная консультация</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">Оставьте заявку</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Наш специалист свяжется с вами в течение 30 минут, ответит на все вопросы и подберёт подходящий вариант.
            </p>
          </div>

          <div className="relative p-8 md:p-12 border border-border">
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary" />

            <CTAForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-primary" />
              <span className="font-serif text-xl text-foreground">Гарант Крым</span>
              <div className="w-12 h-px bg-primary" />
            </div>
            <p className="text-center text-sm text-muted-foreground max-w-md">
              Агентство недвижимости и юридической защиты в Крыму
            </p>
            <p className="text-xs text-muted-foreground/60">
              © 2024 Гарант Крым. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;