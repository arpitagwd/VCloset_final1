import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenClothing from "./components/Men";
import WomenClothing from "./components/Women";
import Cart from './components/Cart';
import Login from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home'; 
import SearchPage from './components/Search';
import FavoritesPage from './components/Favourite';
import Profile from './components/Profile';
import Help from './components/Help';
import Checkout from './components/Checkout';
import { CartProvider } from './context/CartContext';
import ProductDetails from './components/ProductDetails';
import VirtualTryOn from './components/VirtualTryOn';
import'./index.css';
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/SignUp";


const MainApp = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
      });


    return (
        <AuthProvider>

        <CartProvider>

        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
                <Route path="/men" element={<MenClothing />} />
                <Route path="/women" element={<WomenClothing  />} />
                <Route path="/cart" element={<Cart />} />
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Register />} />

                {/* <Route path="/signup" element={<SignUp isOpen={true} onClose={() => {}} />} /> */}
                <Route path="/search" element={<SearchPage />} />
                {/* <Route path="/favourites" element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} /> */}

                <Route path="/favourites" element={<FavoritesPage />} />
                <Route path="/profile" element={<Profile user={user}/>} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/virtual-tryon" element={<VirtualTryOn />} />
                <Route path="/help" element={<Help />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </Router>
        </CartProvider>
         </AuthProvider>

    );
};

export default MainApp;



