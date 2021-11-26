import { Link } from "react-router-dom"

export default function Search(filter) {
    return(
      <div className="app__list__searchbox">
        <div className="app__list__searchbox__container">
          
          <input 
            type="text"
            placeholder={filter.placeholder}
            onChange={filter.action}
          />
          
          <button>
            <Link to="/about">Sobre</Link>
          </button>
        </div>
        
      </div>
    )
  }