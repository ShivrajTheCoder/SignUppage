// vairables
let contentForm=document.getElementById("contentForm");
let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let password=document.getElementById("password");
let confirmPassword=document.getElementById("confirmPassword");
let submitBtn=document.getElementById("submitBtn");
let handleBtn=document.getElementsByClassName("handleBtn");
let home=document.getElementById("home");

let newDiv=document.createElement("div");
// functions
let checkValidity=()=>{
    let msg='';
    if(firstName.value===''|| lastName.value==='')
        {
            msg="Enter the name!";
        }
    else if(password.value!==confirmPassword.value)
      {  
          msg="passwords don't match!"
          confirmPassword.value='';
      }
      else
      {
          msg="Welcome to Leure Tech family";
      }
      return msg;
}

let displayMessage=(msg)=>{
    newDiv.classList="message";
    newDiv.innerText=msg;
    contentForm.appendChild(newDiv);
}
//eventlistners
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    newDiv.innerText='';
    let message=checkValidity();
    displayMessage(message);
});
handleBtn[0].addEventListener("click",(evt)=>{
    evt.preventDefault();
})
handleBtn[1].addEventListener("click",(evt)=>{
    evt.preventDefault();
})
handleBtn[2].addEventListener("click",(evt)=>{
    evt.preventDefault();
})

home.addEventListener("click",()=>{{
    alert("Surely develop during the internship :) ")
}})
