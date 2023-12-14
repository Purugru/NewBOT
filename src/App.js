// index.js (or index.tsx if using TypeScript)

import React from 'react';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Lander from './pages/Landing.js'; // Adjust the path based on your project structure
import Chat from './pages/chatpage.js';

const App = ()=>
{
  return(
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Lander />} />
          <Route path="/lander" element={<Lander />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App;