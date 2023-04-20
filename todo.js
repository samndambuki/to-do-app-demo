//target id selectors from html file
let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let todos = document.getElementById("todos");

//submit event listener
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    console.log("button clicked");

    formValidation();
});

//if else for form validation
//prevent users from submittin gblank input fields
let formValidation = ()=>{
    if(input.value === ""){
        msg.innerHTML = "To do cannot be blank";
        console.log("error");
    }else{
        console.log("success");
        msg.innerHTML = "";
        //fired when the user clicks submit button
        acceptData();
    }
};

//object data
let data = {};

//function accept data
//collect data from input and store in object data
let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    //fire createToDo function
    createToDo();
};


let createToDo = () => {
    todos.innerHTML +=`
    <div>
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editToDo(this)" class="fas fa-edit"><i/>
    <i onClick="deleteToDo(this)" class="fas fa-trash-alt"><i/>
    </span>
    </div>
    `;
    input.value="";
};


let deleteToDo  = (e) => {
    e.parentElement.parentElement.remove();
};

let editToDo = (e) => {
    input.value  = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}




