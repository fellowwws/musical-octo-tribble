import { useState } from 'react';
import { Filter } from './components/Filter';
import { QRcode } from './components/QRcode';
import { locations } from './locations.js';

function App() {
  const [filters, setFilters] = useState([]);

  function handleSetFilter(input) {
    const format = (input) => input.toUpperCase().split(" ");

    if (!input) {
      setFilters([]);
      return;
    }
    setFilters(format(input));
  }


  

  return (
    <>
      <Filter handleSetFilter={handleSetFilter} />
      <div class="container-fluid">
        <div class="row row-cols gy-2">
        {locations
          .slice(0, 32)
          .filter(value => filters.length ? filters.includes(value) : value)
          .map((location, index) => (
          <div class="col">
            <QRcode key={index} label={location}/>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
