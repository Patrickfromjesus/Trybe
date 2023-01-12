class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(n: string, b: Date) {
    this._name = n;
    this._birthDate = b;
  }

  get name() { return this._name }
  get birthDate() { return this._birthDate }

  set name(newName: string) {
    if (newName.length < 3) return;
    this._name = newName
  };

  set birthDate(newBirthDate: Date) {
    const today = Date.now();
    if (newBirthDate.getMilliseconds() > today) return;
    const year = Number(Date().slice(11, 16));
    if (year - newBirthDate.getFullYear() > 120) return;
    this._birthDate = newBirthDate
  };
}

/* class Student extends Person {
  private _matricula: string;
  private _notasProva: number[] = [];
  private _notasTrabalho: number[] = [];

  constructor(n: string, d: Date) {
    super(n, d);
    this._matricula = this.generateMatricula();
  }

  private generateMatricula(): string {
    const numbers = Math.floor(Math.random() * 10);
    const index = Math.floor(Math.random() * 2 + 1);
    return `100000000${numbers}-${this.name.substring(2).toUpperCase()}.${this.name.substring(index, 2)}`;
  }

  soma() {
    return [...this._notasProva, ...this._notasTrabalho]
      .reduce((acc, curr) => acc + curr, 0);
  }

  get matricula() { return this._matricula };

  set notasProva(notas: number[]) {
    if (notas.length !== 4) throw new Error('Deve ter exatamente 4 notas');
    this._notasProva = notas;
  }

  set notasTrabalho(notas: number[]) {
    if (notas.length !== 2) throw new Error('Deve ter exatamente 2 notas');
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
student1.notasProva = [10, 9, 8, 9, 10];
student1.notasTrabalho = [10, 10, 5];
console.log(student1);

const student2 = new Student(person2.name, person2.birthDate);
console.log(student2);
student2.notasProva = [5, 6, 5, 9];
student2.notasTrabalho = [10, 8];
console.table(student2); */

interface Employee {
  registration: number;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

class Subject {
  private _name: string = '';

  constructor(n: string) {
    this.name = n;
  }

  get name() { return this._name };

  set name(n: string) {
    if (n.length < 3) return;
    this._name = n;
  }
}

/* const math = new Subject('math');
console.log(math.name);
math.name = 'portuguese';
math.name = 'a';
console.log(math.name); */

class Teacher extends Person implements Employee {
  private _registration: number;
  private _salary: number = 0;
  private _admissionDate: Date = new Date(Date());
  private _subject: Subject;

  constructor(n: string, b: Date, s: number, sub: string) {
    super(n, b);
    this._registration = Number(this.generateRegistration());
    this.salary = s;
    this._subject = new Subject(sub);  
  }

  get registration() { return this._registration };

  generateRegistration() {
    const digit = '1234567890';
    let register = this.admissionDate.getFullYear().toString();
    for (let i = 0; i < 12; i += 1) {
      register += digit.charAt(Math.floor(Math.random() * digit.length));
    }
    return register;
  }

  get salary() { return this._salary };

  set salary(s: number) {
    if (s < 0) return;
    this._salary = s;
  }

  set admissionDate(admDate: Date) {
    const today = Date.now();
    if (today < admDate.getMilliseconds()) return;
    this._admissionDate = admDate;
  }

  get admissionDate() { return this._admissionDate };

  get subject () { return this._subject.name };
};

const teacher1 = new Teacher('teacher1', new Date('1995-06-18'), 2900, 'Math');

console.log(teacher1.name);
console.log(teacher1.birthDate);
console.log(teacher1.salary);
console.log(teacher1.admissionDate);
console.log(teacher1.registration);
console.log(teacher1.subject);


