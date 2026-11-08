import { reviews, site } from "../data/site";
import { useInView } from "../hooks/useInView";
import "./Proof.css";

export function Proof() {
  const { ref, visible } = useInView<HTMLElement>();

  return (
    <section className="section proof" id="proof" ref={ref}>
      <div className="section__inner">
        <p className="section__eyebrow">Доказательства</p>
        <h2 className="section__title">Что уже видно снаружи</h2>

        <div className={`proof__layout ${visible ? "is-visible" : ""}`}>
          <div className="proof__score reveal">
            <p className="proof__rating">{site.rating}</p>
            <p className="proof__rating-label">рейтинг сообщества VK</p>
            <p className="proof__meta">
              {site.subscribers} подписчиков · отзывы в VK и на Zoon
            </p>
            <a href={site.links.vk} target="_blank" rel="noreferrer">
              Открыть сообщество VK
            </a>
          </div>

          <div className="proof__quotes">
            {reviews.map((review, index) => (
              <blockquote
                className="proof__quote reveal"
                key={review.author}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <p>«{review.text}»</p>
                <footer>
                  {review.author} · {review.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
