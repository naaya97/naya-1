tel:String;
var txt=[];
var x = '';
function addtolist()
     {
    this.tel=document.getElementById("telN");  
    this.txt=document.getElementById("result").textContent = this.txt +x + this.tel.value ; 
    x = '\n';
     }
function sendinfo() 
         {
    let xhttp = new XMLHttpRequest();
    let url ='https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms';
    this.sms=document.getElementById("sms");
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.onreadystatechange=function () 
             { 
    if (this.readyState ==4 && this.readyState==200) 
                 { 
        JSON.parse(xhttp.responseText)=console.log(json.messageTemplate.value+","+json.phoneNumbers.value);
        
                 }
             };
   let data=JSON.stringify
                     ({
    phoneNumbers:txt.toString().split("\n"),
    messageTemplate:this.sms.value,
                     });
xhttp.send(data);
console.log(txt)
         }