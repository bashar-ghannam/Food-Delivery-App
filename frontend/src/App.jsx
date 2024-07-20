import React, { useContext, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder';
import { Cart } from './pages/Cart/Cart';
import { Footer } from './components/Footer/Footer';
import { LoginPopup } from './components/LoginPopup/LoginPopup';
import { StoreContext } from './context/StoreContext';
import Notification from './components/Notification/Notification';
import { Verfiy } from './pages/Verify/Verfiy';

const App = () => {
  const { showLogin } = useContext(StoreContext);
  return (
    <>
      {showLogin ? <LoginPopup /> : <></>}
      <div className="app">
        <Navbar />
        <Notification />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/verify" element={<Verfiy />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
