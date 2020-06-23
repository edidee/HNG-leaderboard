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
        points: Number(`${entry.gsx$totalpoints.$t}`),
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

let array =[
  ["1","Aanuoluwapo Feyisetan","@Aanu","aanu.dexter@gmail.com","39"],
   ["2","Aaron, Aniebiet B.","@airon","aaron@gmail.com","27"],
   ["3","Abdul-Kareem Abdul-Fattah","@Awaab","adeoyin2828@gmail.com","26"],
   ["4","Abdulkareem Abdulkabir","RealAbdul","therealaabdulkabir@gmail.com", "25"],
   ["5","Abdulmaleek wasiu shina","@shina","oswasiu@gmail.com","24"],
   ["6","Abdulqudus Abubakre","@ibn_abubakre","abdulqudusabubakre@gmail.com","23"],
   ["7","Abdulrahman Olagunju Olabode","@BodeRahman","abdulrahmanolagunju.1@gmail.com","23"],
   ["8","Abdulshaqur Suleiman","@Shaqur","suleimanmadani@gmail.com","23"],
   ["0","Abegunde muyiwa","@Wildwest","mhrbankulise@gmail.com","23"],
   ["10","Abere Oghenefejiro Stephanie","@Fejiro001","aberefejiro@gmail.com","20"],
  ["11","Abigail Anioke","@techqueen","princessabigail001anioke@gmail.com","19"],
  ["12","Abigail Nonyelim", "@Abbie","abigailnonyelim@outlook.com","19"],
  ["13","Abiodun Popoola","@Popsabey","popsabey1@gmail.com","19"],
  ["14","Abiola Titus","@Abiola", "","19"],
  ["15","Abisoye Alli-Balogun", "@Abisoye","abisoyeoladayo@gmail.com","13"]
  ["16","Abodunrin Abdulsalam", "@Abdulsalam","abdulsalamabodunrin369@gmail.com","12"],
  ["17","Abu-Ekpeshie Emmanuel", "@Ekpeshie","emmanuelabu860@gmail.com","12"],
  ["18","Abubakar Sadiq Sambo", "@Sadiq","sadiqasg@gmail.com","11"],
  ["19","Adebambo Abiodun Oluwasegun","@KodingNYoung","abiodunadebambo869@yahoo.com","10"]
  ],
  
  table = document.getElementById("table");
  
  for (let i = 0; i < array.length; i++) {
      let newRow = table.insertRow(table.length);
      for (let j = 0; j < array[i].length; j++) {
         let cell = newRow.insertCell(j);
         cell.innerHTML = array[i][j];
          
      }
      
  }
