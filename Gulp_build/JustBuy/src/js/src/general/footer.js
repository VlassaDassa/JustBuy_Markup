/* Footer spoiler */
$(document).ready(function() {
    $('.mobile_footer_wrapper__title').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    })
})