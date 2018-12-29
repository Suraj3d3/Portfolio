

var msg = document.getElementById('msg');
var username = document.getElementById('username');
var email = document.getElementById('email');
var nextBtn = document.getElementById('nextBtn');
email.style.display="none";
msg.style.display="none";
var counter = 0;


nextBtn.addEventListener("click",function(){
      
        if(counter===0)
      {
      	if (username.value.length!==0) 
      	{
      		email.style.display="inline-block";
            username.style.display="none";
            counter++;
      	   }
      	   else{
                username.placeholder="You forgot me 😢";
      	   }
      	   
      }
      else
      if(counter===1) 
      {

         if (email.value.length!==0) 
         {
            email.style.display="none";
            msg.style.display="inline-block";
            this.value="Submit";
            counter++;
         }
     
      else
      {
      	email.placeholder="You forgot me 😢";
      }
  }
     
});




