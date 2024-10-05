import React from 'react';
import styles from './page.module.css';

const Video: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.containerVid}>
              <img src="https://smkn4bogor.sch.id/assets/images/logo/logoSMKN4.svg" alt="" className={styles.imageVid}/>
</div>
      <video
        src={require("./assets/1002.mp4")}
        autoPlay
        muted
        loop
        className={styles.video}
      ></video>
      <div className={styles.overlay}></div> {/* Overlay for better text readability */}
    </div>
  );
};

export default Video;
