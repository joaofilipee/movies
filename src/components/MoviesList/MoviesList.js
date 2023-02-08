import "./MoviesList.css"

// api
import { imgURL } from "../../api/ApiKey"

// context
import { SearchedQueryContext } from "../../context/SearchedQueryContext"
import { useContext } from "react"

// hooks
import { useNavigate, useSearchParams } from "react-router-dom"

// image not found
import imageNotFound from "../../notFound/imageNotFound.jpg"

const MoviesList = ({movie, home}) => {

    const { setSearchedQuery } = useContext(SearchedQueryContext)

    const [searchParams] = useSearchParams()
    const query  = searchParams.get("query")

    const navigate = useNavigate()
    const navigateToDetails = (movieId) => {

        if(home) {
            setSearchedQuery(null)
        }
        else {
            setSearchedQuery(query)
        }
        
        navigate(`/details/${movieId}`)
      }

  return (
    <li key={movie.id} className="movie">
        <img className="banner" src={movie.poster_path ? `${imgURL}${movie.poster_path}` : imageNotFound} alt="img" />
        <span>{movie.title}</span>
        <button onClick={() => navigateToDetails(movie.id)}>Ver detalhes</button>
    </li>
  )
}

export default MoviesList