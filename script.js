//Displaying time below the title on webpage
var time = moment();
$("#currentDay").text(time.format("MMM Do, YYYY"));

//Creating variables for each timeblock
var h9 = $("#9");
var h10 = $("#10");
var h11 = $("#11");
var h12 = $("#12");
var h1 = $("#13");
var h2 = $("#14");
var h3 = $("#15");
var h4 = $("#16");
var h5 = $("#17");

colorPlanner();

function colorPlanner() {
    var currHour = moment();
    var currentHour = parseInt(currHour.format("H"));
    console.log(currentHour); //gives back current hour as a number (9-17)
    

    
}
