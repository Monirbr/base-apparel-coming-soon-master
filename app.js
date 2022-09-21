const emailInput = document.querySelector(".input");
const emailMsg = document.querySelector(".email-msg");
const submit = document.querySelector(".submit");


submit.addEventListener("click" , submitHandler);

function submitHandler(event){
    event.preventDefault();
    emailMsg.innerText = "";
    const emailValue = emailInput.value;
   

    if(emailValue.length === 0 || emailValue.indexOf("@") === -1 || emailValue.indexOf(".")===-1 ){
       emailMsg.innerText = "please enter a valid email"
    }else{
        emailInput.value = "";
    }
}