"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clube {
    constructor() {
        this._quadrasFutebol = [];
        this._quadrasTenis = [];
    }
    addQuadraFut(q) {
        this._quadrasFutebol.push(q);
    }
    addQuadraTenis(q) {
        this._quadrasTenis.push(q);
    }
    buscarQuadraFut(i) {
        return this._quadrasFutebol[i];
    }
    buscarQuadraTenis(i) {
        return this._quadrasTenis[i];
    }
}
exports.default = Clube;
