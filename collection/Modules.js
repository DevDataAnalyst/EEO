var Modules = Backbone.Collection.extend({
    model: Module,
    url: "xml/content.xml",
    fetch: function (options) {

        options || (options = {});

        options.dataType = 'xml'; // We're expecting XML from the server.

        Backbone.Collection.prototype.fetch.call(this, options);

    },
    parse: function (data) {
        var thisCollection = this;
        var module;

        $(data).find('module').each(function (index) {
            module = $(this);
            myModule = new Module();
            myModule.set("xmlData", data);
            mySections = new Sections();
            module.find("text").each(function () {
                myModule.set("name", $(this).text());
            });
            module.find("section").each(function () {
                section = $(this);
                mySection = new Section();
                mySection.set("name", section.attr("name"));
                var counter = 0;
                var pageContentArray = [];
                var pageNameArray = [];
                var pageIdArray = [];
                var pageStatusArray = [];
                //totalPages = totalPages + section.find("page").length;
                section.find("page").each(function () {
                    var page = $(this);
                    pageContentArray[counter] = page.text();
                    pageIdArray[counter] = page.attr("id");
                    dummyPageIdArray[pageCounter] = page.attr("id");
                    pageStatusArray[counter] = 0;
                    dummyPageStatusArray[pageCounter++] = 0;

                    /*pageStatusArray[counter] = 1;
                    dummyPageStatusArray[pageCounter++] = 1;*/

                    pageNameArray[counter++] = page.attr("name");
                });
                mySection.set("pageContentArray", pageContentArray);
                mySection.set("pageNameArray", pageNameArray);
                mySection.set("pageIdArray", pageIdArray);
                mySection.set("pageStatusArray", pageStatusArray);
                mySections.push(mySection);
            });
            myModule.set("sections", mySections);
            thisCollection.push(myModule);
        });
        return this.models;
    }
});