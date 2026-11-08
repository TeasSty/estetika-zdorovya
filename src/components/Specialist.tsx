import { education, site } from "../data/site";
import { useInView } from "../hooks/useInView";
import "./Specialist.css";

export function Specialist() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section className="section specialist" id="specialist" ref={ref}>
      <div className={`section__inner specialist__grid ${visible ? "is-visible" : ""}`}>
        <div className="specialist__intro reveal">
          <p className="section__eyebrow">Специалист</p>
          <h2 className="section__title">{site.specialist}</h2>
          <p className="specialist__role">{site.role}</p>
          <p className="specialist__story">
            Многие приходят, считая кабинет «просто массажем». За ним —
            медицинское образование, диагностика, биоэнергорегуляция и
            индивидуальные программы восстановления. Кабинет создан как место
            без «жёлтых стен поликлиники»: уютно, ясно, рядом со сквером и лесом.
          </p>
        </div>

        <aside className="specialist__sheet reveal" style={{ transitionDelay: "120ms" }}>
          <p className="specialist__sheet-title">Опора в образовании</p>
          <ul>
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
