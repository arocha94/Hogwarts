var houseButton = $('.house-button');
var houseWelcome = $('.house-welcome');
var houseOutcome = $('.house-outcome');

houseButton.on('click', hogwartsHouses);

var characteristics = {
  Gryffindor: 'You are in the House of Griffyndor because you are Brave & Chivalrous!',
  Hufflepuff: 'You are in the House of Hufflepuff because you are Loyal & Patient!',
  Slytherin: 'You are in the House of Slytherin because you are Ambitious & Cunning!',
  Ravenclaw: 'You are in the House of Ravenclaw because you are Logical and Wise!',
};


function hogwartsHouses() {
  var name = $('.userName').val();
  var house = $('.userHouse').val();

   houseWelcome.text(`Hello ${name} and Welcome to Hogwarts!`);
   houseOutcome.text(characteristics[house]);

}
