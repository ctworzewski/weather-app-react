import React from "react";
import './App.css';

const api = {
  key: '9e04c0b1257be867050e0db17ee68aea',
  base: 'https://api.openweathermap.org/data/2.5/'
}

// console.log(api.key)
function App() {

  const dateBuilder = (d) => {
    let months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
    let days  = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    
    console.log(day, month, date, year)
  }
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
        <div className="location-box">
          <div className="location">Kielce, PL</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default App;
