// Open auth form -- DESKTOP
$('.header__icons-profile').on('click', function() {
    if ($('.header__icons-profile--auth').length > 0) {
        console.log('Jump to profile');
    }
    else {
        show_auth();
    };
});


$('.mobile_menu-profile').on('click', function() {
    if ($('.mobile_menu-profile--auth').length > 0) {
        console.log('Jump to profile');
    }
    else {
        show_auth();
    };
});


// Close auth form
$('.overlay').on('click', function() {
    close_auth()
});

// Close auth form
$('.auth__close_button').on('click', function() {
    close_auth()
});


function show_auth() {
    $('.auth').removeClass('auth--hidden');
    $('.overlay').removeClass('overlay--hidden');
}


function close_auth() {
    $('.auth').addClass('auth--hidden')
    $('.overlay').addClass('overlay--hidden') 
}


// Mask for number phone
$('#phone_number').on('input', function(e) {
    var inputValue = $(this).val().replace(/\D/g, '');
    var inputLength = inputValue.length;
    var mask = "+_ ___ ___-__-__";

    var maskedValue = '';
    var j = 0;

    for (var i = 0; i < mask.length; i++) {
    if (j >= inputLength) {
        break; // Закончились цифры во вводе
    }

    if (mask[i] === '_') {
        maskedValue += inputValue[j++];
    } else {
        if (mask[i] === '+' && inputValue[j] !== '+') {
        maskedValue += mask[i];
        } else {
        maskedValue += mask[i];
        if (inputValue[j] === mask[i]) {
            j++;
        }
        }
    }
    }

    $(this).val(maskedValue);

    if (maskedValue.startsWith('+1')) {
    $('.country_code__img').attr('src', 'icons/dest/general/usa_flag.svg');
    }

    else if (maskedValue.startsWith('+7')) {
    $('.country_code__img').attr('src', 'icons/dest/general/russian_flag.png')
    }
    
    else if (maskedValue.startsWith('+9')) {
    $('.country_code__img').attr('src', 'icons/dest/general/kz_flag.png')
    }

    else {
    $('.country_code__img').attr('src', 'icons/dest/general/question.svg')
    }

});


// Login
$('.auth_buttons__login_button').on('click', function() {
    if ($('.login--hidden').length > 0) {
        $('.reg').addClass('reg--hidden');
        $('.login').removeClass('login--hidden');
    }
    else {
        var fields = [$('#login'), $('#password')];
        var error_1 = empty_fields_validator(fields);

        if (error_1) {
            console.log('The are errors :(');
        }

        else {
            console.log('Everything is fine!');
        };
    }
});


// Registration
$('.auth_buttons__reg_button').on('click', function() {
    if ($('.reg--hidden').length > 0) {
        $('.login').addClass('login--hidden');
        $('.reg').removeClass('reg--hidden');
    }
    else {
        var fields = [$('#login_reg'), $('#password_reg'), $('#confirm_password'), $('#phone_number')];
        var error_1 = empty_fields_validator(fields);
        var error_2 = matching_passwords_validator($('#password_reg'), $('#confirm_password'));

        if (error_1 || error_2) {
            console.log('The are errors :(');
        }

        else {
            console.log('Everything is fine!');
        }
    }
});


// Checking for empty fields
function empty_fields_validator(fields) {
    var errors = 0;

    for (var i=0; i < fields.length; i++) {
        var field = fields[i]
        var error_icon = field.closest('.auth_wrapper').find('.auth_wrapper__error-icon');
        var error_text = field.closest('.auth_wrapper').find('.auth_wrapper__error-text');
        var error_bg = field.closest('.auth_wrapper').find('.auth_wrapper__error');

        // Reset
        reset_erorrs(error_icon, error_bg);
        
        if (field.val() == '') {
            add_errors(error_icon, error_bg, error_text, 'Пустое поле');
            errors += 1;
        };
    };

    if (errors > 0) {
        return true
    }

    else {
        return false
    };
};


// Checking for a matching passwords
function matching_passwords_validator(password_1, password_2) {
    if (password_1.val() == '' || password_2.val() == '') {
        return true;
    };

    if (password_1.val() != password_2.val()) {
        var error_icon = password_2.closest('.auth_wrapper').find('.auth_wrapper__error-icon');
        var error_text = password_2.closest('.auth_wrapper').find('.auth_wrapper__error-text');
        var error_bg = password_2.closest('.auth_wrapper').find('.auth_wrapper__error');

        // Reset
        reset_erorrs(error_icon, error_bg);
        add_errors(error_icon, error_bg, error_text, 'Пароли не совпадают');
        return true;
    }

    else {
        return false;
    };

};


// Reset errors
function reset_erorrs(error_icon, error_bg) {
    if (!error_icon.hasClass('auth_wrapper__error-icon--hidden')) {
        error_icon.addClass('auth_wrapper__error-icon--hidden');
    };
    if (!error_bg.hasClass('auth_wrapper__error--hidden')) {
        error_bg.addClass('auth_wrapper__error--hidden');
    };
}


// Add errors
function add_errors(error_icon, error_bg, error_text_el, error_text) {
    error_icon.removeClass('auth_wrapper__error-icon--hidden');
    error_bg.removeClass('auth_wrapper__error--hidden');
    error_text_el.html(error_text);
}