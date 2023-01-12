class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(m: string, n: string, np: number[], nt: number[]) {
    this._matricula = m;
    this._nome = n;
    this._notasProva = np;
    this._notasTrabalho = nt;
  }

  soma() {
    return [...this._notasProva, ...this._notasTrabalho]
      .reduce((acc, curr) => acc + curr, 0);
  }

  get matricula() { return this._matricula };
  get nome() { return this._nome };

  media() {
    const sum = this.soma();
    return (sum / 6).toFixed(2);
  }
}

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


const person1 = new Person('person1', new Date('1990-05-01'));
const person2 = new Person('person2', new Date('1931-10-21'));

console.log(person1.birthDate);
person1.birthDate = new Date('1992-05-01');
console.log(person1.birthDate);
 
console.log(person2.birthDate);
person2.birthDate = new Date('1902-10-21');
console.log(person2.birthDate);
 

