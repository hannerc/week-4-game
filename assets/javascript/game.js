//generate 4 unique random crystal numbers between 8 and 20 and store them as variables
function resetvalues(){
    var valuesArray=[];
    var n;
    

    for(var i =0; i<4; i++){
        do
        n = Math.floor(Math.random()*12+4);
            while(valuesArray.indexOf(n) !== -1)
                valuesArray[i]=n;}
            return valuesArray;   
};

var valuesArray = resetvalues();

var sum=0;
console.log(valuesArray);

console.log(valuesArray.length);
 
function NewTarget(){     
//calculate the target, which is just the sum of the 4 crystal values times a random multiplier between 1 and 9
for(var i = 0; i<valuesArray.length; i++){   
sum = sum + parseInt(valuesArray[i]);
};

console.log("yo"+sum);
var Target = (sum*(Math.floor(Math.random()*5+1)))

console.log("this"+Target);
return Target;

 };

 var Target = NewTarget();


 
    //Declare the button values
    var buttonValueOne = parseInt(valuesArray[0]);
    console.log(buttonValueOne);

    var buttonValueTwo = parseInt(valuesArray[1]);
    console.log(buttonValueTwo);

    var buttonValueThree = parseInt(valuesArray[2]);
    console.log(buttonValueThree);

    var buttonValueFour = parseInt(valuesArray[3]);
    console.log(buttonValueFour);

var UserGuess = 0;

    //create the button values
    var imageCrystal1 = $("<img>")
    .addClass("crystalbutton")
    // Each imageCrystal will be given a src link to the crystal image
    .attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    .attr("data-crystalvalue", buttonValueOne)
    .click(function(){
        clickCalc(buttonValueOne);
    });


    var imageCrystal2 = $("<img>")
    .addClass("crystalbutton")
    // Each imageCrystal will be given a src link to the crystal image
    .attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    .attr("data-crystalvalue", buttonValueTwo)
    .click(function(){
        clickCalc(buttonValueTwo);
    });


    var imageCrystal3 = $("<img>")
    .addClass("crystalbutton")
    // Each imageCrystal will be given a src link to the crystal image
    .attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    .attr("data-crystalvalue", buttonValueThree)
    .click(function(){
        clickCalc(buttonValueThree);
    });

    var imageCrystal4 = $("<img>")
    .addClass("crystalbutton")
    // Each imageCrystal will be given a src link to the crystal image
    .attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    .attr("data-crystalvalue", buttonValueFour)
    .click(function(){
        clickCalc(buttonValueFour);
    });

var wins = 0;
var loss = 0;

function clickCalc(buttonValue){

    // console.log(typeof(Target));
    UserGuess = UserGuess + buttonValue;
    // console.log(Target);
    // console.log(UserGuess);
    $("#UserGuess").html("<h1>YOUR NUMBER: "+UserGuess+"</h1>");
    if (UserGuess > Target){
        loss = loss +1; 
        valuesArray = resetvalues();
        Target = NewTarget();
        console.log(valuesArray);
        console.log(Target);
        UserGuess = 0;
        console.log(UserGuess);


//load the buttons up with the new values

    buttonValueOne = parseInt(valuesArray[0]);
    console.log(buttonValueOne);

    buttonValueTwo = parseInt(valuesArray[1]);
    console.log(buttonValueTwo);

    buttonValueThree = parseInt(valuesArray[2]);
    console.log(buttonValueThree);

    buttonValueFour = parseInt(valuesArray[3]);
    console.log(buttonValueFour);









        $("#loss").html("<h1>LOST: "+loss+"</h1>");
        $("#UserGuess").html("<h1>YOUR NUMBER: "+UserGuess+"</h1>");
        $("#target").html("<h1>TARGET: "+Target+"</h1>");
    
    }else if(UserGuess === Target){
        wins = wins +1; 
        valuesArray = resetvalues();
        Target = NewTarget();
        console.log(valuesArray);
        UserGuess = 0;
        console.log(UserGuess);

//load the buttons up with the new values
    buttonValueOne = parseInt(valuesArray[0]);
    console.log(buttonValueOne);

    buttonValueTwo = parseInt(valuesArray[1]);
    console.log(buttonValueTwo);

    buttonValueThree = parseInt(valuesArray[2]);
    console.log(buttonValueThree);

    buttonValueFour = parseInt(valuesArray[3]);
    console.log(buttonValueFour);

        $("#wins").html("<h1>WON: "+wins+"</h1>");
        $("#UserGuess").html("<h1>YOUR NUMBER: "+UserGuess+"</h1>");
        $("#target").html("<h1>TARGET: "+Target+"</h1>");
    }else{};
        };



