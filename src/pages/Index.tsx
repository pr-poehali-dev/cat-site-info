import { useState } from "react";
import Icon from "@/components/ui/icon";
import ArticleCats from "./ArticleCats";
import ArticleGrooming from "./ArticleGrooming";
import ArticlePurring from "./ArticlePurring";

const NAV_ITEMS = ["Главная", "Каталог", "Галерея", "Статьи", "Контакты"];

const BREEDS = [
  {
    id: 1,
    name: "Британская короткошёрстная",
    origin: "Великобритания",
    character: "Спокойный · Преданный · Независимый",
    short: "Плюшевая шерсть и круглые глаза — настоящий аристократ среди кошек.",
    image: "https://cdn.poehali.dev/projects/ed4dcf6a-5c54-43af-947e-70898ae71085/files/7bfdd229-22fb-4ace-803d-4e30a13210e9.jpg",
    lifespan: "12–17 лет",
    weight: "4–8 кг",
    description: "Британская короткошёрстная — одна из старейших пород мира. Обладает мощным телосложением, густой плюшевой шерстью и невозмутимым нравом. Прекрасно подходит для семей с детьми. Не требует особого ухода за шерстью. Любит спокойствие, но с радостью составит компанию хозяину.",
    care: "Расчёсывать 1–2 раза в неделю. Регулярная вакцинация и осмотры у ветеринара.",
  },
  {
    id: 2,
    name: "Мейн-кун",
    origin: "США (штат Мэн)",
    character: "Дружелюбный · Игривый · Умный",
    short: "Величественный «лесной кот» с кустистым хвостом и добрым нравом.",
    image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=600&q=80",
    lifespan: "10–15 лет",
    weight: "5–11 кг",
    description: "Мейн-кун — одна из крупнейших домашних пород. Несмотря на внушительный вид, это дружелюбные и игривые кошки, которых часто называют «собаками в кошачьем обличье». Они легко поддаются дрессировке, любят воду и охотно общаются с хозяевами и гостями.",
    care: "Шерсть требует расчёсывания 2–3 раза в неделю. Активны — нужны игрушки и пространство.",
  },
  {
    id: 3,
    name: "Сиамская",
    origin: "Таиланд",
    character: "Общительный · Голосистый · Любопытный",
    short: "Элегантная восточная красавица с пронзительным голосом и синими глазами.",
    image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=600&q=80",
    lifespan: "12–20 лет",
    weight: "3–6 кг",
    description: "Сиамская кошка — одна из самых узнаваемых пород в мире. Отличается стройным телом, тёмными «поинтами» на морде, ушах, лапах и хвосте, а также ярко-голубыми миндалевидными глазами. Очень общительна, требует внимания и не переносит одиночества.",
    care: "Короткая шерсть почти не требует ухода. Важно уделять кошке время и общение.",
  },
  {
    id: 4,
    name: "Персидская",
    origin: "Иран (Персия)",
    character: "Нежный · Тихий · Ласковый",
    short: "Пушистый аристократ с плоской мордочкой и королевской осанкой.",
    image: "https://cdn.poehali.dev/projects/ed4dcf6a-5c54-43af-947e-70898ae71085/files/288a55ea-fe0f-4a54-b700-cfc68d32203a.jpg",
    lifespan: "10–15 лет",
    weight: "3–6 кг",
    description: "Персидская кошка — воплощение роскоши и спокойствия. Длинная густая шерсть, приплюснутая мордочка и невозмутимый характер делают её идеальным компаньоном для тихой домашней жизни. Персы не любят шума и перемен, предпочитая уют и стабильность.",
    care: "Ежедневное расчёсывание шерсти, регулярное протирание глаз. Не подходит для активных семей.",
  },
  {
    id: 5,
    name: "Абиссинская",
    origin: "Эфиопия",
    character: "Активный · Любознательный · Привязчивый",
    short: "Дикая грация и неиссякаемая энергия — кошка, которая никогда не скучает.",
    image: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600&q=80",
    lifespan: "9–15 лет",
    weight: "3–5 кг",
    description: "Абиссинская кошка напоминает миниатюрного дикого кота — стройная, мускулистая, с большими ушами и умными глазами. Невероятно активна: исследует каждый уголок дома, любит лазить и играть. Привязана к хозяину, но сохраняет независимость.",
    care: "Короткая шерсть не требует особого ухода. Необходимы игрушки, когтеточки и активный досуг.",
  },
  {
    id: 6,
    name: "Шотландская вислоухая",
    origin: "Шотландия",
    character: "Мягкий · Адаптивный · Ненавязчивый",
    short: "Совёнок с загнутыми ушками — невероятно милый и покладистый компаньон.",
    image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=600&q=80",
    lifespan: "11–15 лет",
    weight: "4–6 кг",
    description: "Шотландская вислоухая выделяется сложенными вперёд ушами, которые появляются из-за генетической мутации хряща. Отличается мягким и уравновешенным характером, хорошо уживается с детьми и другими питомцами. Не требует повышенного внимания, но любит быть рядом.",
    care: "Регулярная проверка ушей. Расчёсывание 1–2 раза в неделю.",
  },
];

