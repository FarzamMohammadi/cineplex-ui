import styles from '../styles/Home.module.scss';

import TopNavigation from '../components/TopNavigation';

export default function Home() {
  return (
    <div className={styles.container}>
      <TopNavigation />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
