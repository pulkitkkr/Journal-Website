  var config = {
    apiKey: "AIzaSyDswmlurteMFo-r4VWmmRasLB8lluwUr4A",
    authDomain: "enva-2017.firebaseapp.com",
    databaseURL: "https://enva-2017.firebaseio.com",
    storageBucket: "enva-2017.appspot.com",
    messagingSenderId: "614609718503"
  };
  firebase.initializeApp(config);

angular.module('Prakriti')
.controller('MainForm',  function($firebaseObject,$firebaseArray,$window){
	var context = this;
	context.formdata = {};
	context.initialized = false;
	context.Events = [
		{Name:'Mannequin Challenge',Team:false},
		{Name:'Rajneeti', Team:true,Min: 4, Max: 4,Price:20},
		{Name:'Treasure Quest',Team:true, Price:20, Min: 2, Max: 4},
		{Name:'GreenOvation', Team:true,Price:10, Min: 2, Max: 4},
		{Name:'Mystery Room', Team:true,Price:20, Min: 1, Max: 5},
		{Name:'Navras(Street Play)', Team: true,Price:0, Min: 1, Max: 20},
		{Name:'Enva Star Quest(Talent Show)',Team:true,Price:10, Min: 1, Max: 15},
		{Name:'Shut Up n Eat', Team:false,Price:30, Min:1, Max:1},
		{Name:'Code Name(Board Game)', Team:true,Price:16.667, Min: 3, Max: 3}, 
		{Name:'Minute To Win It', Team:true,Price:15, Min: 2, Max: 2},
		{Name:'Baahubali Challenge', Team:false,Price:20,Min:1, Max:1},
		
		{Name:'Mad Over Ad', Team:true,Price:10, Min: 1, Max: 15},
		{Name:'Game Of Shows', Team:true,Min: 1, Max: 2,Price:20},
		
		{Name:'Street Dance',Team:true,Price:20, Min: 1, Max: 1},
		{Name:'Battle Of Brains', Team:false,Min: 2, Max: 4,Price:10}
		
	];

	context.sendBitch = function(){
		var EName = context.Events[context.formdata.event].Name;
		if(context.Events[context.formdata.event].Min<context.Events[context.formdata.event].Max){
				
				var Stringx = EName +' is a Team Event With Team Size of ' + context.Events[context.formdata.event].Min + ' - '+context.Events[context.formdata.event].Max+'.';
		}
		else if(context.Events[context.formdata.event].Min==context.Events[context.formdata.event].Max && context.Events[context.formdata.event].Min>1 ){
				var Stringx = "It's compulsory to have team of exactly "+context.Events[context.formdata.event].Min+" to participate in "+ EName; 
		}
		else if(context.Events[context.formdata.event].Min==context.Events[context.formdata.event].Max && context.Events[context.formdata.event].Min==1){
			var Stringx = EName+' is a Single Entry Event '; 
	
		}
		else{
			var Stringx ="";
		}
		return Stringx;
	};
  var Rootref = firebase.database().ref().child("Registrations");
  var ref =$firebaseArray(Rootref);
  var Order = firebase.database().ref().child("data");
  var baap = $firebaseObject(Order);
  //var Entry = Rootref.child('UserEntry');
  context.initializeAgain = function() {
	 
				context.initialized = false;
				context.minniForm = false;
				context.minni = false;
			
			 	 
	};
	context.minniS = function () {
		var Rootrefx = firebase.database().ref().child("Mini");
		var now = Date();
		 var refx =$firebaseArray(Rootrefx);
		 if(context.formdata.minni.Name){
			if(context.formdata.minni.Detail){
				if(context.formdata.minni.Email){
					if((context.formdata.minni.Phone/10000000000)<1 && (context.formdata.minni.Phone/10000000000)>0.1){
						 refx.$add({
					Main: context.formdata.UserName,
					Event: context.Events[context.formdata.event].Name,
					EventIndex: context.formdata.event,
					UserName:context.formdata.minni.Name,
					Detail: context.formdata.minni.Detail,
					Email: context.formdata.minni.Email,
					Phone: context.formdata.minni.Phone,
					Time: now,
					 
				});
			 	console.log("successfully Registered");
			 	context.showForm = false;
			 	context.cashForm = false;
			 	context.paytmForm = false;
			 	context.minniForm = true;

					}
					else
					{
						alert('Please Enter  your Phone Number. If mentioned, make sure its 10 digit long');
					}


				}
				else{
					alert('Please Enter Your Email Address');
				}

			}
			else{
				alert("Please Enter your Details");
			}		 	
		 }
		 
		 else{
		 	alert('Please Enter Your Name');
		 }
		
		// body...
	}
	//context.formdata.event=100;
  
	context.initialize = function() {
		if(context.formdata.UserName){
			if(context.formdata.event>=0 && context.formdata.event<15){
				context.formdata.members = 1;
				context.membersAdded=[1];
				if(context.formdata.event!=0){
					context.initialized = true;
					context.stdata = context.sendBitch();
				}
				
				else{
					context.minni = true;
				}
			
				if(context.Events[context.formdata.event].Team){
					if (context.Events[context.formdata.event].TeamSize) { 
						context.size = [0,1];


					}
					else{
						context.size = [0,1,2,3];
					}
				}
				else{
					context.size = [0];
				}
			}
			else{
				alert('In Order to Continue, You Need to Select the event You are Registering For');
			}
		}
		else{
				alert('Please Enter Your Full Name');
			}	 
	};
	 
	context.AddMember = function(){

		++context.formdata.members;
		if(context.formdata.members>(context.size.length))
		{
			alert('At Max '+context.size.length+' Members Can be added in one team for '+ context.Events[context.formdata.event].Name );
		}
		else{
			context.membersAdded.push(context.formdata.members);
			context.AfterMembersDone = false;
		}
	};
	context.NewReg = function() {
		$window.location.reload()
	};
 
	context.AfterMembers = function(){
			var AllFine = false;
			var i = 0 ;
				if(context.formdata.MemDetail[i].Name){
					if(context.formdata.MemDetail[i].Detail){
						if((context.formdata.MemDetail[i].Phone/10000000000)<1 && (context.formdata.MemDetail[i].Phone/10000000000)>0.1){
							if( context.formdata.MemDetail[i].Email){
								if(context.formdata.MemDetail[i].TeamSize){
									var s = context.formdata.MemDetail[i].TeamSize;
									if(s>=context.Events[context.formdata.event].Min && s<=context.Events[context.formdata.event].Max){
											AllFine = true;
									}
									else{
										if(context.Events[context.formdata.event].Min==context.Events[context.formdata.event].Max &&context.Events[context.formdata.event].Min==1){
											alert('This is a Single Entry Event');	
										}
										else if(context.Events[context.formdata.event].Min==context.Events[context.formdata.event].Max ){
											alert('Exactly '+context.Events[context.formdata.event].Min+' Members are allowed to participate in this Event');
										}
										else{
											alert('Minimum : '+context.Events[context.formdata.event].Min+' and Maximum: '+context.Events[context.formdata.event].Max+' are allowed for this Event' );
										}
										
									}

								}
								else if((!context.formdata.MemDetail[i].TeamSize) && (!context.Events[context.formdata.event].Team)){
  									AllFine = true;
  									context.formdata.MemDetail[i].TeamSize = 1;
								}
								else
								{
									alert('Please Enter Team Size');
								}
							}
							else{
								//alert(context.formdata.MemDetail[i].Email);
								alert('Please Enter Team Member '+(++i)+"'s valid Email");
							}
						}
						else{
							alert("Please Enter Team   Phone Number. If mentioned, make sure it's 10 digit long");
							 	
						}
					}
					else{
						alert('Please Enter  Detail (eg: MSIT ECE eve 3rd)');
						 
					}
				}
				else{
					alert('Please Enter Team name');
					 
				}
				 
			
			if(AllFine){
				context.AfterMembersDone = true;
				context.end = true;
				context.pricex = context.Events[context.formdata.event].Price;
				context.PayAmount= context.pricex * context.formdata.MemDetail[0].TeamSize;
				 
				/*var string = "Main Holder : " + context.formdata.UserName + "\nEvent:"+context.Events[context.formdata.event].Name;
				for(var i =0; i<context.formdata.members;i++){
				 var MemString = "\n Team Member "+i+" Detail:\n\n "+"Name: "+context.formdata.MemDetail[i].Name+"\nDetail: "+context.formdata.MemDetail[i].Detail+"\nEmail: "+context.formdata.MemDetail[i].Email+"\nPhone: "+context.formdata.MemDetail[i].Phone; 
				 string = string + "\n"+ MemString;
				}*/
				 

			}
			
	};
	function makeid()
	{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 7; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return "ENVA2017@"+text;
	}

	context.PaymentVerify = function(){
		baap.$loaded()
  			.then(function() {
    			//console.log(baap.$value);
  				})
  			.catch(function(err) {
    			console.error(err);
  		});

		var isTeam;
		var Pmethod;
		 
			

		if(context.formdata.payMethod==-1){
			alert("Choose a Payment Method");
		}
		else if(context.formdata.payMethod==0){
			context.ticket = makeid();
			var now = Date();
			Pmethod = 'Paytm';
				ref.$add({
				Main: context.formdata.UserName,
				Event: context.Events[context.formdata.event].Name,
				EventIndex: context.formdata.event,
				 
				TeamSize:  context.formdata.MemDetail[0].TeamSize,
				Email:  context.formdata.MemDetail[0].Email,
				Phone:  context.formdata.MemDetail[0].Phone, 
				TeamName:  context.formdata.MemDetail[0].Name,
				 
				Pay : context.PayAmount,
				PayMethod: Pmethod,
				confirmed:false,
				Time: now,
				ticket: context.ticket
				});
				console.log("successfully Posted");
				context.showForm = false;
				context.paytmForm = true;
				context.cashForm = false;
				 
		}
		else{
			context.ticket = makeid();
			var now = Date();
			Pmethod = 'Cash';
			 	if(context.formdata.Auth==baap.$value){
			 		ref.$add({
					Main: context.formdata.UserName,
					Event: context.Events[context.formdata.event].Name,
					EventIndex: context.formdata.event,
				 
					TeamSize:  context.formdata.MemDetail[0].TeamSize,
					Email:  context.formdata.MemDetail[0].Email,
					Phone:  context.formdata.MemDetail[0].Phone, 
					TeamName:  context.formdata.MemDetail[0].Name,
					Pay : context.PayAmount,
					PayMethod: Pmethod,
					Representative: context.formdata.repName,
					confirmed:true,
					Time: now,
					ticket: context.ticket
				});
			 	console.log("successfully Registered");
			 	context.showForm = false;
			 	context.cashForm = true;
			 	context.paytmForm = false;
			 	 		 		
			 	}
			 	else{
			 		alert('Please Check Authorization Password');
			 	}
				
		}

	};
	context.paymentMethodx = function(){
		if(context.formdata.payMethod==0){

			context.paytm = true;
			context.cash = false;
			context.vba = false;
		}
		else{
			context.vba = true;
			context.paytm = false;
			context.cash = true;	
		}
	};
})