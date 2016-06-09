function MyLMSDataHandler()
{
	var thisRoot = this;
    var x;
	var LMSString = "";
	
	this.getLMSData = function() {
		var LMSStringArray = [];
		LMSString = localStorage.LMSString;
		if(LMSString != null){
			/*LMSStringArray = LMSString.split(":");
			pageIdArrayLMS = LMSStringArray[0].split(",");
			pageStatusArrayLMS = LMSStringArray[1].split(",");*/
			LMSStringArray = LMSString.split(":");
			currentPageCounterLMS = LMSStringArray[0];
			pageStatusArrayLMS = LMSStringArray[1].split(",");
			//console.log("1:  "+pageStatusArrayLMS);
		}
	}
	
	this.setLMSData = function() {
		if (typeof(Storage) != "undefined") {
			//LMSString = pageIdArrayLMS+":"+pageStatusArrayLMS;
			LMSString = currentPageCounterLMS+":"+pageStatusArrayLMS;			
			localStorage.setItem("LMSString", LMSString);		
			//console.log("2: "+LMSString);
		} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
	}
	
	this.initialGetDataLMS = function()
	{
		if (typeof (Storage) != "undefined") {
		localStorage.removeItem("LMSString");
		thisRoot.getLMSData();
		} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
	}
	
	this.initialSetDataLMS = function()
	{            
		if(pageStatusArrayLMS.length == 0) {
			//pageIdArrayLMS = dummyPageIdArray;
			pageStatusArrayLMS = dummyPageStatusArray;
		}
		pageIdArrayLMS = dummyPageIdArray;		
		for(i=0; i<dummyPageIdArray.length; i++) {
			if(pageIdArrayLMS.indexOf(dummyPageIdArray[i]) == -1){
				pageIdArrayLMS.push(dummyPageIdArray[i]);
				pageStatusArrayLMS.push(dummyPageStatusArray[i]);
			}
		}
	}
	
	this.setDataLMS = function(pageIdArrayLMS,pageStatusArrayLMS)
	{
		if (typeof(Storage) != "undefined") {
			thisRoot.setLMSData();
			//console.log(pageIdArrayLMS+"   "+pageStatusArrayLMS);
		} else {
			document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
		}
	}	
	
}
