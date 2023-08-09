ymaps.ready(init); 
var myMap;
        
// Init map
function init() {
    
    // Creating a dark map
    const DARK_MAP = 'custom#dark';
    ymaps.layer.storage.add(DARK_MAP, function DarkLayer() {
            return new ymaps.Layer(
            'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&theme=dark&%c&%l&scale={{ scale }}',
            );
        });

        ymaps.mapType.storage.add(DARK_MAP, new ymaps.MapType('Dark Map', [DARK_MAP]));

        var myMap = new ymaps.Map("map", {
            center: [56.714043833899694, 36.775234726846115],
            zoom: 16,
            controls: [],
            type: DARK_MAP 
        });
    

    // List marks
    var markers = [
        {
            coordinates: [56.714043833899694, 36.775234726846115],
            id: '1'
        },

        {
            coordinates: [56.7121045, 36.7751],
            id: '2'
        },

        {
            coordinates: [56.712545, 36.7742],
            id: '3'
        },

        {
            coordinates: [56.712645, 36.7733],
            id: '4'
        },

        {
            coordinates: [56.712845, 36.7724],
            id: '5'
        },

        {
            coordinates: [56.712145, 36.77105],
            id: '6'
        },
        
    ];

    // Add marks and add event handler
    markers.forEach(function(marker) {
        var radius = 100 / 3; // Уменьшаем радиус в 3 раза
        var circleGeometry = new ymaps.Circle(
            [marker.coordinates, radius],
            {
                iden: marker.id
            },
            {
                fillColor: '#FF3194',
                strokeColor: '#FF3194',
                strokeOpacity: 1,
                strokeWidth: 2,
                opacity: 0.5
            }
        );

        var circlePlacemark = new ymaps.Placemark(circleGeometry.geometry.getCoordinates(), {
            iden: marker.id
        }, {
            iconLayout: 'default#imageWithContent',
            iconImageHref: 'data:image/svg+xml;utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><circle cx="30" cy="30" r="20" fill="#FF3194" stroke="#FFFFFF" stroke-width="4"/><text x="50%" y="50%" text-anchor="middle" alignment-baseline="central" font-size="24" fill="#FFFFFF">' + marker.id + '</text></svg>'),
            iconImageSize: [60, 60],
            iconImageOffset: [-30, -30]
        });

        circlePlacemark.events.add('click', function(e) {
            var target = e.get('target');
            var id = target.properties.get('iden');

            display_point(id)

        });

        myMap.geoObjects.add(circlePlacemark);
    });
};


