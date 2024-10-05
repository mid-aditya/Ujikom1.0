import React from "react";
import styles from './page.module.css'; // Import the CSS module

const Welcome: React.FC = () => {
  return (
    <section className={styles.welcomeSection}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Kepala Sekolah</h2>
            <h3 className={styles.subtitle}>Drs. Mulya Murprihartono, M.Si</h3>
            <p className={styles.description}>
              Sejak satu tahun lalu SMKN 4 Kota Bogor dipimpin oleh seseorang yang
              membawa warna baru, tahun pertama sejak dilantik, tepatnya pada
              tanggal 10 Juli 2020, inovasi dan kebijakan-kebijakan baru pun mulai
              dirancang...
            </p>
            <a
              href="#"
              className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
                Tentang Kami
            </a>
          </div>
          {/* Right Side - Image */}
          <div className={styles.containerWelcome}>
            <img
              src="https://smkn4bogor.sch.id/assets/images/avatar/kepala_sekolah.jpg"
              alt="Kepala Sekolah"
              className={styles.image}
            />
          </div>
    </section>
  );
};

export default Welcome;
