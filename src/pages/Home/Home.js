import "./Home.css"


// hooks
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies"
import { useNavigate } from "react-router-dom"

// context
import { SearchedQueryContext } from "../../context/SearchedQueryContext"
import { useContext } from "react"


// image URL
const imgURL = "https://image.tmdb.org/t/p/w500"

const Home = () => {

  const { setSearchedQuery } = useContext(SearchedQueryContext)

  const navigate = useNavigate()

  const apiMovies = useGetPopularMovies()

  const navigateToDetails = (movieId) => {
    setSearchedQuery(null)
    navigate(`/details/${movieId}`)
  }

  return (
    <div id="home">
        
        <h1>Filmes Populares</h1>

        <ul>
          {apiMovies && apiMovies.results.map(movie => (
            <li key={movie.id} className="movie">
              <a href="https://google.com.br"><img src={`${imgURL}${movie.poster_path}`} alt="img" /></a>
              <span>{movie.title}</span>
              <button onClick={() => navigateToDetails(movie.id)}>Ver detalhes</button>
            </li>
          ))}
        </ul>

    </div>
  )
}


export default Home