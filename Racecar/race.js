/* jQuery */

$('#start').click(function(){
    
    
     function checkIfComplete(){
         
        if( raceComplete == false)
            raceComplete = true;
         else
             postion = 'second';
     }
   
     var carWidth = $('#car1').width();
     var trackWidth = $(window).width() - carWidth;
    
     var raceTime1 = Math.floor((Math.random() * 5000)+1);
     var raceTime2 = Math.floor((Math.random() * 5000)+1);
    
     var raceComplete = false;
     var position = 'first';
    
     $('#car1').animate({
        
            // move the car width of the racetrack
            left: trackWidth
            
        }, raceTime1, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in ' + position + ' place and clocked in at ' + raceTime1 + ' milliseconds!' );
            
        });
    
    $('#car2').animate({
        
            // move the car width of the racetrack
            left: trackWidth
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in ' + position + ' place and clocked in at ' + raceTime2 + ' milliseconds!' );
            
        });
    
});

      
     $('#reset').click(function() {
        $('.car').css('left','0');
        $('.raceinfo span').text('');
    });