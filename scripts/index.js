

	document.getElementById("mainNav").style.display="none";
    window.onload=function(){
    	$("#loadTransparent").css("display","none");
    	$("#loading").hide();

    }
    	
   


$(document).ready(function(){

	$("#menuIcon").click(function(){
		$("#mainNav").toggle(800);
	});
});

$(document).ready(function(){  

       	       $('h1').slideUp(2000);
       	        $('h1').slideDown(2000);
                $('h2').hide();
       	   
       	   setTimeout(function(){
       	   	    $('h2').show();
       	   },2000);
});


