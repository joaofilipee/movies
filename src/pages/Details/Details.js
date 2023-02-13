import "./Details.css"

// context
import { SearchedQueryContext } from "../../context/SearchedQueryContext"

// hooks
import { useGetMovieDetails } from "../../hooks/useGetMovieDetails"
import { useParams, useNavigate } from "react-router-dom"
import { useContext } from "react"

// api
import { imgURL } from "../../api/ApiKey"

// Image not found
import imageNotFound from "../../notFound/imageNotFound.jpg"

const Details = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const { searchedQuery } = useContext(SearchedQueryContext)
    
    const movieDetails = useGetMovieDetails(id)

    const backToResultsPage = () => {
        if(searchedQuery) {
            navigate(`/search?query=${searchedQuery}`)
            return
        }
        
        navigate("/")
    }

    return(
        <div id="details">
            <h1>Detalhes</h1>

            {movieDetails && (
                <div className="details">
                <div className="movie-image">
                    <img src={movieDetails.poster_path ? `${imgURL}${movieDetails.poster_path}` : `${imageNotFound}`} alt={movieDetails.title} />
                </div>

                <div className="movie-details">
                    <h2>{movieDetails.title}</h2>
                    <p className="overview">{movieDetails.overview ? movieDetails.overview : "Descrição indisponível"}</p>
                    <p className="release-date">Data de lançamento: {movieDetails.release_date.split("-").reverse().join("/")}</p>
                    <button className="go-back" onClick={backToResultsPage}>Voltar</button>
                </div>
            </div>
            )}

            
        </div>
    )
}

export default Details