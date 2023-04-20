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
};








