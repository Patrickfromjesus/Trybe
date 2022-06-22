const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//1
function dragonDamage(strength) {
  const damage = Math.floor(Math.random * (strength + 1 - 15) + 15);
  return damage;
}
//2
function warriorDamage(strength, weaponDmg) {
  const damage = Math.floor(Math.random * (weaponDmg + 1 - strength) + strength);
  return damage;
}
//3
function spendMage(intelligence) {
  const newMage = {};
  let damage = Math.floor(Math.random * (intelligence + 1) + intelligence);
  let mana = 15;

  if(mana < 15) {
    damage = 'Não possui mana suficiente';
    mana = 0;
  }
  newMage.damage = damage;
  newMage.mana = mana;
  return newMage;
}