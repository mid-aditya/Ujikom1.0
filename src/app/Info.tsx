import React from 'react';
import styles from './page.module.css';

const Information: React.FC = () => {
    return (
        <div className={styles.info}>
        <h3 className={styles.text}>Informasi Terkini</h3>
        <div className={styles.container}>
        <div className={styles.informationCard}>
            <h3 className={styles.informationTitle}>Informasi Terkini</h3>
            <p className={styles.informationText}>
                Berita terbaru tentang sekolah akan ditampilkan di sini. Informasi terkait kegiatan,
                prestasi, dan hal-hal penting lainnya akan diupdate secara berkala.
            </p>
        </div>
        <div className={styles.informationCard}>
            <h3 className={styles.informationTitle}>Informasi Terkini</h3>
            <p className={styles.informationText}>
                Berita terbaru tentang sekolah akan ditampilkan di sini. Informasi terkait kegiatan,
                prestasi, dan hal-hal penting lainnya akan diupdate secara berkala.
            </p>
        </div>
        <div className={styles.informationCard}>
            <h3 className={styles.informationTitle}>Informasi Terkini</h3>
            <p className={styles.informationText}>
                Berita terbaru tentang sekolah akan ditampilkan di sini. Informasi terkait kegiatan,
                prestasi, dan hal-hal penting lainnya akan diupdate secara berkala.
            </p>
        </div>
        </div>
        </div>
    );
};

export default Information;
