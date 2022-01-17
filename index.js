let mobilMenu = () => {
    document.querySelector("nav").classList.toggle("menu-on");
}






function loader() {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".loader").style.transition = "2s";
    document.querySelector(".header").style.display = "block";
    document.querySelector(".section").style.display = "block";
  }
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





  function contact() {
    //                
    let name = document.getElementById("Name").value;
    var mail = document.getElementById("Mail").value;
    let subject = document.getElementById("Subject").value;
    var message = document.getElementById("Message").value;
    
  
    if (name == "" || name.length < 3) {
      alert("enter your Name");
      return false;
    }if (mail == "") {
      alert("enter your Email");
      return false;
    }
    if (subject == "") {
      alert("enter your Subject");
      return false;
    }
    if (message == "" || message.length < 10) {
      alert("enter your Message");
      return false;
    }

    alert(name + "   " + mail +"  " + subject +"  " + message);
  }
  // booking script
    // variables of the select tags 
let gearBoxes = document.querySelector("#gearbox"),
type = document.querySelector("#type"),
fuel = document.querySelector("#fuel"),
days = document.querySelector("#days"),
submit = document.querySelector("#submit");

// variables of the types input 
let mType = ["Citadine", "Compact", "Utility", "Construction"],
aType = ["Berline", "Truck"],
oType = "Moto";


// variables of the fuel input 
let electric = ["Moto", "Citadine"],
hybrid = ["Citadine", "Compact", "Berline"],
gasoline = ["Moto", "Citadine", "Berline", "Compact", "Construction"],
Diesel = ["Citadine", "Compact", "Berline", "Utility", "Construction", "Truck"];



// if the user select one of the element on the gearBoxes select this script well start working
gearBoxes.addEventListener("change",() => {
if(gearBoxes.value == "manual") {
  
    type.innerHTML = `<option value="none">--Choose--</option>`;
    mType.forEach(m => {
        type.innerHTML += `<option value="${m}">${m}</option>`;
    });

} else if(gearBoxes.value == "automatic") {
   
    type.innerHTML = `<option value="none">--Choose--</option>`;
    aType.forEach(a => {
        type.innerHTML += `<option value="${a}">${a}</option>`;
    });

} else if(gearBoxes.value == "moto") {
    
    type.innerHTML = `<option value="none">--Choose--</option>`;
    type.innerHTML += `<option value="${oType}">${oType}</option>`;

} else {
  
    type.innerHTML = `<option value="none">--Choose--</option>`;
    fuel.innerHTML = `<option value="none">--Choose--</option>`;
}
});



// if the user select one of the element on the types select this script well continue working
type.addEventListener("change",() => {
fuel.innerHTML = `<option value="none">--Choose--</option>`;
if (electric.includes(type.value)) {
    
    fuel.innerHTML += `<option value="Electric">Electric</option>`;

}
if (hybrid.includes(type.value)) {
    
    fuel.innerHTML += `<option value="Hybrid">Hybrid</option>`;

}
if (gasoline.includes(type.value)) {
    
    fuel.innerHTML += `<option value="Gasoline">Gasoline</option>`;

} 
if (Diesel.includes(type.value)) {
   
    fuel.innerHTML += `<option value="Diesel">Diesel</option>`;

}
if (type.value == "none") {
  
    fuel.innerHTML = `<option value="none">--Choose--</option>`;
}
});


// if the user select one of the element on the fuel select this script well continue working
fuel.addEventListener("change", () => {
if (fuel.value !== "none") {

    days.focus();

} else {
   
    days.value = "";
}
});


// when the user click the submit button the calculation will start.
submit.addEventListener("click", (e) => {
e.preventDefault();
let result = 0,
    typePrice = 0,
    fuelPrice = 0;
switch (fuel.value) {
    case "Electric":
        fuelPrice = 1.05;
        break;
    case "Hybrid":
        fuelPrice = 1.09;
        break;
    case "Gasoline":
        fuelPrice = 1.14;
        break;
    case "Diesel":
        fuelPrice = 1.21;
        break;
}

switch (type.value) {
    case "Moto":
        typePrice = 10;
        break;
    case "Citadine":
        typePrice = 12;
        break;
    case "Compact":
        typePrice = 14;
        break;
    case "Berline":
        typePrice = 20;
        break;
    case "Utility":
        typePrice = 16;
        break;
    case "Construction":
        typePrice = 900;
        break;
    case "Truck":
        typePrice = 250;
        break;
}

// store the prise on the result variable depending on the gearBoxes.
if(gearBoxes.value = "automatic") {
    result = (typePrice * ( fuelPrice + 1.19)) * days.value;
} else {
    result = (typePrice  * fuelPrice ) * days.value;
}

// display the result.
window.alert(parseFloat(result) + "€");
})
  