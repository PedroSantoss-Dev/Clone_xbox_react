import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home/Home"; 
import Login from "./pages/Login/Login";
import WishList from "./pages/WishList/WishList";
import Register from "./pages/Register/Register";
import Profiler  from "./pages/Profile/Profile";
import Game from "./pages/Game/Game"

function Main() {
    return (
      <div className="Main">         
          <BrowserRouter>
          <Navbar/>
             <Routes>
               <Route exact path='/' element={<Home />} />
                <Route  path='/login' element={<Login />} /> 
                <Route  path='/register' element={<Register />} /> 
                <Route path="/wishlist" element={<WishList />} />
                <Route  path='/profile' element={<Profiler/>} /> 
                <Route path="/game" element={<Game />} />
             </Routes>
            <Footer/> 
          </BrowserRouter>
      </div>
    );
  }
  
  export default Main;