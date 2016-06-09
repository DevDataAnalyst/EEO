var counter = 0;
$(document).ready(function () {
    $("#pgName").focus();
    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();
    }
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    $('.mainLayout').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;


        if (event.keyCode == 9 && focusedElement == 'nxt1')
        {
            event.preventDefault();
             $("#popUpPara1").focus();

        }
        else if (event.keyCode == 9 && focusedElement == 'nxt2')
        {
            event.preventDefault();
             $("#popUpPara3").focus();

        }
        else if (event.keyCode == 9 && focusedElement == 'nxt3')
        {
            event.preventDefault();
             $("#popUpPara5").focus();

        }
    });

    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        if (event.keyCode == 9 && focusedElement == 'close')
        {
            /*event.preventDefault();
             $(".pageName").focus();*/
        }
    });

    $(".option").click(function () {
        if (!($(".option").hasClass("submitted"))) {

            $(".option").children().removeClass("clicked");
            $(".option").children().prop("src", "img/Question_screens/radio_n.png");
            $(".option").removeClass("selected");
            $(this).addClass("selected");
            if ($(this).children().hasClass("choice")) {
                $(this).children().addClass("clicked");
                $(this).children().prop("src", "img/Question_screens/radio_v.png");
            }


            //$(".option").children().removeClass("clicked");
            //$(".option").removeClass("selected");
            if ($(".lowerLayoutContainer .clicked").length > 0) {
                $(".submit").addClass("active").removeClass("inactive");
                $(".submit").prop("src", "img/common/submit_n.png");
            }
            else {
                $(".submit").addClass("inactive").removeClass("active");
                $(".submit").prop("src", "img/common/submit_d.png");
            }
            optionHolder = this;
        }
    });

    $(".submit").click(function () {
        counter++;
        if ($(this).hasClass("active")) {
            if ($(".option1").hasClass("clicked") && counter <= 1) {
                $(".popUp1").show();
				$(".popUpPara1").focus();
                myControl.myAudioController.playAudioAt(1, function () {

                });
                //score++;
                //goNext();
                //cykAnswer[myCounter.get("pageCounter")-1] = $(optionHolder).attr("value");
            }/* else if(counter<=1){
             $(".popUp3").show();
             } */ else if ($(".option2").hasClass("clicked") && counter <= 1) {
                $(".popUp2").show();
				$(".popUpPara3").focus();
                myControl.myAudioController.playAudioAt(2, function () {

                });
                //goNext();
                //cykAnswer[myCounter.get("pageCounter")-1] = $(optionHolder).attr("value");
            }
            else if ($(".option3").hasClass("clicked") && counter <= 1) {
                $(".popUp3").show();
				$(".popUpPara5").focus();
                myControl.myAudioController.playAudioAt(3, function () {

                });
                //$(".option").addClass("submitted");
            }
            $(".submit").addClass("inactive").removeClass("active");
            $(".submit").prop("src", "img/common/submit_d.png");
            //myNavigator.activateNext();
        }
    });
    $(".next").click(function () {
        goNext();
    });
    /*$(".submitDiv").click(function(){
     $(".submit").click();
     });*/
    /*$(".popUpClose").click(function(){
     
     if(!($(".option1").hasClass("clicked")) && counter<=1){
     $(".popUp").hide();
     $(".option").children().removeClass("clicked");
     $(".option").removeClass("selected");
     $("#nxt_btn").click();
     }else{
     $(".popUp").hide();
     myNavigator.activateNext();
     $("#nxt_btn").click();
     }
     });*/
});
function goNext() {
    myNavigator.activateNext();
    $("#nxt_btn").click();
}





