"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Quadra {
    generateProtocol() {
        return (Math.random() + 1).toString(30).substring(3);
    }
}
exports.default = Quadra;
