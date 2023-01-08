class Data {
  day: number;
  month: number;
  year: number;

  constructor(d: number, m: number, y: number) {
    this.day = d;
    this.month = m;
    this.year = y;
  }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro'];

    return months[this.month - 1];
  }

  getLeapYear (): boolean {
    if (this.year % 4 === 0) {
      if (this.year % 100 !== 0) {
        return true;
      } else if (this.year % 400 === 0) {
        return true;
      }
    }
    return false;
  }

  compare (anotherDate: Data): number {
    const currDate = Number(`${this.year}${this.month}${this.day}`);
    const compareDate = Number(`${anotherDate.year}${anotherDate.month}${anotherDate.day}`);
    if (currDate > compareDate) return 1;
    if (currDate < compareDate) return -1;
    return 0;
  }

  format (formated: string): string {
    if (formated.includes('/')) {
      return `${this.day}/${this.month}/${this.year}`;
    }
    if (formated.includes('-')) {
      return `${this.year}-${this.month}-${this.day}`;
    }
    if (formated.includes(',')) {
      return `${this.day}, ${this.getMonthName()} de ${this.year}`;
    }
    return `${this.day} de ${this.getMonthName()} de ${this.year}`;
  }
};

const data1 = new Data(10, 1, 2000);
console.log(data1);
console.log(data1.getLeapYear());
console.log(data1.format('aa, M, aaaa'));
console.log(data1.getMonthName());
