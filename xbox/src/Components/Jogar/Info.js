import { useState } from 'react';

const Info = (info) => {
    const [jogos, setJogos] = useState(info.location.state);
    return(
        <div>
            <a className='card-item' href={jogos.linkItem}>
             <div className='card-image'>
               <img src={jogos.image} alt={jogos.title}></img>
             </div>
             <h2 className='card-title'>{jogos.title}</h2>
             <span className='card-preco'>{'R$ ' + jogos.preco}</span>
           </a>
           <a className='wishlist' href={jogos.linkWish}>
            
           </a>
        </div>
    )
}
export default Info;