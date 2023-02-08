import "./SearchBar.css"

// icons
import { AiOutlineSearch, AiFillHome } from "react-icons/ai"

// router
import { useNavigate, NavLink } from "react-router-dom"

// hooks
import { useState } from "react"

const SearchBar = () => {

    const [searchContent, setSearchContent] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSearch = () => {
        
        if(searchContent.length > 0) {
            navigate(`/search?query=${searchContent}`)
        }

        setSearchContent("")
    }

  return (
    <div id="search-bar">
        <div className="logo">
            <NavLink to="/"><h1 className="popular"> Populares </h1> <h1 className="home"><AiFillHome /></h1></NavLink>
        </div>

        <form onSubmit={handleSubmit} className="search-form">
            <input placeholder="Nome do filme" type="text" value={searchContent} onChange={(e) => setSearchContent(e.target.value)} />
            <button className="search-button" onClick={handleSearch}> <AiOutlineSearch /> </button>
        </form>
    </div>
  )
}

export default SearchBar