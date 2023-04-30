import styles from './footprint.module.scss';
import { useState, useEffect } from 'react';
import { getFootprintCarbon } from 'API/allcarbon.js';

export default function Footprint({ country }) {
  const [CD, setCD] = useState('');

  useEffect(() => {
    if (country) {
      getFootprintCarbon(country)
        .then(data => {
          setCD(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [country]);

  return (
    <div className={styles.footprint}>
      <h2>每年每人平均碳排量</h2>

      <div>
        {country ? (
          <p>
            排碳量： {CD.t_co2} {CD.ton}
          </p>
        ) : (
          '請選擇國家'
        )}
      </div>
    </div>
  );
}
