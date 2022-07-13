import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MasterView from './Components/MasterView';


function App() {
  return (
    <Router> 
      <MasterView /> 
    </Router>
  );
}

export default App;
