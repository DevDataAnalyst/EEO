$("#pgName").focus();
$(document).ready(function () {
    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();
    }
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    $('.mainLayout').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        if (event.keyCode == 9)
        {
            if (focusedElement == 'cls1')
            {
                event.preventDefault();
                $("#popUpPara1").focus();


            }
        }
    });
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 13 && focusedElement == 'nxt_btn')
        {

        }
        if (event.keyCode == 13) {
            if (focusedElement == 'popup1close' || focusedElement == 'popup2close' || focusedElement == 'popup3close')
            {
                //alert("SSS");
                $(".popUpClose").click();
                event.preventDefault();
            }
        }
        else if (event.keyCode == 9) {
            if (focusedElement == 'popup1close' || focusedElement == 'popup2close' || focusedElement == 'popup3close')
            {
                event.preventDefault();

            }
        }



    });
    /* myControl.myAudioController.playAudioAt(0,function(){ */
    $(".primary").removeClass("primary_dis").addClass("primary_en");
    //$(".secondary").removeClass("secondary_dis").addClass("secondary_en");
    //$(".third").removeClass("third_dis").addClass("third_en");
    /* }); */

    $(".primary").click(function () {
        if ($(this).hasClass("primary_en")) {
            $(".popUp").hide();
            $(".popUp1").show();
			$(".popUpPara1").focus();
            myControl.myAudioController.playAudioAt(1, function () {

            });
            $(this).addClass("clicked");
            $("#popup1").focus();
            if ($(".panelLeft .clicked").length == 1) {
                myNavigator.activateNext();
            }
        }
    });
    /*$(".secondary").click(function () {
     if ($(this).hasClass("secondary_en")) {
     $(".popUp").hide();
     $(".popUp2").show();
     $("#popup2").focus();
     $(this).addClass("clicked");
     if ($(".lowerLayout .clicked").length == 3) {
     myNavigator.activateNext();
     }
     }
     });
     $(".third").click(function () {
     if ($(this).hasClass("third_en")) {
     $(".popUp").hide();
     $(".popUp3").show();
     $("#popup3").focus();
     $(this).addClass("clicked");
     if ($(".lowerLayout .clicked").length == 3) {
     myNavigator.activateNext();
     }
     }
     });*/
    /*$(".btnNameDiv1").click(function(){
     $(".primary").click();
     });
     $(".btnNameDiv2").click(function(){
     $(".secondary").click();
     });
     $(".btnNameDiv3").click(function(){
     $(".third").click();
     });*/
    $(".popUpClose").click(function () {
        $(".popUp").hide();
        if ($(".panelLeft .clicked").length == 1) {
            myNavigator.activateNext();
        }

        myControl.myAudioController.playAudioAt(0, function () {
        });
        $("#audio_btn").click();
        $(".primary_en").focus();
    });

    $(".popUp1 .popUpClose").click(function () {
        //$("#secondary").focus();
    });

    $(".popUp2 .popUpClose").click(function () {
        //$("#third").focus();
    });


});
