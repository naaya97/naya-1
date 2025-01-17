function addToTable() {
  let phNumber = document.getElementById("phoneNumber").value;
  let conName = document.getElementById("contactName").value;
  let table = document.getElementsByTagName("table")[0];
  let newRow = table.insertRow(0);
  let cell = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  // cell2.innerText = conName + "\n" + phNumber;

  // adding new element to the cell by MooD
  let cellContact = document.createElement("h5");
  let cellNum = document.createElement("p");
  cellContact.innerHTML = conName;
  cellNum.innerHTML = phNumber;

  cell2.appendChild(cellContact);
  cell2.appendChild(cellNum);
  console.log(conName, phNumber);
  let element = document.createElement("input");
  element.type = "checkbox";
  element.name = "chk";
  element.className = "checkBox";
  element.value = "";
  cell.appendChild(element);
  // cleaning up ur inputs
  phNumber = "";
  conName = "";
}


showChecked();
function showChecked() {
  document.getElementById("checkValue").textContent =
    "Selected phone numbers are : " +
    document.querySelectorAll("input:checked").length +
    " Numbers";
}
document.querySelectorAll("input[name=chk]").forEach((i) => {
  i.onclick = function () {
    showChecked();
  };
});

/*
//Getting all selected checkboxes
let inputs = document.getElementsByTagName("input");
let checked = []; //will contain all checkboxes
// use forEach for looping
for (let i = 0; i < inputs.length; i++) { 
    if (inputs[i].checked) {
      checked.push(inputs[i]);
    }
  }
let nbChecked = checked.length; //number of checkboxes
document.getElementById("checkValue").innerText="Selected phone numbers are : " + nbChecked +" Numbers";
*/

function send() {
  const data = {
    phoneNumbers: infoArr ,
    messageTemplate: document.getElementById("mesTe").value,
  };
  const jsonStr = JSON.stringify(data);
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "POST",
    "https://601bf66d1a9c22001706003a.mockapi.io/api/test/sms",
    true
  );
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send(jsonStr);
  console.log(jsonStr);
}


// starting Mood code

const addARowBtn = document.querySelector("#addARow");
// adding event on adding elements to table's row

// adding the array that we are gonna to push elemnts into
const infoArr = [];
addARowBtn.addEventListener("click", (e) => {
  let phNumber = document.getElementById("phoneNumber").value;
  let conName = document.getElementById("contactName").value;
  let arrVals = {
    phNumber,
    conName,
    checked: false,
    elementIndex: null,
  };
  infoArr.push(arrVals);

  // adding the array to localStorage
  localStorage.setItem("rows", JSON.stringify(infoArr));
  // getting the final result
  console.log(JSON.parse(localStorage.getItem("rows")));

  //hidding modal
  $("#exampleModal").modal("hide");

  // defining checkboxes
  const checkBox = document.querySelectorAll(".checkBox");
  checkBox.forEach((el, i) => {
      el.addEventListener("change", (e) => {
      console.log(infoArr[i].checked);
      infoArr[i].checked = e.target.checked;
      infoArr[i].elementIndex = i;

      localStorage.setItem("rows", JSON.stringify(infoArr));
      // getting the final result
      console.log(JSON.parse(localStorage.getItem("rows")));
    });
  });
});