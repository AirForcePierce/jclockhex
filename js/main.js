
(function () {

  var allhours = new Date().getHours();
  var allmins = new Date().getMinutes();
  var allsecs = new Date().getSeconds();

  // console.log(allhours, allmins, allsecs);


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



  //Creating function to push value of hex to background color in csss

      var hexCode;

  function allToget () {

      var allhours = new Date().getHours();
      var allmins = new Date().getMinutes();
      var allsecs = new Date().getSeconds();
      
      allhours = (allhours <10 ? '0' : '') + allhours;
      allmins = (allmins < 10 ? '0' : '') + allmins;
      allsecs = (allsecs < 10 ? '0' : '') + allsecs;


      var hexCode = '#' + allhours + allmins + allsecs;
      console.log(hexCode);

      function backGrd(){
      $('body').css('background-color', hexCode);
      };

        backGrd();
        window.setInterval(backGrd, 1000);


  };



      allToget();
      window.setInterval(allToget, 1000);

      // function backGrd(){
      //   $('body').css('background-color', hexCode);
      // };

      // backGrd();
      // window.setInterval(backGrd, 1000);



})();




