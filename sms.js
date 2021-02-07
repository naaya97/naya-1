
function addtolist(){
    let tel=document.getElementById("telN");  
    let txt=document.getElementById("result").textContent;  
    document.getElementById("result").textContent= txt + tel.value +'\n'; 
    }
function sendinfo() { 
    let xhttp = new XMLHttpRequest();
    let mes=document.getElementById("sms");
    let url = '/https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms';
    xhttp.onreadystatechange=function () {  //Call a function when the state changes.
    if (this.readyState ==4 && this.readyState==200) { //means everything is all right.In the same way ajax call works.
        alert(xhttp.responseText); //returns the text received from a server
    }
    };
    xhttp.open('POST', url, true);
    xhttp.send(mes);
}








