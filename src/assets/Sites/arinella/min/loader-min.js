if (self.name != "_refreshed_") {
    self.name = "_refreshed_";
    self.location.reload(true);
} else self.name = "";

$(document).ready(function() {
    $("#loading-screen").remove("200");
    $("#main").delay(200).addClass("main-background");
    $("body").toggleClass("overflow-visible");
    $(".index #loading-screen header").delay(400).fadeToggle(200);
    $("#main-index").delay(100).animate({
        opacity:"1"
    }, "100");
    $(".index header").delay(200).animate({
        opacity:"1"
    }, "fast");
    $("#loading-screen").delay(300).fadeToggle(100);
    $("#main").delay(200).animate({
        opacity:"1"
    }, "100");
});