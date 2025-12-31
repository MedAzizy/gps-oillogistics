// JavaScript Document
var url = window.location.search.substring(1);
prm = url.substring(url.indexOf('?')+3, url.length);
if (prm=="sft"){
	document.getElementById("sft").style.visibility="visible";
	document.getElementById("slw").innerHTML="";
}else if (prm=="slw"){
	document.getElementById("slw").style.visibility="visible";
	document.getElementById("sft").innerHTML="";
}else{
	document.getElementById("sft").style.visibility="hidden";
	document.getElementById("slw").style.visibility="hidden";
}
