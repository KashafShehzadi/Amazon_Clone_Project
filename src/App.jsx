import Header from "./components/Header";
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route
              path="/checkout"
              element={
                <>
                  <CheckOut />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
