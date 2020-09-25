let employee = [
    {
        name : "ayesha",
        age : 26,
        city : "pune",
        salary : 55000
    },
    {
        name : "Preeta",
        age : 24,
        city : "Mumbai",
        salary : 45000
    },
    {
        name : "Krystal",
        age : 32,
        city : "Banglore",
        salary : 75000
    },
    {
        name : "Ishwari",
        age : 25,
        city : "pune",
        salary : 60000
    },
];


function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (emp, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${emp.name}</td>
      <td>${emp.age}</td>
      <td>${emp.city}</td>
      <td>${emp.salary}</td>
      <td><button onclick='deleteEmployee(${index})'>delete</button></td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    //   document.getElementById("tdata").innerHTML = tabledata;
  }
  display(employee);
  
function addEmp(e) {
    e.preventDefault();
    let emp = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("City").value;
    let salary = document.getElementById("Salary").value;
    emp.name = name;
    emp.age = Number(age);
    emp.city = city;
    emp.salary = Number(salary);
  
    employee.push(emp);
  
    display(employee);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }

  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = employee.filter(function (emp) {
      return (
        emp.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  
  function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;
  
    let newdata = employee.filter(function (emp) {
      return (
        emp.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }

  
function deleteEmployee(index) {
    employee.splice(index, 1);
    display(employee);
  }
  
  