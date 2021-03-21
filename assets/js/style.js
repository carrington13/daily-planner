//TODO
// declare empty array to save tasks to
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
  // When Save Button Is Clicked
const saveTask = function() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  

}

const loadTasks = function () {
  // Convert storage back into usable data, push it to tasks
  tasks = JSON.parse(localStorage.getItem("tasks"));
  
  //loop over object properties
  for (const property in tasks) {
    // debugger;
    let divId = property;
    // find container el related to each property
    let containerEl = $("#" + divId);
    
    // find textarea child of containerEl
    let textareaEl = $(containerEl.find('textarea'));
    console.log(textareaEl);
    // set text as currentProperty.text value 
    let text = tasks[property].text.trim();
    console.log(text);
    
    $(textareaEl).text(text);
  }
}


// Function Current Day
  // Finds current Time of user
  // Sets #currentDay.textContent to display current date

// Function Time/Interval
  // Runs Hourly.
  // If hour is passed hour
    // Background-color: grey
    // Line through text
  // else If Current Hour
    // Background-color: red(danger)
  // else If Next Hour
    // Background-color: yellow(warning)
  // else
    // Background-color: green  
// Function Add Text
// $(".row").on("blur", "textarea", function(){
//   //get textarea's current value/text
//   var taskText = $(this)
//   .val()
//   .trim();

//   var status = $(this)
//   .closest(".row")
//   .attr("id");  
// });

// add and update text
$(".row").on("click", "textarea", function(){
  // get current text from textarea
  var text = $(this).val().trim();
  
  // create textarea el
  var textInput = $("<textarea>")
  .addClass("textarea col-10 past")
  .val(text);
  
  // replace with <textarea>
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
});

$(".row").on("focusout", "textarea", function () {

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
  // find id of hour task is located
  // let hour = $(this)
  //   .closest(".row")
  //   .attr("id");
    
  saveTask();
});

loadTasks();