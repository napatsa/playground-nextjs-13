import React from "react";
import styles from "./styles.module.css";

async function Detail({ data }: any) {
  const dataDetail = await data;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mb}>Name : {dataDetail?.name}</div>
        <div className={styles.mb}>Weight : {dataDetail?.weight}</div>
      </div>
    </>
  );
}

export default Detail;
