var list=[];

function setup() {
  inputTask=createInput("What do you Want to do");
  inputTask.position(200,200);
  buttonTask=createButton("Add");
  buttonTask.position(350,200);
  buttonTask.style("color: rgb(255,0,0);")
  buttonTask.style("background-color: rgb(0,0,0);")

  unorderedList= createElement("ul")
  
}

function draw() {
  var position={
    x:240,
    y:250
  }
  list.push(position);
  buttonTask.mousePressed(addReminder);
  for(var i=0; i<list.length;i++){
    unorderedList.html(list[i]);
    unorderedList.position(list[i].x,list[i].y)
  }

}
function addReminder(){
  reminder=createElement("ul");
  reminder.html(inputTask.value())
  list.push(reminder);
}