/* Popup.js file for the Safe Browse Extension */

document.addEventListener('DOMContentLoaded', function () {
    var checkpageButton = document.getElementById('#checkPage');
    checkpageButton.addEventListener('click', function () {
        chrome.tabs.getSelected(null, function (tab) {
            fetch("https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyCua037xQknK7sMR3CRBmHpxTLJKmRNbnc", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
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
                            { "url": tab.url }
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
                            document.querySelector('#result').textContent = 'Link is unsafe';
                    }
                    document.querySelector('#result').textContent = 'Link is safe';
                })
                .catch(function (err) {
                    document.querySelector('#result').textContent = 'Error Occured';
                })
        });
    });
});