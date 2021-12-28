let persons = [
    {firstName : "Sifat",lastName : "Sayed"},
    {firstName : "Saifa",lastName : "Jahan"},
];

function createPerson (person) {
  let promt = new Promise (function(resolve, reject) {
      persons.push(person);
      let error = false ;
      if (!error){
        resolve();
      } else {
          reject("Something went wrong . Please Try Again Later")
      }
     
  });
  return promt ;
};

function getPerson () {
    setTimeout(() => {
        let output = '';
        persons.forEach(person => {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output ;
    }, 2000);
};

createPerson({firstName: "Jannatul" , lastName : "Ferdous"})
.then(getPerson)
.catch(function (err) {
    console.log(err)
})