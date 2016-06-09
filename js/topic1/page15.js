/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
    myNavigator.activateNext();
    $("#pgName").focus();
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;


        if (event.keyCode == 9 && focusedElement == 'close')
        { //alert("hii");
            /*event.preventDefault();
             $(".pageName").focus();*/

        }
        if (event.keyCode == 9 && focusedElement == 'pf')
        { //alert("hii");
            event.preventDefault();
            $("#help_btn").focus();

        }





        if (event.keyCode == 9 && focusedElement == 'close')
        {
            //$("#close").focus();
            //event.preventDefault();
        }
        else if (event.keyCode == 13 && focusedElement == 'prev_btn')
        {  //alert("hhh");
            $("#mod1").focus();
            //event.preventDefault();
        }
        /* else if(event.shiftKey && event.keyCode == 9 )
         {
         
         } */
        else if (event.shiftKey && event.keyCode == 9 && focusedElement == 'pf')
        {

            $("#pgName").focus();

        }



    });

});

