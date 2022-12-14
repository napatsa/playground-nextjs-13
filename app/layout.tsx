import "./globals.css";

import List from "./components/List";
import { Suspense } from "react";
import styles from "./layout.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={styles.container}>
        <div className={styles.list}>
          <Suspense fallback={<div>Loading...</div>}>
            {/*  @ts-ignore */}
            <List />
          </Suspense>
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
