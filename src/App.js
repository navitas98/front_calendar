import './App.css';
import Forma_Calendario from './componente/componente1.jsx';
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
      <center>
        <h1>CALENDARIO DE ADVIENTO</h1>
     
      {regalos.map((regalo) => (
        
          <Forma_Calendario nombre={regalo.nombre} descripcion={regalo.descripcion} imagen={regalo.imagen} visible={regalo.visible}></Forma_Calendario>
        ))}
        
        </center>
    </div>
  );
}

export default App;
