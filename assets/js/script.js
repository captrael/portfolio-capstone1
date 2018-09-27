$(document).ready(function(){
    $("#link1").click(function() {
        $('html, body').animate({ scrollTop:$("#p1").offset().top}, 500);
    });
    
    $("#link2").click(function() {
        $('html, body').animate({ scrollTop:$("#p2").offset().top}, 500);
    });

    $(".btop").click(function() {
        $('html, body').animate({ scrollTop:$("#link1").offset().top}, 500);
    });
});

