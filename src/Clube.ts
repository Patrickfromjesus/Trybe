import Quadra from './Quadra';

export default class Clube {
  private _quadras: Quadra[] = [];

  public addQuadra(q: Quadra) {
    this._quadras.push(q);
  }

  public buscarQuadra<T extends Quadra>(i: number): T {
    return this._quadras[i] as T;
  }
}