'use client';
import styles from './teams.module.css';
import { useRouter } from 'next/navigation';

const Teams = () => {

  const router = useRouter();
  
  const goBack = () => {
    // Implement go back functionality
  };
  const addTeam = () => {
    // Go to add team page
  };

  const teams = ['SWE', 'AI', 'CG']

  teams.map((team, index) => {
    router.push(`/teams/${team}`);
  });


  return (
    <div>
      <div className={styles.teamsHeader}>
        <button onClick={goBack} className={styles.button}>&#x2190;</button>
        <h1 className={styles.title}>Teams</h1>
        <button onClick={addTeam} className={styles.button}>+</button>
      </div>
      <h2 className={styles.subtitle}>Your Teams</h2>
      <div className={styles.teamList}>
        {teams.map((team, index) => (
          <div key={index} className={styles.teamCard}>
            <button className={styles.teamButton}>{team}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
