$(function() {

    var bottomOffset = $(".footer").innerHeight();

    $("#js-sticky").sticky({
        topSpacing: 20,
        bottomSpacing: bottomOffset
    });

});
