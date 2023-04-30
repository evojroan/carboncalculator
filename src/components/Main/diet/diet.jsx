import styles from './diet.module.scss';
import { useState, useEffect } from 'react';
import { getDietCarbon } from 'API/allcarbon.js';

export default function Diet({ country }) {
  const [CD_everything, setCD_everything] = useState('');
  const [CD_pescetarian, setCD_pescetarian] = useState('');
  const [CD_vegetarian, setCD_vegetarian] = useState('');
  const [CD_vegan, setCD_vegan] = useState('');

  useEffect(() => {
    async function fetchCarbonData() {
      try {
        const data_everything = await getDietCarbon(country, 'everything');
        setCD_everything(data_everything);
        const data_pescetarian = await getDietCarbon(country, 'pescetarian');
        setCD_pescetarian(data_pescetarian);
        const data_vegetarian = await getDietCarbon(country, 'vegetarian');
        setCD_vegetarian(data_vegetarian);
        const data_vegan = await getDietCarbon(country, 'vegan');
        setCD_vegan(data_vegan);
      } catch (error) {
        console.error(error);
      }
    }
    if (country) {
      fetchCarbonData();
    }
  }, [country]);

  return (
    <div className={styles.diet}>
      <h2>每年平均每人飲食排碳量</h2>

      <div className={styles.everything}>
        <h3>什麼都吃</h3>
        <div>
          {CD_everything ? (
            <p>
              {CD_everything.t_co2} {CD_everything.ton}
            </p>
          ) : (
            '請選擇國家'
          )}
        </div>
      </div>
      <div className={styles.data_pescetarian}>
        <h3>海鮮素 (Pescetarian)</h3>
        <div>
          {CD_pescetarian ? (
            <p>
              {CD_pescetarian.t_co2} {CD_pescetarian.ton}
            </p>
          ) : (
            '請選擇國家'
          )}
        </div>
      </div>
      <div className={styles.data_vegetarian}>
        <h3>吃素 (Vegetarian)</h3>
        <div>
          {CD_vegetarian ? (
            <p>
              {CD_vegetarian.t_co2} {CD_vegetarian.ton}
            </p>
          ) : (
            '請選擇國家'
          )}
        </div>
      </div>
      <div className={styles.data_vegan}>
        <h3>全素 (Vegan)</h3>
        <div>
          {CD_vegan ? (
            <p>
              {CD_vegan.t_co2} {CD_vegan.ton}
            </p>
          ) : (
            '請選擇國家'
          )}
        </div>
      </div>
    </div>
  );
}
