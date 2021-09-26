import React from "react";
import styles from "styles/loading.module.css";
function Loading() {
  return (
    <div className={styles.spinner}>
      <div className={`${styles.petal} ${styles.p1}`}></div>
      <div className={`${styles.petal} ${styles.p2}`}></div>
      <div className={`${styles.petal} ${styles.p3}`}></div>
      <div className={`${styles.petal} ${styles.p4}`}></div>
    </div>
  );
}

export default Loading;
