import "./Home.css"


// hooks
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies"
import { useNavigate } from "react-router-dom"



// image URL
const imgURL = "https://image.tmdb.org/t/p/w500"

const Home = () => {

  const navigate = useNavigate()

  const apiMovies = useGetPopularMovies()

  const navigateToDetails = (movieId) => {
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