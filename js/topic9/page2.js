var counter=0;
var feedBack=false;
myNavigator.deactivatePrev();
myNavigator.deactivateNext();
$(document).ready(function(){		
	/* if(currentPageStatus == 0){
		myNavigator.deactivateNext();
	}	 */	
		
	$(".option").click(function(){
		if(!($(".option").hasClass("submitted"))){
			
			if(!($(this).hasClass("selected"))){
				$(this).addClass("selected");
				if($(this).children().hasClass("choice")){
					$(this).children().addClass("clicked");		
				}				
			}else{
				$(this).children().removeClass("clicked");
				$(this).removeClass("selected");
			}
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
			if($(".option1").hasClass("clicked") && $(".option2").hasClass("clicked") && ($(".lowerLayoutContainer .clicked").length==6) && counter<=1){
				//$(".popUp1").show();
				feedBack=true;
				score++;
				goNext();
			}else if(counter<=0){
				$(".popUp3").show();
				
			}else{
				//$(".popUp2").show();
				feedBack=true;
				goNext();
			}
			if(counter==1){
				$(".option").addClass("submitted");
			}
			$(".submit").addClass("inactive").removeClass("active");
			//myNavigator.activateNext();
		}
	});
	$(".submitDiv").click(function(){
		$(".submit").click();
	});
	$(".popUpClose").click(function(){
		if(feedBack!=true){
				$(".popUp").hide();
				$(".option").children().removeClass("clicked");
				$(".option").removeClass("selected");
		}else{
			$(".popUp").hide();
			/* alert(score) */
			myNavigator.activateNext();
			$("#nxt_btn").click();
		}
	});
});
function goNext(){
myNavigator.activateNext();
$("#nxt_btn").click();
}

	


	
