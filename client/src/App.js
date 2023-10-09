import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Special from './components/Special';
import Register from './components/Register';
import Booking from './components/Booking';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Special' element={<Special/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
