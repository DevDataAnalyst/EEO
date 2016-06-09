var pageNumber = 1;
var splashCount = 0
var intervalId;
$(document).ready(function () {

    $('.modules').unbind('keydown');
    $('.modules').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        /*console.log(focusedElement);
         console.log(event.keyCode);*/

        if (event.keyCode == 9) {
            if (focusedElement == 'mod6') {
                if (event.shiftKey) {

                }
                else {
                    event.preventDefault();
                    $("#closeMindMap").focus();
                }
            }
        }

        if (event.shiftKey && event.keyCode == 9 && focusedElement == 'closeMindMap') {
            $("#mod6").focus();
            event.preventDefault();
        }

    });
    $('.content').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        if (event.keyCode == 9) {
            if (focusedElement == 'ctnbtn')
            {
                if (event.shiftKey) {
                    event.preventDefault();
                    $(".screenImg").focus();
                }
                else {
                    event.preventDefault();
                    $(".closeVideo").focus();
                }
            }
            if (focusedElement == 'helpClose')
            {
				//alert("s");
				event.preventDefault();
				$(".helpPage").focus();
                
				
            }

        }
    });

    $('.videoPlayer').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        if (event.keyCode == 9) {
            if (focusedElement == 'skipbtn1' || focusedElement == 'skipbtn2' || focusedElement == 'skipbtn3' || focusedElement == 'skipbtn4' || focusedElement == 'skipbtn5' || focusedElement == 'skipbtn6')
            {
                if (event.shiftKey) {
                    event.preventDefault();
                    $(".screenImg").focus();
                }
                else {
                    event.preventDefault();
                    $(".closeVideo").focus();
                }
            }
            else if (focusedElement == 'closeVideo' && event.shiftKey)
            {
                event.preventDefault();
                $(".skipButton").focus();
            }
        }
    });
    $('body').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;
        if (event.keyCode == 9 && focusedElement == 'helpClose')
        {
            event.preventDefault();
			$(".helpPage").focus();
        }
    });


    $(".skipButton").click(function () {
        gotoNextContent();
        /*clearInterval(intervalId);
         $(".parentClass").fadeOut(500, function () {
         $(".instruction7").fadeIn(500);
         });*/

    });

    $(".continueButton").click(function () {

        $(".instruction1").stop();
        $(".continueButton").hide();
        /*document.getElementById("splashAudio4").pause();
        document.getElementById("splashAudio5").pause();
        document.getElementById("splashAudio6").pause();
        document.getElementById("splashAudio7").pause();*/
        $(".videoPlayer").fadeOut(500, function () {
            $(".mindMap").fadeIn(500);
			$(".menuText1").focus();
        });

    });
    // added for journel button
    $("#journal_btn").click(function () {
        $(".journelPopUp").show();
    });

    $(".jClose").click(function () {
        $(".journelPopUp").hide();
    });


    /*$(".journelPopUp").draggable({ 
     containment: ".mainBoard"
     });*/
    var helpFlag = true;
    $("#help_btn").click(function () {
        if ($("#audio_btn").hasClass("play")) {
            helpFlag = false;
        }
        else {
            helpFlag = true;
        }
        $(".helpPage").show();
		$(".closeHelp").show();
        if ($("#audio_btn_tab").css('display').toLowerCase() != 'none') {
            $("#audio_btn_tab").click();
        }
        if (!($("#audio_btn").hasClass("pause_disabled")))
        {
            myControl.myAudioController.pauseAudio();
        }
        $(".helpPage").focus();
    });

    $(".closeHelp").click(function () {
        $(".helpPage").hide();
		$(".closeHelp").hide();
        if (helpFlag) {
            if ($("#audio_btn_tab").css('display').toLowerCase() != 'none') {
                $("#audio_btn_tab").click();
            }
            if (!($("#audio_btn").hasClass("pause_disabled")))
            {
                $("#audio_btn").click();
            }
        }
        $("#help_btn").focus();
    });

    $(".closeButton").click(function () {
        window.close();
    });

    $(".closeVideo").click(function () {
        window.close();
    });

    $(".closeMenu").click(function () {
        window.close();
    });

    $("#prev_btn").mouseover(function () {
        $(this).addClass("hover");
    });

    $("#prev_btn").mouseout(function () {
        $(this).removeClass("hover");
    });

    $("#nxt_btn").mouseover(function () {
        $(this).addClass("hover");
    });

    $("#nxt_btn").mouseout(function () {
        $(this).removeClass("hover");
    });

});

function gotoNextContent() {
    splashCount++;
    //alert(splashCount);
    //$(".instruction" + splashCount).stop();
    $(".instruction" + splashCount).fadeOut(500, function () {
        $(".instruction" + (splashCount + 1)).fadeIn(500);
        $(".screenImg").focus();
        /*document.getElementById("splashAudio4").pause();
        document.getElementById("splashAudio5").pause();
        document.getElementById("splashAudio6").pause();
        document.getElementById("splashAudio7").pause();*/
        if (splashCount >= 3 && splashCount <= 6) {
            /*document.getElementById("splashAudio" + (splashCount + 1)).play();*/
        }
    });
    if (splashCount == 6) {
        clearInterval(intervalId);
    }
}


/**Image Loader **/
var imageCounter = 0;
function loadImage(length) {
    imageCounter++;
    if (imageCounter == length) {
        $(".loadingVideo").hide();
        $(".videoPlayer").show();
        /*intervalId = setInterval(function () {
         gotoNextContent();
         }, 5000);*/
        myControl.startApplication();
    }
}

function loadImages() {
    $.ajax({
        url: "xml/content.xml",
        dataType: "xml",
        success: function (data) {
            var length = $(data).find('source').length;
            //alert($(data).find('lessonTitle').text());
            $(".LessonTitle").text($(data).find('lessonTitle').text());
            $(data).find('source').each(function (index) {
                var ele = "<img src='" + $.trim($(this).text()) + "' onload='loadImage(" + length + ")'>"
                $(".dummyImageDiv").append(ele);
            });
        }
    });

}

function unbindGlobalTabs() {
    /*$("#nxt_btn").removeAttr("tabindex");
     $("#prev_btn").removeAttr("tabindex");
     $("#close").removeAttr("tabindex");
     $("#help_btn").removeAttr("tabindex");
     $("#menu_btn").removeAttr("tabindex");
     $("#at_btn").removeAttr("tabindex");
     $("#mic_btn").removeAttr("tabindex");
     $("#audio_btn").removeAttr("tabindex");*/

}

function bindGlobalTabs(counter) {
    /*$("#nxt_btn").attr("tabindex", counter + 1);
     $("#prev_btn").attr("tabindex", counter + 2);
     //$("#close").attr("tabindex", counter + 3);
     $("#help_btn").attr("tabindex", counter + 3);
     $("#menu_btn").attr("tabindex", counter + 4);
     $("#at_btn").attr("tabindex", counter + 5);
     $("#mic_btn").attr("tabindex", counter + 6);
     $("#audio_btn").attr("tabindex", counter + 7);*/
}