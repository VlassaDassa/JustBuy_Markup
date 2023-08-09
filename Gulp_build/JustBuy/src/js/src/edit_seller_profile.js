// Slider
$(document).ready(function() {
    $('.btn_next').on('click', function() {
      $('.error_size').css('display', 'none');
      $('.error_file').css('display', 'none');
      $('.error_no_file').css('display', 'none');

      if ($('.right_side__photo').length > 0) {
        $('.right_side__choice_photo').css('left', '-100%');
        $('.right_side__form').css('left', '0%');

        $('.btn_previous').on('click', function() {
            $('.right_side__choice_photo').css('left', '0%');
            $('.right_side__form').css('left', '100%');
        });
      }

      else{
        $('.error_no_file').css('display', 'flex');
      };

    });
});


// Upload photo
document.addEventListener('DOMContentLoaded', function() {
    var wrapper = document.querySelector('.right_side__choice_photo_wrapper');
    var input = document.getElementById('photo_input');
  
    wrapper.addEventListener('click', function() {
      input.click();
    });
});


// Set photo
$(document).ready(function() {
    $('#photo_input').on('change', function() {
        var file_type = $('#photo_input').val();

        $('.error_size').css('display', 'none');
        $('.error_file').css('display', 'none');
        $('.error_no_file').css('display', 'none');

        if (/jpg|png|jpeg|svg/.test(file_type)) {
            size_validator(this.files[0]);
        }
        else {
            $('.error_file').css('display', 'flex');
        };
    });
});
  

// Size validator
function size_validator(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
        var image = new Image();

        image.onload = function() {
            var width = this.width;
            var height = this.height;


            if (width >= 250 && height >= 250) {
                if ($('.right_side__photo').length > 0) {
                    $('.right_side__photo').remove();
                };

                $('.right_side__ico').css('display', 'none');

                img_src = URL.createObjectURL(file);
                var img = $('<img>');
                img.addClass('right_side__photo');
                img.attr('src', img_src);

                $('.right_side__choice_photo_wrapper').append(img);
            }
            else {
                $('.error_size').css('display', 'flex');
            }
        };

        image.src = e.target.result;
    };

    reader.readAsDataURL(file);
};


// Save form
$(document).ready(function() {
    $('.btn_save').on('click', function() {
        $('.right_side__form_ico-warning--description').css('display', 'none');
        $('.right_side__form_ico-warning--name').css('display', 'none');
        $('.right_side__form_error_description--more').css('display', 'none');
        $('.right_side__form_error_description--less').css('display', 'none');
        $('.right_side__form_error_name--more').css('display', 'none');
        $('.right_side__form_error_name--less').css('display', 'none');

        if ($(window).width() < 600) {
            var status_name = name_mobile_validator()
            var status_description = description_mobile_validator()

            if (status_name && status_description) {
                window.location.href = 'seller_profile.html';
            }
        }

        else {
            var status_name = name_validator()
            var status_description = description_validator()

            if (status_name && status_description) {
                window.location.href = 'seller_profile.html';
            }
        };
    });
});
    

// Name validator
function name_validator() {
    if ($('#name').val().length < 5) {
        $('.right_side__form_ico-warning--name').css('display', 'flex');
        $('.right_side__form_error_name--more').css('display', 'flex');
        return false
    }

    else if ($('#name').val().length > 10) {
        $('.right_side__form_ico-warning--name').css('display', 'flex');
        $('.right_side__form_error_name--less').css('display', 'flex');
        return false
    };
    
    return true
}


// Descrtiption validator
function description_validator() {
    if ($('#description').val().length < 150) {
        $('.right_side__form_ico-warning--description').css('display', 'flex');
        $('.right_side__form_error_description--more').css('display', 'flex');
        return false
    }

    else if ($('#description').val().length > 300) {
        $('.right_side__form_ico-warning--description').css('display', 'flex');
        $('.right_side__form_error_description--less').css('display', 'flex');
        return false
    };
    
    return true
}


// Name mobile validator
function name_mobile_validator() {
    if ($('#name').val().length < 5) {
        show_error_block('Имя должно содержать больше 5 символов');
        $('.right_side__form_ico-warning--name').css('display', 'flex');
        return false
    }

    else if ($('#name').val().length > 10) {
        show_error_block('Имя должно содержать меньше 10 символов');
        $('.right_side__form_ico-warning--name').css('display', 'flex');
        return false
    };
    
    return true
}


// Descrtiption mobile validator
function description_mobile_validator() {
    if ($('#description').val().length < 150) {
        show_error_block('Описание должно содержать больше 150 символов');
        $('.right_side__form_ico-warning--description').css('display', 'flex');
        return false
    }

    else if ($('#description').val().length > 300) {
        show_error_block('Описание должно содержать меньше 300 символов');
        $('.right_side__form_ico-warning--description').css('display', 'flex');
        return false
    };
    
    return true
}

// Show error block for mobile devices
function show_error_block(error) {
    var notifications = [error];

    for (var i = 0; i < notifications.length; i++) {
        if ($('.mobile_error').length <= 0 ) {
            var $notification = $('<div class="mobile_error">' + notifications[i] + '</div>');
            $('body').append($notification);

            $notification.animate({
            top: '300px'
            }, 500);

            setTimeout((function(notification) {
            return function() {
                notification.animate({
                top: '-100px'
                }, 500, function() {
                notification.remove();
                });
            };
            })($notification), 3000 * (i + 1));
        }
    }
};