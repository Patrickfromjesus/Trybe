const clickCount = document.querySelector('#click-count');
const getCount = document.querySelector('#count'); 

clickCount.addEventListener('click', () => {
  getCount.innerHTML = parseInt(getCount.innerHTML) + 1; 
})