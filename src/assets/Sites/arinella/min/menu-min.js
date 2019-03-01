$(document).ready(function() {
    $("#mob").click(function() {
        $("#header nav .menu").fadeToggle("500");
        $(this).toggleClass("active-menu");
        $(".menu a").toggleClass("animate-link");
        $("body").toggleClass("toggle-overflow");
        $(".flex-prev").toggleClass("display-none-important");
        $(".flex-next").toggleClass("display-none-important");
        $("#reservation-button").toggleClass("display-none-important");
    });
});