// Display points
function display_point(id) {
    var points = [
        {
            'id': 1,
            'photo': 'images/dest/profile/point_1.jpg',
            'city': 'Конаково',
            'address': 'Пр-т. Ленина д.32',
            'schedule': '8:00 - 21:00',
            'rating': 4,
        },

        {
            'id': 2,
            'photo': 'images/dest/profile/point_2.jpg',
            'city': 'Москва',
            'address': 'Елисейские поля',
            'schedule': '12:00 - 22:00',
            'rating': 5,
        },

        {
            'id': 3,
            'photo': 'images/dest/profile/point_3.jpg',
            'city': 'Череповец',
            'address': 'Пр-кт. Маяковского д.6',
            'schedule': '10:00 - 20:00',
            'rating': 2,
        },

    ]

    var point = points.find(function (point) {
        return point.id.toString() === id;
    });


    var deliveryPointDiv = document.querySelector('.point_wrapper');

    // Creating a elements
    var pointDiv = document.createElement('div');
    var link = document.createElement('a');
    var imageWrapper = document.createElement('div');
    var image = document.createElement('img');
    var descriptionDiv = document.createElement('div');
    var cityP = document.createElement('p');
    var addressP = document.createElement('p');
    var scheduleP = document.createElement('p');
    var ratingDiv = document.createElement('div');

    // Mobile
    var mobile_link = document.createElement('a');
    var mobile_descriptionDiv = document.createElement('div');
    var mobile_pointDiv = document.createElement('div');
    var mobile_cityP = document.createElement('p');
    var mobile_addressP = document.createElement('p');
    var mobile_scheduleP = document.createElement('p');
    
    link.href = 'delivery_point.html';
    mobile_link.href = 'delivery_point.html';
    
    // Adding a classnames
    pointDiv.className = 'point';
    imageWrapper.className = 'point__image_wrapper';
    image.className = 'point__image';
    descriptionDiv.className = 'point__description';
    cityP.className = 'point__city';
    addressP.className = 'point__address';
    scheduleP.className = 'point__schedule';
    ratingDiv.className = 'point__rating';

    // Mobile
    mobile_pointDiv.className = 'mobile_point';
    mobile_descriptionDiv.className = 'mobile_point__description';
    mobile_cityP.className =       'mobile_point__city';
    mobile_addressP.className =    'mobile_point__address';
    mobile_scheduleP.className =   'mobile_point__schedule';


    // Set attributes
    image.src = point.photo;
    cityP.textContent = point.city;
    addressP.textContent = point.address;
    scheduleP.textContent = point.schedule;

    mobile_cityP.textContent = point.city;
    mobile_addressP.textContent = point.address;
    mobile_scheduleP.textContent = point.schedule;

    // Set rating
    for (var i = 0; i < 5; i++) {
        var starImg = document.createElement('img');
        starImg.src = (i < point.rating) ? 'icons/dest/general/star_fill.svg' : 'icons/dest/general/star.svg';
        starImg.alt = '';
        starImg.className = 'point__star';
        ratingDiv.appendChild(starImg);
    }

    // Combining
    imageWrapper.appendChild(image);
    descriptionDiv.appendChild(cityP);
    descriptionDiv.appendChild(addressP);
    descriptionDiv.appendChild(scheduleP);
    descriptionDiv.appendChild(ratingDiv);
    link.appendChild(imageWrapper);
    link.appendChild(descriptionDiv);
    pointDiv.appendChild(link);

    // Mobile
    mobile_descriptionDiv.appendChild(mobile_cityP);
    mobile_descriptionDiv.appendChild(mobile_addressP);
    mobile_descriptionDiv.appendChild(mobile_scheduleP);
    mobile_link.appendChild(mobile_descriptionDiv);
    mobile_pointDiv.appendChild(mobile_link);

    deliveryPointDiv.innerHTML = '';

    deliveryPointDiv.appendChild(pointDiv);
    deliveryPointDiv.appendChild(mobile_pointDiv);

}

// Selecting a bank card -- MOBILE
$('.bank_cards').on('click', '.mobile_bank_cards__item', function() {
    var isLastItem = $(this).is(':last-child');
  
    $('.mobile_bank_cards__item').not(this).removeClass('mobile_bank_cards__item-selected');
    if (!isLastItem) {
      $(this).toggleClass('mobile_bank_cards__item-selected');
    }
  
    var statusIco = $(this).find('.mobile_bank_cards__status_ico');
    if (statusIco.attr('src') === 'icons/dest/general/empty_check.svg') {
      statusIco.attr('src', 'icons/dest/general/mobile_check.svg');
    }
  
    var statusCard = $(this).find('.mobile_bank_cards__status_card');
    if ($(this).hasClass('mobile_bank_cards__item-selected')) {
      statusCard.text('Основная карта');
      statusIco.attr('src', 'icons/dest/general/mobile_check.svg');
    } else {
      statusCard.text('Сделать основной');
      statusIco.attr('src', 'icons/dest/general/empty_check.svg');
    }
  
    $('.mobile_bank_cards__item').not(this).find('.mobile_bank_cards__status_ico').attr('src', 'icons/dest/general/empty_check.svg');
    $('.mobile_bank_cards__item').not(this).find('.mobile_bank_cards__status_card').text('Сделать основной');
});
  
   
// Selecting a bank card -- DESKTOP
$('.bank_cards').on('click', '.bank_cards__item', function() {
    $('.bank_cards__item').not(this).removeClass('bank_cards__item-selected');
    $(this).toggleClass('bank_cards__item-selected');
  
    $('.bank_cards__item').not(this).find('.bank_cards__icon').remove();
    if ($(this).find('.bank_cards__icon').length === 0) {
      $('<img src="icons/dest/general/check.svg" class="bank_cards__icon">').prependTo($(this).find('.bank_cards__header'));
    }
  
    var headerText = $(this).find('.bank_cards__header_text');
    if ($(this).hasClass('bank_cards__item-selected')) {
      headerText.text('Основная карта');
    }
    else {
      $(this).find('.bank_cards__icon').remove()
      headerText.text('Сделать основной');
    }
  
    $('.bank_cards__item').not(this).find('.bank_cards__header_text').text('Сделать основной');
});
  

