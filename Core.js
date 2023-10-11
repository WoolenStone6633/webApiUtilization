function displayCharacters() {  //displays a list of charactes
    url = urlBase + 'character';  //Specific url for characters
    console.log("characterClicked");
    fetch(url)
        .then(res => res.json())
        .then(arr => {
            let innerText = "\n<tr><th>Characters</th></tr>\n";  //This is where the table block starts
            // <tr><th>Characters/th></tr>\n"
            for (let i = 0; i < arr.length; i++) {
                let characterUrl = url + "/" + (i + 1);
                let attach = "onclick='characterClick("+'"' + characterUrl + '"' + ")';";
                //onclick="characterClick(characterUrl)";
		        innerText+="<tr><td class = 'displayItem' ><a " + attach + ">" + arr[i].name +"</a></tr>\n";
            }
            innerText += "\n";
            document.getElementById("display").innerHTML = innerText;
        });
}
function characterClick(url) {  //The url passed should have a specified character, using the character id
    let innerText = "<tr><td class = 'displayItem' >";
    fetch(url)
        .then(res => res.json())  //Gets the specified character
        .then(character => {
            innerText += "<img src=" + character.img_url + ">";
            innerText += "<br> Name: " + character.name;
            innerText += "<br> Species: " + character.species;
            innerText += "<br> Gender: " + character.gender;
            innerText += "<br> Origin: " + character.origin;
            innerText += "</td></tr>";
            document.getElementById("display").innerHTML= innerText;
        });
}


function displayLocations() {  //displays a list of locations
    url = urlBase + 'location';  //Specific url for locatoins
    console.log("LocationClicked");
	fetch(url)						//get the raw answer
        .then(res => res.json())			//return: object with
        .then(arr => {
            let innerText = "\n<tr><th>Locations</th></tr>\n";  //This is where you start your table block
            // <tr><th>Locations/th></tr>\n"
            for (let i = 0; i < arr.length; i++) {
                let locationUrl = url + "/" + (i + 1);
                let attach = "onclick='locationClick("+'"' + locationUrl + '"' + ")';";
		        innerText+="<tr><td class = 'displayItem' ><a " + attach + ">" + arr[i].name +"</a></td></tr>\n";
            }
            innerText += "\n";
            document.getElementById("display").innerHTML = innerText;
        });
}
function locationClick(url) { //The url passed should have a specified location, using the location id
    let innerText = "<tr><td class = displayItem>";
    fetch(url)
        .then(res => res.json())
        .then(location => {
            innerText += "<img src=" + location.img_url + ">";
            innerText += "<br>Name: " + location.name;
            innerText += "<br>Inhabitants: ";

            if (location.inhabitants.length != 0) { //if the inhabitants array contains anything
                for (let i = 0; i < location.inhabitants.length; i++) {
                    if(i == 0){ //first inhabitants
                        innerText += location.inhabitants[i];
                    }
                    else{ // any inhabitants after separated by a comma
                        innerText+= ", " + location.inhabitants[i];
                    }
                }
            } else {
                innerText += "None";
            }

            innerText += "<br>Notible Residents: "; 
            if (location.notable_residents.length != 0) { //Gets the notible residence if there are any        
                for(let i = 0; i < location.notable_residents.length; i++){
                fetch(location.notable_residents[i])
                    .then(res => res.json())
                    .then(character => {
                        if (i != location.notable_residents.length - 1) 
                            innerText += character.name + ", ";
                        else {
                            innerText += character.name;
                            innerText += "</td></tr>";
                            document.getElementById("display").innerHTML= innerText;
                        }
                    });
                }
            }
            else {
                innerText += "None</td></tr>";
                document.getElementById("display").innerHTML= innerText;
            }
            
        });
}


function displayEpisodes() {  //diplays a list of episode names
    url = urlBase + 'episode';  //Specific url for episodes
    console.log("episodeClicked");
    fetch(url)
        .then(res => res.json())
        .then(arr => {
            let innerText = "\n<tr><th>Episodes</th></tr>\n";  //This is where you start your table block
            // <tr><th>Episodes/th></tr>\n"
            for (let i = 0; i < arr.length; i++) {
                let episodeUrl = url + "/" + (i + 1);
                let attach = "onclick='episodeClick("+'"' + episodeUrl + '"' + ")';";
                //onclick="episodeClick(episodeUrl)";
		        innerText+="<tr><td class = 'displayItem' ><a " + attach + ">" + arr[i].name +"</a></tr>\n";
            }
            innerText += "\n";
            document.getElementById("display").innerHTML = innerText;
        });
}
function episodeClick(url) { //The url passed should have a specified episode, using the episode id
    let innerText = "<tr><td class = 'displayItem' >";
    fetch(url)
        .then(res => res.json())
        .then(episode => {
            innerText += "<img src=" + episode.img_url + ">";
            innerText += "<br> Name: " + episode.name;
            innerText += "<br> Air Date: " + episode.air_date;
            innerText += "<br> Characters: ";
            for (let i = 0; i < episode.characters.length; i++) {  //For getting all the characters
                fetch(episode.characters[i])  //retrieves the specific character with their information
                    .then(res => res.json())
                    .then(character => {
                        if (i != episode.characters.length - 1) 
                            innerText += character.name + ", ";  //If it is not the end
                        else {
                            innerText += character.name;  // If it is the end of the list of characters
                            innerText += "</td></tr>";
                            document.getElementById("display").innerHTML= innerText;
                        }
                    });
            }
        });
}


function displayQuotes() { //displays a list of quotes
	url = urlBase + 'quote';  //Specific url for quotes
    console.log("QuoteClicked");
	fetch(url)						//get the raw answer
        .then(res => res.json())			//return: object with
        .then(arr => {
            let innerText = "\n<tr><th>Quotes</th></tr>\n";  //This is where you start your table block
            // <tr><th>Quotes/th></tr>\n"
            for (let i = 0; i < arr.length; i++) {
                let attach = "onclick='quoteClick("+'"' + url +'"'+','+'"' + i + '"' + ")';";
                //onclick="quoteClick(url,i)";
		        innerText+="<tr><td class = 'displayItem' ><a " + attach + ">" + arr[i].quote +"</a></tr>\n";
            }
            innerText += "\n";
            document.getElementById("display").innerHTML = innerText;
        });
}
function quoteClick(url, num){  //For handling when the user clicks on a quote
    let innerText = "<tr><td class = 'displayItem' >";  //holding the innerHTML text
    fetch(url)
        .then(res => res.json())  //gives the array of quotes
        .then(arr => {
            innerText += arr[num].quote;  //gets the specifics about the quote
            innerText += "<br> Said by: " + arr[num].by;
            innerText += "<br><img src=" + arr[num].image + ">";
            innerText += "</td></tr>";
            document.getElementById("display").innerHTML= innerText;
        });
}
