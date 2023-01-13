"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normasDeUso_1 = __importDefault(require("./normas/normasDeUso"));
const Quadra_1 = __importDefault(require("./Quadra"));
class QuadraFutebol extends Quadra_1.default {
    constructor() {
        super(...arguments);
        this.rulesFutebol = normasDeUso_1.default.futebol;
    }
    reservar(d) {
        return {
            protocol: this.generateProtocol(),
            date: d,
            rules: this.rulesFutebol,
        };
    }
}
exports.default = QuadraFutebol;
