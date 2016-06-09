
$(document).ready(function () {
    if (currentPageStatus == 0) {
        myNavigator.deactivateNext();
    }
    $("#pgName").html("Equal Pay for Equal Work | The Equal Pay Act of 1963 (EPA) & Title VII");
    myControl.myAudioController.playAudioAt(0, function () {

    });
    myControl.myAudioController.setAudioTranscriptAt(0);
    $("#pgName").focus();
    $('.mainLayout').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 9 && focusedElement == 'close')
        {

        }

    });
    $('.mainBoard').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;


        if (event.shiftKey && event.keyCode == 9 && focusedElement == 'close')
        {
            /* $("#help_btn").focus();
             event.preventDefault() */;
        }
    });
    $(".tab").click(function () {
        $(".tab").removeClass("current");
        $(this).addClass("current");
        
        $(".tabContent").hide();
        //$(".tab").removeClass("active");
        //$(this).addClass("active");
        $("." + $(this).attr("id") + "Content").show();
        $(this).addClass("clicked");
        if ($(".lowerLayout1 .clicked").length == 2) {
            myNavigator.activateNext();
        }
		if($(this).hasClass("tab1")){
		$("#para3").focus();
            $(".tab1").prop("src","img/tab_page/slide_38/slide_38_tab_1_n.png");
            $(".tab2").prop("src","img/tab_page/slide_38/slide_38_tab_2_d.png")
        }
        else if ($(this).hasClass("tab2")){
		 $("#para5").focus();
            $(".tab1").prop("src","img/tab_page/slide_38/slide_38_tab_1_d.png");
            $(".tab2").prop("src","img/tab_page/slide_38/slide_38_tab_2_n.png")
        }
        if ($(this).hasClass("tab1")) {
            myControl.myAudioController.playAudioAt(1, function () {

            });
        }
        if ($(this).hasClass("tab2")) {
            myControl.myAudioController.playAudioAt(2, function () {

            });
        }


    });

    $(".tabNameDiv1").click(function () {
        $("#tab1").click();
    });
    $(".tabNameDiv2").click(function () {
        $("#tab2").click();
    });
    $(".tabNameDiv3").click(function () {
        $("#tab3").click();
    });

});