import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Characters() {
  const [character, setCharacter] = useState('');
  const [searchString, setSearchString] = useState('');
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/characters/`);
      const json = await res.json();
      setCharacters(json);
    }
    fetchCharacters();
  }, []);

  function handleChange(e) {
    setSearchString(e.target.value);
  }

  async function handleSubmit() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/characters/?name=${searchString}`, {
      method: 'GET'
    });
    const json = await res.json();
    setCharacters(json);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Characters</title>
      </Head>
      <main>
        <h1 className={styles.title}>Characters</h1>
        <textarea value={searchString} onChange={handleChange} className="border-2"></textarea>
        <div>
          <button onClick={handleSubmit}>Search</button>
        </div>
        <div className={styles.grid}>
          {characters &&
            characters.map((character) => (
              <a href={`/characters/${character.character_id}`} className={styles.card}>
                <h3> {character.character} </h3>
                <p>Movie: {character.movie}</p><p>Number of lines: {character.number_of_lines}</p>
              </a>

            ))}
        </div>
      </main>
    </div>
  );
}
