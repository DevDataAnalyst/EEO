
$(document).ready(function () {
    $("#pgName").html("Discrimination | Employment Practices&mdash;Potential Legal Risks");
    $("#pgName").focus();
    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();


    }
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 9)
        {
            if (focusedElement == 'cls1')
            {
                event.preventDefault();
                $("#popUpPara1").focus();

            }

            else if (focusedElement == 'cls2')
            {
                event.preventDefault();
                $("#popUpPara2").focus();
            }
            else if (focusedElement == 'cls3')
            {
                event.preventDefault();
                $("#popUpPara3").focus();
            }
        }


        if (event.keyCode == 13 && focusedElement == 'nxt_btn')
        {

        }
        if (event.keyCode == 13) {
            if (focusedElement == 'popup1close' || focusedElement == 'popup2close' || focusedElement == 'popup3close')
            {

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
    $(".secondary").removeClass("secondary_dis").addClass("secondary_en");
    $(".third").removeClass("third_dis").addClass("third_en");
    /* }); */

    $(".primary").click(function () {
        if ($(this).hasClass("primary_en")) {
            $(".popUp").hide();
            $(".popUp1").show();
			$(".popUpPara1").focus();
            $(this).addClass("clicked");
            $("#popup1").focus();
            if ($(".lowerLayout .clicked").length == 3) {
                myNavigator.activateNext();
            }
            myControl.myAudioController.playAudioAt(1, function () {

            });
        }
    });
    $(".secondary").click(function () {
        if ($(this).hasClass("secondary_en")) {
            $(".popUp").hide();
            $(".popUp2").show();
            $("#popup2").focus();
			$(".popUpPara2").focus();
            $(this).addClass("clicked");
            if ($(".lowerLayout .clicked").length == 3) {
                myNavigator.activateNext();
            }
            myControl.myAudioController.playAudioAt(2, function () {

            });
        }
    });
    $(".third").click(function () {
        if ($(this).hasClass("third_en")) {
            $(".popUp").hide();
            $(".popUp3").show();
            $("#popup3").focus();
			$(".popUpPara3").focus();
            $(this).addClass("clicked");
            if ($(".lowerLayout .clicked").length == 3) {
                myNavigator.activateNext();
            }
            myControl.myAudioController.playAudioAt(3, function () {

            });
        }
    });
    $(".btnNameDiv1").click(function () {
        $(".primary").click();
    });
    $(".btnNameDiv2").click(function () {
        $(".secondary").click();
    });
    $(".btnNameDiv3").click(function () {
        $(".third").click();
    });
    $(".popUpClose").click(function () {
        $(".popUp").hide();
        if ($(".lowerLayout .clicked").length == 3) {
            myNavigator.activateNext();
        }
        myControl.myAudioController.playAudioAt(0, function () {

        });
        $("#audio_btn").click();
    });

    $("#cls1").click(function () {
        $(".secondary ").focus();
    });
    $("#cls2").click(function () {
        $(".third").focus();
    });
    $("#cls3").click(function () {
        $(".third ").focus();
    });
    

    $(".closeDiv").click(function () {
        $(".popUpClose").click();
    });

});
