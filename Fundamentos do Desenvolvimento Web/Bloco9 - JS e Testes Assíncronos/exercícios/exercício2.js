async function takeCripto() {
  const url = 'https://api.coincap.io/v2/assets';
  const criptoObj = await fetch(url);
  const criptoArr = await criptoObj.json();
  console.log(criptoArr);
  criptoArr.data.forEach((element, index) => {
    if(index < 10) {
      const { name, symbol, priceUsd } = element;
      createLi(`${name} (${symbol}): ${priceUsd}`);
    }
  })
}
takeCripto();

function createLi(criptoContent) {
  const getlist = document.querySelector('#cripto-list');
  const li = document.createElement('li');
  li.innerHTML = criptoContent;
  getlist.appendChild(li);
}