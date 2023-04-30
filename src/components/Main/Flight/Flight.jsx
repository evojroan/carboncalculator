import styles from './Flight.module.scss';
import { getFlightCarbon } from 'API/allcarbon.js';
import { useState, useEffect } from 'react';

export default function Flight({ country }) {
  const [CD, setCD] = useState('');
  const [frequency, setFrequency] = useState('often');

  function frequencyInput(event) {
    setFrequency(event.target.value);
  }

  useEffect(() => {
    if (country) {
      getFlightCarbon(country, frequency)
        .then(data => {
          setCD(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [country, frequency]);

  return (
    <div className={styles.Flight}>
      <h2>每年平均每人航行排碳量</h2>

      <div>
        <h3>請選擇飛航頻率：</h3>
        <p>
          <input
            type='radio'
            value='often'
            checked={frequency === 'often'}
            onChange={event => frequencyInput(event)}
          />
          頻繁 (Often：4 次往返短程、2 次中程、1 次長途航班)
        </p>
        <p>
          <input
            type='radio'
            value='sometimes'
            checked={frequency === 'sometimes'}
            onChange={event => frequencyInput(event)}
          />
          偶爾（Sometimes：2次往返短程、1次中程航班）
        </p>
        <p>
          <input
            type='radio'
            value='rare'
            checked={frequency === 'rare'}
            onChange={event => frequencyInput(event)}
          />
          鮮少（Rare：1次往返短途航班）
        </p>

        <div>
          {CD ? (
            <p>
              排碳量：{CD?.t_co2} {CD?.ton}
            </p>
          ) : (
            '請選擇國家與飛航頻率'
          )}
        </div>
      </div>
    </div>
  );
}
