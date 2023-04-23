import styles from './App.module.scss';
import SideNav from './components/SideNav/SideNav.jsx';
import Main from './components/Main/Main.jsx';


function App() {
  return (
    <div className={styles.AppContainer}>
      <SideNav />
      <Main />

    </div>
  );
}

export default App;
