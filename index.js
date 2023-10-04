const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var date = new Date()
var day = date.getDate()
var month = date.getMonth()
var dated = monthNames[month]+", " + day
console.log(dated)

document.querySelector("button.date").innerHTML = dated


document.querySelector(".adding").addEventListener("click", function(){
  var notes = document.querySelector("input").value
  const node = document.createElement("li")
  var textnode = document.createTextNode(notes)
  node.appendChild(textnode)
  document.getElementById("myList").appendChild(node)
  document.querySelector("input").value =""


})
