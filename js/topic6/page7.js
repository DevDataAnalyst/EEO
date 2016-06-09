var counter = 0;
var feedBack = false;
myNavigator.deactivatePrev();
myNavigator.deactivateNext();
$(document).ready(function () {
    $("#pgName").focus();
    /* if(currentPageStatus == 0){
     myNavigator.deactivateNext();
     }	 */
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 9 && focusedElement == 'close')
        { //alert("hii");
            event.preventDefault();
            $(".pageName").focus();

        }
    });
    $(".option").click(function () {
        if (!($(".option").hasClass("submitted"))) {

            if (!($(this).hasClass("selected"))) {
                $(this).addClass("selected");
                if ($(this).children().hasClass("choice")) {
                    $(this).children().addClass("clicked");
                    $(this).children().prop("src", "img/assessment_start_pg/slide_7_option_click_2_select.png"); ////EEO
                }
            } else {
                $(this).children().removeClass("clicked");
                $(this).children().prop("src", "img/assessment_start_pg/slide_7_option_click_2.png"); ////EEO
                $(this).removeClass("selected");
            }
            if ($(".lowerLayoutContainer .clicked").length > 0) {
                $(".submit").addClass("active").removeClass("inactive");
                $(".submit").prop("src", "img/common/submit_n.png"); ////EEO
            }
            else {
                $(".submit").addClass("inactive").removeClass("active");
                $(".submit").prop("src", "img/common/submit_d.png"); ////EEO
            }
            optionHolder = this;
        }
    });

    $(".submit").click(function () {
        counter++;
        if ($(this).hasClass("active")) {
            if ($(".option2").hasClass("clicked") && $(".option4").hasClass("clicked") && ($(".lowerLayoutContainer .clicked").length == 6) && counter <= 1) {
                //$(".popUp1").show();
                feedBack = true;
                score++;
                goNext();
            } else if (counter <= 0) {
                $(".popUp3").show();

            } else {
                //$(".popUp2").show();
                feedBack = true;
                goNext();
            }
            if (counter == 1) {
                $(".option").addClass("submitted");
            }
            $(".submit").addClass("inactive").removeClass("active");
            //myNavigator.activateNext();
        }
    });
    $(".submitDiv").click(function () {
        $(".submit").click();
    });
    $(".popUpClose").click(function () {
        if (feedBack != true) {
            $(".popUp").hide();
            $(".option").children().removeClass("clicked");
            $(".option").removeClass("selected");
        } else {
            $(".popUp").hide();
            /* alert(score) */
            myNavigator.activateNext();
            $("#nxt_btn").click();
        }
    });
});
function goNext() {
    myNavigator.activateNext();
    $("#nxt_btn").click();
}





