import React from 'react'

const Searchbar = () => {

  const isSmall = small ? 'make-small' : '';

  return (
    <div className="searchbar-container">
      <form
        onSubmit={(e) => {e.preventDefault(); hanldeSubmit();}}
      >
        <input
          type="text"
          placeholder="Search for a card"
          value={search}
          className={isSmall}
          onChange={(e) => setSearch(e.target.value)}></input>  
      </form>  
    </div>
  )
}

export default Searchbar