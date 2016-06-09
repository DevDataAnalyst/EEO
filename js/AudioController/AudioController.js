/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function AudioController(_audioEl, _mp3Src, _oggSrc, _speakerBtnEl, _controlEl, _controlAT, _atHolder)
{
    var audioEl = _audioEl;
    var speakerBtnEl = _speakerBtnEl;
    var controlEl = _controlEl;
    var xmlData;
    var pageID;
    var pathArray;
    var oggPathArray;
    var audioATArray;
    var mp3Src = _mp3Src;
    var oggSrc = _oggSrc;
    var isMicOn = true;
    var controlState;
    var audioEnded;
    var controlAT = _controlAT;
    var atHolder = _atHolder;
    var isAT = false;

    this.setXmlData = function (data)
    {
        xmlData = data;
        //alert("xmlData:::"+xmlData);
    };
    this.init = function (_pageID)
    {
        // variable refresh ///

        controlState = "play";
        //audioEnded = _audioEnded;
        $(_atHolder).hide();
        pageID = _pageID;
        pathArray = new Array();
        oggPathArray = new Array();
        //alert(pageID);
        var audioTag;
        $(xmlData).find("audio").each(function () {
            if ($(this).attr("id") == pageID) {
                audioTag = $(this);
            }
        });
        //filter("#"+pageID);
        $(audioTag).find("mp4").each(function () {
            $(this).find("src").each(function () {
                pathArray.push($(this).text());
                //alert($(this).text());
            });

        });
        //alert(pathArray);
        $(audioTag).find("ogg").each(function () {
            $(this).find("src").each(function () {
                oggPathArray.push($(this).text());
            });

        });
        //$(speakerBtnEl).removeClass();
        $(controlEl).removeClass();

        if (pathArray.length > 0)
        {
            //setAudio(0);

            //$(speakerBtnEl).addClass("mic_btn_on");
            //$(controlEl).addClass("pause");
        }
        else
        {
            //alert("No audio in the page.");
            audioEl.pause();
            $(speakerBtnEl).addClass("mic_disabled");
            $(speakerBtnEl).prop("src", "img/common/audio_on_d.jpg"); ///// EEO
            $(speakerBtnEl).removeClass("mic_btn_on");
            $(controlEl).addClass("pause_disabled");
            $(controlEl).prop("src", "img/common/pause_d.jpg"); ///// EEO
            $(speakerBtnEl).unbind("click");
            $(controlEl).unbind("click");
            audioEl.removeEventListener("ended", function () {

            });
        }

        audioATArray = new Array();
        var AT_Tag;
        $(xmlData).find("page_AT").each(function () {
            if ($(this).attr("id") == pageID) {
                AT_Tag = $(this);
            }
        });
        //filter("#"+pageID);
        $(AT_Tag).find("text").each(function () {
            audioATArray.push($(this).text());
        });

        $(controlAT).removeClass();


        if (audioATArray.length > 0)
        {
            $(controlAT).addClass("at_btn");
        }
        else
        {
            //alert("No audio in the page.");
            $(controlAT).addClass("at_btn_disabled");
            $(controlAT).unbind("click");

        }
    };
    this.playAudioAt = function (_index, _audioEnded)
    {
        audioEnded = _audioEnded;
        //$(speakerBtnEl).removeClass();
        $(controlEl).removeClass();
        //$(speakerBtnEl).addClass("mic_btn_on");
        $(controlEl).addClass("pause");
        $(controlEl).prop("src", "img/common/pause_n.jpg"); ///// EEO
        setAudio(_index);
    };
    
    this.setAudioAt = function (_index, _audioEnded)
    {
        audioEnded = _audioEnded;
        //$(speakerBtnEl).removeClass();
        $(controlEl).removeClass();
        //$(speakerBtnEl).addClass("mic_btn_on");
        $(controlEl).addClass("play").removeClass("pause");
        $(controlEl).prop("src", "img/common/play_n.jpg"); ///// EEO
        newSetAudio(_index);
    };
    
    this.pauseAudio = function ()
    {

        if (controlState == "play")
        {
            $(controlEl).removeClass();
            controlState = "pause";
            $(controlEl).addClass("play");
            $(controlEl).prop("src", "img/common/play_n.jpg"); ///// EEO
            audioEl.pause();

        }

    };
    this.replayAudioAt = function (_index)
    {
        setAudio(_index);
    };
    this.setAudioTranscriptAt = function (_index)
    {
        $(controlAT).unbind("click");

        if (typeof audioATArray[_index] === 'undefined')
        {
            alert("No such audio transcript.");
        }
        else
        {
            $("#at_holder").html(audioATArray[_index]);
            $(controlAT).bind("click", function () {
                $(_atHolder).show();
                if(isAT === true)
                 {
                 $(_atHolder).hide();
                 isAT = false;
                 }
                 else
                 {
                 $(_atHolder).show();
                 isAT = true;
                 }
            });
            $(".closeAt").click(function () {
                $(_atHolder).hide();
            });
        }
    };
    this.clearClick = function ()
    {
        $(controlEl).unbind("click");
        $(speakerBtnEl).unbind("click");
        $(controlAT).unbind("click");
        audioEl.pause();
    }
    function setAudio(_index)
    {
        //alert("pathArray[_index]:::"+pathArray[_index]);
        if (typeof pathArray[_index] === 'undefined')
        {
            alert("No such audio found.");
        }
        else
        {
            mp3Src.src = pathArray[_index];
            //alert(pathArray[_index]);
            oggSrc.src = oggPathArray[_index];
            audioEl.load();
            audioEl.play();
            //isMicOn = true;
            //audioEl.muted = false;
            controlState = "play";
            audioEl.addEventListener("ended", function () {
                audioEnded();
                controlState = "pause";
                //audioEl.load();
                $(controlEl).removeClass();
                $(controlEl).addClass("play");
                $(controlEl).prop("src", "img/common/play_n.jpg"); ///// EEO
            });
            if (isMicOn) {
                $(speakerBtnEl).removeClass("mic_disabled").addClass("mic_btn_on").removeClass("mic_btn_off");
                $(speakerBtnEl).prop("src", "img/common/audio_on_n.jpg"); ///// EEO
            } else {
                $(speakerBtnEl).removeClass("mic_disabled").addClass("mic_btn_off").removeClass("mic_btn_on");
                $(speakerBtnEl).prop("src", "img/common/audio_off_n.jpg"); ///// EEO
            }
        }
        $(speakerBtnEl).unbind("click");
        $(speakerBtnEl).bind("click", function () {
            //$(speakerBtnEl).removeClass();      
            if (isMicOn)
            {
                isMicOn = false;
                $(speakerBtnEl).addClass("mic_btn_off").removeClass("mic_btn_on");
                $(speakerBtnEl).prop("src", "img/common/audio_off_n.jpg"); ///// EEO
                audioEl.muted = true;
            }
            else
            {
                isMicOn = true;
                $(speakerBtnEl).addClass("mic_btn_on").removeClass("mic_btn_off");
                $(speakerBtnEl).prop("src", "img/common/audio_on_n.jpg"); ///// EEO
                audioEl.muted = false;
            }
        });
        $(controlEl).unbind("click");
        $(controlEl).bind("click", function () {
            $(controlEl).removeClass();
            //alert("controlState:::"+controlState);
            if (controlState === "play")
            {
                controlState = "pause";
                $(controlEl).addClass("play");
                $(controlEl).prop("src", "img/common/play_n.jpg"); ///// EEO
                audioEl.pause();
            }
            else if (controlState === "pause")
            {
                controlState = "play";
                $(controlEl).addClass("pause");
                $(controlEl).prop("src", "img/common/pause_n.jpg"); ///// EEO
                audioEl.play();

            }

        });
    }
    
    function newSetAudio(_index)
    {
        //alert("pathArray[_index]:::"+pathArray[_index]);
        if (typeof pathArray[_index] === 'undefined')
        {
            alert("No such audio found.");
        }
        else
        {
            mp3Src.src = pathArray[_index];
            //alert(pathArray[_index]);
            oggSrc.src = oggPathArray[_index];
            audioEl.load();
            //audioEl.play();
            //isMicOn = true;
            //audioEl.muted = false;
            //controlState = "play";
            audioEl.addEventListener("ended", function () {
                audioEnded();
                controlState = "pause";
                //audioEl.load();
                $(controlEl).removeClass();
                $(controlEl).addClass("play");
                $(controlEl).prop("src", "img/common/play_n.jpg"); ///// EEO
            });
            if (isMicOn) {
                $(speakerBtnEl).removeClass("mic_disabled").addClass("mic_btn_on").removeClass("mic_btn_off");
                $(speakerBtnEl).prop("src", "img/common/audio_on_n.jpg"); ///// EEO
            } else {
                $(speakerBtnEl).removeClass("mic_disabled").addClass("mic_btn_off").removeClass("mic_btn_on");
                $(speakerBtnEl).prop("src", "img/common/audio_off_n.jpg"); ///// EEO
            }
        }
        $(speakerBtnEl).unbind("click");
        $(speakerBtnEl).bind("click", function () {
            //$(speakerBtnEl).removeClass();      
            if (isMicOn)
            {
                isMicOn = false;
                $(speakerBtnEl).addClass("mic_btn_off").removeClass("mic_btn_on");
                audioEl.muted = true;
            }
            else
            {
                isMicOn = true;
                $(speakerBtnEl).addClass("mic_btn_on").removeClass("mic_btn_off");
                audioEl.muted = false;
            }
        });
        controlState = "pause";
        $(controlEl).unbind("click");
        $(controlEl).bind("click", function () {
            $(controlEl).removeClass();
            //alert("controlState:::"+controlState);
            if (controlState === "play")
            {
                controlState = "pause";
                $(controlEl).addClass("play");
                $(controlEl).prop("src", "img/common/play_n.jpg"); ///// EEO
                audioEl.pause();
            }
            else if (controlState === "pause")
            {
                controlState = "play";
                $(controlEl).addClass("pause");
                $(controlEl).prop("src", "img/common/pause_n.jpg"); ///// EEO
                audioEl.play();

            }

        });
    }

};



