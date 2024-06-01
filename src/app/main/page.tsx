import TeamInfo from "./components/TeamInfo";
import styles from "./main.module.css"

export default function MainPage() {
    
    return (
        <div className={styles.container}>
            <TeamInfo></TeamInfo>
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.card}>Welcome greeting</div>
                </section>
                <section className={styles.section}>
                    <div className={styles.card}>Major Schedule</div>
                </section>
                <section className={styles.section}>
                    <div className={styles.card}>Teams Overview</div>
                </section>
            </main>
        </div>
    );
  }