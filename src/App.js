import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Sets from './pages/Sets';
import Set from './pages/Set';
import Card from './pages/Card';
import NoPage from './pages/NoPage';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search/:id" element={<SearchResult />}/>
        <Route path="/sets" element={<Sets />}/>
        <Route path="/set/:id" element={<Set />}/>
        <Route path="/card/:id" element={<Card />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>

      <Footer />
    </div>
  )
}

export default App