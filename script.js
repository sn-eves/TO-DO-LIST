function addTask() {
    var taskinput = document.getElementById("taskinput");
    var tasklist = document.getElementById("tasklist");

    var li=document.createElement("li");
    li.textContent=taskinput.value;
    tasklist.appendChild(li);
    taskinput.value="";
    li.addEventListener("click",function(){
        li.classList.toggle("done");
    });

    li.addEventListener("dblclick", function(){
        tasklist.removeChild(li);
    });
}