let array = [ ["1","Uyi-Idahor Benard Aiseosa","@Aise","aiseosauyiidahor@gmail.com","39"],
              ["2","Dikamsi Young Udochi","@dikamsi","youngudochi15@gmail.com","27"],
];
table = document.getElementById("table");

for (let i = 0; i < array.length; i++) {

    let newRow = table.insertRow(table.length);

    for (let j = 0; j < array[i].length; j++) {
        let cell = newRow.insertCell(j);
        cell.innerHTML = array[i][j];
    }
}