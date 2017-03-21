$(function(){
    // CACHE THE WINDOW OBJECT
    var $window = $(window);
    
    // PARALLAX BACKGROUND EFFECT
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
        
        $(window).scroll(function(){
            
            // Scroll the background at var speed
            // the yPos is a neg value because we're scrolling up
            
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            
            // Put together our final background position
            var coords = '50% ' + yPos + 'px';
            
            //move the background
            $bgobj.css({backgroundPosition: coords});
        }); // end window scroll
            // in order to apply this to any other div with a background image background image just make sure it's got css properties of repeat and fixed, and then give it the data-type="background" and data-speed="5"
    });
});