import React from "react";
import './App.css';

const api = {
  key: '9e04c0b1257be867050e0db17ee68aea',
  base: 'https://api.openweathermap.org/data/2.5/'
}

// console.log(api.key)
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className='search-bar'
            placeholder="Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
