import Icon from "@/components/ui/icon";

interface ArticlePageProps {
  onBack: () => void;
}

const ArticleGrooming = ({ onBack }: ArticlePageProps) => {
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
              <span className="font-body text-xs text-muted-foreground">28 мая 2026</span>
              <span className="font-body text-xs tracking-widest uppercase border border-border px-2 py-0.5">Уход</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-light leading-tight mb-6">
              Уход за шерстью: советы для разных пород
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Длинношёрстным нужен ежедневный уход, короткошёрстным — раз в неделю. Но есть нюансы для каждой породы.
            </p>
          </div>

          <div className="w-full h-px bg-border mb-12" />

          <div className="font-body text-sm leading-[1.9] space-y-8 text-foreground/90">

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Зачем расчёсывать кошку</h2>
              <p>
                Кошки — чистоплотные животные и уделяют груммингу значительную часть своего времени. Однако самостоятельный уход не заменяет расчёсывания владельцем. Регулярное вычёсывание удаляет отмершую шерсть, предотвращает образование колтунов, снижает количество шерсти на мебели и одежде, а также уменьшает риск образования трихобезоаров (шерстяных комков в желудке).
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Короткошёрстные породы</h2>
              <p>
                Британская короткошёрстная, сиамская, абиссинская, шотландская вислоухая — всем им достаточно расчёсывания 1–2 раза в неделю. Используйте мягкую щётку-пуходёрку или резиновую щётку-массажёр: они эффективно собирают отмершую шерсть и приятны для кошки.
              </p>
              <p className="mt-4">
                В период линьки (весна и осень) увеличьте частоту вычёсывания до ежедневного — это заметно сократит количество шерсти в доме.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Длинношёрстные породы</h2>
              <p>
                Персидские, мейн-куны, норвежские лесные кошки требуют расчёсывания каждый день или через день. Без регулярного ухода шерсть быстро сваливается, особенно в области подмышек, за ушами и в паху.
              </p>
              <div className="mt-6 space-y-4">
                <div className="border-l-2 border-foreground/20 pl-5">
                  <p className="font-medium mb-1">Персидская кошка</p>
                  <p className="text-muted-foreground">Ежедневное расчёсывание металлическим гребнем. Особое внимание — области под глазами (регулярно протирать влажной салфеткой из-за особенностей строения морды).</p>
                </div>
                <div className="border-l-2 border-foreground/20 pl-5">
                  <p className="font-medium mb-1">Мейн-кун</p>
                  <p className="text-muted-foreground">Несмотря на густую шерсть, колтуны образуются реже благодаря её структуре. Достаточно расчёсывания 2–3 раза в неделю и ежедневно в период линьки.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Инструменты для груминга</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">Металлический гребень</strong> — основной инструмент для длинношёрстных, помогает обнаружить колтуны</span></li>
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">Пуходёрка</strong> — эффективно вычёсывает подшёрсток в период линьки</span></li>
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">Резиновая щётка</strong> — мягкий массаж и сбор короткой шерсти</span></li>
                <li className="flex gap-3"><span className="text-foreground">—</span> <span><strong className="text-foreground">Триммер для колтунов</strong> — аккуратное удаление уже образовавшихся спутанных участков</span></li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Купание кошки</h2>
              <p>
                Большинство здоровых кошек не нуждаются в регулярном купании — они отлично справляются сами. Исключения: после прогулки на улице, при сильном загрязнении, перед выставкой или по медицинским показаниям.
              </p>
              <p className="mt-4">
                Используйте специальный шампунь для кошек (не для людей). Вода должна быть тёплой (37–38°С). После купания хорошо вытрите полотенцем и не допускайте сквозняков, пока шерсть полностью не высохнет.
              </p>
            </section>

            <section>
              <h2 className="font-display text-3xl font-light mb-4">Уши, глаза и когти</h2>
              <p>
                Полноценный уход включает не только шерсть. Раз в 1–2 недели осматривайте уши — особенно у шотландских вислоухих. Глаза протирайте по мере загрязнения. Когти подстригайте каждые 3–4 недели специальными когтерезками для кошек, срезая только прозрачную часть (не затрагивая розовую зону с сосудами).
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

export default ArticleGrooming;
