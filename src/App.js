import './App.css';
import { Landmark } from './componets/Landmark.jsx'


function App() {
  return (
    <div className="App">
      <div className='conteneder-principal'>
      <h1>THE BEST LANDMARKS IN THE WORLD</h1>
    <Landmark 
    nombre='Torre de pisa'
    pais='Italia'
    landmark='Esta famosa torre empezó a inclinarse cuando inició su construcción en 1173.La Torre de Pisa mide 55,86 metros de altura con un peso estimado de 14.700 toneladas y una inclinación de unos 4° extendiéndose 3,9 m de la vertical. En 1964 el gobierno italiano solicitó ayuda para evitar que la Torre de Pisa se derrumbara.'
    img='italia' />

    <Landmark 
        nombre='Torre Eiffel'
        pais='Paris'
        landmark='La Torre Eiffel es una construcción de hierro de 300 metros de altura que fue creada para la Exposición Universal de París de 1889. Actualmente constituye el símbolo más representativo de París.'
        img='paris' />

    <Landmark 
            nombre='Ópera de Sídney'
            pais='Sídney'
            landmark='El edificio está compuesto por tres grupos de “valvas” abovedadas y entrelazadas que albergan las dos salas principales de espectáculos y conciertos, así como un restaurante. Esta estructura en forma de valvas se asienta en una vasta plataforma, rodeada de amplias terrazas, que cumplen la función de paseos peatonales.'
            img='sydney'   />

    </div>
    </div>
  );
}

export default App;
