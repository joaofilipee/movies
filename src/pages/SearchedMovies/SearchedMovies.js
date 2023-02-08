
import "./SearchedMovies.css"

// components
import MoviesList from "../../components/MoviesList/MoviesList"

// hooks
import { useSearchParams } from "react-router-dom"
import { useGetRelatedMovies } from "../../hooks/useGetRelatedMovies"



const SearchedMovies = () => {

    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")

    const data =  useGetRelatedMovies(query)
    
  return (
    <section id="searchedmovies">
        
        {data && data.results.length > 0 ? (
          <div>
            <h1>Filmes Relacionados À: <span>{query}</span></h1>
            <ul>
              {data.results.map(movie => (
                <MoviesList key={movie.id} movie={movie} />
              ))}
            </ul>

          </div>
        ) : ( <h1>Não foram encontrados resultados para: <span>{query}</span> </h1> )}

    </section>
  )
}

export default SearchedMovies

