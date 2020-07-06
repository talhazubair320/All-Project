const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');





 //show input error message
function showError(input,message){

    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}


//show Success outline

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

// check Email

function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    if(re.text(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'email is not valid')
    }

}



// check required field

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if (input.value.trim()  === ''){
            showError(input, '${getFieldName(input)}is required');
        }else{
            showSuccess(input);
        }
    });
}
//check input lenght


function checkLenght(input, min,max ){
    if(input.value.lenght < min){

showError(input,'${getFieldName(input)} must be at least ${min} character');
}else if(input.value.lenght > max){
    showError(input,'${getFieldName(input)} must be at than ${max} character');

 }else{

 showSuccess(input);
    }
}


 
//match password

function checkPasswordsMathch(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'password do not match');
    }
}

// Get fieldname

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners

form.addEventListener('submit', function(e){

    e.preventDefault();

    if(username.value ===  ''){
         showError(username,'Username is required');
    }else{
        showSuccess(username);
    }

 if(email.value === ''){
     showError(email, 'Email is required');
 } else if(!isValidEmail(email.value)) {
     showError(email, 'Email is not valid');
 }else{
     showSuccess(email);
 }


   if(password.value ===''){
    showError(password,'Password is required');
}else{
   showSuccess(password);
}

if(password2.value ===''){
    showError(password2,'Password2 is required');
}else{
   showSuccess(password2 );
}
}); 


checkLenght(username,3,15);
checkLenght(password,3,15);
checkEmail(email);
checkPasswordsMathch(password,password2);