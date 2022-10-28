"use strict";

const locationField = document.getElementById("location");
const byState = document.getElementById("byState");
const byType = document.getElementById("byType");
const changeLabel = document.getElementById("changeLabel");
const tBody = document.getElementById("tBody");

function loadSearchType() {
  locationField.innerHTML = "";
  let option = new Option("Select...", " ");

  locationField.appendChild(option);
  if (byState.checked) {
    changeLabel.innerHTML = "States/Territories";
    locationsArray.forEach((state) => {
      let option = new Option(state, state);
      locationField.appendChild(option);
    });
  } else if (byType.checked) {
    changeLabel.innerHTML = "Park Type";
    parkTypesArray.forEach((parks) => {
      let option1 = new Option(parks, parks);
      locationField.appendChild(option1);
    });
  }
}

function loadTableBody() {
  let selectValue = locationField.value;
  tBody.innerHTML = "";
  if (byState.checked) {
    nationalParksArray.forEach((park) => {
      if (selectValue === park.State) {
        buildLocationInfoRow(tBody, park);
      }
    });
  } else if (byType.checked) {
    nationalParksArray.forEach((park) => {
      if (park.LocationName.includes(selectValue)) {
        buildLocationInfoRow(tBody, park);
      }
    });
  }
}

function buildLocationInfoRow(table, nationalPark) {
  let row = table.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = nationalPark.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = nationalPark.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = nationalPark.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = nationalPark.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = nationalPark.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = nationalPark.Phone;

  let cell7 = row.insertCell(6);
  if (nationalPark.Visit) {
    const a = document.createElement("a");
    let link = document.createTextNode(nationalPark.Visit);
    a.appendChild(link);
    a.innerText = "Visit";
    a.href = nationalPark.Visit;
    a.target = "_blank";
    cell7.appendChild(a);
  }
}
window.onload = () => {
  loadSearchType();
  onclick = loadSearchType;
  locationField.onchange = loadTableBody;
};
