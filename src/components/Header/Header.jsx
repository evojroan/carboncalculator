import styles from './header.module.scss';
import SideNav from 'components/SideNav/SideNav.jsx';

export default function Header({ propToSideNav }) {
  return (
    <div className={styles.header}>
      <SideNav select={propToSideNav} />
    </div>
  );
}
