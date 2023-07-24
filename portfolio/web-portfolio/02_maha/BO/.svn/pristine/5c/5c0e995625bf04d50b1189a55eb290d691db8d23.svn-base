$(document).ready(function() {
    $(".dlb-send-right-btn").click(function() {
        itemMove("left");
    });

    $(".dlb-send-left-btn").click(function() {
        itemMove("right");
    });

    $(".duallistbox thead input[type=checkbox]").change(function(e) {
        var $checkboxes = $(".dlb-" + $(this).val() + " table tbody tr input[type=checkbox]");
        if ($(this).is(":checked")) {
            $checkboxes.prop("checked", true);
        } else {
            $checkboxes.prop("checked", false);
        }
    });

    function itemMove(direction) {
        var reverse = (direction == "left") ? "right" : "left";
        var items = $(".dlb-" + direction + " table tbody tr input[type=checkbox]:checked").parent().parent();
        $(".dlb-" + reverse + " table tbody").append(items);
        $(".duallistbox input[type=checkbox]").prop("checked", false);
    }
});
