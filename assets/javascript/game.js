//generate 4 unique random crystal numbers between 4 and 14 and store them as variables
function resetvalues(){
    var valuesArray=[];
    var n;
    

    for(var i =0; i<4; i++){
        do
        n = Math.floor(Math.random()*10+4);
            while(valuesArray.indexOf(n) !== -1)
                valuesArray[i]=n;}
            return valuesArray;   
};

var valuesArray = resetvalues();

var sum=0;
console.log(valuesArray);

console.log(valuesArray.length);
 
function NewTarget(){     
    //calculate the target, which is just the sum of the 4 crystal values times a random multiplier between 1 and 3
    var Target=0;
    for(var i = 0; i<valuesArray.length; i++){   
    sum = sum + parseInt(valuesArray[i]);
    };

    console.log("yo"+sum);
    Target = (sum*(Math.floor(Math.random()*3+1)))

    console.log("target"+Target);
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
    .attr("src", "./assets/images/crystal_one.jpg")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    .attr("data-crystalvalue", buttonValueOne)
    .click(function(){
        clickCalc(buttonValueOne);
    });


    var imageCrystal2 = $("<img>")
    .addClass("crystalbutton")
    // Each imageCrystal will be given a src link to the crystal image
    .attr("src", "./assets/images/crystal_two.jpg")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    .attr("data-crystalvalue", buttonValueTwo)
    .click(function(){
        clickCalc(buttonValueTwo);
    });


    var imageCrystal3 = $("<img>")
    .addClass("crystalbutton")
    // Each imageCrystal will be given a src link to the crystal image
    .attr("src", "./assets/images/crystal_three.jpg")
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    .attr("data-crystalvalue", buttonValueThree)
    .click(function(){
        clickCalc(buttonValueThree);
    });

    var imageCrystal4 = $("<img>")
    .addClass("crystalbutton")
    // Each imageCrystal will be given a src link to the crystal image
    .attr("src", "./assets/images/crystal_four.jpg")
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
    $("#UserGuess").html(UserGuess);
    if (UserGuess > Target){
        loss = loss +1; 
        valuesArray = resetvalues();
        Target = NewTarget();
        console.log(valuesArray);
        console.log(Target);
        UserGuess = 0;
        console.log(UserGuess);
        console.log("lower sum"+sum);
        sum = 0;

//load the buttons up with the new values

    buttonValueOne = parseInt(valuesArray[0]);
    console.log(buttonValueOne);

    buttonValueTwo = parseInt(valuesArray[1]);
    console.log(buttonValueTwo);

    buttonValueThree = parseInt(valuesArray[2]);
    console.log(buttonValueThree);

    buttonValueFour = parseInt(valuesArray[3]);
    console.log(buttonValueFour);

        $("#loss").html("<p>Losses: "+loss+"</p>");
        $("#UserGuess").html(UserGuess);
        $("#target").html("<h1>"+Target+"</h1>");
    
    }else if(UserGuess === Target){
        wins = wins +1; 
        valuesArray = resetvalues();
        Target = NewTarget();
        console.log(valuesArray);
        UserGuess = 0;
        console.log(UserGuess);
        sum=0;

//load the buttons up with the new values
    buttonValueOne = parseInt(valuesArray[0]);
    console.log(buttonValueOne);

    buttonValueTwo = parseInt(valuesArray[1]);
    console.log(buttonValueTwo);

    buttonValueThree = parseInt(valuesArray[2]);
    console.log(buttonValueThree);

    buttonValueFour = parseInt(valuesArray[3]);
    console.log(buttonValueFour);

        $("#wins").html("<p>Wins: "+wins+"</p>");
        $("#UserGuess").html(UserGuess);
        $("#target").html("<h1>"+Target+"</h1>");
    }else{};
        };



