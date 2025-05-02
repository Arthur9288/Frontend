import React from 'react';
import './App.css';
import HomePage from './Views/HomePage';
import TopFold from './Views/TopFold';
import Solutions from './Views/Solutions';
import Integrations from './Views/Integrations'; // Correctly importing Integrations
import Pricing from './Views/Pricing'; // Correctly importing Pricing
import "@fontsource/playfair-display";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <TopFold />
                <HomePage />
              </>
            } 
          />
          <Route 
            path="/solutions" 
            element={<Solutions />} 
          />
          <Route 
            path="/integrations" 
            element={<Integrations />} // Correctly using Integrations component
          />
          <Route 
            path="/pricing" 
            element={<Pricing />} // Correctly using Pricing component
          />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;