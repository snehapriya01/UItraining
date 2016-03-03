
function displayphonenumber(phno,country){
	
 if (country == "US")
 {
 	var convertedusno = convertusno(phno);
 	console.log("Number in US format:"+convertedusno);

 }
 else if (country == "IN"){

 	 var convertedinno = convertinno(phno);
 	console.log("Number in INDIA format:"+convertedinno);
 }
 else
 {
 	console.log("Country entered is invalid");
 }

}


function convertusno(phno){

	var num = phno.toString();
    var no1 = num.substring(0, 3);
    var no2 = num.substring(3, 6);
    var no3 = num.substring(6,10);

var usnumber= "+1" + "-" + no1 + "-" + no2 + "-" + no3;
return usnumber;

	 
}

function convertinno(phno){

	var num = phno.toString();
    var no1 = num.substring(0, 5);
    var no2 = num.substring(5, 10);

var innumber= "+91" + "-" + no1 + "-" + no2 ;
return innumber;

	 
}
displayphonenumber(2146519587,'US');
displayphonenumber(9846519587,'IN');
displayphonenumber(7148518876,'UK');
