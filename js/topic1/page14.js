/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var tabCount = 0;
$(document).ready(function () {

    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();
    }
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    unbindGlobalTabs();
    bindGlobalTabs(0);
    //myControl.myAudioController.setAudioTranscriptAt(0);

    $("#pgName").focus();
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        


    });
    $('.email_icon').click(function () {
        $('.email').fadeIn();
        $('.email').focus();
        myNavigator.activateNext();
        myControl.myAudioController.playAudioAt(1, function () {

        });
    });

});


