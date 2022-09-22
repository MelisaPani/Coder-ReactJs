/* import ItemListContainer from './componentes/ItemListContainer'; */
import NavBar from './componentes/NavBar';
import './estilos.css';
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './pages/About';
import Contacto from './pages/Contacto';
import Footer from './componentes/footer';
import Cart from './componentes/Cart';
import { CartProvider } from './context/CartContext'; 
import Home from './pages/Home/Home';


function App() {
  return (
    <div>
    <CartProvider>
      <BrowserRouter>
          <NavBar/>
        <Routes>
          <Route path ="/" element={ <Home/>}/>
          <Route path ="/contacto" element={ <Contacto/>}/>
          <Route path ="/categoria/:categoriaId" element={ <Home/>}/>
          <Route path ="/categoria/all" element={ <Home/>}/>
          <Route path ="/item/:itemId" element={ <ItemDetailContainer/>}/>
          <Route path ="/about" element={ <About/>}/>
          <Route path ="/cart" element={ <Cart/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  </CartProvider>
    </div>

  );
}

export default App;
