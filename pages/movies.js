import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { FaSearch } from 'react-icons/fa';

export default function Movies() {
  const [movie, setMovie] = useState('');
  const [searchString, setSearchString] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/`);
      const json = await res.json();
      setMovies(json);
    }
    fetchMovies();
  }, []);

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent form submission behavior

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/movies/?name=${searchString}`, {
      method: 'GET'
    });
    const json = await res.json();
    setMovies(json);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
      </Head>
      <main>
        <h1 className={styles.title}>Movies</h1>

        <div className={styles.searchContainer}>
          <form className="example" onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search.."
                value={searchString}
                onChange={handleChange}
                name="search"
                className={styles.searchInput}
              />
              <button type="submit" className={styles.searchButton}>
                <FaSearch />
              </button>
            </div>
          </form>
        </div>


        <div className={styles.grid}>
          {movies &&
            movies.map((movie) => (
              <a href={`/movies/${movie.movie_id}`} className={styles.card}>
                <h3> {movie.movie_title} </h3>
                <p>Released {movie.year} Rating: {movie.imdb_rating} based on {movie.imdb_votes} votes.</p>
              </a>
            ))}
        </div>
      </main>
    </div>

  );
}
