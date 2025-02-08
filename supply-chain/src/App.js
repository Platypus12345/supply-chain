import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./styles/App.css";
import BlockchainPage from "./pages/blockchainPage"; // Update path if needed

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Supply Chain PWA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blockchain">Blockchain Connection</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blockchain" element={<BlockchainPage />} />
      </Routes>
    </div>
  );
}

const Home = () => (
  <div>
    <h2>Welcome to the Supply Chain App</h2>
    <p>Track your supply chain efficiently and securely.</p>
    <p>
      Navigate to the <Link to="/blockchain">Blockchain Page</Link> to test the
      blockchain connection.
    </p>
  </div>
);

export default App;
