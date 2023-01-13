import IAgenda from './interfaces/IAgendas';

export default abstract class Quadra {
  protected generateProtocol() {
    return (Math.random() + 1).toString(30).substring(3);
  }

  abstract reservar<T>(d: Date): IAgenda<T>;
}
