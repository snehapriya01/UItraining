
function getempinfo() {
	empdetails("fname","lname","age","salary","department");
    empdetails("Sai", "Lakshmi", 32, 200450, "Supplychain");
    empdetails("Naveen", "yalamanchili", 47, 690000, "Masters");
    empdetails("Ram", "Kaarthikeya", 27, 300000, "Cse");
    empdetails("sneha", "koganti", 24, 50000, "Electrical")

}

function empdetails(fname,lname,age,salary,department){
    var employees = [];
    employees.push(fname,lname,age,salary,department);
    
    createtable(employees);
}

function createtable(employees){
	var divid=document.getElementById("divtableid")
    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td = [];
        for(var i = 0; i<5 ; i++) {
            td[i] = document.createElement('td');
            td[i].innerText = employees[i];
            td[i].style.textAlign ="center"; 
            td[i].style.width = "75px";
            td[i].style.height = "50px";
            tr.appendChild(td[i]);

        }
        table.appendChild(tr);
        divid.appendChild(table)
    
}