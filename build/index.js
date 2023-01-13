"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clube_1 = __importDefault(require("./Clube"));
const QuadraFutebol_1 = __importDefault(require("./QuadraFutebol"));
const QuadraTenis_1 = __importDefault(require("./QuadraTenis"));
const clube1 = new Clube_1.default();
const quadraFutebol1 = new QuadraFutebol_1.default();
clube1.addQuadraFut(quadraFutebol1);
const reserva = quadraFutebol1.reservar(new Date('2023/01/15'));
console.log(reserva);
const quadraTenis1 = new QuadraTenis_1.default();
clube1.addQuadraTenis(quadraTenis1);
const reserva2 = quadraTenis1.reservar(new Date('2023-01-15'));
console.log(reserva2);
