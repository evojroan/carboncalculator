import styles from './SideNavBt.module.scss';

function SideNavBt({title}) {
  return <div className={styles.button}>
    <button>{title}</button>
  </div>;
}

export default SideNavBt;
