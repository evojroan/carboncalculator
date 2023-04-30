import styles from './energy.module.scss';
import { getEnergyCarbon } from 'API/allcarbon.js';
import { useState, useEffect } from 'react';

export default function Energy({ country }) {
  const [CD, setCD] = useState('');

  const [houseHoldSize, setHouseholdSize] = useState('1');
  const [homeSize, setHomeSize] = useState('1');
  const [energyType, setEnergyType] = useState('conventional');

  function houseHoldInput(event) {
    setHouseholdSize(event.target.value);
  }

  function homeInput(event) {
    setHomeSize(event.target.value);
  }

  function energyInput(event) {
    setEnergyType(event.target.value);
  }

  useEffect(() => {
    if (country) {
      // fetchCarbonData();
      getEnergyCarbon(country, houseHoldSize, homeSize, energyType)
        .then(data => {
          setCD(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [country, houseHoldSize, homeSize, energyType]);

  return (
    <div className={styles.car}>
      <h2>每年平均每人能源排碳量</h2>

      <div>
        <h3>請輸入家庭成員數量：</h3>
        <input
          type='number'
          min='1'
          value={houseHoldSize}
          onChange={event => houseHoldInput(event)}
        />
      </div>
      <div>
        <h3>請輸入住家房屋面積(平方公尺)：</h3>
        <input
          type='number'
          min='1'
          value={homeSize}
          onChange={event => homeInput(event)}
        />
      </div>
      <div>
        <h3>請選擇使用能源：</h3>
        <p>
          <input
            type='radio'
            value='conventional'
            checked={energyType === 'conventional'}
            onChange={event => energyInput(event)}
          />{' '}
          傳統能源
        </p>

        <p>
          <input
            type='radio'
            value='green'
            checked={energyType === 'green'}
            onChange={event => energyInput(event)}
          />{' '}
          綠能
        </p>
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
