console.log("hi");

$(':button').on('click', function () {
    console.log("click");
    let $btn = $(this);
    let unit = $btn.data('unit');
    console.log(unit);
    $btn.addClass('animate_button_click');

    $btn.one('animationend webkitAnimationEnd oAnimationEnd', function () {
        console.log($btn);
        $btn.removeClass('animate_button_click');
    });
});