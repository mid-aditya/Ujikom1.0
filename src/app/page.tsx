'use client'; // Ensure this is also a client component
import React, { useState } from 'react';
import Video from './Video';
import Sidebar from './Sidebar';
import Welcome from './Welcome';
import Agenda from './Agenda';
import Info from './Info';
import Sponsor from './Sponsor';
import Album from './Album';
import Footer from './Footer';
import Tentang from './Tentang';
import styles from './page.module.css';

const Home: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.main}>
      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
      <Video />
      <Album />
      <Welcome />
      <Info />
      
      <Sponsor />
      <Footer />
    </div>
  );
};

export default Home;
