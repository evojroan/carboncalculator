import styles from './SideNav.module.scss';
import SideNavBt from './SideNavBt.jsx';

function SideNav({ select }) {
  function changePage(value) {
    select(value);
  }
  return (
    <div className={styles.container}>
      <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('Footprint');
        }}>
        <SideNavBt text='平均碳足跡' />
      </div>
      <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('Diet');
        }}>
        <SideNavBt text='飲食排碳' />
      </div>

      <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('Flight');
        }}>
        <SideNavBt text='航行排碳' />
      </div>

      <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('Car');
        }}>
        <SideNavBt text='駕車排碳' />
      </div>
      <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('Clothes');
        }}>
        <SideNavBt text='穿著排碳' />
      </div>
      <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('Energy');
        }}>
        <SideNavBt text='能源排碳' />
      </div>

      {/* <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('AboutCarbon');
        }}>
        <SideNavBt text='關於碳權' />
      </div>*/}
      {/* <div
        className={styles.SideNavBt}
        onClick={() => {
          changePage('AboutMe');
        }}>
        <SideNavBt text='關於我' />
      </div> */}
    </div>
  );
}

export default SideNav;
