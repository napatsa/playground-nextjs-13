import Detail from "./components/Detail";
import { Suspense } from "react";
import styles from "./page.module.css";

export default async function Home({ searchParams }: any) {
  return (
    <>
      <Suspense
        fallback={<div className={styles.container}>Loading detail...</div>}
      >
        {/* @ts-ignore */}
        <Detail searchParams={searchParams} />
      </Suspense>
    </>
  );
}
