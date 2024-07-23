import React, { useState, useEffect } from 'react';
import "./Home.css";
import HeartButton from './HeartButton';
import QuoteSearch from './QuoteSearch'; 
import './QuoteSearch.css';

function Home() {
  const [data, setData] = useState([]);
  const [filteredQuotes, setFilteredQuotes] = useState([]);

  useEffect(() => {
    fetch('/dataBase.json')
      .then(response => response.json())
      .then(data => {
        setData(data.data);
      })
      .catch(error => console.error('Error fetching quotes:', error));
  }, []);

  const handleSearch = (searchResults) => {
    setFilteredQuotes(searchResults);
  };

  return (
    <div className="home">
      <div className="banner">
        <img src="/images/logo.png" alt="" />
      </div>
      <img className="pattern-left" src="/images/pattern-intro-right-desktop.svg"  />
      <img className="pattern-right" src="/images/pattern-intro-left-desktop.svg"  />
      <QuoteSearch data={data} onSearch={handleSearch} /> 
      <div className="quotes-list">
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote, index) => (
            <div key={index} className="quote-item">
              <p>"{quote.quote}" {quote.author_name} - {quote.book} ({quote.year} )</p>
              <HeartButton quote={quote} />
            </div>
          ))
        ) : (
          <div className="paragraph">
            <p>No quotes found.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
