import GamePass from '../../assets/GamePass.svg'
import Jogos from '../../assets/jogos.svg'
import Console from '../../assets/consoles.svg'
import Acessorios from '../../assets/acessorios.svg'
import Ofertas from '../../assets/ofertas.svg'
import '../Barra/Barra.css'

const Barra = () => {
    return(
        
        <nav className='barra'>
            <ul className='barra_list'>
                <li className='barra_li'><img className="barra_img"alt='icone' src={GamePass}/><a href="">Game Pass</a></li>
                <li className='barra_li'><img className="barra_img" alt='icone jogos' src={Jogos}/><a href="">Jogos</a></li>
                <li className='barra_li'><img className="barra_img" alt='icone console' src={Console}/><a href="">Console</a></li>
                <li className='barra_li'><img className="barra_img"alt='icone jone' src={Acessorios}/><a href="">Acessorios</a></li>
                <li className='barra_li'><img className='barra_img' alt='icone tag' src={Ofertas}/><a href="">Ofertas</a></li>
            </ul>
        </nav>
        
    )
}

export default Barra;