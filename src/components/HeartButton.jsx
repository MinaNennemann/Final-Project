import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

function HeartButton({ quote, onToggleLike }) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    if (savedQuotes.some(q => q.id === quote.id)) {
      setLiked(false);  
    }
  }, [quote]);

  const toggleLike = () => {
    const savedQuotes = JSON.parse(localStorage.getItem('savedQuotes')) || [];
    if (liked) {
      const updatedQuotes = savedQuotes.filter(q => q.id !== quote.id);
      localStorage.setItem('savedQuotes', JSON.stringify(updatedQuotes));
      onToggleLike && onToggleLike(updatedQuotes);  
    } else {
      savedQuotes.push(quote);
      localStorage.setItem('savedQuotes', JSON.stringify(savedQuotes));
      onToggleLike && onToggleLike(savedQuotes);  
    }
    setLiked(!liked);
  };

  return (
    <Button 
      type="primary" className='heart-button'
      shape="circle" 
      icon={liked ? <HeartFilled /> : <HeartOutlined />}   
      onClick={toggleLike}
    />
  );
}

export default HeartButton;
