
$(document).ready(function(){	
var counter=0;
var flag = false;
var feedBack=false;	
	if(currentPageStatus == 0){
		myNavigator.deactivateNext();
	}	
        myControl.myAudioController.playAudioAt(0,function(){
            
        });
        myControl.myAudioController.setAudioTranscriptAt(0);
        myNavigator.activateNext();
	$("#pgName").focus();
	//$("#opt1").click();
	$('.mainBoard').bind('keydown', function(event) {
		focusedElement = document.activeElement.id;
		
		if(event.shiftKey && event.keyCode == 9 && focusedElement== 'close')
		{
			/*$("#help_btn").focus();
			event.preventDefault();*/
        }
		if(event.keyCode==9 && event.shift==false)
		{
			
		}
		if(event.keyCode==9 && focusedElement== 'sub')
		{
		
			//event.preventDefault();
			
			//$("#opt1").focus();
		
		}
		/*
		if(event.keyCode==9 && focusedElement== 'nxt_btn')
		{
			if(!flag)
			{	
				$("#opt1").focus();
				flag = true;
			}
			else {
				$("#close").focus();
			}
			event.preventDefault();
		
		}*/
			if(event.keyCode==9 && focusedElement== 'prev_btn')
			{
				//$("#close").focus();
				//event.preventDefault();
			
			}
			else if(event.keyCode==9 && focusedElement== 'close1')
			{ 
				//$("#close").focus();
				event.preventDefault();
			
			}
				else if(event.keyCode==9 && focusedElement== 'close2')
			{
				//$("#close").focus();
				event.preventDefault();
			
			}
		else if(event.keyCode==13&& focusedElement== 'sub' )
		{
			//$("#close").focus();
			//event.preventDefault();
		$(".submit").click();
		}
		
	});
});
        

	


	
