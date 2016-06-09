//progressArray for tracking interactivity in page
var searchXml;
$(document).ready(function(){		
	$.ajax({
		type: "GET",
		url: "xml/search.xml",
		dataType: "xml",
		success: xmlParsing,
		async : false,
		error: function(){
			alert("not loaded");
		}
	});	
	$(".searchExit").on("click",function(){
		searchExit();
	});
});

function xmlParsing(xml){
	searchXml = $.xmlToJSON(xml);
	$(".searchBoxClick").on("click",function(){
		searchText();
	});
	var searchBox=document.getElementById("searchBox");
	searchBox.addEventListener("keydown",function(e){
		if(e.keyCode === 13){  //checks whether the pressed key is "Enter"
        	//validate(e);
    		searchText();
		}
	});
		
}

function searchText(){
	var pageVideo = document.getElementById("videoAnimation");
	if(pageVideo)
	{
		pageVideo.pause();
	}
	
	if(!($(".audioBtn").hasClass("disabledAudio")) && ($(".audioBtn").hasClass("audioActive"))){
		var myAudio = document.getElementById("pageAudio"); 
		if (myAudio.paused || myAudio.ended) {
			myAudio.play();
		} else {
			myAudio.pause();
		}
	}
	$(".searchTermsList").html("");
	var textboxVal = $(".searchBoxInput").val().toLowerCase();
	var contentString = "";
	if(textboxVal.length>0){
		for(var i=0;i<searchXml.page.length;i++){
			if(searchXml.page[i].name.toLowerCase().indexOf(textboxVal) >= 0){
				contentString += "<li class='searchList' modId='"+searchXml.page[i].modId +"' secId='"+searchXml.page[i].secId+"' pageId='"+searchXml.page[i].pageId+"'  >"+searchXml.page[i].name+"</li>";
			}
		}
	}
	else{
		contentString = "<p>Please enter text to search.</p>";
	}
	$(".searchTermsList").html(contentString);
	if(($(".searchTermsList li").length==0) && (textboxVal.length>0))
	{
		$(".searchTermsList").html("<p>No results found.</p>");
	}	
	$(".searchPage").show();
	searchlistEvents();
}

function searchlistEvents(){
	$(".searchList").click(function(){
		$(".searchBoxInput").val("");
		var currentMod= parseInt($(this).attr("modId"));
		var currentSec= $(this).attr("secId");
		var currentPage= parseInt($(this).attr("pageId"));
		$(".pageLoader").show();
		$(".pageContent").hide();
		myCounter.set('moduleCounter',currentMod);
		myCounter.set('sectionName',currentSec);
		myCounter.set('sectionCounter',currentPage);
		myModuleView.render();
		myTabView.render();
		myPageView.render();
		$(".searchPage").hide();
	});
}

function searchExit()
{
	$(".searchBoxInput").val("");
	$(".searchPage").hide();
	if(!($(".audioBtn").hasClass("disabledAudio")) && ($(".audioBtn").hasClass("audioActive"))){
		var myAudio = document.getElementById("pageAudio"); 
		if (myAudio.paused || myAudio.ended) {
			myAudio.play();
		} else {
			myAudio.pause();
		}
	}
}