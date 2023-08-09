$(document).ready(function() {
    // Render prod
    render_prod();


    // Show description
    $('.show_yet').on('click', function() {
        var description = $('.description__text');
    
        if (description.hasClass('description__text--hidden')) {
            description.css('max-height', 500 + 'px');
            description.removeClass('description__text--hidden');
    
            $(this).text('Скрыть')
        }
        else {
            description.addClass('description__text--hidden');
            description.css('max-height', 50 + 'px');
            
            $(this).text('Показать ещё')
        };
    });
    

    // Show characteristics
    $('.characteristics__show_yet').on('click', function() {
        var charact = $('.characteristics__wrapper');
    
        if (charact.hasClass('characteristics__wrapper--hidden')) {
            charact.css('max-height', 10000 + 'px');
            charact.removeClass('characteristics__wrapper--hidden');
    
            $(this).text('Скрыть')
        }
        else {
            charact.addClass('characteristics__wrapper--hidden');
            charact.css('max-height', 50 + 'px');
            
            $(this).text('Показать ещё')
        };
    });

    // Show more feedbacks
    function create_elements(feedback_data) {
        feedback_items = [];

        feedback_data.forEach((item_data) => {
            // Creating a elements
            feedback_item = document.createElement('div');
            feedback_header = document.createElement('div');
            header_name = document.createElement('p');
            header_date = document.createElement('p');
            feedback_score = document.createElement('div');
            positive_score = document.createElement('img');
            negative_score = document.createElement('img');
            feedback_content = document.createElement('p');

            // Adding a class names
            feedback_item.className = 'delivery_point_feedback_item';
            feedback_header.className = 'delivery_point_feedback_item__header';
            header_name.className = 'delivery_point_feedback_item__name';
            header_date.className = 'delivery_point_feedback_item__date';
            feedback_score.className = 'delivery_point_feedback_item__score';
            feedback_content.className = 'delivery_point_feedback_item__content';

            // Filling with content
            header_name.innerHTML = item_data['name'];
            header_date.innerHTML = item_data['date'];
            feedback_content.innerHTML = item_data['content'];

            // Make rating
            for (let i = 1; i <= 5; i++) {
                const score_ico = document.createElement('img');
                score_ico.className = 'delivery_point_feedback_item__score_ico';
                
                if (i <= item_data['rating']) {
                    score_ico.setAttribute('src', 'icons/dest/general/star_fill.svg');
                }

                else {
                    score_ico.setAttribute('src', 'icons/dest/general/star.svg');
                };
                
                feedback_score.appendChild(score_ico);

                if (i < 5) {
                    const space = document.createTextNode(' ');
                    feedback_score.appendChild(space);
                }
            };


            // Combining
            feedback_header.append(header_name);
            feedback_header.append(header_date);

            feedback_item.append(feedback_header);
            feedback_item.append(feedback_score);
            feedback_item.append(feedback_content);

            feedback_items.push(feedback_item);
        });

        return feedback_items;
    };
    var start_index = 0;
    function show_more() {
        var feedback_data = [
            {
                'id': 1,
                'name': 'Влад',
                'date': '28/06/2023',
                'rating': 4,
                'content': 'Кассирша весьма и весьма груба. Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу я мечтал только об одном: скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено. Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.',
            },

            {
                'id': 2,
                'name': 'Кирилл',
                'date': '04/04/2023',
                'rating': 3,
                'content': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.',
            },

            {
                'id': 3,
                'name': 'Андрей',
                'date': '23/04/2023',
                'rating': 5,
                'content': 'Получил по лицу'
            },

            {
                'id': 4,
                'name': 'Ксюша',
                'date': '28/06/2023',
                'rating': 4,
                'content': 'Кассирша весьма и весьма груба. Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу я мечтал только об одном: скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено. Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.',
            },

            {
                'id': 5,
                'name': 'Сергей',
                'date': '04/04/2023',
                'rating': 3,
                'content': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.',
            },

            {
                'id': 6,
                'name': 'Арсений',
                'date': '23/04/2023',
                'rating': 5,
                'content': 'Получил по лицу'
            },

            {
                'id': 7,
                'name': 'Олег',
                'date': '28/06/2023',
                'rating': 4,
                'content': 'Кассирша весьма и весьма груба. Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу я мечтал только об одном: скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено. Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.',
            },

            {
                'id': 8,
                'name': 'Никита',
                'date': '04/04/2023',
                'rating': 3,
                'content': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.',
            },

            
        ];

        var parent = document.querySelector('.delivery_point_feedback__items');

        var remaining_items = feedback_data.length - start_index;
        var items_to_show = Math.min(3, remaining_items);

        var feedbacks = create_elements(feedback_data.slice(start_index, start_index + items_to_show));

        start_index = (start_index + items_to_show) % feedback_data.length;

        feedbacks.forEach((feedback) => {
            parent.appendChild(feedback);
            console.log(feedback.className)
        });

        if (remaining_items - items_to_show === 0) {
            showMoreButton.remove();
        }

    };

    $('.delivery_point_feedback').on('click', '.delivery_point_feedback__btn', show_more);


    // Zoom photo
    var photoWrapper = document.querySelector('.main_photo_wrapper');
    function handleMouseMove(event) {
    var windowWidth = window.innerWidth;
    
    if (windowWidth > 768) {
        var photo = event.target;
        var rect = photo.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;

        var offsetX = x / rect.width;
        var offsetY = y / rect.height;

        photo.style.transformOrigin = (offsetX * 100) + '% ' + (offsetY * 100) + '%';
    }
    }
    photoWrapper.addEventListener('mousemove', handleMouseMove);

    
    // Slider
    $('.photo_pgn').on('click', '.photo_pgn__wrapper_item', function() {
        // Chage 'src'
        var new_src = $(this).find('.photo_pgn__item').attr('src');
        $('.main_photo').attr('src', new_src);
        $('.main_photo').closest('a').attr('href', new_src);

        // Change class
        $('.photo_pgn__wrapper_item').removeClass('photo_pgn__wrapper_item--selected');
        $(this).addClass('photo_pgn__wrapper_item--selected');
    });


    // Select size
    $('.prod_parameters').on('click', '.choice_size__item', function() {
        $(this).toggleClass('choice_size__item--selected');
    });


    // Select color
    $('.prod_parameters').on('click', '.choice_color__item', function() {
        $(this).toggleClass('choice_color__item--selected');
    });


    // In cart
    $('.prod_parameters').on('click', '.prod_buttons__in_cart', function() {
        if ($(this).hasClass('prod_buttons__in_cart--selected')) {
            $(this).removeClass('prod_buttons__in_cart--selected');
            $(this).text('В корзину')
        }

        else {
            $(this).addClass('prod_buttons__in_cart--selected');
            $(this).text('В корзине')
        }

        // Send to server
        var send_data = data_collection()
        console.log(send_data);
    });


    // Like
    $('.prod_parameters').on('click', '.prod_buttons__in_like', function() {
        if ($(this).hasClass('prod_buttons__in_like--selected')) {
            $(this).attr('src', 'icons/dest/products/like.svg');
            $(this).removeClass('prod_buttons__in_like--selected');
        }

        else {
            $(this).attr('src', 'icons/dest/products/like-fill.svg')
            $(this).addClass('prod_buttons__in_like--selected');
        }

        // Send to server
        var send_data = data_collection()
        console.log(send_data);
    });


    // Buy
    $('.prod_parameters').on('click', '.prod_buttons__btn_buy', function() {
        // Send to server
        var send_data = data_collection()
        console.log(send_data);
    });
});


