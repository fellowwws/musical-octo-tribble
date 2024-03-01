import { useEffect, useState } from 'react';
import { Filter } from './components/Filter';
import { QRcode } from './components/QRcode';
import A from './data/A.json';
import B from './data/B.json';

function App() {
  const [cluster, setCluster] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => setCluster(A), []);

  function handleSetCluster(value) {
    if (value === 'A') {
      setCluster(A);
    } else {
      setCluster(B)
    }
  }

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
      <Filter
        handleSetCluster={handleSetCluster} 
        handleSetFilter={handleSetFilter} 
      />
      <div className="container-fluid">
        <div className="row row-cols gy-2">
        {cluster
          .filter(location => filters.length ? filters.includes(location.Label) : location)
          .map((location, index) => (
            <QRcode key={index} dataURI={location.DataURI} label={location.Label} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
