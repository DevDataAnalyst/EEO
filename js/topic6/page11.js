var counter = 0;
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
    myNavigator.deactivatePrev();
    myNavigator.deactivateNext();
    $(".option").click(function () {
        if (!($(".option").hasClass("submitted"))) {

            $(".option").children().removeClass("clicked");
            $(".option").children().prop("src", "img/assessment_start_pg/radio_n.png"); ////EEO
            $(".option").removeClass("selected");
            $(this).addClass("selected");
            if ($(this).children().hasClass("choice")) {
                $(this).children().addClass("clicked");
                $(this).children().prop("src", "img/assessment_start_pg/radio_v.png"); ////EEO

            }


            //$(".option").children().removeClass("clicked");
            //$(".option").removeClass("selected");
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
            if ($(".option1").hasClass("clicked") && counter <= 1) {
                //$(".popUp1").show();
                score++;
                goNext();
                //cykAnswer[myCounter.get("pageCounter")-1] = $(optionHolder).attr("value");
            }/* else if(counter<=1){
             $(".popUp3").show();
             } */ else {
                //$(".popUp2").show();
                goNext();
                //cykAnswer[myCounter.get("pageCounter")-1] = $(optionHolder).attr("value");
            }
            if (counter == 2) {
                $(".option").addClass("submitted");
            }
            $(".submit").addClass("inactive").removeClass("active");
            //myNavigator.activateNext();
        }
    });

    $(".popUpClose").click(function () {

        if (!($(".option1").hasClass("clicked")) && counter <= 1) {
            $(".popUp").hide();
            $(".option").children().removeClass("clicked");
            $(".option").removeClass("selected");
            $("#nxt_btn").click();
        } else {
            $(".popUp").hide();
            myNavigator.activateNext();
            $("#nxt_btn").click();
        }
    });
});
function goNext() {
    myNavigator.activateNext();
    $("#nxt_btn").click();
}





