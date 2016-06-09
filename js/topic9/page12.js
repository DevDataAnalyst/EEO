var counter=0;
var feedBack=false;
var result;
$(document).ready(function(){
	$('.pageNameHolder').hide();
	$('#prev_btn').hide();
	$('#nxt_btn').hide();
	if(currentPageStatus == 0){
		myNavigator.deactivateNext();
	}	
	result=(score/14)*100;
        result=result.toFixed();
	$(".result").html(result+"%");
	if(result>=80)
		{
		$('.passed').show();
		score=0;
		}
	else
		{
		$('.failed').show();
		score=0;
		}
	$(".tryAgain").click(function(){
		myNavigator.tryAgainLastModule();
		$('.pageNameHolder').hide();
	});
	$(".cross_btn").click(function(){
		$('.closeButton').click();
	});
	/*
	$('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        console.log(focusedElement);
        console.log(event.keyCode);
        if (event.keyCode == 9)
        {
            if(focusedElement == 'audio_btn'){
			    $("#close").focus();
				
                event.preventDefault();
            }
			}
			else if (event.keyCode == 13)
			{
			if(focusedElement == 'menu_btn')
			{
			$("#menu_btn").click();
			$("#mod1").focus();
			}
			}
			});*/
});
        

	


	
