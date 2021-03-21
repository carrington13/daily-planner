// intialize global {tasks}
let tasks = {
  nine: {},
  ten: {},
  eleven: {},
  twelve: {},
  one: {},
  two: {},
  three: {},
  four: {},
  five: {},
};
// Save Task To Storage With Save button
const saveTask = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  

}

const loadTasks = function () {
  // Convert storage back into usable data, push it to tasks
  tasks = JSON.parse(localStorage.getItem("tasks"));
  if (!tasks) {
    tasks = {
      nine: {time: 9,},
      ten: {time: 10,},
      eleven: {time: 11,},
      twelve: {time: 12,},
      one: {time: 13,},
      two: {time: 14,},
      three: {time: 15,},
      four: {time: 16,},
      five: {time: 17,}
    }
  };

  //loop over object properties
  for (const property in tasks) {
    
    let divId = property;
    // find container el related to each property
    let containerEl = $("#" + divId);
    
    // find textarea child of containerEl
    let textareaEl = $(containerEl.find('textarea'));
    // set text as currentProperty.text value
    if (tasks[property].text) { 
      // set text as currentProperty.text value
      let text = tasks[property].text.trim();
      // set text of element to value of text variable
      $(textareaEl).text(text);
    }
  }
  currentDay();
}


// Function Current Day
const currentDay = function () {
  // set now as current time for user
  let now = dayjs();
  // change format for display to user
  let displayNow = now.format('dddd, MMMM D').toString();
  // add formatted date to #currentDay in header
  $('#currentDay').html(displayNow);
  // get hour and send it to auditTask
  let hour = dayjs().get('hour');
  // send it to auditTask
  auditHour(hour);
  let minutesLeft = 60 - dayjs().get('minutes');
  startHourInterval(minutesLeft)
}

// Function to audit task by hour
const auditHour = function (currentHour) {
  for (const property in tasks) {
    // find container el related to each property
    let containerEl = $("#" + property);
    // find textarea child of containerEl
    let textareaEl = $(containerEl.find('textarea'));
    // set text as currentProperty.text value 
    let hourNow= tasks[property].time;

    // !!! time property is set using 24-hour time, not 12 so function below will work !!!
    // If hour is passed hour
    if (hourNow < currentHour) {
      // Background-color: grey
      $(textareaEl).addClass('past');
    // Line through text
    } else if (hourNow === currentHour) {
      // Background-color: red(danger)
      $(textareaEl).addClass('present');
    } else {
      // Background-color: green
      $(textareaEl).addClass('future');
    }
  }
}

// setInterval Function to audit hourly
const hourInterval = function() {
  setInterval (function() {
    let time = dayjs().get('hour');
    auditHour(time);
  }, (1000 * 60) * 60);
}
// function to begin hourInterval when hour changes
const startHourInterval = function(minutesLeft) {
  setTimeout (function(){
    hourInterval();
  }, minutesLeft)
}
$(".row").on("blur", "textarea", function () {

  // get <textarea> value
  var text = $(this).val().trim()
  
  // get task's container's id 
  var hour = $(this)
    .closest(".row")
    .attr("id");  

  
  tasks[hour].text = text;
})

// eventHandler for SaveButtons 
$('.saveBtn').on("click", function() {    
  saveTask();
});

loadTasks();

