var counter=0;
$(document).ready(function(){		
	/* if(currentPageStatus == 0){
		myNavigator.deactivateNext();
	}	 */	
		
myNavigator.deactivatePrev();
myNavigator.deactivateNext();
	$(".option").click(function(){
		if(!($(".option").hasClass("submitted"))){
				
				$(".option").children().removeClass("clicked");
				$(".option").removeClass("selected");
				$(this).addClass("selected");
				if($(this).children().hasClass("choice")){
					$(this).children().addClass("clicked");		
				}				
			
				
			
			//$(".option").children().removeClass("clicked");
			//$(".option").removeClass("selected");
			if($(".lowerLayoutContainer .clicked").length>0){
				$(".submit").addClass("active").removeClass("inactive");
			}
			else{
			$(".submit").addClass("inactive").removeClass("active");
			}
			optionHolder = this;
		}
	});
	
	$(".submit").click(function(){
		counter++;
		if($(this).hasClass("active")){		
			if($(".option3").hasClass("clicked") && counter<=1){
				//$(".popUp1").show();
				score++;
				goNext();
				//cykAnswer[myCounter.get("pageCounter")-1] = $(optionHolder).attr("value");
			}/* else if(counter<=1){
				$(".popUp3").show();
			} */else{
				//$(".popUp2").show();
				goNext();
				//cykAnswer[myCounter.get("pageCounter")-1] = $(optionHolder).attr("value");
			}
			if(counter==2){
				$(".option").addClass("submitted");
			}
			$(".submit").addClass("inactive").removeClass("active");
			//myNavigator.activateNext();
		}
	});
	
	$(".popUpClose").click(function(){
	
		if(!($(".option3").hasClass("clicked")) && counter<=1){
				$(".popUp").hide();
				$(".option").children().removeClass("clicked");
				$(".option").removeClass("selected");
				$("#nxt_btn").click();
		}else{
			$(".popUp").hide();
			myNavigator.activateNext();
			$("#nxt_btn").click();
		}
	});
});
function goNext(){
myNavigator.activateNext();
$("#nxt_btn").click();
}

	


	
