

	document.getElementById("mainNav").style.display="none";
    window.onload=function(){
    	$("#loadTransparent").css("display","none");
    	$("#loading").hide();
    }
    	
   
$("#myWorksPage").hide();
$("#contactMePage").hide();


//toogle menu bar
$(document).ready(function(){

	$("#menuIcon").click(function(){
		$("#mainNav").toggle(800);
	});
   
});

$(document).ready(function(){  

       	       $('.mainName').slideUp(2000);
       	        $('.mainName').slideDown(2000);
                $('#introPara').hide();
       	   
       	   setTimeout(function(){
       	   	    $('#introPara').show();
       	   },2000);
});


function home(){
       $("#mainNav").slideUp(400);
       $("#myWorksPage").hide();
       $("#contactMe").hide();
       $("#indexPage").show();
       $("#headerDiv").css("background-color","transparent");
}

function myWorks(){
       $("#mainNav").slideUp(400);
       $("#indexPage").hide();
       $("#contactMe").hide();
       $("#myWorksPage").show();
       $("#headerDiv").css("background-color","transparent");
}

function contactMe(){
       $("#mainNav").slideUp(400);
       $("#indexPage").hide();
       $("#myWorksPage").hide();
       $("#contactMePage").show();
       $("#headerDiv").css("background-color","rgba(25, 42, 86,1.0)");
}

 