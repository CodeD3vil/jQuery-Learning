$(document).ready(() => {
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
        $(".panel").slideToggle(700);
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
            .animate(
                {
                    left: "500px",
                },
                1000
            )
            .slideUp(500)
            .slideDown(500)
            .animate(
                {
                    left: "0px",
                },
                1000
            );
    });

    //gets the text from an element
    $(".get-textBtn").click(() => {
        alert("Text: " + $(".getText").text());
    });

    //gets the HTML
    $(".get-HTMLBtn").click(() => {
        alert("HTML: " + $(".getText").html());
    });

    //get the input
    $(".get-inputBtn").click(() => {
        alert("Input value: " + $("#getInput").val());
    });

    //set text
    $(".set-textBtn").click(() => {
        $(".set-textBtn").text((i, text) => {
            console.log(text);
            return;
        });
    });

    //set attribute
    $(".set-attrBtn").click(() => {
        $(".set-attrBtn").attr({
            text: "https://www.youtube.com/",
        });
    });

    //append text
    let appendNumber = 0;
    $(".append-Btn").click(() => {
        appendNumber += 1;
        const appendText = $("<p></p>").text("Appended text" + " " + appendNumber);
        $(".append-text-area").append(appendText);
    });

    //prepend text
    let prependNumber = 0;
    $(".prepend-Btn").click(() => {
        prependNumber += 1;
        const prependText = $("<p></p>").text("Prepended text" + " " + prependNumber);
        $(".append-text-area").prepend(prependText);
    });

    //remove the child elements of the selected element
    $(".remove-append-Btn").click(() => {
        $(".append-text-area").empty();
    });
});
