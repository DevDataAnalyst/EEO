/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 $("#pgName").focus();
$(document).ready(function(){
  
	if(currentPageStatus == 0){
		myNavigator.deactivateNext();
	}
	myControl.myAudioController.playAudioAt(0,function(){
		
	});
        myControl.myAudioController.setAudioTranscriptAt(0);
        myNavigator.activateNext();
});

