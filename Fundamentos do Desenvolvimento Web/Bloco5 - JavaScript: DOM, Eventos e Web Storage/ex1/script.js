function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  //1
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function doList(day) {
      let createADay = document.createElement('li');
      createADay.className = 'day';
      createADay.innerHTML = day;
      let ulList = document.getElementById('days');

      if(day === 24 || day === 25 || day === 31) {
          createADay.className += ' holiday';
      }

      if(day === 4 || day === 11 || day === 18 || day === 25) {
          createADay.className += ' friday';
      }

      ulList.appendChild(createADay);
  }

  for(let i = 0; i < dezDaysList.length; i++) {
    doList(dezDaysList[i]);
  }

  //2
  function createAButton(feriado) {
    let buttonBorn = document.createElement('button');
    buttonBorn.id = 'btn-holiday';
    buttonBorn.innerHTML = feriado;

    let fatherDiv = document.querySelector('.buttons-container');
    fatherDiv.appendChild(buttonBorn);
  }
  createAButton('Feriados');

  //3
  let buttonVar = document.querySelector('#btn-holiday');
  let daysHoliday = document.querySelectorAll('.holiday');
  buttonVar.addEventListener('click', changeBackColor);
  let backOld = 'rgb(238, 238, 238)';
  let backNew = '#888';
  
  function changeBackColor(event) {
      for(let i in daysHoliday) {
            if(daysHoliday[i].style.backgroundColor === backOld) {
                daysHoliday[i].style.cssText = 'background-color: #888';
            }
            else {
                daysHoliday[i].style.cssText = 'background-color: rgb(238, 238, 238)';
            }
        }
    }