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

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-6">Более 15 лет на рынке</p>

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

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Регистрация и кадастр",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
                    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    <path d="M9 12h6M9 16h4" />
                  </svg>
                ),
                items: [
                  "Регистрация права на квартиру",
                  "Регистрация права на частный дом",
                  "Регистрация права на земельный участок",
                  "Постановка объектов на кадастровый учёт",
                  "Приватизация и регистрация квартир",
                  "Присвоение адреса объекта недвижимости",
                  "Подготовка технических планов зданий и помещений",
                  "Подготовка технических планов для аренды по частям",
                  "Гаражная и дачная амнистия от 100 000 руб.",
                  "Перевод садового дома в статус жилого",
                ],
              },
              {
                title: "Геодезия и межевание",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
                    <path d="M3 3l18 18M3 21L21 3" />
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                  </svg>
                ),
                items: [
                  "Топографическая съёмка участков",
                  "Вынос границ участка в натуру",
                  "Межевание участков (план на диске и бумаге)",
                  "Межевой план для объединения участков",
                  "Уточнение границ, площади и местоположения",
                  "Раздел земельного участка по частям",
                  "Прирезка земельных участков",
                  "Разбивка осей здания и геодезическая основа (ГРО)",
                  "Геодезические съёмки в строительстве",
                  "Инженерно-геодезические изыскания для строительства",
                  "Обмерные работы при обследовании зданий",
                  "Восстановление утраченных межевых знаков",
                  "Заключение кадастрового инженера для исправления ошибок",
                ],
              },
              {
                title: "Юридические услуги",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 text-primary">
                    <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
                items: [
                  "Регистрация договора купли-продажи",
                  "Регистрация договора дарения",
                  "Регистрация договора аренды",
                  "Регистрация права на наследство",
                  "Юридическое представительство в суде",
                  "Раздел недвижимости в суде и досудебный порядок",
                  "Независимая кадастровая оценка участков",
                  "Независимая оценка недвижимости для суда",
                  "Проверка участка перед покупкой",
                  "Изменение вида разрешённого использования участка",
                  "Внесение изменений в Правила застройки и землепользования",
                  "МинЖил политики и ГосСтройнадзор",
                ],
              },
            ].map((category) => (
              <div key={category.title} className="relative border border-border/60 bg-background p-7">
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
                <div className="mb-5">{category.icon}</div>
                <h3 className="font-serif text-xl text-foreground mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1.5 w-1.5 h-1.5 rotate-45 bg-primary/70" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional services */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Проектирование и согласование",
                items: [
                  "Получение техусловий для подключения газа, водоснабжения и водоотведения",
                  "Разработка проектов строительства загородных домов",
                  "Разработка архитектурных проектов коммерческих объектов",
                  "Разработка проекта при согласовании перепланировки помещений",
                  "Согласование перепланировки — проект, экспликация, техплан",
                  "Составление поэтажных планов на основании контура здания",
                ],
              },
              {
                title: "Экология и природопользование",
                items: [
                  "Инженерно-экологические и гидрометеорологические изыскания",
                  "Разработка ОВОС, ПМООС, ПДВ, НДС, ПЛАРН",
                  "Разработка проекта санитарно-защитной зоны (СЗЗ)",
                  "Инвентаризация источников выбросов и паспортизация отходов",
                  "Постановка на учёт объектов НВОС, разработка ПНООЛР",
                  "Комплексное экологическое сопровождение предприятия",
                ],
              },
            ].map((block) => (
              <div key={block.title} className="border border-border/40 bg-card/20 p-7">
                <h3 className="font-serif text-lg text-primary mb-5">{block.title}</h3>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="shrink-0 mt-1.5 w-1.5 h-1.5 rotate-45 bg-primary/70" />
                      <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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