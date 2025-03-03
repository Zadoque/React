import styles from "./page.module.css";
import MC from "./components/MeuComponente";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MC></MC>
      </main>
    </div>
  );
}
