import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import Special from './components/Special';
import Register from './components/Register';
import Booking from './components/Booking';
import SagarRatna from './components/SagarRatna';
import Bukhara from './components/Bukhara';
import RajinderDaDhaba from './components/RajindwrDaDhaba';
import Karim from './components/Karim';
import AslamChicken from './components/AslamChicken';
import Varq from './components/Varq'
import Gulati from './components/Gulati';
import { Route,Routes } from 'react-router-dom';
import Sandoz from './components/Sandoz';
//import Tablesetting from './components/Tablesetting';
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
        <Route path='/SagarRatna/:id/:bname' element={<SagarRatna/>}/>
        <Route path='/Sandoz/:id/:bname' element={<Sandoz/>}/>
        <Route path='/Bukhara/:id/:bname' element={<Bukhara/>}/>
        <Route path='/RajinderDaDhaba/:id/:bname' element={<RajinderDaDhaba/>}/>
        <Route path='/Karim/:id/:bname' element={<Karim/>}/>
        <Route path='/AslamChicken/:id/:bname' element={<AslamChicken/>}/>
        <Route path='/Varq/:id/:bname' element={<Varq/>}/>
        <Route path='/Gulati/:id/:bname' element={<Gulati/>}/>

        {/* <Route path='/Tablesetting' element={<Tablesetting/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
