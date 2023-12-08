import { FirstComponent } from './components/FirstComponent';
import { SecComponent } from './components/SecComponent';
import { ThirComponent } from './components/ThirComponent';
import { EventComponent } from './components/EventComponent';


import './App.css';

function App() {
  return (
    <>
      <FirstComponent />
      <main>
        <h2> Hello World en React! </h2>
        <p> No olvides que este es un proyecto de React con Typescript </p>
        <SecComponent />
        <ThirComponent nombre='Juan' apellido='Perez' ficha={{edad: 25, sexo: 'M', profesion: 'Programador'}} />
      </main>
      <EventComponent />
    </>
  );
}

export default App;
