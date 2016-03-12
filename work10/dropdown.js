function getVechicleData(){

	 vechicledata=[
	 			{year:"select year",make:"select make",model:"select model"},
	 			{year:2015,make:"Audi",model:"A4"},
	 			{year:2014,make:"Benz",model:"C2000"},
	 			{year:2015,make:"Maruti",model:"S-Cross"},
	 			{year:2015,make:"Maruti",model:"WagonR"},
	 			{year:2013,make:"BMW",model:"x5"},
	 			{year:2012,make:"lexus",model:"x3"}
	 ];
	 return vechicledata;
}

function buildctrl(tagname,id,data,name){
    var divid = document.getElementById("divid");
    var ctrl = document.createElement(tagname);
    ctrl.name = name;
    ctrl.id = id;
    if(tagname == "label"){
        ctrl.innerText = data;
    }
    else{
        ctrl.value = data;
    }
    divid.appendChild(ctrl);
}

function binddatatoyeardropdown(){
	
	buildctrl("br","breaktag","","braktag");
	buildctrl("label","yrdropdownlbl","Year : ","lbldropdown");
	buildctrl("select","ddlyear","","yrdropdown");
	buildctrl("br","breaktag","","braktag");
	buildctrl("br","breaktag","","braktag");
	buildctrl("label","makedropdownlbl","Make : ","lbldropdown1");
	buildctrl("select","ddlmake","","mkdropdown");
	buildctrl("br","breaktag","","braktag");
	buildctrl("br","breaktag","","braktag");
	buildctrl("label","modeldropdownlbl","Model : ","lbldropdown2");
	buildctrl("select","ddlmodel","","mdldropdown");
	buildctrl("br","breaktag","","braktag");
	var vechicleinfo=getVechicleData();
	var yeararray=[];
	var yeardropdown=document.getElementById("ddlyear");
	for(i=0;i<vechicleinfo.length;i++){
		yeararray=checkduplicatedata(yeararray,vechicleinfo[i].year);

	}
	/*for(var j=0; j<yeararray.length;j++){
		var options=document.createElement("option");
		options.text=yeararray[j];
		options.value=yeararray[j];
		yeardropdown.appendChild(options);
	}*/
	binddatatodropdown(yeararray,yeardropdown);
	console.log(yeararray);
	var selectyear = document.getElementById("ddlyear");
	selectyear.onchange = function(){
		console.log(selectyear.value);
		binddatatomakedropdown(selectyear.value);
		
      }  
       
}

function checkduplicatedata(inputarray,data){
	var dataExists=false;
	console.log(inputarray);
	console.log(inputarray.length);
	
	for(var i=0;i<inputarray.length;i++){
		if(inputarray[i]==data){
			dataExists=true;
			break;
			console.log(inputarray);
		}
		
	}

	if(!dataExists){
		inputarray.push(data);
	}
	return inputarray;
}

function binddatatodropdown(data,dropdown){
	for(var j=0; j<data.length;j++){
		var options=document.createElement("option");
		options.text=data[j];
		options.value=data[j];
		dropdown.appendChild(options);
	}
}

function binddatatomakedropdown(yearvalue){
	var vechicleinfo=getVechicleData();
	var makearray=[];
	var makedropdown=document.getElementById("ddlmake");
	makearray.push(vechicleinfo[0].make);
	
	for(i=0;i<vechicleinfo.length;i++){
		console.log(yearvalue);
		console.log(vechicleinfo[i].year);
		if(vechicleinfo[i].year  == yearvalue){
			for(var j=0;j<makearray.length;j++){
			var dataExists=false;
			if(makearray[j]==vechicleinfo[j+1].make){
				dataExists=true;
				break;
			console.log(makearray);
			}
		}
			if(!dataExists){
			makearray.push(vechicleinfo[i].make);
			}
		}
   	
	}	

	binddatatodropdown(makearray,makedropdown);
	console.log(makearray);
	var selectmake = document.getElementById("ddlmake");
	selectmake.onchange = function(){
		console.log(selectmake.value);
		binddatatomodeldropdown(selectmake.value);
		
      }  
}
function binddatatomodeldropdown(makevalue){
	var vechicleinfo=getVechicleData();
	var modelarray=[];
	var modeldropdown=document.getElementById("ddlmodel");
	modelarray.push(vechicleinfo[0].model);
	for(i=0;i<vechicleinfo.length;i++){
		console.log(makevalue);
		console.log(vechicleinfo[i].make);
		if(vechicleinfo[i].make  == makevalue){
			for(var j=0;j<modelarray.length;j++){
			var dataExists=false;
			if(modelarray[j]==vechicleinfo[j+1].model){
				dataExists=true;
				break;
			console.log(modelarray);
			}
		}
			if(!dataExists){
			modelarray.push(vechicleinfo[i].model);
			}
		}
   	
	}	
	binddatatodropdown(modelarray,modeldropdown);
	console.log(modelarray);
}

binddatatoyeardropdown();
