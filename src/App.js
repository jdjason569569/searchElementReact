
import './App.css';
import { useState } from 'react';
import SearchBar from './components/searchBar';

const people = [
  {
    id: 'carlos',
    title: 'perez'
  },
  {
    id: 'luis',
    title: 'macias'
  },
  {
    id: 'lana',
    title: 'sarria'
  },
  {
    id: 'lina',
    title: 'lopez'
  },
  {
    id: 'juan',
    title: 'velez'
  },
  {
    id: 'mario',
    title: 'paz'
  }
]

const calendar = [
  {
    id: 'enero',
    title: 'pensar en la maquina'
  },
  {
    id: 'febrero',
    title: 'comprar maquina'
  },
  {
    id: 'marzo',
    title: 'instalar maquina'
  },
  {
    id: 'abril',
    title: 'probar maquina'
  },
  {
    id: 'mayo',
    title: 'poner a funcionar maquina'
  },
  {
    id: 'junio',
    title: 'comprar otra maquina'
  }
]

const emails = [
  {
    id: 'email one',
    title: 'reunion enero'
  },
  {
    id: 'email two',
    title: 'reporte economico'
  },
  {
    id: 'email three',
    title: 'generador dinamico'
  },
  {
    id: 'email four',
    title: 'reporte final'
  },
  {
    id: 'email five',
    title: 'reporte financiero'
  },
  {
    id: 'email six',
    title: 'reporte personal'
  }
]



function App() {

  const [data, setData] = useState([...people, ...calendar, ...emails]);
  const [selection, setSelection] = useState(null);
  const [currenOption, setCurrentOption] = useState('All');

  const handleClick = (e) => {
    switch (e.target.name) {
      case "all":
        setData([...people, ...calendar, ...emails]);
        setCurrentOption("all");
        break;
        case "people":
        setData([...people]);
        setCurrentOption("people");
        break;
        case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        break;
        case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        break;
        default:
    }
  }

  return (
    <div>
      <button onClick={handleClick} name="all">All</button>
      <button onClick={handleClick} name="people">people</button>
      <button onClick={handleClick} name="calendar">calendar</button>
      <button onClick={handleClick} name="emails">emails</button>
      <SearchBar items={data} onItemSelected={()=>{}}></SearchBar>
    </div>
  );
}

export default App;
