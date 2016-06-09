$(document).ready(function(){
answer = true;
count = 0;

alreadyPlacedId = "";
parentOfAlreadyPlaced = "";
parentOfAlreadyPlaced2 = "";
parentArray=[];
flag=true;
checkArray=[];
myNavigator.deactivatePrev();
myNavigator.deactivateNext();
	initializeArray();
	dragndrop();
	
	 /*$(".popUpClose").click(function(){	
		$(".popUp1").hide();
		$(".popUp2").hide();
		$(".submit").removeClass("active").addClass("inactive");
		myNavigator.activateNext();
		$(".baseHolder").droppable({disabled:true});
		$(".baseHolder").addClass("disableCursor");
		$(".dragObject").draggable({disabled:true});
		$(".dragObject").addClass("disableCursor");
		$("#nxt_btn").click();
	
	});*/
});	
	
	$(".submit").click(function(){
            if($(this).hasClass("active")){
                if($(".drop1").children().hasClass("drag2") && $(".drop2").children().hasClass("drag1") && $(".drop3").children().hasClass("drag4") && $(".drop4").children().hasClass("drag3")){
                    //alert('right');
                    score++;
                    myNavigator.activateNext();
                    $("#nxt_btn").click();
                }
                else {
                    //alert('wrong');
                    myNavigator.activateNext();
                    $("#nxt_btn").click();
                }
            }
	});


function dragndrop(){
	$(".dragObject").draggable({ 
		helper: "clone",
		scope: "ccln",
		revert: "invalid",
		containment : ".lowerLayoutContainer",
		start: function(){	
		},
		drag: function( event, ui ) {
			dragEle = $(this);
			
                        
		},
                stop: function( event, ui ) {
                   
                }
	});
	
	$(".baseHolder").droppable({
		scope: "ccln",
		disabled : false,
		over: function( event, ui) {
			
                        
		},
		
		drop: function( event, ui) {
			
			var dragId = $(dragEle).attr("id");
			var alreadyPlacedId = $(this).find(".dragObject").attr("id");
			if(typeof(alreadyPlacedId) != "undefined")
			{
				if(dragId != alreadyPlacedId)
				{
                                    if(flag == false){
					var swapParent=$(dragEle).parent().attr("id");
                                        console.log("swapParent:::"+swapParent);
					var existingId = $(this).find(".dragObject").attr("id").slice(4);
                                        console.log("parentArray before swap:::"+parentArray);
                                        parentArray[parseInt(existingId)]=swapParent;
                                        console.log("parentArray after swap:::"+parentArray);
					var originalParent = parentArray[parseInt(existingId)];
					$("#"+originalParent).html($(this).find(".dragObject"));
					$(this).html($(dragEle));
                                        dragndrop();
                                    }
                                    else{
                                        
					var existingId = $(this).find(".dragObject").attr("id").slice(4);
					var originalParent = parentArray[parseInt(existingId)];
					$("#"+originalParent).html($(this).find(".dragObject"));
					$(this).html($(dragEle));
                                    }
				}
			}
			else{
				$(this).html($(dragEle));
			}
                        //updateArray();
                    if(dragId != alreadyPlacedId){
                                setTimeout(function(){
                                        var count = 0;
                                $(".baseHolder").find(".dragObject").each(function(){
                                        count+= 1;
                                });
                                //alert("count:::"+count);
                                if(count == 4)
                                {
                                        $(".submit").addClass("active").removeClass("inactive");
                                        if(flag==true){
        // ***** For swapping Activate updateArray function ***** //                            
                                    //updateArray();
                                }
                                }
                                else{
                                        $(".submit").addClass("inactive").removeClass("active");
                                }
                                },500);
							
                            /*if($(".baseHolder .dragObject").length == 4) {
                                //////////////
                                 alert("length"+$(".baseHolder .dragObject").length);
                                $(".baseHolder .dragObject").each(function(j){
                                    checkArray.push($(this).attr("id"))
                                })
                                    console.log("checkarray"+checkArray);
                                    var sorted_arr = checkArray.sort(); // You can define the comparing function here. 
                                                                // JS by default uses a crappy string compare.
                                    console.log("sorted_arr"+sorted_arr);
                                    var results = 0;
                                    for (var i = 0; i < checkArray.length - 1; i++) {
                                        if (sorted_arr[i + 1] == sorted_arr[i]) {
                                            results=1;
                                        }
                                    }
                                    alert(results); 
                                //////////////
                                
                                
				
			}*/
                    }
		}
	});
}
function updateArray(){
    $(".baseHolder .dragObject").each(function() {
        index2=parseInt($(this).attr("id").slice(4));
        parentOfAlreadyPlaced2 = $(this).parent().attr("id");
        parentArray[index2]=parentOfAlreadyPlaced2;
     flag=false;
    });      
}
function initializeArray(){
    $(".dragcontainer .dragObject").each(function() {
        index2=parseInt($(this).attr("id").slice(4));
        parentOfAlreadyPlaced2 = $(this).parent().attr("id");
        parentArray[index2]=parentOfAlreadyPlaced2;
     
    });      
}


	
