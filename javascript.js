// MOBILE MENU
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("show");
}

// TYPING EFFECT
const text = "Web Developer | Designer | Freelancer";
let i = 0;

function type(){
  if(i < text.length){
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,100);
  }
}
type();

// FAQ
function toggleFAQ(el){
  const p = el.nextElementSibling;
  p.style.display = p.style.display === "block" ? "none" : "block";
}

// FORM VALIDATION
function validateForm(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name=="" || email=="" || message==""){
    alert("Please fill all fields");
    return false;
  }

  alert("Message Sent!");
  return true;
}

// BACK TO TOP
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
  if(document.documentElement.scrollTop > 200){
    topBtn.style.display = "block";
  }else{
    topBtn.style.display = "none";
  }
}

function scrollTop(){
  window.scrollTo({top:0, behavior:"smooth"});
}

// DARK MODE
document.getElementById("modeToggle").onclick = function(){
  document.body.classList.toggle("light");
}