// api
import { apiKey, searchMovieURL } from "../api/ApiKey"

// hooks
import { useState, useEffect } from "react"

export const useGetRelatedMovies = (query) => {
    const [relatedMovies, setRelatedMovies] = useState(null)

    useEffect(() => {

        const searchForMovies = () => {
            fetch(`${searchMovieURL}?api_key=${apiKey}&language=pt-BR&page=1&include_adult=false&query=${query}`)
            .then(res => res.json())
            .then(data => {
                setRelatedMovies(data)
            })
        }

        searchForMovies()

    }, [query])

    return relatedMovies
}