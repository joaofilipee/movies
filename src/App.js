import './App.css';

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from './pages/Home/Home';
import SearchedMovies from './pages/SearchedMovies/SearchedMovies';

// Components
import SearchBar from './components/SearchBar';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <SearchBar />
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<SearchedMovies />} path="/search/:query"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
