//alert(JSON.parse(localStorage.getItem("checklistRecordLMS")));
var sentanceLength = 120;
var urlString = "";
$(document).ready(function(){	
	//var datas = JSON.parse(localStorage.getItem("checklistRecordLMS"));
	urlString = decodeURI(document.URL);
	var analyze = urlString.toString().substring(urlString.indexOf("?analyze"),urlString.indexOf("?plan"));		
	$(".analyzeText").text(analyze.substring(analyze.indexOf("=")+1,analyze.length).replace("%20"," "));	
	var plan = urlString.toString().substring(urlString.indexOf("?plan"),urlString.indexOf("?drive"));	
	$(".planText").html(plan.substring(plan.indexOf("=")+1,plan.length));	
	var drive = urlString.toString().substring(urlString.indexOf("?drive"),urlString.indexOf("?change"));	
	$(".driveText").html(drive.substring(drive.indexOf("=")+1,drive.length));	
	var change = urlString.toString().substring(urlString.indexOf("?change"),urlString.length);	
	$(".changeText").html(change.substring(change.indexOf("=")+1,change.length));
	/*if(datas!=null){
		$(".analyzeText").html(datas.analyze);
		$(".planText").html(datas.plan);
		$(".driveText").html(datas.drive);
		$(".changeText").html(datas.change);
	}*/
	
});



function printingElement(){
	window.print();
	window.close();
}

