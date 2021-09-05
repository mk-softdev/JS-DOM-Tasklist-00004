//define UI vars

const form = document.querySelector('#task-form');
const taskList  = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event Listeners

loadEventListeners();

function loadEventListeners(){
//Add task event
    form.addEventListener('submit', addTask);
//Remove task event
    taskList.addEventListener('click',removeTask);
//Clear task event
    clearBtn.addEventListener('click',clearTask);
//Filter task event
    filter.addEventListener('keyup',filterTask);    
   
}

//Add a task
function addTask(e){

    if(taskInput.value === ''){
        alert('Add a task')
    }
    else{
    //create new li
    const li = document.createElement('li');
    // add class name
    li.className = 'collection-item';
    //create text node for li
    li.appendChild(document.createTextNode(taskInput.value));
    //create a link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove" style="color:red"></i>';
    //append the link to li
    li.appendChild(link);
    //append li to ul
        taskList.appendChild(li);
//    console.log(li)
    }
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you want sure remove it')){
        e.target.parentElement.parentElement.remove();
    }
        
    }

    e.preventDefault();
}

function clearTask(){
    // option 1
    // taskList.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

}

function filterTask(e){

    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(
        function(task){
            const item = task.firstChild.textContent;
            if(item.toLocaleLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            }
            else{
                task.style.display = 'none';
            }
    })

    console.log(text)
}
