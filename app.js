document.getElementById("get_jokes").addEventListener("click" , function () {
    let xhr = new XMLHttpRequest() ;
    let number = document.getElementById("numberOfJokes").value ;

    xhr.open ("GET" , `http://api.icndb.com/jokes/random/${number}`,true);
    xhr.onprogress = function () {
        document.getElementById("output").innerHTML = `<h2>Loading........</h2>`
    }

    xhr.onload = function () {
        if (this.status === 200 ) {
           const data = JSON.parse(this.responseText);
           let jokes = (data.value);
            let output = "<ol>";
            jokes.forEach(joke => {
                output += `<li>${joke.joke}</li>`
            });

            output += "</ol>"
            document.getElementById("output").innerHTML = output ;
           console.log(jokes)
        }
    }
    xhr.send()
    // console.log(xhr);
})