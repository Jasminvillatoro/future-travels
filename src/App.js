import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import data from './data';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const options = {
      method: 'GET',
      mode: 'no-cors',
      // Referer: 'https://futuretravels01.com/',
    };

    fetch(
      `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=42.3455%252C-71.1076&key=${process.env.REACT_APP_TRIP_ADVISOR_KEY}&language=en`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  const travels = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.imageUrl}
        location={item.location}
        title={item.title}
        googlemap={item.googleMapsUrl}
        description={item.description}
      />
    );
  });
  return (
    <div className='App'>
      <Header />
      {travels}
    </div>
  );
}

export default App;