// Mask for card number -- DESKTOP
$('#number_card_desktop').on('input', mask_for_card_number);
$('#number_card_mobile').on('input', mask_for_card_number);

// Mask for card number
function mask_for_card_number() {
    var value = $(this).val();

    if ($(this).val().length > 0) {
        var cleanValue = value.replace(/\s/g, '');
        var groupSize = 4;
        var groups = cleanValue.match(new RegExp('.{1,' + groupSize + '}', 'g'));
        var formattedValue = groups.join(' ');
        $(this).val(formattedValue);
        detectCardType($(this).val());
    }
    else {
        $('.bank_ico').addClass('bank_ico--hidden');
    }
}

// Defining the card type
function detectCardType(cardNumber) {
    var cardNumberCleaned = cardNumber.trim().replace(/[\s-]/g, '');
    var bank_ico = $('.bank_ico');

    if (/^5[1-5]/.test(cardNumberCleaned)) {
        bank_ico.removeClass('bank_ico--hidden');
        bank_ico.attr('src', 'icons/dest/general/mastercard.svg');

    } else if (/^4/.test(cardNumberCleaned)) {
        bank_ico.removeClass('bank_ico--hidden');
        bank_ico.attr('src', 'icons/dest/general/visa.svg');

    } else if (/^3[47]/.test(cardNumberCleaned)) {
        bank_ico.removeClass('bank_ico--hidden');
        bank_ico.attr('src', 'icons/dest/general/amex.svg');

    } else if (/^6(?:011|5)/.test(cardNumberCleaned)) {
        bank_ico.removeClass('bank_ico--hidden');
        bank_ico.attr('src', 'icons/dest/general/discover.svg');

    } else if (/^(?:2131|1800|35\d{3})/.test(cardNumberCleaned)) {
        bank_ico.removeClass('bank_ico--hidden');
        bank_ico.attr('src', 'icons/dest/general/jcb.svg');

    } else {
        bank_ico.removeClass('bank_ico--hidden');
        bank_ico.attr('src', 'icons/dest/general/question.svg');
    }
}


// Only numbers
$('#number_card_desktop').on('input', only_numbers);
$('#number_card_mobile').on('input', only_numbers);
  
$('input.input_wrapper__input:not(#number_card_desktop, #number_card_mobile)').on('input', only_numbers_except);

// Only numbers
function only_numbers() {
    var input = $(this);
    var regex = /[^0-9\s]/g;
    input.val(input.val().replace(regex, ''));
};


// Only numbers except
function only_numbers_except() {
    var input = $(this);
    var regex = /[^0-9]/g;
    input.val(input.val().replace(regex, ''));
};


// Close forms
$('.overlay').on('click', close_form);


// Close link cards
$('.close-icon--link_card').on('click', close_form);


// Close desktop form
function close_form() {
    $('.overlay').addClass('overlay--hidden');
    $('.link_card').addClass('link_card--hidden');
}


// Open desktop "link cards"
$('.bank_cards').on('click', '.circle--link_card--desktop', function() {
    open_link_cards()
});


// Open mobile "link cards"
$('.bank_cards').on('click', '.circle--link_card--mobile', function() {
    open_link_cards()
});


// Open "link cards"
function open_link_cards() {
    $('.overlay').removeClass('overlay--hidden');

    $('.link_card').removeClass('link_card--hidden');
}


