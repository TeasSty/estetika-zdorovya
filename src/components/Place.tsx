import { photos } from "../data/photos";
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

        <div className="place__gallery reveal" style={{ transitionDelay: "120ms" }}>
          <figure className="place__main">
            <img
              src={photos.specialistAlt}
              alt="Любовь Глухова в белом халате в кабинете"
              width={960}
              height={1280}
            />
          </figure>
          <div className="place__strip">
            <img src={photos.sessionNeck} alt="Работа с шеей и плечевым поясом" width={720} height={960} />
            <img src={photos.sessionFace} alt="Массаж лица в кабинете" width={960} height={1280} />
          </div>
        </div>
      </div>
    </section>
  );
}
