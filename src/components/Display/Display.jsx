import styles from "./display.module.scss";
import imgOne from "../../assets/section03.jpg";
export default function Display() {
  return (
    <div className={styles.container}>
      <div>
        <h1>QUALITY</h1>
        <h1>CREATIVITY</h1>
        <h1>PROFESSIONALISM</h1>
      </div>

      <div className={styles.containerItem}>
        <img width={400} src={imgOne} alt="woman wearing Redmi band 6" />
      </div>
    </div>
  );
}
