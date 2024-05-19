import './App.css';
import { useState } from 'react';
import Login from './user/Login';
import Home from './home-page/Home';
import Contact from './feedback/Contact';
import Menu from './menu/Menu';
import Register from './user/Register';
import Booking from './booking/Booking';
import SagarRatna from './booking/SagarRatna';
import Bukhara from './booking/Bukhara';
import RajinderDaDhaba from './booking/RajinderDaDhaba';
import Karim from './booking/Karim';
import AslamChicken from './booking/AslamChicken';
import Varq from './booking/Varq'
import Gulati from './booking/Gulati';
import Sandoz from './booking/Sandoz';
import { Route,Routes } from 'react-router-dom';
import FinalItem from './order/FinalItem';
import Popup from './components/Popup';
import Popuperror from './components/Popuperror';
import Popupcontacterror from './components/Popupcontacterror';
import Popupcontact from './components/Popupcontact';
import Popuperrorl from './components/Popuperrorl';
import Selectionmenu from './menu/Selectionmenu';
import Adminpage from './order_dashboard/Adminpage';
import AdminNavbar from './order_dashboard/Adminnavbar';
import { createContext } from "react";
import OTPinput from './user/OTPinput';
import Reset from './user/Reset';
import Done from './order/Done';
import OrderPopup from './components/Order-popup';
export const RecoveryContext = createContext();
function App() {
  const [email, setEmail] = useState();
  const [otp, setOTP] = useState();
  return (
    <RecoveryContext.Provider
    value={{otp, setOTP, setEmail, email }}
  >
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Booking' element={<Booking/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Selectionmenu/:seat' element={<Selectionmenu/>}/>
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
        <Route path='/FinalItem' element={<FinalItem/>}/>
        <Route path='/Popup' element={<Popup/>}/>
        <Route path='/Popuperror' element={<Popuperror/>}/>
        <Route path='/Popuperrorl' element={<Popuperrorl/>}/>
        <Route path='/Popupcontacterror' element={<Popupcontacterror/>}/>
        <Route path='/Popupcontact' element={<Popupcontact/>}/>
        <Route path='/AdminPage' element={<Adminpage/>}/>
        <Route path='/AdminNavbar' element={<AdminNavbar/>}/>
        <Route path='/OTPinput' element={<OTPinput/>}/>
        <Route path='/Reset' element={<Reset/>}/>
        <Route path='/Done' element={<Done/>}/>
        <Route path='/OrderPopup' element={<OrderPopup/>}/>
      </Routes>
    </div>
    </RecoveryContext.Provider>
  );
}
export default App;
