// api
import { apiURL, apiKey } from "../api/ApiKey"

// hooks
import { useEffect, useState } from "react"

export const useGetPopularMovies = () => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        
        const fetchMovies = () => {
            fetch(`${apiURL}/popular?api_key=${apiKey}&language=pt-BR&page=1`)
                            .then(res => res.json())
                            .then(data => setMovies(data))
        }
        fetchMovies()
    }, [])
    return movies
}