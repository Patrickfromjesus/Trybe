function convert (value:number, unitIn:string, unitTo:string):number {
  const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  const indexIn = units.indexOf(unitIn);
  const indexTo = units.indexOf(unitTo);
  const powOfTen = indexTo - indexIn;
  return value * Math.pow(10, powOfTen);
}

console.log(convert(1, 'km', 'hm'));