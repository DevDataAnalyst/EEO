var PageView = Backbone.View.extend ({
	el: $(".pageContent"),
	template: _.template($('#page_template').html()),
	render:function() {	
		this.$el.html("");
		var moduleCollection = this.collection;
		var moduleCounter = this.countModule.get("moduleCounter");
		var sectionCounter = this.countModule.get("sectionCounter");
		var pageCounter = this.countModule.get("pageCounter");
			
		var moduleModel = this.collection.at(moduleCounter-1);
		var sections = moduleModel.get("sections");
		var section = sections.at(sectionCounter-1);
		
		currentPage = pageCounter;
		
		var pageContentArray = section.get("pageContentArray");
		if(pageContentArray.length>9){
			pageContentArrayResult = pageContentArray.length;
		}else{
			pageContentArrayResult = "0"+pageContentArray.length;
		}
		if(pageCounter>9){
			$("#nav_txt").html(pageCounter+"/"+pageContentArrayResult);
		}else{
			$("#nav_txt").html("0"+pageCounter+"/"+pageContentArrayResult);
		}
		
		/* if(moduleCounter == 1 && pageCounter == 1 ) {
			myNavigator.activateNext();
			myNavigator.deactivatePrev();			
		}
		else if (moduleCounter == moduleCollection.length && pageCounter == pageContentArray.length) {
			myNavigator.activatePrev();
			myNavigator.deactivateNext();	
		}
		else {
			myNavigator.activateNext();
			myNavigator.activatePrev();	
		} */
		
		if (moduleCounter == moduleCollection.length && pageCounter == pageContentArray.length) {
			myNavigator.activatePrev();
			//myNavigator.deactivateNext();	
		}
		else {
			myNavigator.activateNext();
			myNavigator.activatePrev();	
		}
		
		var moduleText = moduleModel.get("name");
		
		var pageNameArray = section.get("pageNameArray");
		var pageIdArray = section.get("pageIdArray");
		var pageStatusArray = section.get("pageStatusArray");	
		var pageContentArray = section.get("pageContentArray");	
		
		///// audio ////
		this.audioController.clearClick();
		this.audioController.init(pageIdArray[pageCounter-1]);		
		///// audio ////
                $(".pdf a").hide();
                var mCounter = Number(moduleCounter);
                $(".pdf"+mCounter).show();
                
		$(".pageName").html(pageNameArray[pageCounter-1]);                
                $(".pageHeaderName").html(moduleText);
		var root = this;
		currentPageStatus = pageStatusArray[pageCounter-1];
		$.ajax({
			url : pageContentArray[pageCounter-1],
			dataType : "html",
			async : false,
			success : function(data){
				root.$el.html(data);
				var x = myElementDatas.where({pageId : pageIdArray[pageCounter-1]});
				var eleIdArray = [];
				if(x.length > 0 ){
					var pageContentData = x[0];
					eleIdArray = pageContentData.get("eleIdArray");
					var eleDataArray = pageContentData.get("eleDataArray");
					for(i=0; i<eleDataArray.length; i++){
						$("#"+eleIdArray[i]).html(eleDataArray[i]);
					}
				}
						
				$(".pageLoader").hide();
				$(".pageContent").show();
			}
		});
		/*
		if(pageStatusArray[pageCounter-1] == 0) {		
			pageStatusArray[pageCounter-1] = 1;
		}
		section.set("pageStatusArray",pageStatusArray);
		var pageIndex = pageIdArrayLMS.indexOf(pageIdArray[pageCounter-1]);		
		pageStatusArrayLMS[pageIndex] = 1;		
		myLMSDataHandler.setDataLMS(pageIdArrayLMS,pageStatusArrayLMS);	*/	
		
		return this;
	},
	
	setPageStatus: function() {
		var moduleCollection = this.collection;
		var moduleCounter = this.countModule.get("moduleCounter");
		var sectionCounter = this.countModule.get("sectionCounter");
		var pageCounter = this.countModule.get("pageCounter");
		currentPageCounterLMS = moduleCounter+","+sectionCounter+","+pageCounter;
		var moduleModel = this.collection.at(moduleCounter-1);
		var sections = moduleModel.get("sections");
		var section = sections.at(sectionCounter-1);
		var pageStatusArray = section.get("pageStatusArray");	
		var pageIdArray = section.get("pageIdArray");
		if(pageStatusArray[pageCounter-1] == 0) {		
			pageStatusArray[pageCounter-1] = 1;
		}
		section.set("pageStatusArray",pageStatusArray);
		var pageIndex = pageIdArrayLMS.indexOf(pageIdArray[pageCounter-1]);		
		pageStatusArrayLMS[pageIndex] = 1;		
		myControl.myLMSDataHandler.setLMSData();
		return this;
	},
	
	initialize: function() {
		this.countModel;
		this.audioController;
	}
})