// Grabs current time and date using moment
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var today = new Date()
var time = today.getHours() 

 
// creates text for current date

document.getElementById("currentDay").innerHTML = date
// List's variable for usable hours in military time
var bizHours = [9,10,11,12,13,14,15,16,17]

function handleClick(hour){
    localStorage.setItem(hour,document.getElementById(hour).value)
    document.getElementById(hour).innerText = localStorage.getItem(hour)
}

//dynamically creates for loop and row for each hour block
for( var i = 0; i < bizHours.length; i++){
    var hour = localStorage.getItem(bizHours[i])
    var row = document.createElement ("div")
    row.innerHTML =  `
    <div class="row">
     <p data-hour = "${bizHours[i]}" class="hour">${bizHours[i]}</p> 
      <textarea id= "${bizHours[i]}" type="text" placeholder="To Do Item" >${hour === null ? "":hour}</textarea>
    <button onclick="handleClick(${bizHours[i]})" class="saveBtn"><i class="far fa-save"></i></button>
      </div>
`
   //^ creates save button with innerHTML

// add's conditionals with provided class's to change color depending on time.
 if (bizHours[i] < time){
     row.classList.add("past")
 } else if(bizHours[i] > time){
     row.classList.add("future")
 } else{
    row.classList.add("present")
 }

document.getElementById("container").appendChild(row)

}




