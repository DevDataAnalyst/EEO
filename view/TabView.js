var TabView = Backbone.View.extend ({
	el: $(".tabs"),
	template: _.template($('#tab_template').html()),
	render:function() {
		this.$el.html("");
		var moduleCollection = this.collection;
		
		var moduleCounter = this.countModule.get("moduleCounter");
		var sectionName = this.countModule.get("sectionName");
		var sectionCounter = this.countModule.get("sectionCounter");
		
		var moduleModel = this.collection.at(moduleCounter-1);
		var sections = moduleModel.get("sections");
		
		for(i=0; i<sections.length; i++){
			var section = sections.at(i);
			var tabText = section.get("name");
			var str = '{"tab":"'+tabText+'"}';
			var obj = jQuery.parseJSON(str);
			this.$el.append(this.template(obj));
		}
		
		$(".tab").removeClass("selected");
		$(".tab").each(function(index){
			if($.trim($(this).text()) == sectionName) {
				$(this).addClass("selected");
			}
			$(this).addClass("tab"+(index+1));
		});
		var moduleText = moduleModel.get("name");			
		/*if(moduleText == "Chapter Title") {
			$(".tab.tab3").addClass("disabledTab");			
		}*/

		return this;
	},
	initialize: function() {
		this.countModule;
	},
	events: {
		'click .tab' : 'showTabContent'
    },
	showTabContent: function(e){		
		if(!($(e.currentTarget).hasClass("disabledTab"))) {
			$(".pageLoader").show();
			$(".pageContent").hide();
			var index = $(e.currentTarget).index();
			var sectionName = $.trim($(e.currentTarget).text());
			this.countModule.set("sectionName",sectionName);
			this.countModule.set("sectionCounter",1);
			this.countModule.set("moduleCounter",this.countModule.get("moduleCounter"));
			myModuleView.render();
			myTabView.render();
			myPageView.render();
		}
	}

})