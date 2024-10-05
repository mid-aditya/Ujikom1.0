import React from 'react';
import Agenda from './Agenda';
import Information from './Info';
import Tentang from './Tentang';
import styles from './page.module.css';

const CombinedSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <Information /> {/* Information is on the left */}
      <Tentang />
      <Agenda /> {/* Agenda is on the right */}
    </div>
  );
};

export default CombinedSection;
