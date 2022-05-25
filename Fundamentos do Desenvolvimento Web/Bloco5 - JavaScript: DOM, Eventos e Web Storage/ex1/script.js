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
  function createAButton(feriado, whatId) {
    let buttonBorn = document.createElement('button');
    buttonBorn.id = whatId;
    buttonBorn.innerHTML = feriado;

    let fatherDiv = document.querySelector('.buttons-container');
    fatherDiv.appendChild(buttonBorn);
  }
  createAButton('Feriados', 'btn-holiday');

  //3
  let buttonVar = document.querySelector('#btn-holiday');
  let daysHoliday = document.querySelectorAll('.holiday');
  buttonVar.addEventListener('click', changeBackColor);
  let backOld = 'rgb(238, 238, 238)';
  let backNew = '#fff';
  
  function changeBackColor(event) {
      for(let i in daysHoliday) {
            if(daysHoliday[i].style.backgroundColor === backOld) {
                daysHoliday[i].style.cssText = 'background-color: #fff';
            }
            else {
                daysHoliday[i].style.cssText = 'background-color: rgb(238, 238, 238)';
            }
        }
  }

  //4
  createAButton('Sexta-Feira', 'btn-friday');

  //5
  let buttonFriday = document.getElementById('btn-friday');
  buttonFriday.addEventListener('click', frided);
  let storage = [];
  let fridayContainer = document.querySelectorAll('.friday');
  for(let i of fridayContainer) {
    storage.push(i.innerText);
  }
  
  function frided() {
    for(let p in fridayContainer) {
        if(fridayContainer[p].innerText !== 'SEXTOU!') {
            fridayContainer[p].innerText = 'SEXTOU!';
        }
        else {
            fridayContainer[p].innerText = storage[p];
        }
    }
  }

  //6
  let daysStorage = document.querySelectorAll('.day');
  for(let i = 0; i < daysStorage.length; i++) {
    daysStorage[i].addEventListener('mouseenter', zoomDay);
  }
  for(let i = 0; i < daysStorage.length; i++) {
    daysStorage[i].addEventListener('mouseleave', leaveZoomDay);
  }

  function leaveZoomDay(event) {
      let helper = event.target;
      if(helper.style.fontSize === '30px') {
        helper.style.cssText += 'font-size: 20px';
      }
  }

  function zoomDay(events) {
      let helper = events.target;
      if(helper.style.fontSize !== '30px') {
        helper.style.cssText += 'font-size: 30px';
      }
  }

  //7
  function addTask(task, newElements, whatClass, color) {
      let elementTaked = document.querySelector('.my-tasks');
      let createAString = document.createElement(newElements);
      createAString.innerText = task;
      createAString.className = whatClass;
      
      if(color !== '') {
        createAString.style.cssText = 'background-color: ' + color;
      }

      elementTaked.appendChild(createAString); 
  }
  addTask('cozinhar', 'span', 'cock', '');

  //8
  addTask('', 'div', 'task', '#f00');

  //9
  let divTask = document.querySelector('.task');
  divTask.addEventListener('click', selectTask);

  function selectTask(eventTask) {
    let classCheck = eventTask.target
    if(classCheck.className === 'task') {
      classCheck.className = 'task selected';
    }
    else if(classCheck.className === 'task selected') {
        classCheck.className = 'task';
    }
  }

  //10
  let daySelect = document.querySelectorAll('.day');
  for(let i = 0; i < daySelect.length; i++) {
    daySelect[i].addEventListener('click', changeColor);
  }

  function changeColor(eventToChange) {
      if(document.querySelector('.selected')){
        if(eventToChange.target.style.color !== document.querySelector('.selected').style.backgroundColor) {
          let appear = document.querySelector('.selected').style.backgroundColor;
          eventToChange.target.style.cssText += 'color: ' + appear;
        }
        else if(eventToChange.target.style.color === document.querySelector('.selected').style.backgroundColor) {
          let appear = 'rgb(119,119,119)';
          eventToChange.target.style.cssText += 'color: ' + appear;
      }
    }
    else {
        let appear = 'rgb(119,119,119)';
        eventToChange.target.style.cssText += 'color: ' + appear;
    }
  }

