import IAgenda from './interfaces/IAgendas';
import IFutebol from './interfaces/IFutebol';
import normas from './normas/normasDeUso';
import Quadra from './Quadra';

export default class QuadraFutebol extends Quadra {
  rulesFutebol: IFutebol = normas.futebol;

  reservar<IFutebol>(d: Date): IAgenda<IFutebol> {
    return {
      protocol: this.generateProtocol(),
      date: d,
      rules: this.rulesFutebol as unknown as IFutebol,
    };
  }
}