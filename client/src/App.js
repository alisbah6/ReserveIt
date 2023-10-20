import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Special from './components/Special';
import Register from './components/Register';
import Booking from './components/Booking';
import Hotelpage from './components/Hotelpage';
import { Route,Routes } from 'react-router-dom';
import Tablesetting from './components/Tablesetting';
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
        <Route path='/Hotelpage/:id/:bname' element={<Hotelpage/>}/>
        {/* <Route path='/Tablesetting' element={<Tablesetting/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