// Disabled button "link cards"
$('.input_wrapper__input').on('input', function() {
    var input_fields = $('.input_wrapper__input');

    if (window.innerWidth > 768) {
        condition_1 = $('#number_card_desktop').val().length >= 10;
        condition_2 = $('#month_desktop').val().length       == 2;
        condition_3 = $('#year_desktop').val().length        == 2;
        condition_4 = $('#cvv_desktop').val().length         == 3;

        // Reset button
        $('.save_card--desktop').removeClass('save_card--desktop--activate')

        if (condition_1 && condition_2 && condition_3 && condition_4) {
            $('.save_card--desktop').prop('disabled', false);
            $('.save_card--desktop').addClass('save_card--desktop--activate')
        }
        else {
            $('.save_card--desktop').prop('disabled', true);
            $('.save_card--desktop').removeClass('save_card--desktop--activate')
        }
    }

    else {
        condition_1 = $('#number_card_mobile').val().length >= 10;
        condition_2 = $('#month_mobile').val().length       == 2;
        condition_3 = $('#year_mobile').val().length        == 2;
        condition_4 = $('#cvv_mobile').val().length         == 3;

        // Reset button
        $('.save_card--mobile').removeClass('save_card--mobile--activate')

        if (condition_1 && condition_2 && condition_3 && condition_4) {
            $('.save_card--mobile').prop('disabled', false);
            $('.save_card--mobile').addClass('save_card--mobile--activate')
        }
        else {
            $('.save_card--mobile').prop('disabled', true);
            $('.save_card--mobile').removeClass('save_card--mobile--activate')
        }
    }
}) 
    

// Save card item -- DESKTOP
$('.save_card--desktop').on('click', function() {
    // Creating for desktop
    var number_card_raw = $('#number_card_desktop').val().replace(/\s/g, "");
    var month = $('#month_desktop').val();
    var year = $('#year_desktop').val();
    var type_card = $('.bank_ico').attr('src');

    show_new_desktop_card(number_card_raw, month, year, type_card);
    show_new_mobile_card(number_card_raw, month, year, type_card);

    // Reset
    $('#number_card_desktop').val('');
    $('#month_desktop').val('');
    $('#year_desktop').val('');
    $('#cvv_desktop').val('');
    $('.bank_ico').attr('src', 'icons/dest/general/question.svg');
    $(this).prop('disabled', true);
    $(this).removeClass('save_card--desktop--activate');

    $('.no_bank_cards').addClass('no_bank_cards--hidden');
});

// Save card item -- MOBILE
$('.save_card--mobile').on('click', function() {
    // Creating for desktop
    var number_card_raw = $('#number_card_mobile').val().replace(/\s/g, "");
    var month = $('#month_mobile').val();
    var year = $('#year_mobile').val();
    var type_card = $('.bank_ico').attr('src');

    show_new_desktop_card(number_card_raw, month, year, type_card);
    show_new_mobile_card(number_card_raw, month, year, type_card);

    // Reset
    $('#number_card_mobile').val('');
    $('#month_mobile').val('');
    $('#year_mobile').val('');
    $('#cvv_mobile').val('');
    $('.bank_ico').attr('src', 'icons/dest/general/question.svg');
    $(this).prop('disabled', true);
    $(this).removeClass('save_card--mobile--activate');

    $('.no_bank_cards').addClass('no_bank_cards--hidden');
});


// Save card item for desktop
function show_new_desktop_card(number_card_raw, month, year, type_card) {
    var replacement = "*****";
    var number_card = number_card_raw.substring(0, 3) + replacement + number_card_raw.substring(9);

    // Creating card item for desktop
    var parent = $('.bank_cards__wrapper');
    var item = $('<div>', {
        class: 'bank_cards__item',
        'data-card-id': '5',
    })


    var header = $('<div>').addClass('bank_cards__header');
    var headerText = $('<p>').addClass('bank_cards__header_text').text('Сделать основной');
    var footer = $('<div>').addClass('bank_cards__footer');
    var cardNumber = $('<p>').addClass('bank_cards__card_number').text(number_card.replace(/\s/g, ""));
    var date = $('<p>').addClass('bank_cards__date').text(month + '/' + year);
    var bankIcon = $('<img>').attr('src', type_card).addClass('bank_cards__bank_ico');
    var trash = $('<img>').attr('src', 'icons/dest/general/trash.svg').addClass('trash');

    if ($('.no_bank_cards--hidden').length <= 0) {
        var parent = $('<div>').addClass('bank_cards__wrapper');

        // Add circle
        var circle_wrapper = $('<div>').addClass('bank_cards__circle_wrapper');
        var circle = $('<div>').addClass('circle circle--link_card--desktop');
        var cross = $('<div>').addClass('cross');

        circle.append(cross);
        circle_wrapper.append(circle);

        $('.no_bank_cards').before(parent);
        parent.append(circle_wrapper)
    }

    header.append(headerText);
    footer.append(cardNumber, date, bankIcon);
    item.append(header, trash, footer);
    
    $('.bank_cards__circle_wrapper').before(item);

    // Close form
    close_form();
}


