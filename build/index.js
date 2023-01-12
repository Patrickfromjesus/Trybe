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
class Subject {
    constructor(n) {
        this._name = '';
        this.name = n;
    }
    get name() { return this._name; }
    ;
    set name(n) {
        if (n.length < 3)
            return;
        this._name = n;
    }
}
/* const math = new Subject('math');
console.log(math.name);
math.name = 'portuguese';
math.name = 'a';
console.log(math.name); */
class Teacher extends Person {
    constructor(n, b, s, sub) {
        super(n, b);
        this._salary = 0;
        this._admissionDate = new Date(Date());
        this._registration = Number(this.generateRegistration());
        this.salary = s;
        this._subject = new Subject(sub);
    }
    get registration() { return this._registration; }
    ;
    generateRegistration() {
        const digit = '1234567890';
        let register = this.admissionDate.getFullYear().toString();
        for (let i = 0; i < 12; i += 1) {
            register += digit.charAt(Math.floor(Math.random() * digit.length));
        }
        return register;
    }
    get salary() { return this._salary; }
    ;
    set salary(s) {
        if (s < 0)
            return;
        this._salary = s;
    }
    set admissionDate(admDate) {
        const today = Date.now();
        if (today < admDate.getMilliseconds())
            return;
        this._admissionDate = admDate;
    }
    get admissionDate() { return this._admissionDate; }
    ;
    get subject() { return this._subject.name; }
    ;
}
;
const teacher1 = new Teacher('teacher1', new Date('1995-06-18'), 2900, 'Math');
console.log(teacher1.name);
console.log(teacher1.birthDate);
console.log(teacher1.salary);
console.log(teacher1.admissionDate);
console.log(teacher1.registration);
console.log(teacher1.subject);
