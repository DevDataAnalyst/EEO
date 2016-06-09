
$(document).ready(function () {
    $(".close").click(function () {
        window.close();
    });
    $(".mainLayout").focus();
    $('body').bind('keydown', function (event) {
        focusedElement = document.activeElement.id;

        if (event.keyCode == 9 && focusedElement == 'print')
        {
            if (event.shiftKey) {


            }
            else {
                event.preventDefault();
                $(".mainLayout").focus();
            }
            /*if (event.shiftKey) {
             
             }*/
        }
        if (event.keyCode == 9 && focusedElement == 'mainLayout' && event.shiftKey) {
            event.preventDefault();
            $("#print").focus();
        }
    });
});






