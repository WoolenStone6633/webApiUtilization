function displayCharacters() {  //displays a list of charactes
    fetch(url)
        .then(res => res.json())
        .then(arr => function() {
            
        });
}
function characterClick(url) {  //The url passed should have a specified character, using the character id

}


function displayLocations() {  //displays a list of locations
    fetch(url)
        .then(res => res.json())
        .then(arr => function() {
            
        });
}
function locationClick(url) { //The url passed should have a specified location, using the location id

}


function displayEpisodes() {  //diplays a list of episode names
    fetch(url)
        .then(res => res.json())
        .then(arr => function() {

        });
}
function episodeClick(url) { //The url passed should have a specified episode, using the episode id

}


function displayQuotes() { //displays a list of quotes
	url = urlBase + 'quote';
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
    let innerText = "<tr><td>";
    fetch(url)
        .then(res => res.json())
        .then(arr => {
            innerText += arr[num].quote;
            innerText += "<br> Said by: " + arr[num].by;
            innerText += "<br><img src=" + arr[num].image + ">";
            innerText += "</td></tr>";
            document.getElementById("display").innerHTML= innerText;
        });
}