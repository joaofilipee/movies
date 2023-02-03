import "./SearchBar.css"

// icons
import { AiOutlineSearch } from "react-icons/ai"

// router
import { useNavigate } from "react-router-dom"

// hooks
import { useState } from "react"

const SearchBar = () => {

    const [searchContent, setSearchContent] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleSearch = () => {
        navigate(`/search/${searchContent}`)
        setSearchContent("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" value={searchContent} onChange={(e) => setSearchContent(e.target.value)} />
            <button onClick={handleSearch}> <AiOutlineSearch /> </button>
        </form>
    </div>
  )
}

export default SearchBar