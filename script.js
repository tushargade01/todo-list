const input = document.getElementById('js-input');
const listContainer = document.getElementById('list-container');
accessData();
function tacks(){
  if(input.value === ''){
    alert('You Must Write Someting!');
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    console.log(li)
    input.value = '';

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  saveData();
}

listContainer.addEventListener("click",function(elemet) {
  if(elemet.target.tagName === 'LI'){
    elemet.target.classList.toggle("checked");
    saveData();
  }
  else if(elemet.target.tagName === "SPAN"){
    elemet.target.parentElement.remove();
    saveData();
  }
})

function saveData(){
  localStorage.setItem("listData",listContainer.innerHTML);
}
function accessData(){
  listContainer.innerHTML = localStorage.getItem('listData');
}
accessData();
