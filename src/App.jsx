import React, { useEffect } from 'react';
import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import CheckOut from "./components/CheckOut";
import Login from "./components/Login.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useStateValue } from "./StateProvider.jsx";
import { auth } from "./firebase"; // Importing the initialized 'auth'
import { onAuthStateChanged } from 'firebase/auth';
import Payment from "./components/Payment.jsx";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./components/Orders.jsx"

// Initialize Stripe with your publishable key
const stripePromise = loadStripe('pk_test_51QBFDyK0gdPpqszM58ZWaKI6lAaW5TUNKukzlTqKT26zQdulNroZsGGgCT3tRTiHDKr1ooxxWJ68gAG8dXcrpY8X00FOMSENJy');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      console.log("The user is: ", authUser);

      if (authUser) {
        // User is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Wrap the Payment component inside the Elements component */}
          <Route path="/payment" element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
