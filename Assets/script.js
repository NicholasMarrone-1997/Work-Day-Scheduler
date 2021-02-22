//Displaying time below the title on webpage
var time = moment();
$("#currentDay").text(time.format("MMM Do, YYYY"));

//Gets the current hour
//var currHour = moment();
var currentHour = parseInt(currHour.moment().format("H"));
console.log(currentHour);

colorPlanner();


function colorPlanner() {

    //Looping through work day schudler hours and add it to a # symbol and then comparing hour to currenthour and adding class
    for (let i = 9; i < 18; i++) {
        var hourEl = $("#" + i)

        if (i < currentHour) {
            hourEl.addClass("past");
        } else if (i === currentHour) {
            hourEl.addClass("present");
        } else {
            hourEl.addClass("future");
        }
    }

    //Saves data-hour and input text as key, val pair on save button click
    $('.saveBtn').on("click", function () {
        console.log("clicked");
        var hourClicked = $(this).attr("data-hour");
        var text = $("#" + hourClicked).val();
        console.log(text);
        localStorage.setItem(hourClicked, text);
    })

    
}