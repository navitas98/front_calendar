import './App.css';
import Forma_Calendario from './componente/componente1.jsx';
import Nav_bar from './componente/nav_bar.jsx';
import Info from './componente/info.jsx';
import Regalo from './componente/regalo.jsx';
import Tabla from './componente/tabla.jsx';
import {useState,useEffect}from "react"
import axios from "axios"
function App() {
  const [regalos, setRegalos] = useState([]);
  useEffect(() => {
      // Hacer la solicitud para obtener regalos al cargar el componente
      axios.get('https://calendario-back.deno.dev/regalos/')
        .then((response) => {
          setRegalos(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener regalos:', error);
        });
    }, []);

console.log(regalos);
  return (
    <div >
      <Nav_bar></Nav_bar>
      <Info></Info>
      <Tabla miArray={regalos} />
      <h1>Gracias por estar ahi siempre</h1>
    </div>
  );
}

export default App;
