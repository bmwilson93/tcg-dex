import React from 'react'
import { Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search/:id" element={<SearchResult />}/>
        <Route path="/sets" element={<Sets />}/>
        <Route path="/set/:id" element={<Set />}/>
        <Route path="/card/:id" element={<Card />}/>
        <Route path="*" element={<NoPage />}/>
      </Routes>
    </div>
  )
}

export default App