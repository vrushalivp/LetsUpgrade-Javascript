let Person =[
 {
    name: "Preeta" ,
    age: 36 ,
    country : "India" ,
    hobbies: ["Reading", "coding", "Drawing", "Cycling"]
 },
 {
     name: "Shivani" ,
     age: 21 ,
     country: "India" ,
     hobbies :["Reading" ,"writing"]
 },
 {
    name: "Rachel" ,
    age: 35 ,
    country: "USA" ,
    hobbies :["Reading" ,"Acting"]

 },

 {
    name: "Monica" ,
    age:  22,
    country: "SriLanka" ,
    hobbies :["Reading" ,"Acting"]

 },


];

//function to print all objects from array 
function printObjects(){

    console.log("Printing All Objects");

    for(let i=0; i<Person.length; i++){
        console.log(Person[i]);
    }
}

//function to print objects that have age less than 30
function printAge(){

    console.log("Printing All Objects having age less than 30");

   for(let i=0; i<Person.length; i++)  {
       if(Person[i].age < 30)
       {
           console.log(Person[i]);
       }
   }
}

//function to print objects that have country India
function printCountry(){

    console.log("Printing All Objects having country India");

    for(let i=0; i<Person.length; i++)  {
        if(Person[i].country == "India")
        {
            console.log(Person[i]);
        }
    }
 }
 

printObjects();
printAge();
printCountry(); 
