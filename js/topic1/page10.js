/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tabCount = 0;
$(document).ready(function () {
    $("#pgName").focus();
    if (currentPageStatus == 0) {
        //myPageView.setCurrentPageStatus(); 
        myNavigator.deactivateNext();
    }
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);

    $(".continue_btn").click(function () {
        $(".continue_btn").hide();
        $(".ost1").fadeOut("slow", function () {
            $(".para2").hide();
            $(".ost2").fadeIn("slow", function () {
                $(".img2 ").focus();

                myControl.myAudioController.playAudioAt(1, function () {

                });
            });

        });
    });

    $(".pdf_img").click(function () {
        myNavigator.activateNext();
        window.open("pdf/Antidiscrimination Laws.pdf", "_blank");
    });
});

