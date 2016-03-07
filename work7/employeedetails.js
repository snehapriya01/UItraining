

function displayEmployeedetails(){
	var employeeList = getEmployeedetails();
	var countEmployee= employeeList.length;
	var i=0;
	while(i< countEmployee){
		var Emp = employeeList[i]; 
		console.log("Name= "+Emp.fName+" "+Emp.lName);
		i++;
	}
}


function getEmployeedetails(){
	var employees=[ 
					{fName:"nandu",lName:"chowdary"},
					{fName:"priya",lName:"venkat"},
					{fName:"sai",lName:"yalamanchili"},
					{fName:"venkat",lName:"koganti"}
					];
return employees;					
}

displayEmployeedetails();
