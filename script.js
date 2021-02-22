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



function colorPlanner() {

    //Gets the current hour
    var currHour = moment();
    var currentHour = parseInt(currHour.format("H"));
    console.log(currentHour); 

    //Gives back hour as a number (9-17)
    var nineAm = moment('9:00am', 'h:mma');
    var nineEl = parseInt(nineAm.format("H"));
    console.log(nineEl);
    
    var tenAm = moment('10:00am', 'h:mma');
    var tenEl = parseInt(tenAm.format("H"));
    console.log(tenEl);

    var elevenAm = moment('11:00am', 'h:mma');
    var elevenEl = parseInt(elevenAm.format("H"));
    console.log(elevenEl);

    var twelveAm = moment('12:00pm', 'hh:mma');
    var twelveEl = parseInt(twelveAm.format("H"));
    console.log(twelveEl);

    var onePm = moment('1:00pm', 'hh:mma');
    var oneEl = parseInt(onePm.format("H"));
    console.log(oneEl);

    var twoPm = moment('2:00pm', 'hh:mma');
    var twoEl = parseInt(twoPm.format("H"));
    console.log(twoEl);

    var threePm = moment('3:00pm', 'hh:mma');
    var threeEl = parseInt(threePm.format("H"));
    console.log(threeEl);

    var fourPm = moment('4:00pm', 'hh:mma');
    var fourEl = parseInt(fourPm.format("H"));
    console.log(fourEl);

    var fivePm = moment('5:00pm', 'hh:mma');
    var fiveEl = parseInt(fivePm.format("H"));
    console.log(fiveEl);

    //Start comparison for every hour to current hour

    if(nineEl < currentHour){
        $("textarea").addClass('past');
    } else if (nineEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(tenEl < currentHour){
        $("textarea").addClass('past');
    } else if (tenEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(elevenEl < currentHour){
        $("textarea").addClass('past');
    } else if (elevenEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(twelveEl < currentHour){
        $("textarea").addClass('past');
    } else if (twelveEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(oneEl < currentHour){
        $("textarea").addClass('past');
    } else if (oneEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(twoEl < currentHour){
        $("textarea").addClass('past');
    } else if (twoEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(threeEl < currentHour){
        $("textarea").addClass('past');
    } else if (threeEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(fourEl < currentHour){
        $("textarea").addClass('past');
    } else if (fourEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }

    if(fiveEl < currentHour){
        $("textarea").addClass('past');
    } else if (fiveEl > currentHour){
        $("textarea").addClass('future');
    } else{
        $("textarea").addClass('present');
    }
}

colorPlanner();