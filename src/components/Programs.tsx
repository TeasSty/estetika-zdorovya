import { programs, site } from "../data/site";
import { useInView } from "../hooks/useInView";
import "./Programs.css";

export function Programs() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section className="section programs" id="programs" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Программы и сеансы</p>
        <h2 className="section__title">Записи вашей карты</h2>
        <p className="section__lead">
          Вход, работа с телом, курсы и сопровождение — в том порядке, в каком
          обычно выстраивается программа.
        </p>

        <div className={`programs__ledger ${visible ? "is-visible" : ""}`}>
          <Group title="Вход" items={programs.entry} />
          <Group title="Работа с телом" items={programs.body} />
          <Group title="Курсы и сопровождение" items={programs.courses} featured />
        </div>

        <p className="programs__footnote">
          Полный состав курсов и пакетов уточняется на консультации. Онлайн-запись:{" "}
          <a href={site.links.dikidi} target="_blank" rel="noreferrer">
            Dikidi
          </a>
          .
        </p>
      </div>
    </section>
  );
}

type Item = {
  name: string;
  price: string;
  hint: string;
  featured?: boolean;
};

function Group({
  title,
  items,
  featured = false,
}: {
  title: string;
  items: readonly Item[];
  featured?: boolean;
}) {
  return (
    <div className={`programs__group ${featured ? "programs__group--featured" : ""}`}>
      <h3 className="programs__group-title">{title}</h3>
      <ul className="programs__rows">
        {items.map((item) => (
          <li key={item.name} className={item.featured ? "is-featured" : undefined}>
            <div>
              <p className="programs__name">{item.name}</p>
              <p className="programs__hint">{item.hint}</p>
            </div>
            <p className="programs__price">{item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
