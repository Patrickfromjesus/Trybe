import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const clube1 = new Clube();
const quadraFutebol1 = new QuadraFutebol();
clube1.addQuadraFut(quadraFutebol1);
const reserva = quadraFutebol1.reservar(new Date('2023/01/15'));
console.log(reserva);


const quadraTenis1 = new QuadraTenis();
clube1.addQuadraTenis(quadraTenis1);
const reserva2 = quadraTenis1.reservar(new Date('2023-01-15'));
console.log(reserva2);
