import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';
function App() {
  const travels = data.map((item) => {
    return (
      <Main
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
    <div className="App">
      <Header />
      {travels}
    </div>
  );
}

export default App;
