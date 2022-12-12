function convert(value, unitIn, unitTo) {
    var units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
    var indexIn = units.indexOf(unitIn);
    var indexTo = units.indexOf(unitTo);
    var powOfTen = indexTo - indexIn;
    return value * Math.pow(10, powOfTen);
}
console.log(convert(1, 'km', 'hm'));
