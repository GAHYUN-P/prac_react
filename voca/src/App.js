import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import styles from './App.module.css';

function App() {
  return <div className="App">
    <Hello /> 
    {/* 셀프클로즈 */}
    <Hello /> 
    <Hello /> 
    {/* 동일한 component더라도 state는 따로 관리된다
    다른 state에 영향을 미치지 않는다. */}
    
  </div>
}

export default App;

