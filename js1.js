 let arr=[];
 function addtolist () {
     let tel=document.getElementById("telN").value;
        arr.push(tel+"\n");
        var pav ="";
 for(i=0;i<arr.length;i++)
 {
     pav=pav+arr[i];
     
 }
 document.getElementById("result").innerHTML= pav;   
  }
  function sendinfo() {
const data= {
phoneNumbers:arr,
messageTemplate: document.getElementById("sms").value,
  };

  const jsonString = JSON.stringify(data);
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms', true);
  xhttp.setRequestHeader("Content-Type","application/json");
  xhttp.send(jsonString);
  }