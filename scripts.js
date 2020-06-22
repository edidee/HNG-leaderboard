function fetchEntries() {
  const url =
    "https://spreadsheets.google.com/feeds/list/17_1B-7knKNEe76EKSwrPaucg9wx36L8HowSiLQz_Pxc/od6/public/values?alt=json";

  //get JSON data from API and save as JSON
  fetch(url)
    .then((response) => response.json())
    .then((json) => logData(json));
}

//create array of objects from data
const logData = (data) => {
  {
    var participants = [];
    data.feed.entry.forEach((entry) => {
      participants.push({
        name: `${entry.gsx$fullname.$t}`,
        username: `${entry.gsx$username.$t}`,
        email: `${entry.gsx$email.$t}`,
        points: `${entry.gsx$totalpoints.$t}`,
      });
    });
  }
  console.log(participants);
  return participants;
};

fetchEntries();
