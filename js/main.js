
//Gather data from the clock and create timer

  var gotSecs = setInterval( function() {
     var seconds = new Date().getSeconds();
     $("#seconds").html(( seconds < 10 ? "0" : "" ) + seconds);
     },1000);
 


  var gotMins = setInterval( function() {
     var minutes = new Date().getMinutes();
     $("#minutes").html(( minutes < 10 ? "0" : "" ) + minutes);
     },1000);
  
  
  
  var gotHours = setInterval( function() {
     var hours = new Date().getHours();
     $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
     }, 1000);
  




