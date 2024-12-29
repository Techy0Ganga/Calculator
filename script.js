
$(".printable").on("click", function () {
    $(".display").val($(".display").val() + $(this).text());
});

$(".clear").on("click", function () {
    $(".display").val("");
});

$(".backspace").on("click", function () {
    var value = $(".display").val();
    $(".display").val(value.slice(0, -1));
});




$(".equals").on("click", function () {
        var expression = $(".display").val();
        console.log(expression);
        var result = math.evaluate(expression);
        console.log(result);
        $(".display").val(result);  
});