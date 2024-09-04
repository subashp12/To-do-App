const inputField=document.getElementById('myInput')
const taskContainer=document.getElementById('list-container')
const myButton=document.getElementById('btn')
myButton.addEventListener('click',addTask)
function addTask(){
    if(inputField.value===''){
        inputField.innerHTML='You have to add a task!'
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputField.value
        taskContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    inputField.value=''
    dataSaver()
}
taskContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        dataSaver()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        dataSaver()

    }
},false)
function dataSaver(){
    localStorage.setItem('Data',taskContainer.innerHTML)
}
function dataDisplay(){
    taskContainer.innerHTML=localStorage.getItem('Data')
}
dataDisplay()