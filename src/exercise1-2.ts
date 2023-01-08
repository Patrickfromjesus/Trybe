class Student {
  registration: number;
  name: string;
  testGrades: number[];
  workGrades: number[];

  constructor(r: number, n: string, t: number[], w: number[]) {
    this.registration = r;
    this.name = n;
    this.testGrades = t;
    this.workGrades = w;
  }

  sumGrades(): number {
    const sumTest = this.testGrades.reduce((acc, curr) => acc + curr, 0);
    const sumWork = this.workGrades.reduce((acc, curr) => acc + curr, 0);
    return (sumTest + sumWork);
  }

  get averageGrades() {
    const sum = this.sumGrades();
    return (sum / 6).toFixed(1);
  }
};

const student1 = new Student(12345, 'studentOne', [8.0, 7.5, 6.5, 9.0], [10, 9.5]);

console.log(student1);

console.log(student1.sumGrades());
console.log(student1.averageGrades);
