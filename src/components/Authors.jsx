import React, { useState, useEffect } from 'react';
import './Authors.css';
import { Card } from 'antd';

const { Meta } = Card;

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch('/dataBase.json')
      .then(response => response.json())
      .then(data => {
        setAuthors(data.data);
      })
      .catch(error => console.error('Error fetching authors:', error));
  }, []);

  const getUniqueBooks = (quotes) => {
    const uniqueBooks = [];

    quotes.forEach(quote => {
      if (!uniqueBooks.some(book => book.book === quote.book)) {uniqueBooks.push(quote) }
    });

    return uniqueBooks;
  };

  return (
    <div className="authors-page">
      <h1>Authors</h1>
      
      <div className="authors-container">
        {authors.map(author => (
          <Card
            key={author.id}
            hoverable
            style={{ width: 300, marginBottom: 20 }}
            cover={<img alt={author.author} src={author.img} />}
          >
            <div className="author-info">
              <h2>{author.author_name}</h2> 
            </div>
            <Meta
              title={author.author}
              description={author.description}
            />
            <h4>Books:</h4>
            <ul>
              {getUniqueBooks(author.quotes).map(quote => (
                <li key={quote.id}>
                  <strong>{quote.book}</strong> ({quote.year})
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Authors;