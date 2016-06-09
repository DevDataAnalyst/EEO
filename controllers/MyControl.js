function MyControl()
{
    var initCounter = 1;

    this.myLMSDataHandler = new MyLMSDataHandler();
    var thisRoot = this;
    this.myAudioController;
    this.startApplication = function ()
    {
        thisRoot.myAudioController = new AudioController(document.getElementById("myAudio"), document.getElementById("mp3Src"), document.getElementById("oggSrc"), document.getElementById("mic_btn"), document.getElementById("audio_btn"), document.getElementById("at_btn"), document.getElementById("at_holderlayout"));
        thisRoot.fetchModuleData();

    };
    this.fetchModuleData = function ()
    {
        myModules.fetch({
            success: function (e) {
                //console.log("myModules.length "+myModules.length);
                //console.log("myModules.length "+myModules.at(0).get("sections").length);
                thisRoot.fetchElementData();
                var moduleModel = myModules.at(0);
                thisRoot.myAudioController.setXmlData(moduleModel.get("xmlData"));
            },
            error: function (e) {
                console.log('Something went wrong');
            }
        });
    };

    this.fetchElementData = function ()
    {
        myElementDatas.fetch({
            success: function (e) {
                thisRoot.setPageStatus();
                //thisRoot.startInitRender();
            },
            error: function (e) {
                console.log('Something went wrong');
            }
        });
    };

    this.setPageStatus = function ()
    {
        //////////////////////////////////////////////////////
        $("#audio_btn_tab").click(function () {
            //alert('hi'+ $("#audio_btn_tab").hasClass('pause'));
            if ($("#audio_btn_tab").hasClass('pause') && audioFlag)
            {

                if (currentPage == 'm2p17')
                {
                    myAudio1_m2p17.pause();
                    myAudio2_m2p17.pause();

                }
                ////
                else if (currentPage == 'm2p18')
                {
                    myAudio1_m2p18.pause();
                    myAudio2_m2p18.pause();

                }
                ////
                else if (currentPage == 'm2p06')
                {
                    myAudio1_m2p06.pause();
                    myAudio2_m2p06.pause();

                }
                ////
                else if (currentPage == 'm2p15')
                {
                    myAudio1_m2p15.pause();
                    myAudio2_m2p15.pause();
                }
                else if (currentPage == 'm2p16')
                {
                    myAudio1_m2p16.pause();
                    myAudio2_m2p16.pause();
                }
                else if (currentPage == 'm2p21')
                {
                    myAudio1_m2p21.pause();
                    myAudio2_m2p21.pause();
                    myAudio3_m2p21.pause();
                }
                else if (currentPage == 'm2p22')
                {
                    myAudio1_m2p22.pause();
                    myAudio2_m2p22.pause();
                }
                ////
                $("#audio_btn_tab").addClass('play').removeClass('pause');
            }
            else if ($("#audio_btn_tab").hasClass('play') && audioFlag)
            {

                currentAudio.play();
                $("#audio_btn_tab").addClass('pause').removeClass('play');
            }
        });
        $("#mic_btn_tab").click(function () {
            //alert('hiii');
            if ($("#mic_btn_tab").hasClass('mic_btn_on'))
            {
                thisRoot.toggleMuteAudio();
                $("#mic_btn_tab").addClass('mic_btn_off').removeClass('mic_btn_on');
                muteAudioState = true; //// Added 13/01/2016
            }
            else if ($("#mic_btn_tab").hasClass('mic_btn_off'))
            {
                thisRoot.toggleMuteAudio();
                $("#mic_btn_tab").addClass('mic_btn_on').removeClass('mic_btn_off');
                muteAudioState = false; //// Added 13/01/2016
            }
        });
        this.toggleMuteAudio = function () {
            /* myAudio.muted(); */
            $('#myAudio1_m2p17').prop("muted", !$('#myAudio1_m2p17').prop("muted"));
            $('#myAudio2_m2p17').prop("muted", !$('#myAudio2_m2p17').prop("muted"));

            ////
            $('#myAudio1_m2p18').prop("muted", !$('#myAudio1_m2p18').prop("muted"));
            $('#myAudio2_m2p18').prop("muted", !$('#myAudio2_m2p18').prop("muted"));

            ////
            $('#myAudio1_m2p06').prop("muted", !$('#myAudio1_m2p06').prop("muted"));
            $('#myAudio2_m2p06').prop("muted", !$('#myAudio2_m2p06').prop("muted"));
            /*$('#myAudio3_m3p17').prop("muted",!$('#myAudio3_m3p17').prop("muted"));
             $('#myAudio4_m3p17').prop("muted",!$('#myAudio4_m3p17').prop("muted"));
             $('#myAudio5_m3p17').prop("muted",!$('#myAudio5_m3p17').prop("muted"));
             $('#myAudio6_m3p17').prop("muted",!$('#myAudio5_m3p17').prop("muted"));*/
            ////
            $('#myAudio1_m2p15').prop("muted", !$('#myAudio1_m2p15').prop("muted"));
            $('#myAudio2_m2p15').prop("muted", !$('#myAudio2_m2p15').prop("muted"));
            $('#myAudio1_m2p16').prop("muted", !$('#myAudio1_m2p16').prop("muted"));
            $('#myAudio2_m2p16').prop("muted", !$('#myAudio2_m2p16').prop("muted"));

            ////
            $('#myAudio1_m2p21').prop("muted", !$('#myAudio1_m2p21').prop("muted"));
            $('#myAudio2_m2p21').prop("muted", !$('#myAudio2_m2p21').prop("muted"));
            $('#myAudio3_m2p21').prop("muted", !$('#myAudio3_m2p21').prop("muted"));
            ////
            $('#myAudio1_m2p22').prop("muted", !$('#myAudio1_m2p22').prop("muted"));
            $('#myAudio2_m2p22').prop("muted", !$('#myAudio2_m2p22').prop("muted"));
        }
        //////////////////////////////////////////
        thisRoot.myLMSDataHandler.initialSetDataLMS();
        //Get the JSON from LMS and edit the pageStatus Array
        var mapPageCounter = [];
        var mapTotalPageCounter = [];

        var moduleCounter = 0;

        for (i = 0; i < myModules.length; i++) {
            var myModule = myModules.at(i);
            var mySections = myModule.get("sections");
            var moduleName = myModule.get("name");
            var counter = 0;
            mapPageCounter[i] = 0;
            mapTotalPageCounter[i] = 0;
            for (j = 0; j < mySections.length; j++) {
                var mySection = mySections.at(j);
                var myPageIdArray = mySection.get("pageIdArray");
                var myPageStatusArray = mySection.get("pageStatusArray");
                mapTotalPageCounter[i] = mapTotalPageCounter[i] + myPageIdArray.length;
                for (k = 0; k < myPageIdArray.length; k++) {
                    var index = pageIdArrayLMS.indexOf(myPageIdArray[k]);
                    if (index !== -1) {
                        myPageStatusArray[k] = pageStatusArrayLMS[index];
                        if (myPageStatusArray[k] == 1) {
                            mapPageCounter[i] = ++counter;
                        }
                    }
                }
                mySection.set("pageStatusArray", myPageStatusArray);
            }
        }
        var lastIndex = -1;
        $(".module").each(function (index) {
            if (mapPageCounter[index] == mapTotalPageCounter[index]) {
                $(this).addClass("mapCompleted");
                $(this).prop("src","img/menu/menu_topic_"+(index+1)+"_v.png");
                lastIndex = index;
                moduleCounter++;
            }
            else if (mapPageCounter[index] > 0) {
                $(this).addClass("mapInProgress");
                $(this).prop("src","img/menu/menu_topic_"+(index+1)+"_n.png");
            }
            else {
                $(this).addClass("mapIncomplete");
                $(this).prop("src","img/menu/menu_topic_"+(index+1)+"_d.png");
            }

        });
        $(".module" + (lastIndex + 2)).removeClass("mapIncomplete").addClass("mapInProgress");
        $(".module" + (lastIndex + 2)).prop("src","img/menu/menu_topic_"+(lastIndex + 2)+"_n.png");

        /*  added for selected menu descripction*/
        //if(!($(".modulesLeft").hasClass("modulesLeftContent"+(lastIndex+2))))
        /*if(moduleCounter == myModules.length){			
         $(".modulesLeft").addClass("modulesLeftContent"+moduleCounter);
         }else{
         $(".modulesLeft").addClass("modulesLeftContent"+(lastIndex+2));
         }*/


        /*console.log("pageIdArrayLMS "+pageIdArrayLMS);
         console.log("pageStatusArrayLMS "+pageStatusArrayLMS);*/
        /*if(currentPageCounterLMS.length !=0 ){
         var currentPageCounterLMSArray = currentPageCounterLMS.split(",");
         var moduleCounter = currentPageCounterLMSArray[0];
         var sectionCounter = currentPageCounterLMSArray[1];
         var pageCounter = currentPageCounterLMSArray[2];
         myCounter.set('moduleCounter',moduleCounter);
         myCounter.set('sectionCounter',sectionCounter);
         myCounter.set('pageCounter',pageCounter);
         thisRoot.startInitRender();
         }
         else {
         $(".welcome").show();
         $(".mainBoard").hide();
         }*/
        thisRoot.myLMSDataHandler.setLMSData();
        thisRoot.setPageStage();
    };
    this.setPageStage = function ()
    {
        //$(".loadingVideo").hide();
        //$(".videoPlayer").show();     

        $(".module").click(function () {
            if (!($(this).hasClass("mapIncomplete"))) {
                $(".mindMap").hide();
                var classString = $(this).attr("class");
                var classArray = classString.split(" ");
                var classIndex = classArray[1];
                var index = classIndex.substring(6, classIndex.length);
                initCounter = index;
                myCounter.set('moduleCounter', initCounter);
                myCounter.set('sectionCounter', "1");
                myCounter.set('pageCounter', "1");
                thisRoot.startInitRender();
            }
        });
    };

    this.startInitRender = function ()
    {
        $(".mainBoard").show();
        $(".welcome").hide();
        myPageView = new PageView({collection: myModules});
        myPageView.countModule = myCounter;
        myPageView.audioController = thisRoot.myAudioController;
        myPageView.render();

        //$(".modules:eq("+(initCounter-1)+") .collapse").text("-");
        //$(".modules:eq("+(initCounter-1)+") .sections").show();

        $("#prev_btn").click(function () {
            myNavigator.gotoPrev();
        });

        $("#nxt_btn").click(function () {
            myNavigator.gotoNext();
        });
        $("#menu_btn").unbind("click");
        $("#menu_btn").click(function () {
            //alert('hi');
            thisRoot.setMap();
            $("#nxt_btn").unbind("click");
            $("#prev_btn").unbind("click");
            $('.pageNameHolder').show();
            $('#prev_btn').show();
            $('#nxt_btn').show();
            $("#audio_btn_tab").hide();
            $("#audio_btn").show();
            $("#mic_btn_tab").hide();
            $("#mic_btn").show();
            ///////////////////////
            if (currentPage == 'm2p17')
            {
                myAudio1_m2p17.pause();
                myAudio2_m2p17.pause();
                /*myAudio3.pause();
                 myAudio4.pause();
                 myAudio5.pause();
                 myAudio6.pause();*/
            }
            ////
            else if (currentPage == 'm2p18')
            {
                myAudio1_m2p18.pause();
                myAudio2_m2p18.pause();

            }
            ////
            else if (currentPage == 'm2p06')
            {
                myAudio1_m2p06.pause();
                myAudio2_m2p06.pause();

            }
            ////
            else if (currentPage == 'm2p15')
            {
                myAudio1_m2p15.pause();
                myAudio2_m2p15.pause();
            }
            else if (currentPage == 'm2p16')
            {
                myAudio1_m2p16.pause();
                myAudio2_m2p16.pause();
            }
            else if (currentPage == 'm2p21')
            {
                myAudio1_m2p21.pause();
                myAudio2_m2p21.pause();
                myAudio3_m2p21.pause();
            }
            else if (currentPage == 'm2p22')
            {
                myAudio1_m2p22.pause();
                myAudio2_m2p22.pause();
            }
            ////////////////////////
        });

        $("#reload_btn").click(function () {
            location.reload();
        });

    };

    this.startRender = function ()
    {
        $(".mainBoard").show();

        myPageView = new PageView({collection: myModules});
        myPageView.countModule = myCounter;
        myPageView.audioController = thisRoot.myAudioController;
        myPageView.render();

        //$(".modules:eq("+(initCounter-1)+") .collapse").text("-");
        //$(".modules:eq("+(initCounter-1)+") .sections").show();

        $("#prev_btn").click(function () {
            myNavigator.gotoPrev();
        });

        $("#nxt_btn").click(function () {
            myNavigator.gotoNext();
        });

        $("#menu_btn").click(function () {
            thisRoot.setMap();
            $("#nxt_btn").unbind("click");
            $("#prev_btn").unbind("click");
        });

    };

    this.setMap = function ()
    {
        thisRoot.myLMSDataHandler.initialSetDataLMS();

        //Get the JSON from LMS and edit the pageStatus Array
        //var mapSring = "";
        var mapPageCounter = [];
        var mapTotalPageCounter = [];

        var moduleCounter = 0;

        for (i = 0; i < myModules.length; i++) {
            var myModule = myModules.at(i);
            var mySections = myModule.get("sections");
            var moduleName = myModule.get("name");
            var counter = 0;
            mapTotalPageCounter[i] = 0;
            for (j = 0; j < mySections.length; j++) {
                var mySection = mySections.at(j);
                var myPageIdArray = mySection.get("pageIdArray");
                var myPageStatusArray = mySection.get("pageStatusArray");
                mapTotalPageCounter[i] = mapTotalPageCounter[i] + myPageIdArray.length;
                for (k = 0; k < myPageIdArray.length; k++) {
                    var index = pageIdArrayLMS.indexOf(myPageIdArray[k]);
                    if (index != -1) {
                        myPageStatusArray[k] = pageStatusArrayLMS[index];
                        if (myPageStatusArray[k] == 1) {
                            mapPageCounter[i] = ++counter;
                        }
                    }
                }
                mySection.set("pageStatusArray", myPageStatusArray);
            }
        }
        var lastIndex = -1;
        $(".module").each(function (index) {
            if (mapPageCounter[index] == mapTotalPageCounter[index]) {
                $(this).addClass("mapCompleted");
                $(this).prop("src","img/menu/menu_topic_"+(index+1)+"_v.png");
                lastIndex = index;
                moduleCounter++;
            }
            else if (mapPageCounter[index] > 0) {
                $(this).addClass("mapInProgress");
                $(this).prop("src","img/menu/menu_topic_"+(index+1)+"_n.png");
            }
            else {
                $(this).addClass("mapIncomplete");
                $(this).prop("src","img/menu/menu_topic_"+(index+1)+"_d.png");
            }
        });
        $(".module" + (lastIndex + 2)).removeClass("mapIncomplete").addClass("mapInProgress");
        $(".module" + (lastIndex + 2)).prop("src","img/menu/menu_topic_"+(lastIndex + 2)+"_n.png");
        /*  added for selected menu descripction*/
        //if(!($(".modulesLeft").hasClass("modulesLeftContent"+(lastIndex+2))))
        /*if(moduleCounter == myModules.length){			
         $(".modulesLeft").addClass("modulesLeftContent"+moduleCounter);
         }else{
         $(".modulesLeft").addClass("modulesLeftContent"+(lastIndex+2));
         }
         */
        /*console.log("pageIdArrayLMS "+pageIdArrayLMS);
         console.log("pageStatusArrayLMS "+pageStatusArrayLMS);*/

        thisRoot.myLMSDataHandler.setDataLMS(pageIdArrayLMS, pageStatusArrayLMS);
        thisRoot.myAudioController.clearClick();
        $(".mainBoard").hide();
        $(".mindMap").show();
        $(".menuText1").focus();
    };

}
