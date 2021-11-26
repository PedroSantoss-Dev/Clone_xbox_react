import '../Navbar/Navbar.css'
import logo from './lg.png';
import { FaHeart, FaRegQuestionCircle, FaRegUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {
   
    return(
      <div className='navbar'>
      <div className='navbar__logo'>
        <a href='/'>
           <img className='navbar__image' src={logo} alt='Xbox'></img>
        </a>
      </div>
        
      <div className='navbar__links'>
        <ul className='navbar__links__list'>
          <li>           
            <a className='items'href='https://www.xbox.com/pt-BR/xbox-game-pass?xr=shellnav'> 
                 <span className='text'>Game Pass</span>
            </a>
          </li>
          <li>           
            <a className='items'href='#!'> 
                 <span className='text'>Jogos</span>
            </a>
          </li>
          <li>           
            <a className='items'href='https://www.xbox.com/pt-BR/play?xr=shellnav'> 
                 <span className='text'>Jogar</span>
            </a>
          </li>

        </ul>

      </div>
      <div className='navbar__links'>
        <ul className='navbar__links__list'>
          <li>
            <a className='items' href='https://support.xbox.com/pt-BR/'>
              <FaRegQuestionCircle />
              <span className='text'>Suporte</span>
            </a>
          </li>
          <li>
            <a className='items' href='/wishlist'>
              <FaHeart />
              <span className='text'>Lista de Desejos</span>
            </a></li>
          <Link to="/login">
          <li>
            <p className='items' >
              <FaRegUser />
              <span className='text'>Fazer Login/Criar conta</span>
            </p>
          </li>
          </Link>
          <Link to="/profile">
          <li>
            <p className='items'>
              <FaRegUser/>
              <span className='text'>Perfil</span>
            </p>
          </li>
          </Link>
        </ul>
      </div>
    </div>
        

    )
}

export default Navbar;