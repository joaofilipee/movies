
import "./SearchedMovies.css"

// image not found
import imageNotFound from "../../notFound/imageNotFound.jpg"

// hooks
import { useParams } from "react-router-dom"
import { useGetRelatedMovies } from "../../hooks/useGetRelatedMovies"

// Image URL
import { imgURL } from "../../api/ApiKey"

const SearchedMovies = () => {

    const { query } = useParams()

    const data =  useGetRelatedMovies(query)
    
  return (
    <div id="searchedmovies">
        <h1>Filmes Relacionados à: {query}</h1>

        <ul>
          {data && data.results.map(movie => (
            <li key={movie.id}>
              <a href="https://google.com.br">
                <img src={movie.poster_path ? `${imgURL}${movie.poster_path}` : imageNotFound} alt={query} />
                </a>
              <span>{movie.title}</span>
            </li>
          ))}

        </ul>

    </div>
  )
}

export default SearchedMovies