import styles from './Main.module.scss';
import CountryList from './CountryList.jsx';

export default function Main() {
  return (
    <div className={styles.Main}>
      <div className={styles.MainLeft}>
        <CountryList />
      </div>
      <div className={styles.MainRight}>
        <div className={styles.MainRightUp}>
          <h2>排碳量：什麼都吃</h2>
          123
        </div>
        <div className={styles.MainRightDown}>
          <h2>排碳量：吃素(Vegan)</h2>
          123
        </div>
      </div>
    </div>
  );
}
