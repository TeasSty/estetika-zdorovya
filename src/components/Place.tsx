import { site } from "../data/site";
import { useInView } from "../hooks/useInView";
import "./Place.css";

export function Place() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section className="section place" id="place" ref={ref}>
      <div className={`section__inner place__grid ${visible ? "is-visible" : ""}`}>
        <div className="reveal">
          <p className="section__eyebrow">Место</p>
          <h2 className="section__title">Кабинет у сквера и леса</h2>
          <p className="place__text">
            {site.address}. После сеанса можно выйти в озеленённый сквер — лес
            буквально рядом. Внутри пространство собрано «с любовью»: уютно,
            креативно и добротно — так Любовь описывает свой кабинет.
          </p>
          <p className="place__hours">{site.hours}</p>
        </div>

        <div className="place__panel reveal" style={{ transitionDelay: "120ms" }} aria-hidden="true">
          <div className="place__window">
            <span>дневной свет</span>
            <span>хвоя у окна</span>
          </div>
          <p className="place__caption">
            Дневной свет, тишина кабинета и зелень рядом — часть восстановления.
          </p>
        </div>
      </div>
    </section>
  );
}
