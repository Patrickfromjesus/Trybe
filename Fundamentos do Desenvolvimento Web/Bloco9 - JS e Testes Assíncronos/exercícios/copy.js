async function takeCripto() {
  const url = 'https://api.coincap.io/v2/assets';
  const criptoObj = await fetch(url);
  const criptoArr = await criptoObj.json();
  const url2 = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json'
  const valueJson =  await fetch(url2);
  const valueObj = await valueJson.json();
  criptoArr.data.forEach((element, index) => {
    if(index < 10) {
      const { name, symbol, priceUsd } = element;
      const valueUSD = parseFloat(priceUsd) * valueObj.usd.brl;
      createLi(`${name} (${symbol}): ${valueUSD}`);
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