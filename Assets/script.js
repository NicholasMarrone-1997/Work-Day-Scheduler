//Displaying time below the title on webpage
var time = moment();
$("#currentDay").text(time.format("MMM Do, YYYY"));

//Gets the current hour
var currHour = moment();
var currentHour = parseInt(currHour.format("H"));
console.log(currentHour);

colorPlanner();


function colorPlanner() {

    for (let i = 9; i < 18; i++) {
        var hourEl = $("#" + i)
        hourEl.addClass("past");

        if (i < currentHour) {
            hourEl.addClass("past");
        } else if (i === currentHour) {
            hourEl.addClass("present");
        } else {
            hourEl.addClass("future");
        }
    }


    $('.saveBtn').on('click', function () {
        console.log("clicked");
        var hourClicked = $(this).attr("data-hour");
        var text = $("#" + hourClicked).val();

        localStorage.setItem("button1", hourClicked);
        localStorage.getItem("button1");
    })
}