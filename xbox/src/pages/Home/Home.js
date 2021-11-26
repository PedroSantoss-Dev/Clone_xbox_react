
import Slideshow from '../../Components/Slide.js/Slide';
import Barra from '../../Components/Barra/Barra'
import Container from '../../Components/Container/Container'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';



const Home =() =>{
   const [games, setGames] = useState([]) ;
   const [montad, setMontad] = useState(false); 
   

   const getData = async () => {
      await axios.get('/game/findMany')
      .then(response => {
          setGames(response.data)
      })
    }

   

    useEffect(() =>{
        setMontad(true)
        getData()
    },[montad])
    return(
        <main>
            <Slideshow/>
            <Barra/>
            
            <Container title='Destaques'>
                 {
                   games.map(game => (
                     <Card 
                       id={game.id}
                       image={game.image}
                       title={game.name}
                       preco={game.price}
                       key={game.id}
                       
                     />
                   ))
                 }
               
                 
            </Container>
           
      
           
        </main>
    )
}

export default Home