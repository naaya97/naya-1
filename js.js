function addToTable ()
{
  let phNumber=document.getElementById("phoneNumber").value;
  let conName=document.getElementById("contactName").value;
  let table=document.getElementsByTagName("table")[0];
  let newRow =table.insertRow(1);
  let cell = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML=conName+"\n"+phNumber;
  let checkb = document.createElement('input');
  checkb.setAttribute('type', 'checkbox');
  checkb.setAttribute('value', 'chk');
  cell.innerHTML=checkb;
}

//convert the table to array

//1

// let tableInfo = Array.prototype.map.call(document.querySelectorAll('empTable'), function(tr){
   //return Array.prototype.map.call(tr.querySelectorAll('td'), function(td){
     //return td.innerHTML;
     //});
   //});
 

 //2
   my_liste = [];
   function table_to_array(empTable) {
    myData = document.getElementById(empTable).rows
   
 
    for (var i = 0; i < myData.length; i++) {
            el = myData[i].children
            my_el = []
            for (var j = 0; j < el.length; j++) {
                    my_el.push(el[j].innerText);
            }
            my_liste.push(my_el)

    }
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



  

    function send() 
{
  const data=
     {
  phoneNumbers:my_liste,
  messageTemplate: document.getElementById("mesTe").value,
     };       
  const jsonStr = JSON.stringify(data);
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms', true);
  xhttp.setRequestHeader("Content-Type","application/json");
  xhttp.send(jsonStr);
  console.log(jsonStr);
}