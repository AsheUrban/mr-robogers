// Business Logic

function beepBoop(number) {
  let numberArray = [];
  for (let index = 0; index <= parseInt(number); index += 1) {
    numberArray.push(index);
    if (numberArray.includes(1) //make this index === "Beep!") {
    }
  }
  return numberArray;
}
