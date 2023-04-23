import styles from "./SideNavBt.module.scss";

function SideNavBt({ title }) {
  return <div className={styles.button}>{title}</div>;
}

export default SideNavBt;
