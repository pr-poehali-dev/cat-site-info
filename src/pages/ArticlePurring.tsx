import Icon from "@/components/ui/icon";

interface ArticlePageProps {
  onBack: () => void;
}

const ArticlePurring = ({ onBack }: ArticlePageProps) => {
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
              <span className="font-body text-xs text-muted-foreground">15 мая 2026</span>
              <span className="font-body text-xs tracking-widest uppercase border border-border px-2 py-0.5">Поведение</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
              Почему кошка мурлычет
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Мурлыканье — не просто знак удовольствия. Иногда кошки мурлычут от стресса или боли. Учимся различать сигналы.
            </p>
          </div>

          <div className="w-full h-px bg-border mb-12" />

          <div className="font-body text-sm leading-[1.9] space-y-8 text-foreground/90">

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Как рождается мурлыканье</h2>
              <p>
                Мурлыканье — уникальная особенность кошачьих. Оно возникает за счёт быстрых сокращений мышц гортани (25–150 раз в секунду), которые ритмично расширяют и сужают голосовую щель. В результате при каждом вдохе и выдохе воздух вибрирует, создавая характерный звук.
              </p>
              <p className="mt-4">
                Интересно, что большие кошки — львы и тигры — не умеют мурлыкать непрерывно. Они издают похожий звук только на выдохе. Зато домашняя кошка мурлычет как на вдохе, так и на выдохе, не прерываясь.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Удовольствие и комфорт</h2>
              <p>
                Самая известная причина мурлыканья — хорошее самочувствие. Кошка мурлычет, когда её гладят, когда она удобно устроилась на любимом месте, во время кормления или в предвкушении чего-то приятного.
              </p>
              <p className="mt-4">
                Котята начинают мурлыкать уже на 2-й день жизни — это способ сообщить маме, что им хорошо и они сыты. Мать мурлычет в ответ, успокаивая потомство. Эта связь сохраняется на всю жизнь.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Стресс, боль и тревога</h2>
              <p>
                Многие владельцы удивляются, узнав, что кошки мурлычут не только от удовольствия. Тихое, напряжённое мурлыканье может сигнализировать о стрессе, страхе или боли. Кошки мурлычут у ветеринара, во время родов, после травмы и даже в момент умирания.
              </p>
              <p className="mt-4">
                Учёные предполагают, что в таких ситуациях мурлыканье выполняет успокаивающую функцию — своеобразное самоуспокоение. Вибрации частотой 25–50 Гц, которые возникают при мурлыканье, стимулируют выработку эндорфинов и могут ускорять заживление костей и тканей.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">«Просящее» мурлыканье</h2>
              <p>
                Исследователи из Университета Сассекса выделили особый тип мурлыканья — «требовательное» или «просящее». В него вплетён высокочастотный звук, похожий на детский плач. Именно его кошки используют, когда хотят есть или добиться внимания хозяина.
              </p>
              <p className="mt-4">
                Люди инстинктивно реагируют на этот звук острее, чем на обычное мурлыканье — он воспринимается как более неотложный и трудно игнорируемый. Ваша кошка, скорее всего, давно это поняла.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Мурлыканье и здоровье человека</h2>
              <p>
                Несколько исследований показали, что общение с мурлычащей кошкой снижает уровень кортизола (гормона стресса) и артериальное давление. По данным одного из исследований, владельцы кошек на 40% реже умирают от сердечного приступа, чем те, у кого кошек нет.
              </p>
              <p className="mt-4">
                Вибрации в диапазоне 20–140 Гц, которые производит кошка при мурлыканье, совпадают с частотами, используемыми в физиотерапии для стимуляции заживления тканей. Возможно, именно поэтому кошки так часто ложатся на больные места хозяина.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Как понять, что означает мурлыканье</h2>
              <p>Обращайте внимание на контекст и язык тела:</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">Громкое, ритмичное, тело расслаблено</strong> — кошке хорошо и комфортно</span></li>
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">Тихое, прерывистое, уши прижаты</strong> — стресс или дискомфорт</span></li>
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">С высокой нотой внутри, настойчивое</strong> — просит еду или внимание</span></li>
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">Мурлычет, но не реагирует на прикосновения</strong> — возможна боль, стоит обратиться к ветеринару</span></li>
              </ul>
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

export default ArticlePurring;
