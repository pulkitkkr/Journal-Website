
angular.module('Prakriti', ["firebase"]);
/*
context.AfterMembers = function(){
			var AllFine = false;
			for(var i =0; i<context.formdata.members;i++){
				if(context.formdata.MemDetail[i].Name){
					if(context.formdata.MemDetail[i].Detail){
						if((context.formdata.MemDetail[i].Phone/10000000000)<1 && (context.formdata.MemDetail[i].Phone/10000000000)>0.1){
							if(context.formdata.MemDetail[i].Email){
								AllFine = true;
							}
							else{
								
								alert('Please Enter Team Member '+(++i)+"'s valid Email");
							}
						}
						else{
							alert('Please Enter Team Member '+(++i)+"'s Phone Number. If mentioned, make sure it's 10 digit long");
							break;	
						}
					}
					else{
						alert('Please Enter Team Member '+(++i)+"'s Detail (eg: ECE eve 3rd)");
						break;
					}
				}
				else{
					alert('Please Enter Team Member '+(++i)+"'s name");
					break;
				}
				 
			}
			if(AllFine){
				var string = "Main Holder : " + context.formdata.UserName + "\nEvent:"+context.Events[context.formdata.event].Name;
				for(var i =0; i<context.formdata.members;i++){
				 var MemString = "\n Team Member "+i+" Detail:\n\n "+"Name: "+context.formdata.MemDetail[i].Name+"\nDetail: "+context.formdata.MemDetail[i].Detail+"\nEmail: "+context.formdata.MemDetail[i].Email+"\nPhone: "+context.formdata.MemDetail[i].Phone; 
				 string = string + "\n"+ MemString;
				}
				alert(string);

			}
			
	};
	*/