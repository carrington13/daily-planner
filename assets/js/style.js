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
  // Select container div by hourId
  // Text for that hour is saved to localStorage
  

}

const loadTasks = function () {
// // Load Task From Storage
//   // When Page Loads
//   tasks = JSON.parse(localStorage.getItem("tasks"));
//   // All Saved Tasks will load into their correct Hour Block
//   // If Day has changed, then 
//   // alert that day has passed
//   // confirm is user wants to load yesterdays tasks
//   // Yes => loadTasks()
//   // No => load page without loading tasks

//   $.each(tasks, function () {

//   })
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

$(".row").on("click", "#textarea", function(){
  //get task(<p>) current value/text
  var text = $(this).val().trim();
  
  // create textarea el
  var textInput = $("<textarea>")
  .addClass("textarea col-10 past")
  .val(text);
  
  // replace <p> with <textarea>
  $(this).replaceWith(textInput);
  textInput.trigger("focus");

});

$(".row").on("blur", "textarea", function () {  
  // get <textarea> value
  var text = $(this).val().trim()
  
  // get task's container's id 
  var status = $(this)
    .closest(".row")
    .attr("id");  

  
  tasks[status].text = text;
  console.log(tasks);

  // recreate <p>
  var taskP = $("<p>")
  .addClass("textarea col-10 past")
  .text(text);

  $(this).replaceWith(taskP);
})

// eventHandler for SaveButtons 
$('.saveBtn').on("click", function() {
    saveTask();
});

