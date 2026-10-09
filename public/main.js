function celsiusToFahrenheit(celsius) { 
  let fahrenheit = (celsius * 1.8) + 32;
  return Number(fahrenheit.toFixed(2));
}
function fahrenheitToCelsius(fahrenheit) { 
  let celsius = (fahrenheit -32) * 5/9;
  return Number(celsius.toFixed(2));
}

let currUnit = "C";

$(':button').on('click', function () {
    console.log("click");
    let $btn = $(this);
    let unit = $btn.data('unit');
    $btn.addClass('animate_button_click');

    $btn.one('animationend webkitAnimationEnd oAnimationEnd', function () {
        $btn.removeClass('animate_button_click');
    });

    if(currUnit !== "C" && unit === "C") {
        currUnit = "C";
        $("span.temp").text(function(index, oldText) {
            return(fahrenheitToCelsius(oldText));
        });
        $("span.unit").text("C");
    } else if(unit === "F" && currUnit !== "F") {
        $("span.temp").text(function(index, oldText) {
            return(celsiusToFahrenheit(oldText));
        });
        $("span.unit").text("F");
        currUnit = "F";
    }
});