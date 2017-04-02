   var config = {
    apiKey: "AIzaSyDswmlurteMFo-r4VWmmRasLB8lluwUr4A",
    authDomain: "enva-2017.firebaseapp.com",
    databaseURL: "https://enva-2017.firebaseio.com",
    storageBucket: "enva-2017.appspot.com",
    messagingSenderId: "614609718503"
  };
  firebase.initializeApp(config);

angular.module('JoinForm')
.controller('MainForm',  function($firebaseObject,$firebaseArray ){
		var context = this;
		context.Events = [
		{Name:'Mannequin Challenge',Team:false},
		{Name:'Rajneeti', Team:true,Min: 4, Max: 4,Price:20},
		{Name:'Treasure Quest',Team:true, Price:10, Min: 2, Max: 4},
		{Name:'GreenOvation', Team:true,Price:10, Min: 2, Max: 4},
		{Name:'Mystery Room', Team:true,Price:20, Min: 1, Max: 5},
		{Name:'Navras(Street Play)', Team: true,Price:0, Min: 1, Max: 20},
		{Name:'Enva Star Quest',Team:true,Price:0, Min: 1, Max: 15},
		{Name:'Shut Up n Eat', Team:false,Price:30, Min:1, Max:1},
		{Name:'Code Name(Board Game)', Team:true,Price:16.667, Min: 3, Max: 3}, 
		{Name:'Minute To Win It', Team:true,Price:20, Min: 2, Max: 2},
		{Name:'Baahubali Challenge', Team:false,Price:20,Min:1, Max:1},
		
		{Name:'Mad Over Ad', Team:true,Price:10, Min: 1, Max: 15},
		{Name:'Game Of Shows', Team:true,Min: 1, Max: 2,Price:20},
		
		{Name:'Street Dance',Team:true,Price:0, Min: 1, Max: 15},
		{Name:'Battle Of Brains', Team:false,Min: 1, Max: 2,Price:20}
		
	];
	context.ViewData = function() {
		var Order = firebase.database().ref().child("cute");
  		var Reg = firebase.database().ref().child("Registrations");
  		context.dataReg = $firebaseArray(Reg);
  		var baap = $firebaseObject(Order);
      context.shower = [];
  		baap.$loaded()
  			.then(function() {
    			 //console.log(baap);
  				if(!context.SelectedEvent){

  					alert('Please Select an Event ');
  				}
  		   		if(context.Password ===baap.$value && context.SelectedEvent){

  					context.showForm = false;
  					for(var i=0; i<context.dataReg.length;i++){
              if(context.dataReg[i].EventIndex == context.SelectedEvent || context.SelectedEvent==15){
                //console.log(context.dataReg[i].Event+"'s EventIndex: "+context.dataReg[i].EventIndex+" Selected: "+context.SelectedEvent+" Setting shower: True");
                context.shower[i]= true;

              }
              else{
                context.shower[i]=false;
              }
            }
  					console.log(context.shower);
  					if(context.SelectedEvent==15){
  						context.EventIs = 'Root Database';
  						context.sucLog = true;
              
                }
  					else{
  						context.EventIs = context.Events[context.SelectedEvent].Name;
  						context.sucLog = true;
  					}
  					
  							//	console.log(context.dataReg);

  				}
  				else{
  					alert('Please Check Authorization Password');
  					}
  				})
  			.catch(function(err) {
    			console.error(err);
  		});
  		
	};

	})