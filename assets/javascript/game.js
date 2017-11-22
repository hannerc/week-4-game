//generate 4 unique random crystal numbers between 8 and 20 and store them as variables

    var valuesArray=[];
    var n;
    var sum=0;

    for(var i =0; i<4; i++){
        do
        n = Math.floor(Math.random()*20+8);
            while(valuesArray.indexOf(n) !== -1)
                valuesArray[i]=n;}
            //return valuesArray;   

            console.log(valuesArray);

console.log(valuesArray.length);
       
//calculate the target, which is just the sum of the 4 crystal values times a random multiplier between 1 and 9
for(var i = 0; i<valuesArray.length; i++){   
sum = sum + parseInt(valuesArray[i]);
};
console.log(sum);
var Target = (sum*(Math.floor(Math.random()*9+1)))
console.log(Target);
 
//Declare the button values
var buttonValueOne = parseInt(valuesArray[0]);
console.log(buttonValueOne);

var buttonValueTwo = parseInt(valuesArray[1]);
console.log(buttonValueTwo);

var buttonValueThree = parseInt(valuesArray[2]);
console.log(buttonValueThree);

var buttonValueFour = parseInt(valuesArray[3]);
console.log(buttonValueFour);


var imageCrystal1 = $("<img>")
.addClass("crystalbutton")
// Each imageCrystal will be given a src link to the crystal image
.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
.attr("data-crystalvalue", buttonValueOne)
.click(function(){
console.log(typeof(Target));
console.log(typeof(buttonValueOne));
Target = Target - buttonValueOne;
console.log(Target);
    $("#target").html("<h1>"+Target+"<h1>");});

var imageCrystal2 = $("<img>")
.addClass("crystalbutton")
// Each imageCrystal will be given a src link to the crystal image
.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
.attr("data-crystalvalue", buttonValueTwo)
.click(function(){
console.log(typeof(Target));
console.log(typeof(buttonValueTwo));
Target = Target - buttonValueTwo;
console.log(Target);
    $("#target").html("<h1>"+Target+"<h1>");});

var imageCrystal3 = $("<img>")
.addClass("crystalbutton")
// Each imageCrystal will be given a src link to the crystal image
.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
.attr("data-crystalvalue", buttonValueThree)
.click(function(){
console.log(typeof(Target));
console.log(typeof(buttonValueThree));
Target = Target - buttonValueThree;
console.log(Target);
    $("#target").html("<h1>"+Target+"<h1>");});

var imageCrystal4 = $("<img>")
.addClass("crystalbutton")
// Each imageCrystal will be given a src link to the crystal image
.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
// Each imageCrystal will be given a data attribute called data-crystalValue.
// This data attribute will be set equal to the array value.
.attr("data-crystalvalue", buttonValueFour)
.click(function(){
console.log(typeof(Target));
console.log(typeof(buttonValueFour));
Target = Target - buttonValueFour;
console.log(Target);
    $("#target").html("<h1>"+Target+"<h1>");});



