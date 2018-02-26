


function ValidateFname(inputText)
{
var nlfn = document.form1.newsletterfirstname;
var nameformat =/^[A-Za-z]+$/;
if(inputText.value.match(nameformat))
{
document.getElementById("demo").innerHTML = "You are valid!";
document.getElementById("newsletterfirstname").style.borderColor = "#33cc33";

nlfn.focus();
return true;
}
 else if(inputText.value.length == ""){
document.getElementById("demo").innerHTML = "Please fill out this field!";
document.getElementById("newsletterfirstname").style.borderColor = "#ff0000";

nlfn.focus(); 
return false;
}
else  
{  
document.getElementById("demo").innerHTML = "Sorry you are not valid!"; 
document.getElementById("newsletterfirstname").style.borderColor = "#ff0000";

nlfn.focus();  
return false;  
} 
}

function ValidateEmail(inputText)  
{ 
var getelem = document.getElementById;
var nle = document.form1.newsletteremail;
var mailformat = /@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(inputText.value.match(mailformat))  
{  
document.getElementById("dem").innerHTML = "You are valid!";
document.getElementById("newsletteremail").style.borderColor = "#33cc33";
nle.focus();  
return true; 
} 
 else if(inputText.value.length == ""){
document.getElementById("dem").innerHTML = "Please fill out this field!"; 
document.getElementById("newsletteremail").style.borderColor = "#ff0000";
nle.focus(); 
return false;
}
else  
{  
document.getElementById("dem").innerHTML = "The form is not complete!";
document.getElementById("newsletteremail").style.borderColor = "#ff0000";
nle.focus();  
return false;  
} 
   
}
function ValidateReemail(reem)
{
var nle = document.form1.newsletteremail;
var nlree = document.form1.newsletterreemail;


 if(reem.value.length == "")
{
document.getElementById("demm").innerHTML = "empty!";
document.getElementById("newsletterreemail").style.borderColor = "#ff0000";
return false;
}
else if ( nle != nlree)
{
document.getElementById("demm").innerHTML = "not valid!";
document.getElementById("newsletterreemail").style.borderColor = "#ff0000";
return false;
}
else 
{
document.getElementById("demm").innerHTML = "valid!";
document.getElementById("newsletterreemail").style.borderColor = "#33cc33";
return true;

}
}

function ValidateSname(inputText)
{
var nlsn = document.getElementById("demmm").innerHTML;
var snameformat = /^[A-Za-z]+$/;
if(inputText.value.match(snameformat))
{
document.getElementById("demmm").innerHTML = "You are valid!";
document.getElementById("newslettersurname").style.borderColor = "#33cc33";
nlsn.focus();
return true;
}
 else if(inputText.value.length == ""){
document.getElementById("demmm").innerHTML = "Please fill out this field!"; 
document.getElementById("newslettersurname").style.borderColor = "#e60000";
nlsn.focus(); 
return false;
}
else  
{  
document.getElementById("demmm").innerHTML = "Sorry you are not valid!";
 document.getElementById("newslettersurname").style.borderColor = "#e60000";
nlsn.focus();  
return false;  
} 
}
function ValidateBd()
{

if(document.form1.birthday.selectedIndex == "")
{
document.getElementById("bd").innerHTML = "not valid!";
 document.getElementById("birthdaynl").style.borderColor = "#e60000";

return false;
}
var selectIt = document.getElementById("birthdaynl");
selectIt.options[selectIt.selectedIndex].text;
document.getElementById("bd").innerHTML = "valid!";
 document.getElementById("birthdaynl").style.borderColor = "#33cc33";
return true;
}

function ValidateBm()
{
if (document.form1.birthmonth.selectedIndex == "")
{
document.getElementById("bm").innerHTML = "please fill out this field!";
 document.getElementById("birthmonth").style.borderColor = "#e60000";

return false;
}
var selectBm = document.getElementById("birthmonth");
selectBm.options[selectBm.selectedIndex].text;
document.getElementById("bm").innerHTML = "valid!";
 document.getElementById("birthmonth").style.borderColor = "#33cc33";
return true;
}
function ValidateCountry()
{
if (document.form1.newslettercountry.selectedIndex == "")
{
document.getElementById("country").innerHTML = "please fill out this field!";
 document.getElementById("nlcountry").style.borderColor = "#e60000";
return false;
}
var selectC = document.getElementById("nlcountry");
 selectC.options[selectC.selectedIndex].text;
document.getElementById("country").innerHTML = "valid!";
document.getElementById("nlcountry").style.borderColor ="#33cc33";
return true;
}

function ValidateYear(ValidYear){
var nlyear = document.getElementById("by").innerHTML;
var numbers = "^[0-9]{4,4}$";
if(ValidYear.value.match(numbers))  {
document.getElementById("by").innerHTML ="valid!";
document.getElementById("birthyear").style.borderColor ="#33cc33";
nlyear.focus();
return true;
}
else
document.getElementById("by").innerHTML ="not valid!";
document.getElementById("birthyear").style.borderColor ="#e60000";
nlyear.focus();
return false
}
