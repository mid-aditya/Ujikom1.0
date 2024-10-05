import React from 'react';
import styles from './page.module.css';

const Agenda: React.FC = () => {
  return (
    <div className={styles.info}>
    <h3 className={styles.text}>Agenda Sekolah</h3>
    <div className={styles.container}>
    <div className={styles.agendaCard}>
      <h3 className={styles.agendaTitle}>Agenda Sekolah</h3>
      <ul className={styles.agendaList}>
        <li>Agenda 1: Penjelasan singkat tentang agenda 1.</li>
        <li>Agenda 2: Penjelasan singkat tentang agenda 2.</li>
        <li>Agenda 3: Penjelasan singkat tentang agenda 3.</li>
      </ul>
    </div>
    <div className={styles.agendaCard}>
      <h3 className={styles.agendaTitle}>Agenda Sekolah</h3>
      <ul className={styles.agendaList}>
        <li>Agenda 1: Penjelasan singkat tentang agenda 1.</li>
        <li>Agenda 2: Penjelasan singkat tentang agenda 2.</li>
        <li>Agenda 3: Penjelasan singkat tentang agenda 3.</li>
      </ul>
    </div>
    <div className={styles.agendaCard}>
      <h3 className={styles.agendaTitle}>Agenda Sekolah</h3>
      <ul className={styles.agendaList}>
        <li>Agenda 1: Penjelasan singkat tentang agenda 1.</li>
        <li>Agenda 2: Penjelasan singkat tentang agenda 2.</li>
        <li>Agenda 3: Penjelasan singkat tentang agenda 3.</li>
      </ul>
    </div></div></div>
  );
};

export default Agenda;
