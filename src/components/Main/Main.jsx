import styles from './Main.module.scss';
import { useState } from 'react';
import CountryList from './CountryList/CountryList.jsx';
import Diet from './diet/diet.jsx';
import Flight from './Flight/Flight.jsx';
import Car from './Car/Car.jsx';
import Clothes from './Clothes/Clothes.jsx';
import Energy from './Energy/Energy.jsx';
import Footprint from './Footprint/Footprint.jsx';
import AboutMe from './AboutMe/AboutMe.jsx';
import AboutCarbon from './AboutCarbon/AboutCarbon.jsx';

export default function Main({ selectedPage }) {
  const [selectedCountry, setSelectedCountry] = useState();

  function selectCountry(value) {
    setSelectedCountry(value);
  }

  return (
    <div className={styles.Main}>
      {selectedPage !== 'AboutMe' && selectedPage !== 'AboutCarbon' && (
        <div className={styles.MainLeft}>
          <CountryList select={selectCountry} />
        </div>
      )}
      <div className={styles.MainRight}>
        {selectedPage === 'Footprint' && (
          <Footprint country={selectedCountry} />
        )}
        {selectedPage === 'Diet' && <Diet country={selectedCountry} />}
        {selectedPage === 'Flight' && <Flight country={selectedCountry} />}
        {selectedPage === 'Car' && <Car country={selectedCountry} />}
        {selectedPage === 'Clothes' && <Clothes country={selectedCountry} />}
        {selectedPage === 'Energy' && <Energy country={selectedCountry} />}

        {selectedPage === 'AboutCarbon' && <AboutCarbon />}
        {selectedPage === 'AboutMe' && <AboutMe />}
      </div>
    </div>
  );
}
