
function displayphonenumber(phno,country){

	if (phno.toString().length == 10 && !isNaN(phno))
	{
  		switch(country.toString()){
 		
 			case "US" :
 						var num = phno.toString();
 						console.log("Number in US format:"+ "+1-" + num.substring(0, 3) + "-" + num.substring(3, 6) + "-" + num.substring(6, 10));
 						break;	
 
 			case "IN" :

 	 					var num = phno.toString();
 						console.log("Number in IN format:"+ "+91-" +  num.substring(0, 5) + "-" + num.substring(5, 10));
 						break;
 			default:

 						console.log("country entered is invalid");
 						break;
 						}

	}
	else {

		console.log("phone number entered is invalid");

	}
}


displayphonenumber(2146519587,'US');
displayphonenumber(9846519587,'IN'); 
displayphonenumber(7148518876,'UK');