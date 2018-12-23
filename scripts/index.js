

	document.getElementById("mainNav").style.display="none";
    window.onload=function(){
    	$("#loadTransparent").css("display","none");
    	$("#loading").hide();
    }
    	
   


$(document).ready(function(){

	$("#menuIcon").click(function(){
		$("#mainNav").toggle(800);
	});

  $("#myWorksPage").hide();
});

$(document).ready(function(){  

       	       $('.mainName').slideUp(2000);
       	        $('.mainName').slideDown(2000);
                $('#introPara').hide();
       	   
       	   setTimeout(function(){
       	   	    $('#introPara').show();
       	   },2000);
});



