const inputbox = document.getElementById("input-text");
const listcontiener = document.getElementById("list-contianer");
function addtask(){
    if(inputbox.value ===''){
        alert("you must write some thing");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML= inputbox.value;
        listcontiener.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span)
    }
    inputbox.value='';
    savedata()
}
listcontiener.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
   e.target.classList.toggle("checked")
   savedata()
}
else if(e.target.tagName === "SPAN"){
     e.target.parentElement.remove();
    savedata()
}
},false)

function savedata(){
    localStorage.setItem("data",listcontiener.innerHTML)
}
function showtask(){
    listcontiener.innerHTML=localStorage.getItem("data") || '';
}
showtask()