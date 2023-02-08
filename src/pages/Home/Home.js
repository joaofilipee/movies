import "./Home.css"

// hooks
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies"

// components
import MoviesList from "../../components/MoviesList/MoviesList"

const Home = () => {

  const apiMovies = useGetPopularMovies()

  return (
    <div id="home">
        <h1>Filmes Populares</h1>
        <ul>
          {apiMovies && apiMovies.results.map(movie => (
            <MoviesList key={movie.id} movie={movie} home={true} />
          ))}
        </ul>
    </div>
  )
}


export default Home