import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import MovieDetails from './pages/MovieDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/:movieId' element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
