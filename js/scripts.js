$(document).ready(function(){
    $("#mycarousel").carousel( { interval : 2000 } );
    $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');                    
    }
    });
});

$(document).ready(function(){
    $("#reservebutton").click(function(){
        $("#reserveModal").modal('show');
    });
    $("#cancelbutton").click(function(){
        $("#reserveModal").modal('hide');
    });
    
    $("#loginbutton").click(function(){
        $("#loginModal").modal('show');
    });
    $("#closebutton").click(function(){
        $("#loginModal").modal('hide');
    });
});