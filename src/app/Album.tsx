import React from 'react';
import styles from './page.module.css';

const Album: React.FC = () => {
  return (
    <div className={styles.albumSection}>
      <h3 className={styles.text}>Album Sekolah</h3>
      <div className={styles.albumGrid}>
        <img src="https://smkn4bogor.sch.id/assets/images/logo/pplg.png" alt="Foto Album 1" />
        <img src="https://smkn4bogor.sch.id/assets/images/logo/tjkt.png" alt="Foto Album 2" />
        <img src="https://smkn4bogor.sch.id/assets/images/logo/tkr.png" alt="Foto Album 3" />
        <img src="https://smkn4bogor.sch.id/assets/images/logo/tflm.jpeg" alt="Foto Album 4" />
      </div>
    </div>
  );
};

export default Album;
