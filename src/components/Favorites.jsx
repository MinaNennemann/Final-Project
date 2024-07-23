import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import HeartButton from './HeartButton';
import  './Favorites.css';


function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    setFavorites(savedQuotes);
  }, []);

  const handleToggleLike = (updatedQuotes) => {
    setFavorites(updatedQuotes);
  };

  return (
    <div className="favorites">
      <h1>Favorites</h1>
      <List
        itemLayout="horizontal"
        dataSource={favorites}
        renderItem={(quote, index) => (
          <List.Item
            actions={[
              <HeartButton key={index} quote={quote} onToggleLike={handleToggleLike} />
            ]}
          >
            <h5 className='quote-text'>{quote.quote}</h5> 
          </List.Item>
        )}
      />
    </div>
  );
}

export default Favorites;
