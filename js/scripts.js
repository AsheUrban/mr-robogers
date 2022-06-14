// Business Logic

function beepBoop(number) {
  let numberArray = [];
  for (let index = 0; index <= parseInt(number); index += 1) {
    numberArray.push(index);
    if (numberArray[index].toString().includes(3)) { 
      numberArray[index] = "Won't you be my neighbor?"
    } else if (numberArray[index].toString().includes(2)) { 
      numberArray[index] = "Boop!"
      } else if (numberArray[index].toString().includes(1)) { 
        numberArray[index] = "Beep!"
      } 
  }
  return numberArray;
}

//UI Logic

$(document).ready(function() {
  $("form#be-my-neighbor").submit(function(event) {
    event.preventDefault();
    //gather values from input fields
    const numbers = $("#number").val();
    console.log(numbers);
    // //get beepBoop
    const beeperBooper = beepBoop(numbers);
    console.log(beeperBooper);
    //output results 
    $("#output").beeperBooper;
  });
});
