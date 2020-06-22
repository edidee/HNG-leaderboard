const fetch = require("node-fetch");

function fetchEntries() {
    const url = "https://spreadsheets.google.com/feeds/list/17_1B-7knKNEe76EKSwrPaucg9wx36L8HowSiLQz_Pxc/od6/public/values?alt=json";

    fetch(url)
        .then(response => response.json())
        .then(json => logData(json));
}

const logData = data => {
    {
        data.feed.entry.forEach(entry => {
            console.log(`${entry.gsx$fullname.$t} ${entry.gsx$username.$t} ${entry.gsx$email.$t} ${entry.gsx$totalpoints.$t}`);
        });
    }
};

fetchEntries();
