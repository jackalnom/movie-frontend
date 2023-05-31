import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function CharacterDetail() {
  const router = useRouter();
  const { character_id } = router.query;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/characters/${character_id}`);
      const json = await res.json();
      console.log(json);
      setCharacter(json);
    }

    if (character_id) {
      fetchCharacter();
    }
  }, [character_id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>{character.character}</title>
      </Head>
      <main>
        <h1>{character.character}</h1>

        <div className={styles.grid}>
          {character.top_conversations.map((conversation) => (
            <a key={conversation.character_id} href={`/characters/${conversation.character_id}`} className={styles.card}>
              <h3>{conversation.character}</h3>
              <p>has {conversation.number_of_lines_together} lines together</p>
            </a>
          ))}
        </div>

      </main>
    </div >
  );
}
