import React from "react";
import styles from "./styles.module.css";

async function Detail({ data }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.mb}>Name : {data?.name}</div>
        <div className={styles.mb}>Weight : {data?.weight}</div>
      </div>
    </>
  );
}

export default Detail;
