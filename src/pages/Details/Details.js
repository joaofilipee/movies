import "./Details.css"

// hooks
import { useGetMovieDetails } from "../../hooks/useGetMovieDetails"
import { useParams } from "react-router-dom"

// api
import { imgURL } from "../../api/ApiKey"

// Image not found
import imageNotFound from "../../notFound/imageNotFound.jpg"

const Details = () => {

    const { id } = useParams()
    
    const movieDetails = useGetMovieDetails(id)

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
                    <p className="overview">{movieDetails.overview}</p>
                    <p className="release-date">Data de lançamento: {movieDetails.release_date}</p>
                    <button>Voltar</button>
                </div>
            </div>
            )}

            
        </div>
    )
}

export default Details