// Data collection for send to server
function data_collection() {
    var prod_id = $('.prod_buttons__btn_buy').attr('data-prod-id');
    var sizes = $('.choice_size__item--selected').map(function() {
        return $(this).attr('data-size-id');
      }).get();
    
    var colors = $('.choice_color__item--selected').map(function() {
        return $(this).attr('id');
      }).get();

    var data = {
        'prod_id': prod_id,
        'sizes': sizes,
        'colors': colors,
    };

    return data;
};


// Render prod
function render_prod() {
    // Dictionary get from the server
    var prod_data = {
        'prod_name': 'Мартин Иден',

        'prod_id': '1',

        'photo': [
            'images/dest/index/book_2.jpg',
            'images/dest/index/book_3.jpg',
            'images/dest/index/book_4.jpg',
            'images/dest/index/book_5.jpg',
        ],

        'prod_price': '500',

        'sizes': [
            {
                'prod_id': 1,
                'size': '41-42',
            },

            {
                'prod_id': 2,
                'size': '39-42',
            },

            {
                'prod_id': 3,
                'size': '38-41',
            },

            {
                'prod_id': 4,
                'size': '37-40',
            },

            {
                'prod_id': 5,
                'size': '36-39',
            },

            {
                'prod_id': 6,
                'size': '35-38',
            },

        ],

        'colors': [
            'black',
            'white',
            'yellow',
            'red',
            'blue'
        ],

        'seller': {
            'seller_logo': 'images/dest/seller_profile/logo.png',
            'seller_name': 'Just Buy',
        },

        'description': 'Следует отметить, что курс на социально-ориентированный национальный проект создаёт необходимость включения в производственный план целого ряда внеочередных мероприятий с учётом комплекса экономической целесообразности принимаемых решений. Как принято считать, тщательные исследования конкурентов освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, разоблачены. Следует отметить, что существующая теория предполагает независимые способы реализации поставленных обществом задач.',

        'characteristics': [
            {
                'name': 'Вес',
                'value': '36 г',
            },

            {
                'name': 'Количество на поддоне',
                'value': '48 шт',
            },

            {
                'name': 'Вес',
                'value': '36 г',
            },

            {
                'name': 'Вес',
                'value': '36 г',
            },

            {
                'name': 'Вес',
                'value': '36 г',
            },

            {
                'name': 'Вес',
                'value': '36 г',
            },
        ],

        'feedbacks': {
            'rating': 4,
            'count_feedbacks': '2300',
            
            'feedbacks_item': [
                {
                    'username': 'Влад',
                    'rating': 4,
                    'date': '22/04/23',
                    'text': 'Хороший пункт выдачи, накормили, напоили, встретили с хлебом и солью. Я чрезвычайно рад, что в нашем городе есть подобное.'
                },

                {
                    'username': 'Сергей',
                    'rating': 5,
                    'date': '28/06/2023',
                    'text': 'Кассирша весьма и весьма груба. Меня словно морально изнасиловали, когда я вёл с ней эту возмутительную беседу я мечтал только об одном: скорее побежать домой, спрятаться за маминой спиной и плакать ей в колено. Ставлю 5 звёзд, потому что давно никто не будил во мне столь острых чувств. Спасибо.'
                },

                {
                    'username': 'Влад',
                    'rating': 1,
                    'date': '10/05/2017',
                    'text': 'Получил по лицу',
                },
            ]
        },

        'test': false,
    };


    // General render
    $('.product__name').text(prod_data['prod_name']);
    $('.prod_buttons__btn_buy').attr('data-prod-id', prod_data['prod_id']);
    $('.prod_buttons__price').text(prod_data['prod_price'] + '₽');
    $('.description__text').text(prod_data['description']);


    // Render elements
    render_photo(prod_data['photo']);
    render_sizes(prod_data['sizes']);
    render_colors(prod_data['colors']);
    render_seller(prod_data['seller']);
    render_characteristics(prod_data['characteristics']);
    render_feedbacks(prod_data['feedbacks']);

    /* 
        Transfer of information about the seller and description
        to the place where the "sizes" and "colors" sections
        should be
    */
    if (!(prod_data['sizes'] || prod_data['colors'])) {
        $('.seller').appendTo('.prod_parameters');
        $('.description').appendTo('.prod_parameters');
    };
};


