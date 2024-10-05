import React from 'react';
import styles from './page.module.css';

const tentang: React.FC = () => {
  return (
    <div className={styles.tentangCard}>
      <h3 className={styles.tentangTitle}>Tentang Sekolah</h3>
      <ul className={styles.tentangList}>
        <li>tentang 1: Penjelasan singkat tentang tentang 1.</li>
        <li>tentang 2: Penjelasan singkat tentang tentang 2.</li>
        <li>tentang 3: Penjelasan singkat tentang tentang 3.</li>
      </ul>
    </div>
  );
};

export default tentang;
