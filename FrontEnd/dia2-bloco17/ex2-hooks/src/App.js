import { useState } from "react";
import useTimer from "./Hooks/useTimer";

function App() {
  const [reset, setReset] = useState(true);

  const handleTimer = (resetOrder) => {
    setReset(resetOrder);
  }

  const { timer, bingo } = useTimer(reset);

  return (
    <div className="App">
      <p>{ timer }</p>
      {
        !reset && (
        <div>
          <button type="button" onClick={ () => handleTimer(true) }>Zerar</button>
          <button type="button" onClick={ () => handleTimer('stop') }>Pausar</button>
        </div>)
      }
      {
        (reset === 'stop' || reset) && (
        <button type="button" onClick={ () => handleTimer(false) }>{ reset === 'stop' ? 'Despausar' : 'Iniciar' }</button>)
      }
      {
        reset === 'stop' && (
          <button type="button" onClick={ () => handleTimer(true) }>Zerar</button>
        )
      }
      <p>Número do bingo: { bingo }</p>
      {
        (((bingo % 3 === 0 || bingo % 5 === 0) && bingo !== false) && timer <= 4) && <h5><em>BINGO!</em></h5>
      }
      </div>
  );
}

export default App;