// Save card item for mobile
function show_new_mobile_card(number_card_raw, month, year, type_card) {
    var replacement = "*****";
    var number_card = number_card_raw.substring(0, 3) + replacement + number_card_raw.substring(9);

    var mainContainer = $("<div>", {
        class: "mobile_bank_cards__item",
        'data-card-id': '5',
    });
    
    var baseDataContainer = $("<div>", {
        class: "mobile_bank_cards__base_data"
    });
    
    var bankIcon = $("<img>", {
        src: type_card,
        class: "mobile_bank_cards__bank_ico"
    });
    
    var cardNumber = $("<p>", {
        text: number_card,
        class: "mobile_bank_cards__card_number"
    });
    
    var cardDate = $("<p>", {
        text: month + '/' + year,
        class: "mobile_bank_cards__date"
    });
    
    baseDataContainer.append(bankIcon, cardNumber, cardDate);
    
    var secondaryDataContainer = $("<div>", {
        class: "mobile_bank_cards__secondary_data"
    });
    
    var cardStatus = $("<p>", {
        text: "Сделать основной",
        class: "mobile_bank_cards__status_card"
    });
    
    var statusIcon = $("<img>", {
        src: "icons/dest/general/empty_check.svg",
        class: "mobile_bank_cards__status_ico"
    });

    var mobile_wrapper = $('<div>').addClass('mobile_trash_wrapper');
    
    var mobile_trash = $('<p>', {
        class: 'mobile_trash',
        text: 'Удалить',
    });


    if ($('.no_bank_cards--hidden').length <= 0) {
        var parent = $('<div>').addClass('mobile_bank_cards__wrapper');

        // Add circle
        var circle_wrapper = $('<div>').addClass('mobile_bank_cards__item');
        var circle = $('<div>').addClass('circle circle-mobile circle--link_card--mobile');
        var cross = $('<div>').addClass('cross cross--mobile');

        circle.append(cross);
        circle_wrapper.append(circle);

        $('.no_bank_cards').before(parent);
        parent.append(circle_wrapper)
    }
    
    secondaryDataContainer.append(cardStatus, statusIcon);
    mainContainer.append(baseDataContainer, secondaryDataContainer);
    mobile_wrapper.append(mainContainer, mobile_trash)

    $('.circle--link_card--mobile').closest('.mobile_bank_cards__item').before(mobile_wrapper);

    // Close form
    close_form();
};


// Delete card -- DESKTOP
$('.bank_cards').on('click', '.trash', function() {
    del_card_desktop($(this).parent())
    no_cards();
})


// Delete card -- MOBILE
$('.bank_cards').on('click', '.mobile_trash', function() {
    del_card_mobile($(this).parent())
    no_cards();
})


// Delete card -- DESKTOP
function del_card_desktop(item) {
    var card_id = item.data('card-id');
    item.remove();
    $('[data-card-id=' + card_id + ']').closest('.mobile_trash_wrapper').remove()
};


// Delete card -- MOBILE
function del_card_mobile(item) {
    var card_id = item.find('.mobile_bank_cards__item').data('card-id');
    item.remove();
    $('[data-card-id=' + card_id + ']').remove()
};


// Add block with label "No cards"
function no_cards() {
    var cards = $('.bank_cards__item');

    if (cards.length <= 0) {
        $('.bank_cards__wrapper').remove();
        $('.mobile_bank_cards__wrapper').remove();

        console.log('dasad');
        $('.no_bank_cards').removeClass('no_bank_cards--hidden');
    };

};
