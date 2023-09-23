$(function () {
    $("#dropdown").click(function (e) {
        if ($(e.target).attr('class') === "dropdownPink__title") {
            if ($(this).attr("data-open") === "false") {
                $(this).attr("data-open", "true");
                $(this).find("img#dropdown-arrow").css("transform", "rotate(0deg)");
                $(this).find("#dropdown-content").slideUp(200)
            } else {
                $(this).attr("data-open", "false");
                $(this).find("img#dropdown-arrow").css("transform", "rotate(-180deg)");
                $(this).find("#dropdown-content").slideDown(200);
            }
        }
    });
    $(".header__top-mobileButton").click(function(e) {
        $(".header__mobileMenu").fadeIn(200)
    })
    $(".header__mobileMenu-title-closeMenu").click(function (e) { 
        $(".header__mobileMenu").fadeOut(200)
    });
});
