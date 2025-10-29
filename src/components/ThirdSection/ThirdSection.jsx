import styles from "./thirdsection.module.css";

export default function ThirdSection() {
  return (
    <section className={styles["third-hightlight-wrapper"]}>
      <div className="container">
        <div className="title-wraper bold">iPhone 11 Pro</div>
        <div className="description-wrapper">
          Pro cameras. Pro display. Pro performance.
        </div>
        <div className={styles["price-wrapper"]}>
          From $24.95/mo. or $599 with trade‑in.
        </div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
