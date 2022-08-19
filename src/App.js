import './estilos.css';

function App() {
let imagen = "t5.png";
let titulo = "Impresiones 3d";
let descripcion = " Are You A Fan Of Astronomy? An Astronaut Dreamer? This is you place"

  return (
    <div className = "container">
      <div className = "row">
        <div className= "col-md-4 offset-md-2">
          <img src={imagen} alt = {titulo} className= "img-fluid"/>
        </div>
        <div className= "col-md-4">
          <h1>{titulo}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>

  );
}

export default App;