// Render photo
function render_photo(data_photo) {
    // For pgn
    var photo_pgn = $('.photo_pgn__item');
    photo_pgn.each(function(index, element) {
        $(element).attr('src', data_photo[index]);
    });

    // For main photo
    $('.main_photo').attr('src', data_photo[0]);
    $('.main_photo').closest('a').attr('href', data_photo[0]);
};


// Render sizes
function render_sizes(data_sizes) {
    if (data_sizes) {
        var parent = $('.choice_size_wrapper');

        // Removing a all items
        parent.find('.choice_size__item').remove();

        // Adding a new items
        $.each(data_sizes, function(index, value) {
            var size_item = $('<div>').attr({
                'class': 'choice_size__item',
                'data-size-id': value['prod_id'],
            }).text(value['size']);

            parent.append(size_item);
        });
    }

    else {
        $('.choice_size').remove();
    };
};


// Render colors
function render_colors(data_colors) {
    if (data_colors) {
        var parent = $('.choice_color_wrapper');

        // Removing a all items
        parent.find('.choice_color__item').remove();

        // Adding a new items
        $.each(data_colors, function(index, value) {
            var color_item = $('<div>').attr({
                'id': value,
                'class': 'choice_color__item',
            });

            parent.append(color_item);
        });
    }

    else {
        $('.choice_color').remove();
    };
};


