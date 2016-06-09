function MyNavigator()
{
	var thisRoot = this;
	this.activateNext = function()
	{
		$("#nxt_btn").addClass("active").removeClass("inactive");
                $("#nxt_btn").prop("src","img/common/next_n.jpg"); ///// EEO
	}
	
	this.activatePrev = function()
	{
		$("#prev_btn").addClass("active").removeClass("inactive");
                $("#prev_btn").prop("src","img/common/back_n.jpg"); ///// EEO
	}
	
	this.deactivateNext = function()
	{
		$("#nxt_btn").addClass("inactive").removeClass("active");
                $("#nxt_btn").prop("src","img/common/next_d.jpg"); ///// EEO
	}
	
	this.deactivatePrev = function()
	{
		$("#prev_btn").addClass("inactive").removeClass("active");
                $("#prev_btn").prop("src","img/common/back_d.jpg"); ///// EEO
	}
	
	this.gotoPrev = function()
	{	
		$("#prv_btn").removeClass("hover");
		if(!($("#prev_btn").hasClass("inactive"))){
			$('.pageNameHolder').show();// added for CCLN
			$(".pageLoader").show();
			$(".pageContent").hide();
			$("#pageHeaderName").html("");
			var moduleCounter = myCounter.get("moduleCounter");
			var sectionCounter = myCounter.get("sectionCounter");
			var pageCounter = myCounter.get("pageCounter");
			var moduleModel = myModules.at(moduleCounter-1);
			var sections = moduleModel.get("sections");
			var section = sections.at(sectionCounter-1);
			$("#audio_btn_tab").hide();
			$("#audio_btn").show();
			$("#mic_btn_tab").hide();
			$("#mic_btn").show();
			if(pageCounter == 1){
/* 				moduleCounter--;
				myCounter.set('moduleCounter',moduleCounter);
				moduleModel = myModules.at(moduleCounter-1);
				sections = moduleModel.get("sections");
				var section = sections.at((sections.length)-1);
				sectionCounter = sections.length;
				var pageContentArray = section.get("pageContentArray");
				pageCounter = pageContentArray.length;
				myCounter.set('sectionCounter',sectionCounter);
				myCounter.set('pageCounter',pageCounter);				 */
				myControl.setMap();
				$("#nxt_btn").unbind("click");
				$("#prev_btn").unbind("click");
			}
			else {
				var pageCounter = myCounter.get('pageCounter');
				pageCounter--;
				myCounter.set('pageCounter',pageCounter);
				myPageView.render();
				
			}
			
		}
	}
	
	this.gotoNext = function()
	{
		$("#nxt_btn").removeClass("hover");
		if(!($("#nxt_btn").hasClass("inactive"))) {
			$('.pageNameHolder').show();// added for CCLN
			myPageView.setPageStatus();
			$(".pageLoader").show();
			$(".pageContent").hide();
			$("#pageHeaderName").html("");
			var moduleCounter = myCounter.get("moduleCounter");
			var sectionCounter = myCounter.get("sectionCounter");
			var pageCounter = myCounter.get("pageCounter");
			var moduleModel = myModules.at(moduleCounter-1);
			var sections = moduleModel.get("sections");
			var section = sections.at(sectionCounter-1);
			pageContentArray = section.get("pageContentArray");
			$("#audio_btn_tab").hide();
			$("#audio_btn").show();
			$("#mic_btn_tab").hide();
			$("#mic_btn").show();
			if(pageCounter == pageContentArray.length){
				/* moduleCounter++;
				myCounter.set('moduleCounter',moduleCounter);
				moduleModel = myModules.at(moduleCounter-1);
				myCounter.set('sectionCounter',"1");
				myCounter.set('pageCounter',"1"); */
				myControl.setMap();
				$("#nxt_btn").unbind("click");
				$("#prev_btn").unbind("click");
				if(moduleCounter == myModules.length){
					//alert("kk");
					// modified for switch wbt1
					$(".modulesLeft").addClass("modulesLeftContent"+moduleCounter);
					$(".mindMap").hide();
					$( ".refPage" ).show();					
					//$("#menu_btn").click();					
				}
			}
			else {				
				var pageCounter = myCounter.get('pageCounter');
				pageCounter++;
				myCounter.set('pageCounter',pageCounter);
				myPageView.render();
			}
			
		}
	}
	this.tryAgainLastModule = function()
	{
		$('.pageNameHolder').show();// added for CCLN
		$(".pageLoader").show();
		$(".pageContent").hide();
		$("#pageHeaderName").html("");
		
		$("#audio_btn_tab").hide();
		$("#audio_btn").show();
		$("#mic_btn_tab").hide();
		$("#mic_btn").show();
		
		myCounter.set('moduleCounter','6');
		myCounter.set('sectionCounter',"1");
		myCounter.set('pageCounter',"1"); 
		myPageView.render();		
	}
        this.revisitCourse = function()
	{
		$('.pageNameHolder').show();// added for EEO
		$(".pageLoader").show();
		$(".pageContent").hide();
		$("#pageHeaderName").html("");
		
		$("#audio_btn_tab").hide();
		$("#audio_btn").show();
		$("#mic_btn_tab").hide();
		$("#mic_btn").show();
		
		myCounter.set('moduleCounter','1');
		myCounter.set('sectionCounter',"1");
		myCounter.set('pageCounter',"1"); 
		myPageView.render();		
	}
}
