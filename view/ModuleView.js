var ModuleView = Backbone.View.extend ({
	el: $(".modulesTag"),
	template: _.template($('#module_template').html()),
	render:function() {
		this.$el.html("");
		var moduleCollection = this.collection;
		
		var moduleCounter = this.countModule.get("moduleCounter");
		var sectionName = this.countModule.get("sectionName");
		var sectionCounter = this.countModule.get("sectionCounter");
		
		for(i=0; i<moduleCollection.length; i++) {
			var module = moduleCollection.at(i);
			var moduleText = module.get("name");
			var str = '{"moduleName":"'+moduleText+'"}';
			var obj = jQuery.parseJSON(str);
			this.$el.append(this.template(obj));
			var sections = module.get("sections");
			var x = sections.where({name : "LEARN"});
			var section = x[0];
			
			if(moduleText == "Post Assessment") {
                x = sections.where({name : "OVERVIEW"});
                section = x[0];				
			}

			var pageContentArray = section.get("pageContentArray");
		
			var pageNameArray = section.get("pageNameArray");
			
			var pageStatusArray = section.get("pageStatusArray");
			
			var sectionTag = this.$el.find(".sections:eq("+i+")");
		
			var sectionEle = "";
			for(j=0; j<pageNameArray.length; j++){
				
				if(pageStatusArray[j] == 1) {
					sectionEle = sectionEle + "<div class='sectionName visitedSection'>"+pageNameArray[j]+"</div>";
				} 
				else {
					sectionEle = sectionEle + "<div class='sectionName'>"+pageNameArray[j]+"</div>";
				}
			}
			$(sectionTag).append(sectionEle);			
		}
		return this;
	},
	initialize: function() {
		this.countModule;
	},
	events: {
		'click .moduleName' : 'showPageContent',
		'click .sectionName ' : 'showSectionContent'
    },
	showPageContent: function(e){
		$(".pageLoader").show();
		$(".pageContent").hide();
		var index = $(e.currentTarget).parent().parent().index();
		this.countModule.set("moduleCounter",(index+1));
		this.countModule.set("sectionName","OVERVIEW");
		this.countModule.set("sectionCounter",1);
		myModuleView.render();
		myTabView.render();
		myPageView.render();
	},
	showSectionContent : function(e) {
		$(".pageLoader").show();
		$(".pageContent").hide();
		var moduleIndex = $(e.currentTarget).parent().parent().index();
		var moduleModel = this.collection.at(moduleIndex);
		var moduleText = moduleModel.get("name");
		var sectionIndex = $(e.currentTarget).index();                   
		this.countModule.set("moduleCounter",(moduleIndex+1));
		this.countModule.set("sectionName","LEARN");
		this.countModule.set("sectionCounter",(sectionIndex+1));
		if(moduleText == "Post Assessment") {
			this.countModule.set("sectionName","OVERVIEW");
		}  
		 	
		myModuleView.render();
		myTabView.render();
		myPageView.render();
	}

})