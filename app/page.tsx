import Detail from "./components/Detail";
import { Suspense } from "react";
import styles from "./page.module.css";

async function getData(name: any) {
  await new Promise((r) => setTimeout(r, 2000));
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
}

export default async function Home({ searchParams }: any) {
  const { name } = searchParams;

  if (!name) {
    return <div className={styles.container}>NON SELECT</div>;
  }

  const data = getData(name);

  return (
    <>
      <Suspense
        fallback={<div className={styles.container}>Loading detail...</div>}
      >
        {/* @ts-ignore */}
        <Detail data={data} />
      </Suspense>
    </>
  );
}
