//const assert = require ('assert');
var avocadoPrices = function(avocado){
  switch (avocado) {
    case '1 for R3':
    console.log('1 for R3');
    return 'R3';
    case '2 for R7':
      console.log();
      return 'R7'
      case '3 for R10':
        console.log('3 for R10');
return 'R10';
    default:
      console.log('5 for R14.50');
      return 'R14.50'
  }
// assert.equal(avocadoPrices('1 for R3'),'R3');
// assert.equal(avocadoPrices('2 for R7'),'R7');
// assert.equal(avocadoPrices('3 for R10'),'R10');
// assert.equal(avocadoPrices('5 for R14.50'),'R14.50');
