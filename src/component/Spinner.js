import styles from "./Spinner.module.css";

function Spinner({ isLoading }) {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>{isLoading}</div>
    </div>
  );
}

export default Spinner;
