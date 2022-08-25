$(document).ready(() => {
    //hides of of the text elements
    $("p").click(() => {
        $(".text1").hide();
    });

    //hides the title on click
    $(".hideBtn").click(() => {
        $("#title").hide(500);
    });

    //show the title on click
    $(".showBtn").click(() => {
        $("#title").show(500);
    });

    //changes the color of the title on mouse hover
    $("#title").mouseenter(() => {
        $("#title").css("color", "yellow");
    });

    //changes the color of the title on mouse hover out
    $("#title").mouseleave(() => {
        $("#title").css("color", "brown");
    });

    //fades the image in and out
    $(".fadeBtn").click(() => {
        $(".people_img").fadeToggle(1000, 0);
    });

    //slide animate the panel at the top of the page
    $(".toggle").click(() => {
        $(".panel").slideToggle(400);
    });

    //animate the image and then showa message after it's finished
    //using a callback function
    $(".animateImage").click(() => {
        $(".people_img").animate(
            {
                left: "1200px",
                top: "300px",
                height: "100px",
                width: "100px",
            },
            5000,
            () => {
                alert("The animation is finished");
            }
        );
    });

    //chaining methods
    $(".people_img").click(() => {
        $(".people_img")
            .animate({
                left: "500px",
            }, 1000)
            .slideUp(500)
            .slideDown(500)
            .animate({
                left: "0px",
            }, 1000);
    });
});
