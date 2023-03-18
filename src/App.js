
import './App.css';
import Header from './header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      
      <Header />

      <Router>
        <Routes>
        
        <Route path='/' element=  {<Home/>}/>
          <Route path='/checkout' element= {<Checkout/>}/>
          
          </Routes>
         

      </Router>
     

    </div>

  );
}

export default App;
