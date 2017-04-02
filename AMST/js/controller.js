angular.module('journals')
.controller('sideCtrl', function(){
	this.load = {};
	this.load.imgData = 'amst';
	this.load.journalName = 'AMST';
	this.load.ISSN='112-132';
	
})
 
.controller('midCtrl',['$timeout',function($timeout){
	this.listView = false;
	this.listViewx = false;
	var ctrlScope = this;
	this.shower = 'View'
	this.listToggle = function(){
		
		this.listViewx = !this.listViewx;
		if(this.shower==='View')
			this.shower='Hide';
		else
			this.shower='View';
		$timeout(function(){ctrlScope.listView = !ctrlScope.listView;},200);
 
		
		
	};
	this.load={};
	
	this.load.journalFullName='Achievements in Material Science & Technology';	
	this.load.description_first='Achievement in Materials Science & Technology is a peer-reviewed journal of Scientia Praecepta having broad coverage of all current topics in the community of current material science and technology that consolidates the fundamental research in all aspects of modern era. The basic covered area in Achievement in Materials Science & Technology (AMST) includes the synthesis, processing, spectroscopic properties of novel advanced materials and their applications. AMST comprise of full-length papers and short Communications of original research which results in the techniques for studying the relationship between structure, properties, and uses of materials. ';
	this.load.description_second='The scientific community of researcher and teachers have chosen the Material Science & Technology as subject of research consisting of broad area including metals, ceramics, glasses, polymers, electrical materials, composite materials, fibers, nano-structured materials and nano-composites through worldwide. The Journal Achievement of Materials Science & Technology (AMST) is trying to establish itself as the leading source of primary communication for scientists investigating in broad area of novel engineering materials.';
	this.load.editorGeneral=" Dr. Alok Kumar Singh";
	this.load.EditorialList =[{imgData:'../img/testa.png',desig:'Editor General', FullName:"Dr. Alok Kumar Singh"},{imgData:'../img/testb.png',desig:'Asst Editor', FullName:"Dr ABC"},{imgData:'../img/testc.png',desig:'Asst editor', FullName:"Dr. John Doe"}];

}])