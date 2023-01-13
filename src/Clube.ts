import Quadra from './Quadra';

export default class Clube {
  private _quadrasFutebol: Quadra[] = [];
  private _quadrasTenis: Quadra[] = [];

  public addQuadraFut(q: Quadra) {
    this._quadrasFutebol.push(q);
  }

  public addQuadraTenis(q: Quadra) {
    this._quadrasTenis.push(q);
  }

  public buscarQuadraFut(i: number): Quadra {
    return this._quadrasFutebol[i];
  }

  public buscarQuadraTenis(i: number): Quadra {
    return this._quadrasTenis[i];
  }
}