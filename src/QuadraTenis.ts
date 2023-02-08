import IAgenda from './interfaces/IAgendas';
import normas from './normas/normasDeUso';
import Quadra from './Quadra';

export default class QuadraTenis extends Quadra {
  reservar<ITenis>(d: Date): IAgenda<ITenis> {
    const tenisRules = normas.tenis;
    return {
      protocol: this.generateProtocol(),
      date: d,
      rules: tenisRules as unknown as ITenis,
    }
  }
}