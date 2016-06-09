$("#pgName").focus();
$(document).ready(function(){
	if(currentPageStatus == 0){
		myNavigator.deactivateNext();
	}
	myControl.myAudioController.playAudioAt(0,function(){
		
	});
        myControl.myAudioController.setAudioTranscriptAt(0);
        $("a").click(function(){
            myNavigator.activateNext();
        });
        
        $(".pdf_img").click(function(){
            window.open("pdf/2015-EEO-Policy-Statement.pdf","_blank");
            
        });
	
});