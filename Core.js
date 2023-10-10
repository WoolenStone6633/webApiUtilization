

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
function displayQuotes(url) { //displays a list of quotes
	console.log("QuoteClicked");
	fetch(url)						//get the raw answer
        .then(res => res.json())			//return: object with
        .then(arr => {
            console.log("hi");
            let innerText = "<table>\n<tr><th>Quotes</th></tr>\n";  //This is where you start your table block
            // "<h3>Quotes</h3>\n
            // <table>\n
            // <tr><th>Quotes/th></tr>\n"
            for (let i = 0; i < arr.length; i++) {
                let attach = 'onclick="quoteClick( \'' + arr[i] + "');\"";
		        innerText+="<tr><td><a " + attach + ">" + arr[i].quote +"</a></td></tr>\n";
            }
            innerText += "</table>\n";
            document.getElementById("menu").innerHTML = innerText;
        });
	//getelementById("menu").append
}
