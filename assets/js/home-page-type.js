$(function(){
    $(".type-is-coming").typed({
        strings: ["Fun", "A wonderful challenge", "<span class=\"logo-draw\">2017 \\> </span><span class=\"logo-poli\">poli</span><span class=\"logo-ctf\">ctf</span>"],
        typeSpeed: 0,
        callback: function() {
            $( "span" ).siblings( ".typed-cursor" ).css( "animation", "none" );
            $( "span" ).siblings( ".typed-cursor" ).hide();
        }
    });
});