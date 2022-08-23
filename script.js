$(document).ready(() => {
    $("p").click(() => {
        $(".text1").hide();
    });
    $(".hideBtn").click(() => {
        $("#title").hide(500);
    });
    $(".showBtn").click(() => {
        $("#title").show(500);
    });
    $("#title").mouseenter(() => {
        $("#title").css("color", "yellow");
    });
    $("#title").mouseleave(() => {
        $("#title").css("color", "brown");
    });
    $(".fadeBtn").click(() => {
        $(".people_img").fadeToggle(1000, 0);
    });

    $(".show-panel").click(() => {
        $(".panel").slideToggle(1000);
    });
});
