var obj = {
    "name" : ["Rajesh","Gole"],
    "age"   : 26,
    "city"  : "Mohali"
};


//JSON.stringify()

// document.write(obj);
// document.write(JSON.stringify(obj));


//JSON.parse()
var ob = '{"id": 764, "name": "Rajesh", "city":"Kolkata"}';
var json_ob = JSON.parse(ob);
// document.write(json_ob.id);


// document.getElementById('root');

var myArray = [
    {'name':'Anil', 'age':'30', 'birthdate':'11/10/1999'},
    {'name':'Bikas', 'age':'32', 'birthdate':'10/1/1995'},
    {'name':'Cab', 'age':'29', 'birthdate':'10/14/1990'},
    {'name':'Dennis', 'age':'25', 'birthdate':'11/29/1993'},
    {'name':'Tim', 'age':'27', 'birthdate':'3/12/1991'},
    {'name':'Erik', 'age':'24', 'birthdate':'10/31/2001'},
]

buildTable(myArray)



function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].name}</td>
                        <td>${data[i].age}</td>
                        <td>${data[i].birthdate}</td>
                  </tr>`
        table.innerHTML += row


    }
}