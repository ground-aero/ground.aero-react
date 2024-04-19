import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import News from './pages/News';
import Events from './pages/Events';
import Library from './pages/Library';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<News />} />
        <Route path="/events" element={<Events />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}

export default App;