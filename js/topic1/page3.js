
$(document).ready(function () {
    var i = 0;
    var count = 0;
    var tabCount = 0;
    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();
    }
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    $('.mainLayout').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;


        if (event.keyCode == 13)
        {
            if (focusedElement == 'mod1ctn1')
            {
                count++;
                //$("#img2").focus();
            }
            else if (focusedElement == 'mod1ctn1' && count == 1)
            {

                $("#img3").focus();
            }
        }
    });
    $(".continue_btn").click(function () {
        if (i == 0) {
            $(".img2").fadeIn();
            $(".img2").focus();
            //$("#iTextNote1").hide();
            //$("#iTextNote2").show();

            i++;
            myControl.myAudioController.playAudioAt(1, function () {

            });
        }
        else if (i == 1) {
            $(".continue_btn").hide();
            $(".img3").fadeIn();
            $(".img3").focus();
            //$("#iTextNote2").hide();
            $("#iTextNote1").hide();
            tabCount++;
            i++;
            myNavigator.activateNext();
            myControl.myAudioController.playAudioAt(2, function () {

            });
            myNavigator.activateNext();
        }
    });
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