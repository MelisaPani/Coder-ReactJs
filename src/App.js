import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import './estilos.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar/>

      <ItemListContainer/>
    </div>

  );
}

export default App;
