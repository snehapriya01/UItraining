
function registrationform(){
	var divid = document.getElementById("divid");
	var h1= document.createElement("h1");
	h1.innerHTML = "REGISTRATION FORM";
	h1.style.textAlign="center";
	var createctrlfname = buildctrl("label","lblfname","First Name : ","");
	var createctrlfnametb = buildctrl("input","inpfname","","text");
	var createctrllname = buildctrl("label","lbllname","Last Name : ","");
	var createctrllnametb = buildctrl("input","inplname","","text");
	var createctrlage = buildctrl("label","lblage","Age : ","");
	var createctrlagetb = buildctrl("input","inpage","","number");
	var createctrlgender = buildctrl("label","lblgender","Gender : ","");
	var createctrlgenderdd = buildctrl("select","inpgender","","");
	var createctrlgenderopt1= buildctrl("option","","","");
	var createctrlgenderopt2= buildctrl("option","","","");
	var createctrlgenderopt3= buildctrl("option","","","");
	createctrlgenderopt1.text ="select";
	createctrlgenderopt2.text ="Male";
	createctrlgenderopt3.text ="Female";
	var createctrladdress = buildctrl("label","lbladd","Address1 : ","");
	var createctrladdresstb = buildctrl("input","inpadd","","text");
	var createctrladdress1 = buildctrl("label","lbladd1","Address2 : ","");
	var createctrladdresstb1 = buildctrl("input","inpadd1","","text");
	var createctrlstate = buildctrl("label","lblstate","State : ","");
	var createctrlstatedd = buildctrl("select","inpstate","","");
	var createctrlstateopt1= buildctrl("option","","","");
	var createctrlstateopt2= buildctrl("option","","","");
	var createctrlstateopt3= buildctrl("option","","","");
	var createctrlstateopt4= buildctrl("option","","","");
	var createctrlstateopt5= buildctrl("option","","","");
	createctrlstateopt1.text ="select";
	createctrlstateopt2.text ="Hyerabad";
	createctrlstateopt3.text ="vijayawada";
	createctrlstateopt4.text ="vizag";
	createctrlstateopt5.text ="Bangalore";
	var createctrlcountry = buildctrl("label","lblctry","Country : ","");
	var createctrlcntrydd = buildctrl("select","inpcntry","","");
	var createctrlcntryopt1= buildctrl("option","","","");
	var createctrlcntryopt2= buildctrl("option","","","");
	var createctrlcntryopt3= buildctrl("option","","","");
	var createctrlcntryopt4= buildctrl("option","","","");
	var createctrlcntryopt5= buildctrl("option","","","");
	createctrlcntryopt1.text ="select";
	createctrlcntryopt2.text ="India";
	createctrlcntryopt3.text ="United States of America";
	createctrlcntryopt4.text ="United Kingdom";
	createctrlcntryopt5.text ="Bahamas";
	var createctrlterms = buildctrl("label","lblterm","Terms & Conditions  ","");
	var createctrltermstb = buildctrl("input","inpterm","","checkbox");
	var createctrltermslbl = buildctrl("label","lbltermlbl","I Agree","");
	
	var createctrlsubmit = buildctrl("input","inpsubmit","","button");
	createctrlsubmit.value = "submit";

	divid.appendChild(h1);
	divid.appendChild(createctrlfname);
	divid.appendChild(createctrlfnametb);
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrllname);
	divid.appendChild(createctrllnametb);
	
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrlage);
	divid.appendChild(createctrlagetb);
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrlgender);
	divid.appendChild(createctrlgenderdd);
	createctrlgenderdd.appendChild(createctrlgenderopt1);
	createctrlgenderdd.appendChild(createctrlgenderopt2);
	createctrlgenderdd.appendChild(createctrlgenderopt3);
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrladdress);
	divid.appendChild(createctrladdresstb);
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrladdress1);
	divid.appendChild(createctrladdresstb1);
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrlstate);
	divid.appendChild(createctrlstatedd);
	createctrlstatedd.appendChild(createctrlstateopt1);
	createctrlstatedd.appendChild(createctrlstateopt2);
	createctrlstatedd.appendChild(createctrlstateopt3);
	createctrlstatedd.appendChild(createctrlstateopt4);
	createctrlstatedd.appendChild(createctrlstateopt5);
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrlcountry);
	divid.appendChild(createctrlcntrydd);
	createctrlcntrydd.appendChild(createctrlcntryopt1);
	createctrlcntrydd.appendChild(createctrlcntryopt2);
	createctrlcntrydd.appendChild(createctrlcntryopt3);
	createctrlcntrydd.appendChild(createctrlcntryopt4);
	createctrlcntrydd.appendChild(createctrlcntryopt5);
	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrlterms);
	divid.appendChild(createctrltermstb);
	divid.appendChild(createctrltermslbl);

	divid.appendChild(document.createElement("br"));
	divid.appendChild(document.createElement("br"));
	divid.appendChild(createctrlsubmit);
	
}
function buildctrl(name,id,data,type){
	var ctrl = document.createElement(name);
	ctrl.type = type ;
	ctrl.id = id;
	if(data){
	ctrl.innerText= data;
	}
	return ctrl;
}

registrationform();
