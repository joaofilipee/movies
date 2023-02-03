import "./Home.css"


// hooks
import { useGetPopularMovies } from "../../hooks/useGetPopularMovies"
import { useState, useEffect } from "react"

// image URL
const imgURL = "https://image.tmdb.org/t/p/w500"

const Home = () => {


  const apiMovies = useGetPopularMovies()


  return (
    <div id="home">
        
        <h1>Filmes</h1>

        <ul>
          {apiMovies && apiMovies.results.map(movie => (
            <li key={movie.id}>
              <a href="https://google.com.br"><img src={`${imgURL}${movie.poster_path}`} alt="img" /></a>
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>

    </div>
  )
}


export default Home