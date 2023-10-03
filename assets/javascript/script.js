// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

window.onload = function(){
    // upon opening put current day on page in header
    var currentDay = document.querySelector("#currentDay")
    currentDay.style.fontWeight = "bold"
    currentDay.textContent = dayjs().format('YYYY/MM/DD')
    // Displays Current time
    var currentTime = document.querySelector("#currentTime")
    currentTime.style.fontWeight = "bold"
    currentTime.textContent = dayjs().format('HH:mm')
    // gets current hour as integer to highlight in day planner
    var currentHour = dayjs().format("H")
    currentHour = parseInt(currentHour);
    console.log(typeof currentHour)
    // select all time-block in the calender
    var timeblocks = document.querySelectorAll(".time-block")
    for (var i=0; i<timeblocks.length; i++){
      var timeofday = parseInt(timeblocks[i].id)  
      // displays colored block based on past present or future
      if(currentHour === timeofday) { 
        timeblocks[i].classList.add("present")
        } else if (currentHour < timeofday) {
          timeblocks[i].classList.add("future")
        } else {
          timeblocks[i].classList.add("past")
        } 
    }

    

  }
var saveButtons = document.querySelectorAll(".saveBtn")
console.log(saveButtons)
  for (var i = 0; i < saveButtons[i].length; i++) {
    saveButtons[i].addEventListener('click', function () {
      console.log("hello")
    })
  }

    // function storeInfo () {
    //   // allows user to view save information on webpage
    //   var SavedInfo = document.querySelector("#time-block")
    //   SavedInfo.style.display = "inline"
    //   // need to get data from local storage
    //   var storedData = JSON.parse(localStorage.getItem('userscores'));
    //   // stored data is an array
    //   var hscorelist = document.querySelector("#hscorelist")
      
    //   // loop through items in stored data to create li tags for them and add to page
    //   for (var i = 0; i<storedData.length; i++){
  
    //      var highscoreInfo = document.createElement("li")
    //      highscoreInfo.textContent = `${storedData[i].userName}: ${storedData[i].userScore}`
    //      hscorelist.appendChild(highscoreInfo)
    //   }
    // }





    
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

