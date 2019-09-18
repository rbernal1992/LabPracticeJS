var counter = 0;

function watchForm(){

	let submitbtn = document.getElementById( "submitbtn");
	let listTodos = document.getElementById("listTodos");
	submitbtn.addEventListener("click", ( event ) =>{
		 
			event.preventDefault();
		 
		 let newtodo = document.getElementById("newtodo");
		 
		 var entry = document.createElement('li');
		 var chckbox = document.createElement('input');
		 var listofTodos = document.getElementById("listofTodos");
		 var label = document.createElement('label');
		 chckbox.type = 'checkbox';
		
		 if(newtodo.value != "")
		 {
			 counter++;
			 chckbox.value=newtodo.value;
			 chckbox.name =newtodo.value;
			 chckbox.id = "check" + counter;
			 
			 label.htmlFor = "check" + counter;
			 label.appendChild(document.createTextNode("   "+ newtodo.value + " "));
			 
			 //entry.appendChild(document.createTextNode(newtodo.value));
			 entry.appendChild(chckbox);
			 entry.appendChild(label);
			 
			 
			 listTodos.appendChild(entry);
			 console.log("entro");
			 
			 
		 }
		else
		{
			console.log("no entro");
		}
		
	})
	
	let clearbtn = document.getElementById( "clearbtn");
	clearbtn.addEventListener("click", ( event ) =>{
		 var localcounter = 1;
			event.preventDefault();
			
			while(localcounter <= counter)
			{
			let checkbx = document.getElementById("check" + localcounter);
				if(checkbx.checked === true)
				checkbx.click();
			localcounter++;
			}
			
	})
	
	let markAllbtn = document.getElementById( "markAllbtn");
	markAllbtn.addEventListener("click", ( event ) =>{
		 var localcounter2 = 1;
			event.preventDefault();
			
			while(localcounter2 <= counter)
			{
			let checkbx = document.getElementById("check" + localcounter2);
				if(checkbx.checked === false)
					checkbx.click();
			localcounter2++;
			}
			
	})
	
	let deletebtn = document.getElementById( "deletebtn");
	deletebtn.addEventListener("click", ( event ) =>{
		 var eachchild = listTodos.lastElementChild;
		 
			while(eachchild)
			{
				listTodos.removeChild(eachchild);
				eachchild= listTodos.lastElementChild;
				counter = 0;
			}
			
			
	})
	

}



watchForm();