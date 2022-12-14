import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

async function getData() {
  await new Promise((r) => setTimeout(r, 2000));
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  return res.json();
}

async function List() {
  const data = await getData();

  return (
    <div>
      {data.results.map((r: any) => (
        <Link
          key={r.name}
          href={{
            pathname: "/",
            query: { name: r.name },
          }}
        >
          <div className={styles.pokemon}>{r.name}</div>
        </Link>
      ))}
    </div>
  );
}

export default List;
