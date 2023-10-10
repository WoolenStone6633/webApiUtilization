function displayCharacters(url) {  //displays a list of charactes
    fetch(url)
        .then(res => res.json())
        .then(arr => function() {
            
        });
}
function displayLocations(url) {  //displays a list of locations
    fetch(url)
        .then(res => res.json())
        .then(arr => function() {
            
        });
}
function displayEpisodes(url) {  //diplays a list of episode names
    fetch(url)
        .then(res => res.json())
        .then(arr => function() {

        });
}

function displayQuotes() { //displays a list of quotes
	url = urlBase + 'quote';
    console.log(url);
    console.log("QuoteClicked");
	fetch(url)						//get the raw answer
        .then(res => res.json())			//return: object with
        .then(arr => {
            console.log(arr);
            let innerText = "\n<tr><th>Quotes</th></tr>\n";  //This is where you start your table block
            // "<h3>Quotes</h3>\n
            // <table>\n
            // <tr><th>Quotes/th></tr>\n"
            for (let i = 0; i < arr.length; i++) {
                let attach = "onclick='quoteClick("+'"' + url +'"'+','+'"' + i + '"' + ")';";
                //onclick="quoteClick(arr[i].quote,arr[i].by)";
		        innerText+="<tr><td ><a " + attach + ">" + arr[i].quote +"</a></tr>\n";
            }
            innerText += "\n";
            document.getElementById("display").innerHTML = innerText;
        });
}

function quoteClick(url, num){
    fetch(url)
        .then(res => res.json())
        .then(arr => {
            document.getElementById("display").innerHTML="<tr><td>"+ arr[num].quote +"<br> Said by: "+ arr[num].quoteBy +"<td><tr>";
        });
}