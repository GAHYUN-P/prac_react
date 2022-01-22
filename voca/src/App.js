import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';

function App() {
  return <div className="App">
    <Hello /> 
    {/* 셀프클로즈 */}
    <Welcome />
  </div>
}

export default App;

