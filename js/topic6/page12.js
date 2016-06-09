var counter = 0;
var feedBack = false;
var result;
$(document).ready(function () {
    $("#pgName").focus();
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 9 & focusedElement == 'close')
        {

            //event.preventDefault();
            $(".result").focus();

            //$("#result2").focus();



        }

    });
    //myControl.myAudioController.setAudioTranscriptAt(0);
    $('.mainLayout').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 13 && focusedElement == 'reVisit1')
        { //alert("hii");
            //event.preventDefault();
            $(".reVisit").click();

        }
        else if (event.keyCode == 13 && focusedElement == 'tryAgain1')
        { //alert("hii");
            //event.preventDefault();
            $(".tryAgain").click();

        }

    });
    //$('.pageNameHolder').hide();
    //$('#prev_btn').hide();
    //$('#nxt_btn').hide();
    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();
    }
    myNavigator.deactivateNext();
    myNavigator.deactivatePrev();
    result = (score / 10) * 100;
    result = result.toFixed();
    $(".para1").html("Unsuccessful | Your score is "+result + "%");
	$(".para5").html("Successful | Your score is "+result + "%");
    //alert(result)
	
    if (result >= 80)
    {
        $('.passed').show();
        score = 0;
        myControl.myAudioController.playAudioAt(0, function () {

        });
		myControl.myAudioController.setAudioTranscriptAt(0);
        myPageView.setPageStatus();
    }
    else
    {
        $('.failed').show();
        myControl.myAudioController.playAudioAt(1, function () {

        });
		myControl.myAudioController.setAudioTranscriptAt(1);
        score = 0;
    }
    $(".tryAgain").click(function () {
        myNavigator.tryAgainLastModule();
        //$('.pageNameHolder').hide();
    });
    $(".reVisit").click(function () {
        myNavigator.revisitCourse();
        $("#menu_btn").click();
        //$('.pageNameHolder').hide();
    });

    $(".certificate").click(function () {
window.open("html/certificate.html","_blank");
    });

});






