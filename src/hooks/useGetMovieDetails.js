// api
import { apiURL, apiKey } from "../api/ApiKey"

// hooks
import { useEffect, useState } from "react"

export const useGetMovieDetails = (movieId) => {
    
    const [details, setDetails] = useState(null)

    useEffect(() => {
        const getDetails = () => {
            fetch(`${apiURL}${movieId}?api_key=${apiKey}&language=pt-BR`)
                    .then(res => res.json())
                    .then(data => setDetails(data))
                    
        }
        getDetails()
    }, [movieId])

    return details
}