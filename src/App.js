
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Menu from './components/Menu/Menu'
import RoutesApp from './routes';



function App() {

  return (
    <Router>
      <div className="container">
        <div className='menu'><Menu /></div>
        <div className='main'><RoutesApp /></div>
      </div>
    </Router>
  );
}

export default App;
