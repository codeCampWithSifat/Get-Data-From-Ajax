let persons = [
    {firstName : "Sifat",lastName : "Sayed"},
    {firstName : "Sany",lastName : "Syed"},
]

function createPerson (person,callback) {
    setTimeout(() => {
        persons.push(person);
        callback ();
    }, 2000);
};

function getPerson () {
    setTimeout(() => {
        let output = '';
        persons.forEach(person => {
            output += `<li>${person.firstName} ${person.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output ;
    }, 3000);
} ;

createPerson({firstName :"Nur", lastName:"Hossain"},getPerson);
getPerson()