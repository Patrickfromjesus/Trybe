import './App.css';
import Image from './Image.js'

function App() {
  return (
    <div className="App">
      <h2>Imagem do gato:</h2>
      <Image alternativeText='Cute cat staring' source='https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg' />
    </div>
  );
}

export default App;
