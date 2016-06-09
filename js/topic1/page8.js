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
    myControl.myAudioController.playAudioAt(0,function(){
     
    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    unbindGlobalTabs();
    bindGlobalTabs(0);
    //myControl.myAudioController.setAudioTranscriptAt(0);

    $("#pgName").focus();
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 9 && focusedElement == 'close')
        { //alert("hii");
            /*event.preventDefault();
             $(".pageName").focus();*/

        }
        if (event.keyCode == 9 && focusedElement == 'screen')
        { 
            //event.preventDefault();
            /*tabCount++;
            if(tabCount>1){
                $("#mail").focus();
            }*/
            //$(".pageName").focus();

        }
        else if (event.keyCode == 13 && focusedElement == 'prev_btn')
        {  //alert("hhh");
            $("#mod1").focus();
            //event.preventDefault();
        }
        /* else if(event.shiftKey && event.keyCode == 9 )
         {
         
         } */
        


    });
    $('.email_icon').click(function () {
        $('.email').fadeIn();
        $('.email').focus();
        myControl.myAudioController.playAudioAt(1,function(){
            
        });
        myNavigator.activateNext();
    });

});


