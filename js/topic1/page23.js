/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $("#pgName").focus();
    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();
    }
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    $(".continue_btn").click(function () {
        $(".ost1").hide();
        $(".continue_btn").hide();
        $(".ost2").fadeIn();
        $(".para4").focus();
        myControl.myAudioController.playAudioAt(1, function () {

        });
        myNavigator.activateNext();
    });


});

