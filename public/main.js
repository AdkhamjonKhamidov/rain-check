function celsiusToFahrenheit(celsius) { 
  let fahrenheit = (celsius * 1.8) + 32;
  return Number(fahrenheit.toFixed(1));
}

$(':button').on('click', function () {
    console.log("click");
    let $btn = $(this);
    let unit = $btn.data('unit');
    $btn.addClass('animate_button_click');

    $btn.one('animationend webkitAnimationEnd oAnimationEnd', function () {
        $btn.removeClass('animate_button_click');
    });

    if(unit === "C") {
        console.log("C"); //need to look into fetch api for getting data from backend to frontend
    } else if(unit === "F") {
        console.log("F");
    }
});