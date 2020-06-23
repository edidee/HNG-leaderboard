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