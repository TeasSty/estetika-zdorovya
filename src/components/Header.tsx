import { site } from "../data/site";
import "./Header.css";

export function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand brand-type" href="#top">
        {site.brand}
        <span>{site.brandLine}</span>
      </a>
      <nav className="site-header__nav" aria-label="Основная навигация">
        <a href="#protocol">Протокол</a>
        <a href="#specialist">Специалист</a>
        <a href="#programs">Программы</a>
        <a href="#place">Кабинет</a>
      </nav>
      <a className="btn btn--primary site-header__cta" href="#booking">
        Записаться
      </a>
    </header>
  );
}
