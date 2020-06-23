
async function fetchEntries() {
    const url =
      "https://spreadsheets.google.com/feeds/list/17_1B-7knKNEe76EKSwrPaucg9wx36L8HowSiLQz_Pxc/od6/public/values?alt=json";
  
    //get JSON data from API and save as JSON
    var response = await fetch(url);
    var data = await response.json();
    var participants = logData(data);
    //TODO: remove console.log before deployment
    console.log(participants);
    var sortedParticipants = sortPoints(participants);
    //TODO: remove console.log before deployment
    console.log(sortedParticipants);
    return sortedParticipants;
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
    return participants;
  };
  
  //sort array with points property
  function sortPoints(participants) {
    var sortedParticipants = Object.create(participants);
  
    function compare(a, b) {
      const point1 = a.points;
      const point2 = b.points;
  
      let comparison = 0;
      if (point1 > point2) {
        comparison = -1;
      } else if (point1 < point2) {
        comparison = 1;
      }
      return comparison;
    }
  
    return sortedParticipants.sort(compare);
  }
  
  fetchEntries();
