
$(document).ready(function(){
	$("#answer1").hide();
	$("#answertitle1").hide();
	$("#answer2").hide();
	$("#answertitle2").hide();
	$("#answer3").hide();
	$("#answertitle3").hide();
	$("#answer4").hide();
	$("#answertitle4").hide();
	
	$("#rule1").click(function(){
		$("#answer1").slideToggle("slow");
		$("#answertitle1").slideToggle("slow");
		var myAudio=document.getElementById("audio1");
		/*myAudio.play();*/
		if (myAudio.paused){
			myAudio.play();
			}
			else {
				myAudio.pause(); 
				}
	})
	
	$("#rule2").click(function(){
		$("#answer2").slideToggle("slow");
		$("#answertitle2").slideToggle("slow");
	})
	
	$("#rule3").click(function(){
		$("#answer3").slideToggle("slow");
		$("#answertitle3").slideToggle("slow");
	})
	
	$("#rule4").click(function(){
		$("#answer4").slideToggle("slow");
		$("#answertitle4").slideToggle("slow");
	})
});

$(document).ready(function(){
		$("#about").hide();
  		document.getElementById("aboutlink").onclick = function(){
    		$("#about").toggle(1000);
    		$("#aboutbook").hide();
		return false;
		};    		

		$("#aboutbook").hide();
  		document.getElementById("aboutbooklink").onclick = function(){
    		$("#aboutbook").toggle(1000);
    		$("#about").hide();
		return false;
		}; 
		
});
