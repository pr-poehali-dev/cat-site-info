import Icon from "@/components/ui/icon";

interface ArticlePageProps {
  onBack: () => void;
}

const ArticleCats = ({ onBack }: ArticlePageProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-sm"
          >
            <Icon name="ArrowLeft" size={16} />
            Назад
          </button>
          <span className="text-border">|</span>
          <span className="font-display text-lg">Мир кошек</span>
        </div>
      </header>

      <main className="pt-16">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-xs text-muted-foreground">5 июня 2026</span>
              <span className="font-body text-xs tracking-widest uppercase border border-border px-2 py-0.5">Здоровье</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
              Как правильно кормить кошку
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Рацион кошки влияет на её здоровье, настроение и продолжительность жизни. Разбираемся в нюансах питания.
            </p>
          </div>

          <div className="w-full h-px bg-border mb-12" />

          <div className="font-body text-sm leading-[1.9] space-y-8 text-foreground/90">

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Кошка — облигатный хищник</h2>
              <p>
                В отличие от собак, кошки являются облигатными (строгими) хищниками. Это означает, что их организм не способен синтезировать ряд необходимых питательных веществ самостоятельно — они должны поступать исключительно с животным белком. Таурин, арахидоновая кислота, витамин A в готовой форме — всё это кошка получает только из мяса.
              </p>
              <p className="mt-4">
                Именно поэтому вегетарианская диета для кошек недопустима и опасна. Любой рацион должен строиться на основе качественного мяса птицы, говядины или рыбы.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Сухой корм, влажный или натуральное питание?</h2>
              <p>
                Это один из самых частых вопросов среди владельцев кошек. Каждый вариант имеет свои плюсы и минусы.
              </p>
              <div className="mt-6 space-y-4">
                <div className="border-l-2 border-foreground/20 pl-5">
                  <p className="font-medium mb-1">Сухой корм</p>
                  <p className="text-muted-foreground">Удобен, долго хранится, помогает поддерживать здоровье зубов. Важно выбирать корм премиум-класса с высоким содержанием мяса (не менее 30%) и следить за тем, чтобы кошка пила достаточно воды.</p>
                </div>
                <div className="border-l-2 border-foreground/20 pl-5">
                  <p className="font-medium mb-1">Влажный корм</p>
                  <p className="text-muted-foreground">Содержит 70–80% влаги, что особенно полезно для мочевыделительной системы. Хорошо подходит пожилым кошкам и тем, кто мало пьёт. Открытую упаковку нельзя хранить более 24 часов.</p>
                </div>
                <div className="border-l-2 border-foreground/20 pl-5">
                  <p className="font-medium mb-1">Натуральное питание</p>
                  <p className="text-muted-foreground">Требует знаний о балансе питательных веществ. При правильном подходе — один из лучших вариантов. Необходимо включать субпродукты (печень, сердце), мышечное мясо и добавлять витаминно-минеральные комплексы.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Режим и порции</h2>
              <p>
                Взрослую кошку рекомендуется кормить 2 раза в день — утром и вечером. Котята до 6 месяцев нуждаются в 3–4 приёмах пищи. Пожилым кошкам (от 7 лет) также лучше разделить суточный рацион на несколько небольших порций.
              </p>
              <p className="mt-4">
                Количество корма рассчитывается исходя из веса животного и указывается на упаковке. Ориентируйтесь на состояние тела: вы должны чувствовать рёбра, но не видеть их. При лишнем весе уменьшите порцию на 10–15%.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Что нельзя давать кошкам</h2>
              <p>Некоторые продукты опасны для кошек, даже если они сами к ним тянутся:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="text-foreground mt-0.5">—</span> Лук и чеснок (разрушают эритроциты)</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">—</span> Виноград и изюм (токсичны для почек)</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">—</span> Шоколад и кофе (содержат теобромин)</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">—</span> Молоко (большинство взрослых кошек лактозонетолерантны)</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">—</span> Сырая рыба в больших количествах (разрушает витамин B1)</li>
                <li className="flex gap-3"><span className="text-foreground mt-0.5">—</span> Трубчатые кости птицы (раскалываются и могут поранить)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Вода — основа здоровья</h2>
              <p>
                Кошки исторически получали воду из пищи (добычи), поэтому их инстинкт пить из миски развит слабо. Чтобы стимулировать потребление воды, поставьте несколько мисок в разных местах, используйте фонтанчик для воды или добавляйте влажный корм в рацион. Недостаток воды — главная причина мочекаменной болезни у кошек.
              </p>
            </section>

          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <button
              onClick={onBack}
              className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              Вернуться к статьям
            </button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default ArticleCats;
