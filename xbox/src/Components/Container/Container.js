
import './Container.css'


const Container = (props) => {
  return (
    
    
    <div className='list'>
        <h2 className='container-title'>{props.title}</h2>
        <div className='container-cards'>
          {props.children}
        </div>
     </div>
     
   )
};
export default  Container;