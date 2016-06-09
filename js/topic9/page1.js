score=0;
$(document).ready(function(){
	$('.pageNameHolder').hide();
	if(currentPageStatus == 0){
		myNavigator.deactivateNext();
	}
	/*myControl.myAudioController.playAudioAt(0,function(){
		
	});*/
	//myControl.myAudioController.setAudioTranscriptAt(0);
	//$('.pageNameHolder').show();
	$('#prev_btn').show();
	$('#nxt_btn').show();
	myNavigator.activateNext();
	/*
$('.mainBoard').unbind('keydown');
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        console.log(focusedElement);
        console.log(event.keyCode);
       if(event.shiftKey && event.keyCode == 9 && focusedElement== 'close')
		{
			$("#help_btn").focus();
			event.preventDefault();
        }
		if (event.keyCode == 9 && focusedElement == 'nxt_btn')
        {
		event.preventDefault();
         $("#close").focus(); 

          

        } 
			else if (event.keyCode == 13 && focusedElement == 'menu_btn')
        {
		//event.preventDefault();
         $("#menu_btn").click(); 
		 $("#mod1").focus();

          

        } 
		});*/
});