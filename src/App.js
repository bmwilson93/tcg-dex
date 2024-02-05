import React from 'react'
import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { fetchData } from './utils/fetchData';

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
  const location = useLocation();

  // States
  const [search, setSearch] = useState("");
  const [cards, setCards] = useState([]);
  const [sets, setSets] = useState([]);
  const [currentSet, setCurrentSet] = useState("");
  const [cardCount, setCardCount] = useState(-1);
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [recentSearch, setRecentSearch] = useState("");


  useEffect(() => {
    window.scrollTo(0,0);
  }, []);


  // Fetch Cards
  const url = "https://api.pokemontcg.io/v2/";

  // Call API to get results for search (search from Searchbar.js)
  const getCards = async (search, page=1) => {
    setCards([]);
    
    //build the url with search query
    let fixedSearch = search.replace(/ /g, '.')
    let searchTerm = "cards?q=name:*" + fixedSearch + "*" + "&page=" + page + "&pageSize=25"
    let query = url + searchTerm

    let result = await fetchData(query);

    // set the card list and total results found
    if('error' in result) {
      console.log("found an error");
    } else { // No errors, set the data in states
      // if result.data.length == 0 show a No results found message
      setCards(result.data);
      setCardCount(result.totalCount);
      setPages(Math.ceil(result.totalCount / result.pageSize));
      setCurrentPage(result.page);
    }
  } 

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home search={search} setSearch={setSearch}/>}/>
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