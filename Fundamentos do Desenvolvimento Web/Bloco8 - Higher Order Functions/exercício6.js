const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];

//=================================================================================

function averageCalculate(index) {
    const sum = grades[index].reduce((accGrade, currGrade) => accGrade + currGrade, 0);
    return sum / grades[index].length;
}

function studentAverage() {
  return students.map((student, index) => {
    return {
      name: student,
      average: averageCalculate(index),
    };
  })
}

//=================================================================================

function studentAverage2() {
  return students.map((student, index) => {
    return {
      name: student,
      average: grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length,
    };
  })
}

//=================================================================================
console.log(JSON.stringify(studentAverage()) === JSON.stringify(expected));
console.log(JSON.stringify(studentAverage2()) === JSON.stringify(expected));

