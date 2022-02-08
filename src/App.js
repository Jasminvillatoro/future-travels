import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import travels from './data';
function App() {
  console.log(travels);
  return (
    <div className="App">
      <Header />
      <Main />
      <hr />
      <Main />
      <hr />
      <Main />
    </div>
  );
}

export default App;
