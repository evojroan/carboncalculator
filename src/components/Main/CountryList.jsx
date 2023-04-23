import styles from './CoutryList.module.scss';
import { useEffect } from 'react';
import { getCountryList } from 'API/dietcarbon.js';

export default function CoutryList() {
  function getCountryListData() {
    console.log({ getCountryList });
  }
  return (
    <div
      className={styles.CountryList}
      onClick={getCountryListData}>
      所有國家
    </div>
  );
}
