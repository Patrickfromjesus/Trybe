"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normasDeUso_1 = __importDefault(require("./normas/normasDeUso"));
const Quadra_1 = __importDefault(require("./Quadra"));
class QuadraTenis extends Quadra_1.default {
    reservar(d) {
        const tenisRules = normasDeUso_1.default.tenis;
        return {
            protocol: this.generateProtocol(),
            date: d,
            rules: tenisRules,
        };
    }
}
exports.default = QuadraTenis;
