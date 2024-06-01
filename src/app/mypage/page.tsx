import styles from './mypage.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>&#x2190;</button>
        <h1>Profile</h1>
        <button className={styles.logoutButton}>log out</button>
      </header>
      <main className={styles.main}>
        <div className={styles.profileSection}>
          <div className={styles.profilePicture}>Profile picture</div>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Name</span>
              <span className={styles.value}>김철수</span>
              <button className={styles.editButton}>✎</button>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Student ID</span>
              <span className={styles.value}>2024311111</span>
              <button className={styles.editButton}>✎</button>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Phone num</span>
              <span className={styles.value}>010-1234-5678</span>
              <button className={styles.editButton}>✎</button>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>E-mail</span>
              <span className={styles.value}>abcd@gmail.com</span>
              <button className={styles.editButton}>✎</button>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Status</span>
              <span className={styles.value}><span className={styles.statusActive}></span> Active</span>
            </div>
          </div>
        </div>
        <div className={styles.availableTimeSection}>
          <div className={styles.sectionHeader}>
            <span>Available time</span>
            <button className={styles.editButton}>✎</button>
          </div>
          <div className={styles.availableTimeTable}>Available time table</div>
        </div>
        <button className={styles.withdrawButton}>withdraw membership</button>
      </main>
    </div>
  );
};

export default Profile;
