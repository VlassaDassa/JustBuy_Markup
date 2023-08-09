$(document).ready(function() {
    $('.notifications__wrapper').on('click', '.notifications_item__cross', function() {
        $(this).closest('.notifications_item').remove();

        var count_notif = $('.notifications_item').length;
        $('.notifications__number_notif').text(count_notif);

        if (count_notif === 0) {
            var no_notif = $('<div>').addClass('no_notifications');
            no_notif.addClass('no_section');
            no_notif.text('Уведомлений нет');

            $('.notifications__wrapper').append(no_notif);
        
        };
    });
});