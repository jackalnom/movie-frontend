import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function MovieDetail() {
  const router = useRouter();
  const { movie_id } = router.query;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/${movie_id}`);
      const json = await res.json();
      console.log(json);
      setMovie(json);
    }

    if (movie_id) {
      fetchMovie();
    }
  }, [movie_id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <main>
        <h1 className={styles.title}>{movie.title}</h1>
        <p><h2>characters in the movie:</h2></p>
        <div className={styles.grid}>
          {
            movie.top_characters.map((character) => (
              <a href={`/characters/${character.character_id}`} className={styles.card}>
              <h3> {character.character} </h3>
              <p>Lines <b>{character.num_lines}</b></p>
            </a>
            ))
          }
        </div>
      </main>
    </div>
  );
}
