function addToTable ()
{
  let phNumber=document.getElementById("phoneNumber").value;
  let conName=document.getElementById("contactName").value;
  let table=document.getElementsByTagName("table")[0];
  let newRow =table.insertRow(1);
  let cell = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  cell2.innerText=conName+"\n"+phNumber;
  let element1 = document.createElement("input");
  element1.type = "checkbox";
  element1.name="chk";
  element1.value="";
  cell.appendChild(element1); 
}


showChecked();
function showChecked()
{
  document.getElementById("checkValue").textContent =
 "Selected phone numbers are : " + document.querySelectorAll("input:checked").length+" Numbers";
}
  document.querySelectorAll("input[name=chk]").forEach(i=>
   {
  i.onclick = function()
     {
  showChecked();
     }
   });

   let arr = [];
   function addToArray ()
   {
     let phNumber=document.getElementById("phoneNumber").value;
     let conName=document.getElementById("contactName").value;
     arr.push(conName+phNumber);
   }
 


  




   function send() 
{
  const data=
     {
  phoneNumbers:arr ,
  messageTemplate: document.getElementById("mesTe").value,
     };       
  const jsonStr = JSON.stringify(data);
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms', true);
  xhttp.setRequestHeader("Content-Type","application/json");
  xhttp.send(jsonStr);
  console.log(jsonStr);
}