import React, { useState } from 'react';
import './QuoteSearch.css';


const QuoteSearch = ({ data, onSearch }) => {
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = () => {
    if (searchWord.trim() === '') {
      onSearch([]);
      return;
    }

    const searchResults = data.flatMap(author => author.quotes.filter(quote => 
      quote.quote.toLowerCase().includes(searchWord.toLowerCase())
        )
      )
     ;

    onSearch(searchResults);
  };

  return (
    <div className="quote-search-section">
      <input
        type="text"
        placeholder="Search for a quote" value={searchWord} onChange={(e) => setSearchWord(e.target.value)}
      />
      <button onClick={handleSearch}> > </button>
    </div>
  );
};

export default QuoteSearch;
