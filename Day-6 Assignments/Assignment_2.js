window.onload = function() {
  let iniBus = [

  ];
  if (localStorage.getItem("Bus") == null) {

      localStorage.setItem("Bus", JSON.stringify(iniBus));
  }
      
};

//--------------------------------------display---------------------------------------------


function display(superarray=undefined) {
  let tabledata = "";
  if(superarray==undefined)
      Bus=JSON.parse(localStorage.getItem("Bus"))
   else
       Bus = superarray;
  

  Bus.forEach(function (bus, index) {
    let currentrow = `<tr>
    <td>${index + 1}</td>
    <td>${bus.name}</td>
    <td>${bus.source}</td>
    <td>${bus.destination}</td>
    <td>${bus.number}</td>
    <td>${bus.passengerCap}</td>
    <td><button onclick='deleteBus(${index})'>delete</button></td>
    </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

//-----------------------------------------add bus--------------------------------------------

function addBus(e) {
  e.preventDefault();
  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let passengerCap = document.getElementById("passangerCap").value;
  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = Number(number);
  bus.passengerCap = Number(passengerCap);

  let Bus = JSON.parse(localStorage.getItem("Bus"));
  Bus.push(bus);
  localStorage.setItem("Bus", JSON.stringify(Bus));

  display(Bus);

  document.getElementById("name").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("number").value = "";
  document.getElementById("passangerCap").value = "";
}

//--------------------------------------search ---------------------------------------------------


function searchByDestination() {
  let searchValue = document.getElementById("searchDestination").value;
  let Bus = JSON.parse(localStorage.getItem("Bus"));
  let newdata = Bus.filter(function (bus) {
    return (
      bus.destination.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}


function searchBySource() {
  let searchValue = document.getElementById("searchSource").value;
  let Bus = JSON.parse(localStorage.getItem("Bus"));
  let newdata = Bus.filter(function (bus) {
    return (
      bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}


//------------------------------------------display---------------------------------------------

function deleteBus(index) {
let Bus = JSON.parse(localStorage.getItem("Bus"));
Bus.splice(index, 1); 
localStorage.setItem("Bus", JSON.stringify(Bus));
display(Bus);
}

