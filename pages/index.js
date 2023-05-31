import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Movie Dialoger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to Movie Dialoger!
        </h1>

        <img src="/moviedblogo.png" alt="Movie Dialoger Logo"  />

        <div className={styles.grid}>
          <a href="/movies" className={styles.card}>
            <h3>Movies &rarr;</h3>
            <p>Find your favorite movies</p>
          </a>

          <a href="/characters" className={styles.card}>
            <h3>Characters &rarr;</h3>
            <p>Find your favorite movie characters</p>
          </a>
        </div>
      </main>

      <footer>

      </footer>

    </div>
  )
}
