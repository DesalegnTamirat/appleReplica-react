import styles from "./firstsection.module.css";

export default function FirstSection() {
  return (
    <section className={styles.firstHighlightWrapper}>
      <div className="container">
        <div className="new-alert">New</div>
        <div className="title-wraper bold black">iPad Pro</div>
        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Order</a>
            </li>
          </ul>
        </div>
        <div className={`${styles.ipodCaption} row`}>
          <div className="col-sm-12 col-md-6 text-md-right">
            iPad Pro available starting 3.25
          </div>
          <div className="col-sm-12 col-md-6 text-md-left">
            Magic Keyboard coming in May
          </div>
        </div>
      </div>
    </section>
  );
}
