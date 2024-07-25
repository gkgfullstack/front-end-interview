import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScreensOne from './components/ScreensOne';
import ScreensTwo from './components/ScreensTwo';
import SideBar from './components/SideBar';
import './App.css';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreensOne />} />
        <Route path="/providers" element={<SideBar />} />
        <Route path="/providers/:providerName" element={<ScreensTwo />} />
      </Routes>
    </Router>
  );
};

export default App;
