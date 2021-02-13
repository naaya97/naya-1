
function addtolist(){
    let tel=document.getElementById("telN");  
    let txt=document.getElementById("result").textContent;  
    document.getElementById("result").textContent= txt + tel.value +'\n'; 
    }
function sendinfo() { 
    let xhttp = new XMLHttpRequest();
    let url ='https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms';

    xhttp.open('POST', url, true);
xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.onreadystatechange=function () { 
    if (this.readyState ==4 && this.readyState==200) { 
        document.getElementById("sms").innerHTML=json.messageTemplate+","+json.phoneNumber;
        JSON.parse(xhttp.responseText);
        //console.log(jons.messageTemplate+ ","+ jo.phoneNumber)
        
    }
    };
    
   let data=JSON.stringify({
    "phoneNumbers":["05364737007","054734447","023146544"],
       "messageTemplate":"sending this message to the provided numbers"
  
});
    xhttp.send(data);
}








