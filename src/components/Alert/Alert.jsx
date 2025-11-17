import styles from "./alert.module.css";

export default function Alert() {
  return (
    <section className={`${styles.alertSection} top-50 `}>
      <div className={`container py-4 px-4 ${styles.alertContainer}`}>
        <h4 className={styles.alertTitle}>We’re open for you.</h4>
        <div className={styles.alertText}>
          Chat online with a
          Specialist or call 1-800-MY-APPLE.
          <br />
          For service and support, visit{" "}
          <a href="https://support.apple.com/">support.apple.com</a>.
        </div>
      </div>
    </section>
  );
}
