import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import './estilos.css';
import ItemDetailContainer from "./componentes/ItemDetailContainer"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from './componentes/About';
import Contacto from './componentes/Contacto';
import Footer from './componentes/footer';
import Cart from './componentes/Cart';


function App() {
  return (
    <div>
  <BrowserRouter>
      <NavBar/>
    <Routes>
      <Route path ="/" element={ <ItemListContainer/>}/>
      <Route path ="/contacto" element={ <Contacto/>}/>
      <Route path ="/categoria/:categoriaId" element={ <ItemListContainer/>}/>
      <Route path ="/item/:itemId" element={ <ItemDetailContainer/>}/>
      <Route path ="/about" element={ <About/>}/>
      <Route path ="/cart" element={ <Cart/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
    </div>

  );
}

export default App;
