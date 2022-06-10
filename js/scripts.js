// Business Logic

function beepBoop(number) {
  let numberArray = [];
  for (let index = 0; index <= parseInt(number); index += 1) {
    if(index.includes(1))
    numberArray.push(index);
  }
  return numberArray;
}
