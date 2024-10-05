import React from 'react';
import styles from './page.module.css';

const Sponsor: React.FC = () => {
    const sponsorImages = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFNcXdShVsvQWsT5XOhzPjZ8372QUNxw-7w&s",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Komatsu_company_logos.svg/1024px-Komatsu_company_logos.svg.png",
        "https://img.cintamobil.com/2020/10/07/ZXn5Pos1/logo-honda-mobil-1-c22e.jpg",
        "https://iconnetjabar.com/wp-content/uploads/2023/09/cropped-Iconnet.png",
        "https://keretaapikita.com/wp-content/uploads/2020/09/Logo-Baru-PT-KAI.jpg",
        "https://static.vecteezy.com/system/resources/previews/020/335/983/non_2x/samsung-logo-samsung-icon-free-free-vector.jpg",
    ];

    return (
        <div className={styles.sponsorSection}>
            <h3 className={styles.text2}>Partnered With</h3>
            <div className={styles.sponsorGrid}>
                {sponsorImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Sponsor ${index + 1}`}
                        className={styles.sponsorImage}
                    />
                ))}
            </div>
        </div>
    );
};

export default Sponsor;
