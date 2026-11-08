import { site } from "../data/site";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="brand-type site-footer__brand">
          {site.brand}
          <span>{site.brandLine}</span>
        </p>
        <p className="site-footer__copy">
          {site.specialist} · {site.address}
        </p>
        <p className="site-footer__legal">
          Запись по предварительной договорённости. Актуальные услуги и цены —
          в Dikidi и сообществе VK.
        </p>
      </div>
    </footer>
  );
}
