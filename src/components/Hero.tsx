import { site } from "../data/site";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-brand">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__place">Саранск · кабинет у сквера и леса</p>
          <h1 id="hero-brand" className="hero__brand brand-type">
            {site.brand}
            <span className="hero__brand-line">{site.brandLine}</span>
          </h1>
          <p className="hero__support">
            Диагностика, индивидуальная программа и работа с телом — чтобы
            восстановление было системой, а не разовым сеансом.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={site.links.dikidi} target="_blank" rel="noreferrer">
              Записаться онлайн
            </a>
            <a className="btn btn--ghost" href="#booking">
              Первичная консультация
            </a>
          </div>
        </div>

        <aside className="hero__chart" aria-label="Фрагмент карты восстановления">
          <div className="hero__chart-sheet">
            <p className="hero__chart-label">Карта восстановления</p>
            <ol className="hero__chart-list">
              <li>
                <span>01</span> Диагностика
              </li>
              <li>
                <span>02</span> Программа
              </li>
              <li>
                <span>03</span> Тело
              </li>
              <li>
                <span>04</span> Сопровождение
              </li>
            </ol>
            <p className="hero__chart-note chart-mark">индивидуально · по состоянию</p>
            <p className="hero__chart-meta">
              {site.specialist}
              <br />
              {site.role}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
