import { protocolSteps } from "../data/site";
import { useInView } from "../hooks/useInView";
import "./Protocol.css";

export function Protocol() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section className="section protocol" id="protocol" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Как проходит восстановление</p>
        <h2 className="section__title">Четыре шага карты</h2>
        <p className="section__lead">
          Сначала читаем состояние и собираем программу. Затем — работа с телом
          и сопровождение.
        </p>

        <ol className={`protocol__list ${visible ? "is-visible" : ""}`}>
          {protocolSteps.map((step, index) => (
            <li
              className="protocol-step"
              key={step.num}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="protocol-step__num">{step.num}</div>
              <div className="protocol-step__body">
                <h3>{step.title}</h3>
                <p>{step.note}</p>
              </div>
              <span className="protocol-step__mark chart-mark">{step.mark}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
