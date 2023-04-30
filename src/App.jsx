import styles from './App.module.scss';
import Header from './components/Header/Header.jsx';

import Main from './components/Main/Main.jsx';
import AboutCarbon from './components/Main/AboutCarbon/AboutCarbon.jsx';
import AboutMe from './components/Main/AboutMe/AboutMe.jsx';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('Footprint');
  function changePage(childData) {
    setCurrentPage(childData);
  }
  return (
    <div className={styles.App}>
      <div className={styles.AppContainer}>
        <Header propToSideNav={changePage} />
        <Main selectedPage={currentPage} />
      </div>
      <div className={styles.about}>
        <AboutCarbon />
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
