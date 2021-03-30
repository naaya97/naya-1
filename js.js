
function addToTable ()
{
  let phNumber=document.getElementById("phoneNumber").value;
  let conName=document.getElementById("contactName").value;
  let table=document.getElementsByTagName("table")[0];
  let newRow =table.insertRow(0);
  let cell = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  cell2.innerText=conName+"\n"+phNumber;
  let element = document.createElement("input");
  element.type = "checkbox";
  element.name="chk";
  element.value="";
  cell.appendChild(element);
 
}

let arr = [];
function addToArray ()
{
  let phNumber=document.getElementById("phoneNumber").value;
  let conName=document.getElementById("contactName").value;
  arr.push(conName+phNumber);
}

/*
function filterArr() {
  checkEle.forEach((checkbox) => {
    if (checkbox.checked) checkboxValues.push(checkbox.value);
  });
      }
*/




/*
let elementTypesSelected;
let getElement = element.filter(function (element) {
    return elementTypesSelected.indexOf(element.storeType) > -1;
});
*/


/*
document.addEventListener('change', () => {
  const checkedValues = [...document.querySelectorAll('.elementCheckBox')]
    .filter(input => input.checked)
    .map(input => input.value);
  const filteredStores = element.filter(({ elementType }) => checkedValues.includes(elementType));
  console.log(filteredElement);
});
*/









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

/*
//Getting all selected checkboxes
let inputs = document.getElementsByTagName("input");
let checked = []; //will contain all checked checkboxes
for (let i = 0; i < inputs.length; i++) { 
    if (inputs[i].checked) {
      checked.push(inputs[i]);
    }
  }
let nbChecked = checked.length; //number of checked checkboxes
document.getElementById("checkValue").innerText="Selected phone numbers are : " + nbChecked +" Numbers";

*/
   

   function send() 
{
  const data=
     {
  phoneNumbers:  arr,
  messageTemplate: document.getElementById("mesTe").value,
     };       
  const jsonStr = JSON.stringify(data);
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms', true);
  xhttp.setRequestHeader("Content-Type","application/json");
  xhttp.send(jsonStr);
  console.log(jsonStr);
}


/*
//hide table
function myFunction() {
  document.getElementById("myDIV").style.display = 'none';
}
*/






