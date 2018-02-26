






$(document).ready(function(){
$(".ddmens .fa-chevron-down").click(function(){
$(".ddmens .fa-chevron-down").hide();
$(".ddmens ul li").slideDown();
$(".ddmens .fa-close").show();
});
$(".ddmens .fa-close").click(function(){
$(".ddmens .fa-close").hide();
$(".ddmens ul li").slideUp();
$(".ddmens .fa-chevron-down").show();
});
});

$(document).ready(function(){
$(".ddmomans .fa-chevron-down").click(function(){
$(".ddmomans .fa-chevron-down").hide();
$(".ddmomans ul li").slideDown();
$(".ddmomans .fa-close").show();
});
$(".ddmomans .fa-close").click(function(){
$(".ddmomans .fa-close").hide();
$(".ddmomans ul li").slideUp();
$(".ddmomans .fa-chevron-down").show();
});
});

$(document).ready(function(){
$(".ddgift .fa-chevron-down").click(function(){
$(".ddgift .fa-chevron-down").hide();
$(".ddgift ul li").slideDown();
$(".ddgift .fa-close").show();
});
$(".ddgift .fa-close").click(function(){
$(".ddgift .fa-close").hide();
$(".ddgift ul li").slideUp();
$(".ddgift .fa-chevron-down").show();
});
});
$(document).ready(function(){
$(".ddsungl .fa-chevron-down").click(function(){
$(".ddsungl .fa-chevron-down").hide();
$(".ddsungl ul li").slideDown();
$(".ddsungl .fa-close").show();
});
$(".ddsungl .fa-close").click(function(){
$(".ddsungl .fa-close").hide();
$(".ddsungl ul li").slideUp();
$(".ddsungl .fa-chevron-down").show();
});
});

$(document).ready(function(){
$(".ddhandb .fa-chevron-down").click(function(){
$(".ddhandb .fa-chevron-down").hide();
$(".ddhandb ul li").slideDown();
$(".ddhandb .fa-close").show();
});
$(".ddhandb .fa-close").click(function(){
$(".ddhandb .fa-close").hide();
$(".ddhandb ul li").slideUp();
$(".ddhandb .fa-chevron-down").show();
});
});
$(document).ready(function(){
$(".ddsale .fa-chevron-down").click(function(){
$(".ddsale .fa-chevron-down").hide();
$(".ddsale ul li").slideDown();
$(".ddsale .fa-close").show();
});
$(".ddsale .fa-close").click(function(){
$(".ddsale .fa-close").hide();
$(".ddsale ul li").slideUp();
$(".ddsale .fa-chevron-down").show();
});
});

$(document).ready(function(){
$("#plus1").click(function(){
$("#plus1").hide();
$(".subf0111").slideDown();
$("#minus1").show();
});
$("#minus1").click(function(){
$("#minus1").hide();
$(".subf0111").slideUp();
$("#plus1").show();
});

$("#plus022").click(function(){
$("#plus022").hide();
$(".subf0222").slideDown();
$("#minus022").show();
});
$("#minus022").click(function(){
$("#minus022").hide();
$(".subf0222").slideUp();
$("#plus022").show();
});

$("#plus033").click(function(){
$("#plus033").hide();
$(".subf0333").slideDown();
$("#minus033").show();
});
$("#minus033").click(function(){
$("#minus033").hide();
$(".subf0333").slideUp();
$("#plus033").show();
});

$("#plus044").click(function(){
$("#plus044").hide();
$(".subf0444").slideDown();
$("#minus044").show();
});
$("#minus044").click(function(){
$("#minus044").hide();
$(".subf0444").slideUp();
$("#plus044").show();
});

$("h4.f02h42").click(function(){
$(".subf022").slideToggle();
});

$("h4.f03h43").click(function(){
$("ul.subf033").slideToggle();
});

$("h4.f04h44").click(function(){
$("ul.subf044").slideToggle();
});
});

$(document).ready(function(){
$(".y1").click(function(){
$(".y1").hide();
$(".y2").show();
$("ul.analogueli").slideDown();
});
$(".y2").click(function(){
$(".y2").hide();
$(".y1").show();
$("ul.analogueli").slideUp();
});
});

$(document).ready(function(){
$(".m1").click(function(){
$(".m1").hide();
$(".m2").show();
$("ul.movementli").slideDown();
});
$(".m2").click(function(){
$(".m2").hide();
$(".m1").show();
$("ul.movementli").slideUp();
});
});

$(document).ready(function(){
$(".slidedownside").click(function(){
$(".side").slideDown();
});
$(".closerefine").click(function(){
$(".side").slideUp();
});
});
};







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
return false;
}
