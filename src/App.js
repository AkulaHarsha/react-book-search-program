// BookSearch.js
import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

const App = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(response.data.items);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div >
      <h1>Book searching program by using reactjs</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Enter book title"
        />
        <br/>
        <button type="submit">Search</button>
      </form>
      
      <div className="main-block">
        
        {books.map((book) => (
          <div className="card-setting">
          <div key={book.id}>
          <img
              src={book.volumeInfo.imageLinks?.thumbnail}
              alt={book.volumeInfo.title}
            />
            <h2 className="title">{book.volumeInfo.title}</h2>
           
           </div>
          
            </div>
        ))}
      </div>
     </div>
    
  );
};

export default App;

