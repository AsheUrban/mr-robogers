// // Business Logic

// // v-1 Range

// function beepBoop(number) {
//   let numberArray = [];
//   for (let index = 0; index <= parseInt(number); index ++) {
//     numberArray.push(index);
//   }
//   return numberArray;
// }

// // v-2 Range + "Beep!"

// function beepBoop(number) {
//   let numberArray = [];
//   for (let index = 0; index <= parseInt(number); index += 1) {
//     numberArray.push(index);
//   }
//   if (numberArray.includes(1)) { //understandably this changes the whole array to "Beep!"
//     return "Beep!"
//   }
//   return numberArray;
// }

// // v-3 Range + "Beep!" --- changes index = 1, but not 10, etc.

function beepBoop(number) {
  let numberArray = [];
  for (let index = 0; index <= parseInt(number); index += 1) {
    numberArray.push(index);
    if (numberArray.includes(3)) { 
      numberArray[index] = "Won't you be my neighbor?"
    } else if (numberArray.includes(2)) { 
      numberArray[index] = "Boop!"
      } else if (numberArray.includes(1)) { 
        numberArray[index] = "Beep!"
      } 
  }
  return numberArray;
}

//UI Logic
$(document).ready(function(){
  $("form#be-my-neighbor").submit(function(event){
    event.preventDefault();
    const neighborSong = $("#number").val();
    $("#output").html(beepBoop(neighborSong));
  });
});

