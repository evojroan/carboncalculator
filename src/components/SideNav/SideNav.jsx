import styles from "./SideNav.module.scss";
import SideNavBt from "./SideNavBt";

function SideNav() {
  return (
    <div className={styles.container}>
      SideNav test
      <SideNavBt title='Carbon Calculator' />
      <SideNavBt title='Projects' />
      <SideNavBt title='About' />
    </div>
  );
}

export default SideNav;
