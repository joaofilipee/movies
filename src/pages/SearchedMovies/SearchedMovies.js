
import "./SearchedMovies.css"

// context
import { SearchedQueryContext } from "../../context/SearchedQueryContext"


// image not found
import imageNotFound from "../../notFound/imageNotFound.jpg"

// hooks
import { useSearchParams, useNavigate } from "react-router-dom"
import { useGetRelatedMovies } from "../../hooks/useGetRelatedMovies"
import { useContext } from "react"

// Image URL
import { imgURL } from "../../api/ApiKey"

const SearchedMovies = () => {

    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")

    const { setSearchedQuery } = useContext(SearchedQueryContext)

    const navigate = useNavigate()

    const navigateToDetails = (movieId) => {

      setSearchedQuery(query)
      navigate(`/details/${movieId}`)
    }

    const data =  useGetRelatedMovies(query)
    
  return (
    <section id="searchedmovies">
        <h1>Filmes Relacionados À: <span>{query}</span></h1>

        <ul>
          {data && data.results.map(movie => (
            <li key={movie.id} className="movie">
              <a href="https://google.com.br">
                <img src={movie.poster_path ? `${imgURL}${movie.poster_path}` : imageNotFound} alt={query} />
                </a>
              <span>{movie.title}</span>
              <button onClick={() => navigateToDetails(movie.id)}>Ver detalhes</button>
            </li>
          ))}

        </ul>

    </section>
  )
}

export default SearchedMovies