const GALLERY = [
  { id: 1, src: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=500&q=80", alt: "Рыжая кошка" },
  { id: 2, src: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?w=500&q=80", alt: "Серая кошка" },
  { id: 3, src: "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=500&q=80", alt: "Белая кошка" },
  { id: 4, src: "https://cdn.poehali.dev/projects/ed4dcf6a-5c54-43af-947e-70898ae71085/files/7bfdd229-22fb-4ace-803d-4e30a13210e9.jpg", alt: "Британская кошка" },
  { id: 5, src: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&q=80", alt: "Котёнок" },
  { id: 6, src: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=500&q=80", alt: "Чёрная кошка" },
  { id: 7, src: "https://cdn.poehali.dev/projects/ed4dcf6a-5c54-43af-947e-70898ae71085/files/288a55ea-fe0f-4a54-b700-cfc68d32203a.jpg", alt: "Персидская кошка" },
  { id: 8, src: "https://cdn.poehali.dev/projects/ed4dcf6a-5c54-43af-947e-70898ae71085/files/d32f2455-5b4b-4163-8965-078a9d83838c.jpg", alt: "Кошка у окна" },
];

const ARTICLES = [
  {
    id: 1,
    date: "5 июня 2026",
    tag: "Здоровье",
    title: "Как правильно кормить кошку",
    excerpt: "Рацион кошки влияет на её здоровье, настроение и продолжительность жизни. Разбираемся в нюансах питания.",
  },
  {
    id: 2,
    date: "28 мая 2026",
    tag: "Уход",
    title: "Уход за шерстью: советы для разных пород",
    excerpt: "Длинношёрстным нужен ежедневный уход, короткошёрстным — раз в неделю. Но есть нюансы для каждой породы.",
  },
  {
    id: 3,
    date: "15 мая 2026",
    tag: "Поведение",
    title: "Почему кошка мурлычет",
    excerpt: "Мурлыканье — не просто знак удовольствия. Иногда кошки мурлычут от стресса или боли. Учимся различать сигналы.",
  },
];

type Breed = (typeof BREEDS)[0];

const Index = () => {
  const [activeSection, setActiveSection] = useState("Главная");
  const [selectedBreed, setSelectedBreed] = useState<Breed | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openArticle = (id: number) => {
    setActiveArticle(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeArticle = () => {
    setActiveArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (activeArticle === 1) return <ArticleCats onBack={closeArticle} />;
  if (activeArticle === 2) return <ArticleGrooming onBack={closeArticle} />;
  if (activeArticle === 3) return <ArticlePurring onBack={closeArticle} />;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("Главная")}
            className="font-display text-2xl tracking-wide font-medium"
          >
            Мир кошек
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`font-body text-sm tracking-wide transition-colors ${
                  activeSection === item
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-4 animate-fade-in">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`text-left font-body text-sm tracking-wide transition-colors ${
                  activeSection === item
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* ===== ГЛАВНАЯ ===== */}
        {activeSection === "Главная" && (
          <div>
            <section className="relative min-h-[90vh] flex items-center overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://cdn.poehali.dev/projects/ed4dcf6a-5c54-43af-947e-70898ae71085/files/7bfdd229-22fb-4ace-803d-4e30a13210e9.jpg)`,
                }}
              />
              <div className="absolute inset-0 bg-background/55" />
              <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 animate-fade-in opacity-0 stagger-1">
                  Энциклопедия пород
                </p>
                <h1 className="font-display text-6xl md:text-8xl font-light leading-none mb-8 animate-fade-in opacity-0 stagger-2">
                  Мир,<br />
                  <em>полный кошек</em>
                </h1>
                <p className="font-body text-lg text-muted-foreground max-w-md mb-12 leading-relaxed animate-fade-in opacity-0 stagger-3">
                  Откройте для себя удивительное разнообразие пород — от древних до современных, от диких до ласковых.
                </p>
                <div className="flex flex-wrap gap-4 animate-fade-in opacity-0 stagger-4">
                  <button
                    onClick={() => scrollTo("Каталог")}
                    className="px-8 py-3 bg-foreground text-background font-body text-sm tracking-widest uppercase hover:bg-foreground/80 transition-colors"
                  >
                    Смотреть каталог
                  </button>
                  <button
                    onClick={() => scrollTo("Статьи")}
                    className="px-8 py-3 border border-foreground font-body text-sm tracking-widest uppercase hover:bg-foreground/5 transition-colors"
                  >
                    Читать статьи
                  </button>
                </div>
              </div>
            </section>

            <section className="border-t border-b border-border py-16">
              <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { num: "6", label: "пород в каталоге" },
                  { num: "8", label: "фото в галерее" },
                  { num: "3", label: "статьи и советы" },
                  { num: "∞", label: "любви к кошкам" },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="font-display text-5xl font-light mb-2">{s.num}</div>
                    <div className="font-body text-xs text-muted-foreground tracking-widest uppercase">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 py-24">
              <div className="flex items-end justify-between mb-16">
                <div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">Популярные</p>
                  <h2 className="font-display text-5xl font-light">Породы</h2>
                </div>
                <button
                  onClick={() => scrollTo("Каталог")}
                  className="hidden md:flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Все породы <Icon name="ArrowRight" size={16} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
                {BREEDS.slice(0, 3).map((breed) => (
                  <div
                    key={breed.id}
                    className="bg-background group cursor-pointer"
                    onClick={() => setSelectedBreed(breed)}
                  >
                    <div className="overflow-hidden aspect-[4/3]">
                      <img
                        src={breed.image}
                        alt={breed.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">
                        {breed.origin}
                      </p>
                      <h3 className="font-display text-2xl font-light mb-2">{breed.name}</h3>
                      <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                        {breed.short}
                      </p>
                      <span className="font-body text-xs tracking-widest uppercase border-b border-foreground pb-0.5 group-hover:border-muted-foreground transition-colors">
                        Подробнее
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ===== КАТАЛОГ ===== */}
        {activeSection === "Каталог" && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 animate-fade-in opacity-0">
                Каталог
              </p>
              <h2 className="font-display text-6xl font-light animate-fade-in opacity-0 stagger-1">
                Породы кошек
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {BREEDS.map((breed, i) => (
                <div
                  key={breed.id}
                  className={`bg-background group cursor-pointer animate-fade-in opacity-0 stagger-${Math.min(i + 1, 6)}`}
                  onClick={() => setSelectedBreed(breed)}
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img
                      src={breed.image}
                      alt={breed.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">
                      {breed.origin}
                    </p>
                    <h3 className="font-display text-2xl font-light mb-1">{breed.name}</h3>
                    <p className="font-body text-xs text-muted-foreground mb-3">{breed.character}</p>
                    <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed">
                      {breed.short}
                    </p>
                    <button className="font-body text-xs tracking-widest uppercase border-b border-foreground pb-0.5 group-hover:border-muted-foreground transition-colors">
                      Подробнее
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== ГАЛЕРЕЯ ===== */}
        {activeSection === "Галерея" && (
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 animate-fade-in opacity-0">
                Фотографии
              </p>
              <h2 className="font-display text-6xl font-light animate-fade-in opacity-0 stagger-1">
                Галерея
              </h2>
            </div>
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {GALLERY.map((photo, i) => (
                <div
                  key={photo.id}
                  className={`break-inside-avoid overflow-hidden animate-fade-in opacity-0 stagger-${Math.min(i + 1, 6)}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-auto hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ===== СТАТЬИ ===== */}
        {activeSection === "Статьи" && (
          <section className="max-w-4xl mx-auto px-6 py-16">
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 animate-fade-in opacity-0">
                Советы и знания
              </p>
              <h2 className="font-display text-6xl font-light animate-fade-in opacity-0 stagger-1">
                Статьи
              </h2>
            </div>
            <div className="divide-y divide-border">
              {ARTICLES.map((article, i) => (
                <article
                  key={article.id}
                  onClick={() => openArticle(article.id)}
                  className={`py-10 group cursor-pointer animate-fade-in opacity-0 stagger-${i + 1}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-body text-xs text-muted-foreground">{article.date}</span>
                    <span className="font-body text-xs tracking-widest uppercase border border-border px-2 py-0.5">
                      {article.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl font-light mb-3 group-hover:opacity-70 transition-opacity">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl mb-6">
                    {article.excerpt}
                  </p>
                  <span className="font-body text-xs tracking-widest uppercase border-b border-foreground pb-0.5 flex items-center gap-1.5 w-fit">
                    Читать далее <Icon name="ArrowRight" size={12} />
                  </span>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ===== КОНТАКТЫ ===== */}
        {activeSection === "Контакты" && (
          <section className="max-w-4xl mx-auto px-6 py-16">
            <div className="mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 animate-fade-in opacity-0">
                Свяжитесь с нами
              </p>
              <h2 className="font-display text-6xl font-light animate-fade-in opacity-0 stagger-1">
                Контакты
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16 animate-fade-in opacity-0 stagger-2">
              <div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
                  Есть вопрос о породе, хотите поделиться фотографией своего питомца или предложить тему для статьи? Напишите нам — мы всегда рады!
                </p>
                <div className="space-y-6">
                  {[
                    { icon: "Mail", label: "Электронная почта", value: "hello@worldofcats.ru" },
                    { icon: "MessageCircle", label: "Telegram", value: "@worldofcats" },
                    { icon: "Instagram", label: "Instagram", value: "@world_of_cats" },
                  ].map((c) => (
                    <div key={c.icon} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-border flex items-center justify-center flex-shrink-0">
                        <Icon name={c.icon} fallback="Mail" size={16} />
                      </div>
                      <div>
                        <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-0.5">
                          {c.label}
                        </p>
                        <p className="font-body text-sm">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                  />
                </div>
                <div>
                  <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Ваше сообщение..."
                    className="w-full border border-border bg-transparent px-4 py-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-foreground text-background font-body text-xs tracking-widest uppercase py-3 hover:bg-foreground/80 transition-colors"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 mt-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-xl font-light">Мир кошек</span>
          <div className="flex flex-wrap justify-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>
          <p className="font-body text-xs text-muted-foreground">© 2026 Мир кошек</p>
        </div>
      </footer>

      {/* Модальное окно породы */}
      {selectedBreed && (
        <div
          className="fixed inset-0 z-50 bg-foreground/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-fast"
          onClick={() => setSelectedBreed(null)}
        >
          <div
            className="bg-background max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={selectedBreed.image}
                alt={selectedBreed.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">
                    {selectedBreed.origin}
                  </p>
                  <h2 className="font-display text-4xl font-light">{selectedBreed.name}</h2>
                </div>
                <button
                  onClick={() => setSelectedBreed(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors mt-1"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              <div className="flex gap-8 mb-6 py-4 border-y border-border">
                <div>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-1">
                    Продолжительность жизни
                  </p>
                  <p className="font-body text-sm">{selectedBreed.lifespan}</p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-1">Вес</p>
                  <p className="font-body text-sm">{selectedBreed.weight}</p>
                </div>
              </div>

              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Характер</p>
              <p className="font-body text-sm mb-6">{selectedBreed.character}</p>

              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">О породе</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                {selectedBreed.description}
              </p>

              <p className="font-body text-xs text-muted-foreground tracking-widest uppercase mb-2">Уход</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {selectedBreed.care}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;