$(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#addBurger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("burger added");
            location.reload();
        });
    });

    $(".change_devoured").on("click", function(event) {
        event.preventDefault();
        let id = $(this).data("id");
        let newDevour = $(this).data("newdevour");
        let newDevourState = {
            devoured: newDevour
        };
        console.lot(id);
        $.ajax("/api/burger/"+id, {
            type: "PUT",
            data: newDevourState
        }).then(function() {
            console.log("burger devoured");
            location.reload();
        });
    });


});