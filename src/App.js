import './App.css';
import Row from './components/row/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Row title="Trending Now" fetchURL={requests.trending} />
      <Row title="Top Rated" fetchURL={requests.topRated} />
      <Row title="Popular" fetchURL={requests.popular} />
    </div>
  );
}

export default App;
