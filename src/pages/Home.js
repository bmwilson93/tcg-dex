import React from 'react'
import Searchbar from '../components/Searchbar';

const Home = ({ getCards, setRecentSearch, recentSearch, search, setSearch}) => {
  return (
    <div className="home-container">
      <div className="title-container">
        <h1>Pok&eacute;mon TCG Dex</h1>
        <h3>The Ultimate Pok&eacute;mon Card Database</h3>
        <Searchbar 
          getCards={getCards} 
          setRecentSearch={setRecentSearch} 
          recentSearch={recentSearch}
          search={search} 
          setSearch={setSearch}
        />
      </div>

      {/* Add decorative cards here */}
    </div>
  )
}

export default Home