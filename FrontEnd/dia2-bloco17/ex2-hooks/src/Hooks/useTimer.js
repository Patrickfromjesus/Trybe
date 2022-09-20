// Instruções do hook:
// Se reset for false, nada vai acontecer de diferente e será retornado o tempo atual.
// Se reset for true, o tempo será zerado e retornará 0 como tempo atual.
// Se reset for stop, o tempo será pausado e retornará o tempo atual em que foi pausado.
// Quando o timer chegar a 10 seg, a função retornará um número aleatório de 0 a 100.
// Inicialmente, o tempo é 0 e o número retornado é um bool false.
// O retorno é no modelo { timer: 0, bingo: false }.

import { useEffect, useState } from 'react';

const useTimer = (reset) => {
  const [timer, setTimer] = useState(0);
  const [bingo, setBingo] = useState(false);

  useEffect(() => {

    const idTime = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    if (reset === 'stop') clearInterval(idTime);

    const handleTimer = () => {
      setTimer(0);
    }
    if (reset === true) handleTimer();

    if (timer === 10) {
      setBingo(Math.floor(Math.random() * 100));
      setTimer(0);
    }

    return () => clearInterval(idTime); //unmount

  }, [timer, reset]);

  return { timer, bingo };
}
 
export default useTimer;
