import { getClothesCarbon } from 'API/allcarbon.js';
import { useState, useEffect } from 'react';
import styles from './Clothes.module.scss';

export default function Clothes({ country }) {
  const [CD, setCD] = useState('');
  const [amount, setAmount] = useState('much');

  function amountInput(event) {
    setAmount(event.target.value);
  }

  useEffect(() => {
    if (country) {
      getClothesCarbon(country, amount)
        .then(data => {
          setCD(data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [country, amount]);

  return (
    <div className={styles.clothes}>
      <h2>每年平均每人購衣排碳量</h2>

      <div>
        <h3>請選擇每年購衣數量：</h3>
        <p>
          <input
            type='radio'
            value='much'
            checked={amount === 'much'}
            onChange={event => amountInput(event)}
          />
          多
        </p>
        <p>
          <input
            type='radio'
            value='average'
            checked={amount === 'average'}
            onChange={event => amountInput(event)}
          />
          還好
        </p>
        <p>
          <input
            type='radio'
            value='little'
            checked={amount === 'little'}
            onChange={event => amountInput(event)}
          />
          少
        </p>

        <div>
          {CD ? (
            <p>
              排碳量：{CD?.t_co2} {CD?.ton}
            </p>
          ) : (
            '請選擇國家與購衣數量'
          )}
        </div>
      </div>
    </div>
  );
}