// Render seller
function render_seller(data_seller) {
    var seller_logo = $('.seller__logo');
    var seller_name = $('.seller__name');

    seller_logo.attr('src', data_seller['seller_logo']);
    seller_name.text(data_seller['seller_name']);
};


// Render characteristics
function render_characteristics(data_characteristics) {
    var parent = $('.characteristics__wrapper');

    // Removing a all items
    parent.find('.characteristics__item').remove();

    // Adding a new items
    $.each(data_characteristics, function(index, value) {
        var li = $('<li>').addClass('characteristics__item');
        var left = $('<div>').addClass('left');
        var item_label = $('<span>').addClass('item__label').text(value['name']);
        var item_cor = $('<span>').addClass('item__cor').text(value['value']);

        // Combining
        left.append(item_label);
        li.append(left, item_cor);

        // Adding to parent
        parent.append(li);
    });
};


// Render feedbacks
function render_feedbacks(data_feedbacks) {
    var parent = $('.delivery_point_feedback__items');
    if (parseInt(data_feedbacks['count_feedbacks']) !== 0) {
        var header_rating = $('.delivery_point_feedback__numerical_rating');
        var count_feedbacks = $('.delivery_point_feedback__count');
        var header_star_wrapper = $('.delivery_point_feedback__rating');

        // Adding to header
        header_rating.text(data_feedbacks['rating']);
        count_feedbacks.text(data_feedbacks['count_feedbacks'] + ' отзывов');

        // Forming a stars
        header_star_wrapper.remove();
        var header_stars = forming_stars(data_feedbacks['rating'], 'delivery_point_feedback__rating', 'delivery_point_feedback__rating_ico');
        $('.delivery_point_feedback__numerical_rating').after(header_stars);

        // Forming a feedback items
        parent.find('.delivery_point_feedback_item').remove()
        $.each(data_feedbacks['feedbacks_item'], function(index, value) {
            // Creating a elements
            var feedback_item = $('<div>').addClass('delivery_point_feedback_item');
            var feedback_header = $('<div>').addClass('delivery_point_feedback_item__header');
            var username = $('<p>').addClass('delivery_point_feedback_item__name').text(value['username']);
            var date = $('<p>').addClass('delivery_point_feedback_item__date').text(value['date']);
            var feedback_stars = forming_stars(value['rating'], 'delivery_point_feedback_item__score', 'delivery_point_feedback_item__score_ico');
            var feedback_content = $('<p>').addClass('delivery_point_feedback_item__content').text(value['text']);

            // Combining a elements
            feedback_header.append(username, date);
            feedback_item.append(feedback_header, feedback_stars, feedback_content);

            // Appending in parent element
            parent.append(feedback_item);
        });
    }

    else {
        parent.html('');
        $('.delivery_point_feedback__header').remove();
        
        var no_section = $('<div>').addClass('no_section no_section--feedbacks').text('Отзывов нет');
        parent.append(no_section);
        $('.delivery_point_feedback__btn').remove();
    };
};


// Forming a stars
function forming_stars(rating, parent_class, item_class) {
    var parent = $('<div>').addClass(parent_class);
    
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            var star = $('<img>').addClass(item_class).attr('src', 'icons/dest/general/star_fill.svg');
        }

        else {
            var star = $('<img>').addClass(item_class).attr('src', 'icons/dest/general/star.svg');
        }

        parent.append(star);
    }
    
    return parent;
};