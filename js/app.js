// 
const header = document.querySelector(".header")
window.addEventListener('scroll',(e)=>{
   if(window.scrollY >=50){
     header.classList.add('active_nav')
   }
   else{
    header.classList.remove('active_nav')
   }
})

const gamburger = document.querySelector('.hamburger')
gamburger.addEventListener('click',(e)=>{
  const nav_ul=document.querySelector('.mb_bottom')
  nav_ul.classList.toggle('hidden')

  const nav_line1=document.querySelector('.line1')
  const nav_line2=document.querySelector('.line2')
  const nav_line3=document.querySelector('.line3')

   nav_line1.classList.toggle('line1-transform')
   nav_line2.classList.toggle('line2-transform')
   nav_line3.classList.toggle('line3-transform')

})


window.addEventListener('DOMContentLoaded',()=>{
   let video = document.querySelector('.video');
   video.addEventListener('click',()=>{
    if (video.classList.contains('ready')) {
        return;
    }
    video.classList.add('ready');
    video.insertAdjacentHTML('afterbegin','<video class="video_iframe" src="для видё/Анчартед.mp4" controls autoplay=1> </video>');    
})
const btn = document.querySelector('.img_home');
btn.addEventListener('click',()=>{
   btn.classList.toggle('hidden')
})
    
})


const form = document.forms["form"];
const button = form.elements["button"];
const inputArr = Array.from(form);
const validInputArr = [];
inputArr.forEach((el)=>{
  if (el.hasAttribute("data-reg")) {
    el.setAttribute("is-valid","0");
    validInputArr.push(el);
  }
})

// console.log( validInputArr);
form.addEventListener("input",inputHandler);
button.addEventListener('click',buttonHandler);

function inputHandler({target}){
  if (target.hasAttribute("data-reg")) {
    inputCheck(target);
  }
}

function inputCheck(el) {
  const inputValue = el.value;
  const inputReg = el.getAttribute("data-reg");
  const reg=new RegExp(inputReg);
  console.log(inputValue,reg);
  if (reg.test(inputValue)) {
    el.style.border="2px solid green";
    el.setAttribute("is-valid","1");
  }else{
    el.style.border = "2px solid rgb(255,0, 0)";
    el.textContent="lochin"
    el.setAttribute("is-valid","0");
  }
}


   function buttonHandler(e){

  const isAllValid = [];
  validInputArr.forEach((el)=>{
    isAllValid.push(el.getAttribute("is-valid"));
  });
  // console.log(isAllValid);
  const isVallid = isAllValid.reduce((acc,current)=>{
    return acc && current;

  });
 if (!Boolean(Number(isVallid))) {
  e.preventDefault()
 }

   };




   function validation(form){
    console.log(form);
  let result  = true;
 
 
    
  
  

    
    return result
   };




   const signupForm = document.querySelector('#signup-form');
   
   const message = document.querySelector('.message');
     const regEX = /^[a-zA-Z0-9]{6,12}$/;
    

   signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
   

  const inputVal= signupForm.username.value
  if (regEX.test(inputVal)) {
    message.textContent = "Должна быть меньше 12 символов!"
  }else{
    message.textContent = "Символов должно быть больше шести!"
  }
 
  })

  signupForm.username.addEventListener(('keyup'),(e)=>{
    if( regEX.test(e.target.value)){
      signupForm.username.setAttribute('class','succsec')
    }else{
      signupForm.username.setAttribute('class','eror')
    }

const redEx = /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/
signupForm.addEventListener('submit',(e)=>{
  e.preventDefault()
  const messages =  document.querySelector('.messages')

 
  const numbers = signupForm.numbers.value
  const inputVal= signupForm.username.value
  if (regEX.test(inputVal)) {
    return 'Enter valid number';
    messages.textContent = "Вы правильно ввели свои данные!"
  }else{
    messages.textContent = "Введите правитльные данные!"
  }
 
})

  signupForm.numbers.addEventListener('keyup',(e)=>{
    if(redEx.test(e.target.value)){
      signupForm.numbers.setAttribute('class','succsec')
    }else{
      signupForm.numbers.setAttribute('class','eror')
    }
  })
 


})