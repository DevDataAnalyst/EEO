// JavaScript Document

$(document).ready(function () {
	
	$.ajax({
		type: "GET",
		url: "xml/glossary.xml",
		dataType: "xml",
		success: xmlParser,
		error: function errorPopup(){
			alert("Sorry your browser doesn't support Server Side Scripting.Please try in another browser.");
		}
	}); 
	
	$(".glossaryExit").on("click",function(){
		glossaryExit();
	});
	
});

function xmlParser(xml) 
{	
	checkContent(xml);
	getGlossaryTerms(xml);
	clickNavigation(xml);
	termClick(xml);	
}

function checkContent(xml){	
	
	var _eleString = "";
	
	$(xml).find('item').each(function(){
		var isActive = "active";
		var headingText = $(this).find('Heading').text();
		if($(this).children().length <= 1)
		{
			
			isActive = "disable";
			
		}
		_eleString += "<li class='"+isActive+"' id='"+$(this).find('Heading').text()+"'>"+$(this).find('Heading').text()+"</li>";
	});
	
	$(".navigationList").html(_eleString);
}

function getGlossaryTerms(xml,id)
{
		var character;
		var firstTerm;
		var firstDefination;
		if( ( id == "" || id == null ) ){
			$(xml).find('item').each(function(){
				if($(this).children().length > 1)
				{
					character = $(this).find('Heading').text();
					return false;
				}
			});
		}
		
		else{
			character = id ;
		}
		
		$("#"+character).addClass("selected");
		
		$(" .glossaryTerms , .glossaryDefinitionsTerm , .glossaryDefinitionsText ").html("");
		
		$(xml).find('Element[title^="'+character+'"]').each(function(index){		
			var titleforp = $('<p></p>').addClass('terms').appendTo('.glossaryTerms'),
			titleforstrong = $('<strong></strong>').appendTo(titleforp);
			var title = $(this).attr('title');
			$(titleforstrong).append(title+'<br/>');
			if( index == 0 ){
				$(".glossaryDefinitionsTerm").html($(this).attr("title"));
				$('.glossaryDefinitionsText').html("<p>"+$(this).text()+"<p>");
				
			}
			$(".glossaryTerms").find("p").eq("0").addClass("selected");
		});
		
		termClick(xml);	
}

function clickNavigation(xml)
{	
	$("body").on("click",".navigationList li",function(e){
		if($(e.target).hasClass("selected") || $(e.target).hasClass("disable")){
			return false;
		}
		$(".navigationList li").removeClass("selected");
		$(e.target).addClass("selected"); 
		var alphabet = $(e.target).text();
		getGlossaryTerms( xml , alphabet );
	});
}

function termClick(xml)
{	

	$("body").on("click",".terms strong",function(e){
		var ele = $(e.target).closest(".terms");
		if(ele.hasClass("selected")){
			return false;
		}
		$(".terms").removeClass("selected")
		ele.addClass("selected");
		$(".glossaryDefinitionsTerm").html(ele.text());
		$('.glossaryDefinitionsText').html("");
		var clickedTerm = ele.text();
		$(xml).find("Glossary").each(function (){
			$(this).find('Element[title="'+clickedTerm+'"]').each(function(){
				var description=$('<p></p>').appendTo('.glossaryDefinitionsText');
				$(description).html($(this).text());
			});				
		});			
	});
}

function glossaryExit()
{
	$(".glossaryPage").hide();
	if(!($(".audioBtn").hasClass("disabledAudio")) && ($(".audioBtn").hasClass("audioActive"))){
		var myAudio = document.getElementById("pageAudio"); 
		if (myAudio.paused || myAudio.ended) {
			myAudio.play();
		} else {
			myAudio.pause();
		}
	}
}