import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  return <div className="App">
    <Hello /> 
    {/* 셀프클로즈 */}
    <Welcome />
    <div className={styles.box}>App</div>
  </div>
}

export default App;

