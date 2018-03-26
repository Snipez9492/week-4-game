//First create variables that store the wins, loses, random numbers and total score the game.
$(document).ready(function(){

//     var wins;
// var loses;
// var randNum;
// var totalNum;
// var crystalVal = [];
// var crystalTotal;



// function randomizer(a, b) {
//     var randNum = Math.floor(Math.random() * a) + b;
//     return randNum;
// }


// var target = randomizer(120, 19);
// // Console.log("target num: ", target);

// var main = $("body");

// var pics = main.find(".crystal");








//     for (i = 0; i < 12; i++) {
//         crystalVal[i] = randomizer(12, 1);
//         crystalVal.push();
//         var images = $("<img>");
//         images.attr("dataNum", crystalVal[i]);
//         images.val(crystalVal[i]);
//         pics.append(images);
//     }







// function random() {
//     $("box").val(target);
//     console.log(target);
//     main.find(".box").append(target);
// }
// random();

// pics.on("click", function () {

//     var crystalNum = $("<img>");

//     crystalNum.val($(this).attr("dataNum"));
    

//     var randomNum = Math.floor(Math.random() * crystalVal.length);

//     var previous = 0;

//     var numbers = parseInt(randomNum);

//     previous += numbers;


//     console.log(numbers);
    

// })



// // $('.crystal').on("click", function(value){




// // })
// //  crystal value = ($this).val();
// //  crystal value += crystal value
// //   if{}cystal value sum is equal to target alert win
// // elseif crystal value > target you alert lose
// //else crystal value sum less than target continue
// // 


// function totalScore(crystalVal) {
//     totalNum = $(this).val();
//     totalNum += totalNum;
//     $("score").val(totalNum);
//     main.find(".score").append(totalNum);
// }






// $('.classname').on("click", function(value)){
//     //  crystal value = ($this).val();
//   //  crystal value += crystal value
//  //   if{}cystal value sum is equal to target alert win
//  // elseif crystal value > target you alert lose
//  //else crystal value sum less than target continue
//  // 
// }

var Random=Math.floor(Math.random()*101+19)
  // Selects a random number to be shown at the start of the game
  // Number should be should be between 19 - 120
  //
  $('#randomNumber').text(Random);
  // Appending random number to the randomNumber id in the html doc
  //
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  // Setting up random numbers for each jewel
  // Random number has to be between 1 - 12
  // 
  var userTotal= 0; 
  var wins= 0;
  var losses = 0;
  //  Decaring variables for tallies
$('#numberWins').text(wins);
$('#numberLosses').text(losses);
//resets the game
function reset(){
      Random=Math.floor(Math.random()*101+19);
      console.log(Random)
      $('#randomNumber').text(Random);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      userTotal= 0;
      $('#finalTotal').text(userTotal);
      } 
//adds the wins to the userTotal
function yay(){
alert("You won!");
  wins++; 
  $('#numberWins').text(wins);
  reset();
}
//addes the losses to the userTotal
function loser(){
alert ("You lose!");
  losses++;
  $('#numberLosses').text(losses);
  reset()
}
//sets up click for jewels
  $('#one').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }   
  })  
  $('#two').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
        if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#three').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
//sets win/lose conditions
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    userTotal = userTotal + num4;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal); 
      
          if (userTotal == Random){
          yay();
        }
        else if ( userTotal > Random){
          loser();
        }
  });   


})

