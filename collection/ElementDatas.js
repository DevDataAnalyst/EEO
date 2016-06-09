var ElementDatas = Backbone.Collection.extend({
	model: ElementData,
	url: "xml/data.xml",
	fetch: function(options) {

        options || (options = {});
		
        options.dataType = 'xml'; // We're expecting XML from the server.
		
        Backbone.Collection.prototype.fetch.call(this, options);

    },
	parse: function(data) {
	
		var thisCollection = this;
		$(data).find('page').each(function (index) {
			var myElement = new ElementData();
            var page = $(this);
			var pageId = page.attr("id");
			var eleIdArray = [];
			var eleDataArray = [];
			var counter = 0;
			page.find("ele").each(function (index) {
			//alert($(this).text());
				var ele = $(this);
				eleIdArray[index] = ele.attr("id");
				eleDataArray[index] = ele.text();
			});
			myElement.set("pageId",pageId);
			myElement.set("eleIdArray",eleIdArray);
			myElement.set("eleDataArray",eleDataArray);
			thisCollection.push(myElement);
        });
		return this.models;
    }
});