$(document).ready(function () {

    $(".date-promissory-note").each(function () {
        $(this).pDatepicker({
            observer: true,
            format: 'YYYY/MM/DD',
            altField: '.observer-example-alt[data-count="' + $(this).data('count') + '"]'
        });
    });



    $('.datepicker-container').click(function (e) {
        setTimeout(function () {
            $(".observer-example-alt").each(function (i, obj) {
                var count = $(this).data("count");
                var start = $(this).val();
                var end = new Date();
                var diff = new Date(start - end);
                $("#day-" + count).val(Math.ceil(diff / 1000 / 60 / 60 / 24));
            });
        }, 500);
    });

    $("#calc").on("click", function () {
        var sum = 0;
        var sum_note = 0;
        $(".price").each(function () {
            var count = $(this).data("count");
            sum_note += parseInt($(this).val());
            sum += $(this).val() * $("#day-" + count).val();
        });
        var final = sum / sum_note;
        $(".ras").val(final);
        $(".sood").val(sum_note * (5 / 100))
    });
});
