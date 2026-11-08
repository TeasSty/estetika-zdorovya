import { site } from "../data/site";
import { useInView } from "../hooks/useInView";
import "./Booking.css";

export function Booking() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section className="section booking" id="booking" ref={ref}>
      <div className={`section__inner booking__panel ${visible ? "is-visible" : ""}`}>
        <div>
          <p className="section__eyebrow">Запись</p>
          <h2 className="section__title">Начните с первичной консультации</h2>
          <p className="booking__lead">
            Бесплатная первичная — чтобы понять запрос и следующий шаг. Дальше —
            онлайн-запись в Dikidi или сообщение в VK / Telegram.
          </p>
        </div>

        <div className="booking__actions">
          <a className="btn btn--primary" href={site.links.dikidi} target="_blank" rel="noreferrer">
            Открыть Dikidi
          </a>
          <a className="btn btn--wood" href={site.phoneHref}>
            {site.phoneDisplay}
          </a>
          <a className="btn btn--ghost" href={site.links.telegram} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a className="btn btn--ghost" href={site.links.vk} target="_blank" rel="noreferrer">
            Сообщение в VK
          </a>
        </div>

        <dl className="booking__facts">
          <div>
            <dt>Адрес</dt>
            <dd>{site.address}</dd>
          </div>
          <div>
            <dt>Часы</dt>
            <dd>{site.hours}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
