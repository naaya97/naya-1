tel:String;
var x = 0 ;
var txt = Array();
sms: String;
//var sp=txt;

function addtolist(){
    txt[0] = document.getElementById("telN").value;
    this.tel=document.getElementById("telN");  
    this.txt=document.getElementById("result").textContent;  
    document.getElementById("result").textContent= this.txt + this.tel.value +'\n'; 
    x++;
    
    }
function sendinfo() {
    let xhttp = new XMLHttpRequest();
    let url ='https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms';
    this.sms=document.getElementById("sms");
    xhttp.open('POST', url, true);
xhttp.setRequestHeader("Content-Type","application/json");
    xhttp.onreadystatechange=function () { 
    if (this.readyState ==4 && this.readyState==200) { 
        JSON.parse(xhttp.responseText)=console.log(json.messageTemplate.value+","+json.phoneNumbers.value);
        
    }
    };
   let data=JSON.stringify({
    phoneNumbers:txt.toString().split(),
 messageTemplate:this.sms.value,
    
  
});
    xhttp.send(data);
    console.log(txt)
}









