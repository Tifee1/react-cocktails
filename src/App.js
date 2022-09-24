import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// import pages
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import SingleProducts from './pages/SingleProducts';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='cocktail/:cocktailId' element={<SingleProducts />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
