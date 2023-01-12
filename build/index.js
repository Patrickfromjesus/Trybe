"use strict";
class Person {
    constructor(n, b) {
        this._name = n;
        this._birthDate = b;
    }
    get name() { return this._name; }
    get birthDate() { return this._birthDate; }
    set name(newName) {
        if (newName.length < 3)
            return;
        this._name = newName;
    }
    ;
    set birthDate(newBirthDate) {
        const today = Date.now();
        if (newBirthDate.getMilliseconds() > today)
            return;
        const year = Number(Date().slice(11, 16));
        if (year - newBirthDate.getFullYear() > 120)
            return;
        this._birthDate = newBirthDate;
    }
    ;
}
class Student extends Person {
    constructor(n, d) {
        super(n, d);
        this._notasProva = [];
        this._notasTrabalho = [];
        this._matricula = this.generateMatricula();
    }
    generateMatricula() {
        const numbers = Math.floor(Math.random() * 10);
        const index = Math.floor(Math.random() * 2 + 1);
        return `100000000${numbers}-${this.name.substring(2).toUpperCase()}.${this.name.substring(index, 2)}`;
    }
    soma() {
        return [...this._notasProva, ...this._notasTrabalho]
            .reduce((acc, curr) => acc + curr, 0);
    }
    get matricula() { return this._matricula; }
    ;
    set notasProva(notas) {
        if (notas.length !== 4)
            throw new Error('Deve ter exatamente 4 notas');
        this._notasProva = notas;
    }
    set notasTrabalho(notas) {
        if (notas.length !== 2)
            throw new Error('Deve ter exatamente 2 notas');
        this._notasTrabalho = notas;
    }
    media() {
        const sum = this.soma();
        return (sum / 6).toFixed(2);
    }
}
const person1 = new Person('person1', new Date('1990-05-01'));
const person2 = new Person('person2', new Date('1931-10-21'));
console.log(person1.birthDate);
person1.birthDate = new Date('1992-05-01');
console.log(person1.birthDate);
console.log(person2.birthDate);
person2.birthDate = new Date('1902-10-21');
console.log(person2.birthDate);
const student1 = new Student(person1.name, person1.birthDate);
console.log(student1);
student1.notasProva = [10, 9, 8, 9];
student1.notasTrabalho = [10, 10];
console.table(student1);
/* student1.notasProva = [10, 9, 8, 9, 10];
student1.notasTrabalho = [10, 10, 5];
console.log(student1); */
const student2 = new Student(person2.name, person2.birthDate);
console.log(student2);
student2.notasProva = [5, 6, 5, 9];
student2.notasTrabalho = [10, 8];
console.table(student2);
