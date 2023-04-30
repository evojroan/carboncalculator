import styles from './CoutryList.module.scss';
import { useState, useEffect } from 'react';
import { getCountryList } from 'API/allcarbon.js';

export default function CountryList({ select }) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  function selectCountry(event) {
    if (!event.target.value) {
      setSelectedCountry('');
      return;
    }
    const selectedCountryCode = event.target.value;
    setSelectedCountry(selectedCountryCode);
    select(selectedCountryCode);
  }

  useEffect(() => {
    async function fetchCountryList() {
      try {
        const data = await getCountryList();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCountryList();
  }, []);

  return (
    <div className={styles.CountryList}>
      <h2>請選擇國家</h2>
      <div>
        <select
          className={styles.select}
          onChange={selectCountry}>
          {selectedCountry ? (
            <option
              value=''
              disabled>
              請選擇國家
            </option>
          ) : (
            <option value=''>請選擇國家</option>
          )}
          {countries.map(country => (
            <option
              key={country.country_code}
              value={country.country_code}>
              {country.country_name}
            </option>
          ))}
        </select>
      </div>
      <h2>所選國家代碼</h2>
      <p>{selectedCountry}</p>
    </div>
  );
}
