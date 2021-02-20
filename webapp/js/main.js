/******************************************************/
/*                                                    */
/*         Avion School Final Project no.1            */
/*        Create a Webapp using a public API          */
/*             Coded by: Ace Macariola                */
/*        Github: https://github.com/amacariola       */
/*                                                    */
/******************************************************/

let mainurl = "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyCua037xQknK7sMR3CRBmHpxTLJKmRNbnc";
const apikey = "AIzaSyCua037xQknK7sMR3CRBmHpxTLJKmRNbnc";

/******************************************/
/*    FETCH Google Safe Browsing API      */
/******************************************/

document.querySelector("#Submit").addEventListener("click", function () {
    let check = document.getElementById("#url").value;
    fetch(mainurl, {
        method: "POST",
        headers: {
            "Accept" : "application/json",        
            "Content-Type": "application/json",
            "cache-control": "no-cache",
        },
        body: JSON.stringify({
            "client": {
                "clientId": "Ace Macariola",
                "clientVersion": "1.5.2",
            },
            "threatInfo": {
                "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING"],
                "platformTypes": ["WINDOWS"],
                "threatEntryTypes": ["URL"],
                "threatEntries": [
                    { "url": check }
                ]
            }
        })
    })
        .then(function (response) {

            return response.json();
        })
        .then(function (data) {
            for (var prop in data) {
                if (data.hasOwnProperty(prop))
                    document.querySelector('#status').textContent = `${check} is flagged as suspicious by Google Safe Browsing`;   
            }
            document.querySelector('#status').textContent = `${check} is safe to visit`;
        })
        .catch(function (err) {
            document.querySelector('#status').textContent = `${err}`;
        });
    document.getElementById('#url').value = '';

});
