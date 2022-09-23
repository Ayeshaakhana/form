var regname=/^ [a-z A-Z]+ $/;
var regemail=/^ [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,} $/;
var regpass=/^ (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}  $/;
var regnum=/^ [0-9]{11} $/;
c=0;

function validations(tocheck, reg, error, invalid, empty) {
  if (tocheck=="") {
     document.getElementById(error).innerHTML=empty;
     document.getElementById(error).style.color="red";
  }
  else{
     if(!tocheck.match(reg)){
        document.getElementById(error).innerHTML=invalid;
        document.getElementById(error).style.color="red";
     }
     else{
        document.getElementById(error).innerHTML="";
        c++;
     }
  }
}
function abc() {
  c=0;
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  var number=document.getElementById("phone").value;


  validations(name, regname, "nerror","invalid eg(Ayesha)","enter your name");
  validations(email, regemail, "emerror","invalid eg([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})","enter your email");
  validations(password, regpass, "passerror","invalid eg((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,})","enter your password");
  validations(number, regnum, "numerror","invalid eg(03459243670)","enter your number");
 
  if (c==4) {
    alert=("congratulations you are enrolled")
 }
  localStorage.setItem("name1",name)
  localStorage.setItem("email1",email)
  localStorage.setItem("pass1",password)
  localStorage.setItem("phone",number)
   window.location="signup.html"

}


// for password eye

function myfun() {
    var x=document.getElementById("password")
    var y=document.getElementById("hide1")
    var z=document.getElementById("hide2")

if (x.type==="password") {
    x.type="text";
    y.style.display="block";
    z.style.display="none";
    
}
else{
    x.type="password";
    y.style.display="none";
    z.style.display="block";
    
}

}
function fun2() {
    if(input==""){
        
    }
}
