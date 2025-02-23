"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = b**2-4*a*c;
  if(discr<0){
    return arr;
  } else if (discr===0){
    let core = -b/(2*a);
    arr.push(core)
    
  }else if (discr > 0){
    let core1 = (-b + Math.sqrt(discr) )/(2*a);
    let core2 = (-b - Math.sqrt(discr) )/(2*a);
    arr.push(core1, core2)
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let dip = percent / 100 / 12;
  let s = amount - contribution
  let monthPay = s * (dip + (dip / (((1 + dip)**countMonths) - 1)))
  let finish =(monthPay*countMonths)
  return Number(finish.toFixed(2))
}

