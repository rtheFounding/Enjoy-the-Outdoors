"use strict"

const mountainsField = document.getElementById("mountainsField");
const cardSection = document.getElementById("cardSection");

function loadMountainSelect() {
    mountainsField.innerHTML = "";
    let option = new Option("Select..");
    mountainsField.appendChild(option);
    mountainsArray.forEach((mountain) => {
        let newOption = new Option(mountain.name, mountain.name);
        mountainsField.appendChild(newOption);
    })
}

function loadMountainInfo() {
    let selectedValue = mountainsField.value;
    mountainsArray.forEach((mountain) => {
        if(selectedValue == mountain.name) {
            buildCard(cardSection, mountain)
        }
    })
}

function buildCard(section, mountain) {
    //created the card
    const div = document.createElement("div");
    div.className = "card";
    //put inside the document or card section which is a div being used
    section.appendChild(div);

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerText = mountain.name;

    let cardImg = document.createElement("img");
    cardImg.className = "card-img-top";
    cardImg.alt = mountain.name;
    cardImg.src = "images/" + mountain.img;

    let desc = document.createElement("p");
    desc.innerText = mountain.desc;

    let elevation = document.createElement("p");
    elevation.innerText = `${mountain.elevation} ft`;

    let addInfo = document.createElement("p");
    addInfo.innerText = `Effort: ${mountain.effort}
        Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}`;
    // button function
    let removeBtn = document.createElement("button");
    removeBtn.className = "btn btn-danger";
    removeBtn.innerText = "remove";
    function removeCard() {
        section.removeChild(div);
    };

    removeBtn.onclick = removeCard;

    const divBody = document.createElement("div");
    divBody.className = "card-body";
    div.appendChild(divBody);
    divBody.append(cardImg, cardTitle, desc, elevation, addInfo, removeBtn);


}

function clearScreen() {
    let cardSection = document.querySelector("#cardSection");

    let cards = document.querySelectorAll("#cardSection .card");
    cards.forEach((card) => cardSection.removeChild(card));
}

function displayMounts() {
    mountainsArray.forEach((mountain) => {
        buildCard(cardSection, mountain);
    })
}

window.onload = () => {
    loadMountainSelect();

    mountainsField.onchange = loadMountainInfo;
    const clearBtn = document.getElementById("clearBtn");
    clearBtn.onclick = clearScreen;

    const displayBtn = document.getElementById("displayBtn");

    displayBtn.onclick = displayMounts;
}