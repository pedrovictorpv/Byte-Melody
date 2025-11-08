import './App.css'
import Card from './Card.jsx'

//import { IoFlame } from "react-icons/io5";
//import { IoRainy } from "react-icons/io5";
//import { IoLeaf } from "react-icons/io5";
import { FiAlertOctagon } from "react-icons/fi";
import { IoRainy, IoFlame, IoLeaf } from "react-icons/io5";

export default function App() {
  const playSound = (soundType) => {

    const audio = new Audio();

    switch(soundType) {
      case 'rain':
        // Using a nature sounds API or local file
        console.log('Floresta calmante...');
        audio.src = '/Florestamp4.mp3';
        audio.play();
        break;
      case 'fire':
        console.log('Sono Bom...');
        audio.src = '/ambiente.mp3';
        audio.play();
        break;
      case 'forest':
        console.log('Vida Natural...');
        audio.src = '/meditarmp4.mp3';
        audio.play();
        break;
    }
  };


  function tocarSom(soundType){
    console.log('Tocando som de ' + soundType);
  }


  //var exemplo = function tocarSom() { console.log('Tocando som...') } // Function expression atribuida a variavel
  //var exemplo = () => {console.log("Tocando um som...")} // Arrow function atribuida a variavel
  //exemplo()

  return (
    <div className="app">
      <header className="app-header">
        <h1>Meditação</h1>
        <p>Apenas relaxe... </p>
      </header>

      <main className="cards-container">
        <Card
          icon={<IoRainy />}
          title="Floresta calmante"
          description="respire profundamente com o som"
          onClick={() => playSound('rain')}
        />
        <Card
          icon={<IoFlame />}
          title="Sono bom"
          description="Você merece descansar"
          onClick={() => playSound('fire')}
        />
        <Card
          icon={<IoLeaf />}
          title="Vida natural"
          description="Sinta a energia da natureza"
          onClick={() => playSound('forest')}
        />
      </main>
    </div>
  )
}
