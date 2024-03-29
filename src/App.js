import './App.css';

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import Home from './pages/Home/Home';
import SearchedMovies from './pages/SearchedMovies/SearchedMovies';
import Details from './pages/Details/Details';
import PageNotFound from './pages/PageNotFound/PageNotFound';

// Components
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
      <SearchBar />
        <Routes>
          <Route element={<Home />} path="/"/>
          <Route element={<SearchedMovies />} path="/search"/>
          <Route element={<Details />} path="/details/:id" />
          <Route element={<PageNotFound />} path="*"/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
