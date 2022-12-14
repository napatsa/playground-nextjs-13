import React from "react";
import styles from "./styles.module.css";

async function getData(name: any) {
  await new Promise((r) => setTimeout(r, 2000));
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

async function Detail({ searchParams }: any) {
  const { name } = searchParams;

  if (!name) {
    return <div className={styles.container}>NON SELECT</div>;
  }

  const data = await getData(name);

  return (
    <div className={styles.container}>
      <div className={styles.mb}>Name : {data.name}</div>
      <div className={styles.mb}>Weight : {data.weight}</div>
    </div>
  );
}

export default Detail;
