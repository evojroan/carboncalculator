import styles from '../Main.module.scss';
import { getCarCarbon } from 'API/allcarbon.js';
import { useState, useEffect } from 'react';

export default function Car({ country }) {
  const [CD, setCD] = useState('');
  const [distance, setDistance] = useState('0');

  function distanceInput(event) {
    setDistance(event.target.value);
  }

  useEffect(() => {
    if (country) {
      getCarCarbon(country, distance)
        .then(data => {
          setCD(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [country, distance]);

  return (
    <div className={styles.car}>
      <h2>每年平均每人駕車排碳量</h2>

      <div>
        <h3>請輸入駕駛距離(KM)：</h3>

        <input
          type='number'
          min='0'
          value={distance}
          onChange={event => distanceInput(event)}
        />

        <div>
          {CD ? (
            <p>
              排碳量： {CD.t_co2} {CD.ton}
            </p>
          ) : (
            '請選擇國家並輸入駕駛距離'
          )}
        </div>
      </div>
    </div>
  );
}
