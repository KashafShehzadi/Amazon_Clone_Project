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
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
