$(document).ready(function() {
  // Data for render filters
  var filters = [
    {
      'type_filter': 'checkbox',
      'filter_id': 'publisher',
      'filter_name': 'Издатель',
      'filter_elements': [
        {
          'element_name': 'Чернокнижник',
          'element_count': '256',
          'data_id': '1'
        },

        {
          'element_name': 'Фаустиния',
          'element_count': '23',
          'data_id': '2'
        },

        {
          'element_name': 'Радиобудка',
          'element_count': '53',
          'data_id': '3'
        },
      ]
    },

    {
      'type_filter': 'checkbox',
      'filter_id': 'type_papper',
      'filter_name': 'Тип бумаги',
      'filter_elements': [
        {
          'element_name': 'Газетная',
          'element_count': '544',
          'data_id': '1'
        },

        {
          'element_name': 'Туалетная',
          'element_count': '243',
          'data_id': '2'
        },

        {
          'element_name': 'Резиновая',
          'element_count': '253',
          'data_id': '3'
        }
      ]
    },

    {
      'type_filter': 'range',
      'filter_id': 'price',
      'filter_name': 'Цена, ₽',
    },

    {
      'type_filter': 'color',
      'filter_id': 'color',
      'filter_name': 'Цвет',
      'filter_elements': [
        'black',
        'white',
        'red',
        'green',
      ]
    },

    {
      'type_filter': 'radio',
      'filter_id': 'delivery',
      'filter_name': 'Срок доставки',
      'filter_elements': [
        {
          'element_name': 'Любой',
          'element_value': 'any',
        },

        {
          'element_name': '1 день',
          'element_value': 'day_1',
        },

        {
          'element_name': '2 дня',
          'element_value': 'day_2',
        },

        {
          'element_name': '3 дня',
          'element_value': 'day 3',
        },

        {
          'element_name': 'Неделя',
          'element_value': 'week',
        },
      ]
    },

    {
      'type_filter': 'radio',
      'filter_id': 'brand',
      'filter_name': 'Бренд',
      'filter_elements': [
        {
          'element_name': 'Любой',
          'element_value': 'any',
        },

        {
          'element_name': 'Роберт',
          'element_value': 'robert',
        },

        {
          'element_name': 'Не Роберт',
          'element_value': 'not_robert',
        },

        {
          'element_name': 'Август',
          'element_value': 'august',
        },
      ]
    },
  ]


  // Render filters from server
  render_filters(filters);


  // Dropdown
  $('.sort-btn').click(function() {
    var dropdownMenu = $('.sort-menu');
    var dropdown = $('.sort');
    var dropdown_btn = $('.sort-btn');
    var dropdown_img = $('.sort-btn__img');

    if (!dropdown.hasClass('sort--selected')) {
      var contentHeight = dropdownMenu[0].scrollHeight;
      dropdownMenu.css('max-height', contentHeight + 'px');
    }

    else {
      dropdownMenu.css('max-height', 0 + 'px');
    }
    

    // dropdownMenu.toggleClass('show');
    dropdown.toggleClass('sort--selected');
    dropdown_btn.toggleClass('sort-btn--selected');

    dropdown_img.toggleClass('sort-btn__img--selected')
  });


  // Select sort
  $('.sort_item').click(function() {
    var dropdownMenu = $('.sort-menu');
    var dropdown = $('.sort');
    var dropdown_btn = $('.sort-btn');
    var dropdown_img = $('.sort-btn__img');

    $('.sort_item').removeClass('sort_item--selected');

    $(this).addClass('sort_item--selected');
    $('.sort-btn__text').html($(this).html());

    dropdown.toggleClass('sort--selected');
    dropdown_btn.toggleClass('sort-btn--selected');
    dropdownMenu.toggleClass('show');
    dropdown_img.toggleClass('sort-btn__img--selected')

    dropdownMenu.css('max-height', 0 + 'px');


    // Send to server
    send_filters(filters);
  });


  // Spoiler for filters
  $(".spoiler-header").click(function() {
    $(this).parent().toggleClass("active");

    if ($(this).parent().hasClass('active')) {
      $(this).parent().find('.spoiler-header__ico').addClass('flip')
      var content = $(this).parent().find('.content');
      var contentHeight = content[0].scrollHeight;
      content.css('max-height', contentHeight + 'px');
    }

    else {
      $(this).parent().find('.spoiler-header__ico').removeClass('flip')
      $(this).parent().find('.content').css('max-height', 0);
    };
  });


  // Select color
  $('.color__item').click(function() {
    $(this).toggleClass('color__item--selected');

    send_filters(filters);
  });


  // Select radio
  $('.radio_text').click(function() {
    var radioId = $(this).siblings('input[type="radio"]').attr('id');
    $('#' + radioId).prop('checked', true);

    send_filters(filters);
  });


  // Open fast price filter
  $('.button_wrapper').click(function() {
    var height = $('.fast_price_filter')[0].scrollHeight;
    $('.fast_price_filter').toggleClass('fast_price_filter--selected');

    if ($('.fast_price_filter').hasClass('fast_price_filter--selected')) {
      $('.fast_price_filter').css('max-height', height + 'px');
      $('.fast_price_filter').css('padding', 10 + 'px');
    }
    else {
      $('.fast_price_filter').css('max-height', 0 + 'px');
      $('.fast_price_filter').css('padding', 0 + 'px');
    }

    console.log(height);
  });


  // Open/close filters
  $('.filter').click(function() {
    $(this).toggleClass('filter--selected');

    if ($(this).hasClass('filter--selected')) {
      $('.filters').css('max-height', 0 + 'px');
      $('.filters').css('padding', 0 + 'px');

      setTimeout(function() {
        $('.filters').css('display', 'none');
      }, 300);

      max_res_prod();
    }

    else {
      $('.filters').css('display', 'block');
      
      min_res_prod();

      setTimeout(function() {
        $('.filters').css('max-height', 600 + 'px');
        $('.filters').css('padding', 25 + 'px');
      }, 100);
      
    }
  });


  // Select all
  $('.checkbox_wrapper').on('click', '.custom-checkbox--all', function() {
    $(this).prop('checked', !$(this).prop('checked'));
    var isCheckedAll = $(this).prop('checked');

    $(this).closest('.checkbox_wrapper').find('input[type="checkbox"]').prop('checked', isCheckedAll);

    if (isCheckedAll) {
      $(this).closest('.checkbox_wrapper').find('input[type="checkbox"]').addClass('checkbox--selected');
    }

    else {
      $(this).closest('.checkbox_wrapper').find('input[type="checkbox"]').removeClass('checkbox--selected');
    };

    send_filters(filters);
  });


  // Unselect all
  $('.checkbox_wrapper').on('change', 'input[type="checkbox"]', function() {
    var allCheckbox = $(this).closest('.checkbox_wrapper').find('.custom-checkbox--all').find('input[type="checkbox"]');
    var isChecked = true;

    $(this).closest('.checkbox_wrapper').find('input[type="checkbox"]').each(function() {
        if (!$(this).prop('checked')) {
            isChecked = false;
            return false; 
        }
    });
    
    // Adding or removing the class based on the 'checked' property
    if ($(this).prop('checked')) {
        $(this).addClass('checkbox--selected');
    } else {
        $(this).removeClass('checkbox--selected');
    }

    allCheckbox.prop('checked', isChecked);

    send_filters(filters);
  });

  // Inputing a only numbers
  $('.fast_price_filter__input').on('keydown', function(event) {
    var key = event.keyCode || event.which;
    
    if ((key < 48 || key > 57) && key !== 8 && key !== 9 && key !== 37 && key !== 39 && key !== 46) {
        event.preventDefault();
    }
  });


  // Send filter on input range
  $('.fast_price_filter__input').on('input', function(event) {
    send_filters(filters);
  })


  // Show all
  $('.show_all').click(function() {
    var checkbox_data = [
      {
        'name': 'Рыбка',
        'count': '2',
        'data_id': '4',
      },

      {
        'name': 'Крабик',
        'count': '123', 
        'data_id': '5',
      },

      {
        'name': 'Полка',
        'count': '67', 
        'data_id': '6',
      },

      {
        'name': 'Микронод',
        'count': '32',
        'data_id': '7',
      },

      {
        'name': 'Фасфалюген',
        'count': '325',
        'data_id': '8',
      },
    ];

    for (var element of checkbox_data) {
      show_all(element['name'], element['count'], $(this), element['data_id']);
    };

    var content = $(this).closest('.content');
    var contentHeight = content[0].scrollHeight;
    content.css('max-height', contentHeight + 'px');

    $(this).remove();
  });


  // Open mobile filters
  $('.subcaegory_title__ico').click(function() {
    $('.filters').css('display', 'block');
    $('.filters').css('max-height', '100%');
    $('.filters').css('padding', 25 + 'px');

    setTimeout(function() {
    $('.filters').css('left', 0 + 'px');
    }, 300);
  });


  // Close mobile filters
  $('.close_filter').click(function() {
    $('.filters').css('left', -1000 + 'px');
    
    setTimeout(function() {
      $('.filters').css('display', 'none');
    }, 300);
  });


  // Pagination right
  var isClickProcessing = false;
  $('.products_pgn__arrow-right').click(function() {
    if (isClickProcessing) {
      return; 
    }

    isClickProcessing = true; 

    var current_page = parseInt($('.current_number').attr('id').replace('pgn_', ''));
    var step = 50;


    if ($('#pgn_' + (current_page + 1)).length > 0) {
      $('.current_number').removeClass('current_number');

      $('#pgn_' + (current_page + 1)).addClass('current_number');

      var current_value = parseInt($('.slider_wrapper').css('right'));
      $('.slider_wrapper').css('right', current_value + step + 'px');
    }

    setTimeout(function() {
      isClickProcessing = false; 
    }, 300);

    // Send server
    send_filters(filters);

    // Get data from the server
    render_prod(current_page+1);
  });

  // Pagination left
  var isClickProcessing_1 = false;
  $('.products_pgn__arrow-left').click(function() {
    if (isClickProcessing_1) {
      return; 
    }

    isClickProcessing_1 = true;

    var current_page = parseInt($('.current_number').attr('id').replace('pgn_', ''));
    var step = -50;

    if ($('#pgn_' + (current_page - 1)).length > 0) {
      $('.current_number').removeClass('current_number');
      $('#pgn_' + (current_page-1)).addClass('current_number');

      var current_value = parseInt($('.slider_wrapper').css('right'));
      $('.slider_wrapper').css('right', current_value + step + 'px');
    }

    setTimeout(function() {
      isClickProcessing_1 = false; 
    }, 300);

    // Send filter values to the server
    send_filters(filters);

    // Get data from the server and render prod
    render_prod(current_page-1);
  });


});


// Change count products items in row
function min_res_prod() {
  $('.products__item').removeClass('resize')

};

// Change count products items in row
function max_res_prod() {
  $('.products__item').addClass('resize')
};


// Creating a checkbox elements
function show_all(name, count_elements, parent, data_id) {
  var filter_id = parent.closest('.spoiler').attr('id').replace('filter_', '');

  var label = $('<label>').addClass('custom-checkbox');
  var checkbox = $('<input>').attr({
    'type': 'checkbox',
    ['data-' + filter_id]: data_id, 
  });
  var checkmark = $('<span>').addClass('checkmark');
  var content = $('<div>').addClass('checkbox_content');
  var text = $('<p>').addClass('checkbox__text').text(name);
  var count = $('<span>').addClass('checkbox__count_prod').text(count_elements);
  content.append(text, count);
  label.append(checkbox, checkmark, content);

  parent.before(label);
};


// Collecting a filter valies
function collecting_filter_values() {
  console.log('Collecting');
}


// Rendering a products
function render_prod(page) {
  // List  receiver from server
  var products_1 = [
    {
      product_id: '111',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '112',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '113',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '114',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '115',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '116',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '117',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '118',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '119',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '120',
      product_category: 'Книга',
      product_name: 'Голуби',
      product_price: '1333',
      product_image: 'images/dest/index/book_1.jpg',
      rating: 4,
      count_feedback: 5,
    },
  ]

  var products_2 = [
    {
      product_id: '121',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '122',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '123',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '124',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '125',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '126',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '127',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '128',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '129',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },

    {
      product_id: '130',
      product_category: 'Книга',
      product_name: 'Рыбаки',
      product_price: '1333',
      product_image: 'images/dest/index/book_2.jpg',
      rating: 3,
      count_feedback: 2,
    },
  ]


  function create_element (i) {
    var parent = $('.products').first();
  
    // Creating a product item
    var product_item = $('<div>');
  
    product_item.attr({
      'class': 'products__item',
      'data-prod-id': i.product_id
    });
  
  
    // Creating a photo_wrapper, photo and combining them
    var photo_wrapper = $('<div>');
    var link_to_photo = $('<a>');
    var photo = $('<img>');
  
    photo_wrapper.attr({
      'class': 'products__photo_wrapper'
    });
  
    link_to_photo.attr({
      'href': 'product.html'
    });
  
    photo.attr({
     'class': 'products__photo',
     'src'  : i.product_image
    });
  
    photo_wrapper.append(link_to_photo.append(photo));
  
  
    /* Creating a description */
  
    // Creating a icons
    product_description = $('<div>').addClass('products__description');
    product_icons = $('<div>').addClass('products__icons');
  
    icon_1 = $('<img>').attr({
      'class': 'products__icon products__icon-like',
      'src': 'icons/dest/general/heart.svg',
    });
  
    icon_2 = $('<img>').attr({
      'class': 'products__icon products__icon-cart',
      'src': 'icons/dest/general/cart.svg',
    });
  
    product_icons.append(icon_1, icon_2);
  
    // Creating a price
    var product_price = $('<p>').addClass('products__price');
    product_price.html(`${i.product_price} ₽`);
  
    // Creating a name
    var product_name = $('<p>').addClass('products__name');
    var product_name_link = $('<a>').attr({'href': 'product.html'});
    product_name_link.html(
      `${i.product_category}
      /
      ${i.product_name}
      `);
    product_name.append(product_name_link);
  
    
    // Creating a rating
    product_rating = $('<div>').addClass('products__rating');
    product__wrapper_star = $('<div>').addClass('products__wrapper_star');
    
    rating = i.rating;
  
    var total_count = 5;
    var flag = false
    for (var key = 1; key <= total_count; key++) {
      if (key > rating) {
        flag = false
      }
      else{
        flag = true;
      };
  
      // Fill
      if (flag) {
        product__wrapper_star.append(
          '<img src="icons/dest/general/star_fill.svg" class="products__star prodcuts__star-fill">'
        );
  
      }
      // Not fill
      else {
        product__wrapper_star.append(
          '<img src="icons/dest/general/star.svg" class="products__star">'
        );
      };
    };
  
    
    var count_feedback = $('<div>').addClass('products__count_feedback');
    count_feedback.html(i.count_feedback);
  
    product_rating.append(product__wrapper_star, count_feedback);
  
    
    // Creating a icons
    prod_mobile_btn = $('<div>').addClass('products__mobile_btn')
    mobile_btn = $('<buttom>').addClass('products__icon products__add_to_cart').html('В корзину')
    mobile_icon = $('<img>').addClass('products__icon products__icon-small products__icon-like')
                  .attr({'src': 'icons/dest/general/heart.svg'})

    prod_mobile_btn.append(mobile_btn, mobile_icon)

    // Combining description
    var exclude_pages = ['profile']

    if ($('main')) {

      // Adding or not adding are buttons "buy" or "like"
      var cur_page = $('main').attr('class')

      if ($.inArray(cur_page, exclude_pages) !== -1) {
          product_description.append(product_price, product_name, product_rating);
      } else {
          product_description.append(product_icons, product_price, product_name, product_rating, prod_mobile_btn);
      }

    }
  
    // Combining
    product_item.append(photo_wrapper, product_description);
    
    // Insert into parent
    $('.products').append(product_item);
  };
  

  function load_product (products) {
      for (var i of products) {
        create_element(i);
      };
  };

  $('.products').find('.products__item').remove();

  // In reality will be render just "load product" without condition
  if (page == 1) {
    load_product(products_1);
  }

  else {
    load_product(products_2);
  };

};


// Rendering a filters
function render_filters(filters) {
  var parent = $('.filters');

  $.each(filters, function(index, value) {
    if (value.type_filter == 'checkbox') {
      var content = render_checkbox(value);
      parent.append(content);
    }

    else if (value.type_filter == 'range') {
      var content = render_range(value);
      parent.append(content);
    }

    else if (value.type_filter == 'color') {
      var content = render_color(value);
      parent.append(content);
    }

    else if (value.type_filter == 'radio') {
      var content = render_radio(value);
      parent.append(content);
    }


  });
};


// Render checkbox
function render_checkbox(filters) {
  var spoiler = render_spoiler(filters.filter_id, filters.filter_name);
  var parent = spoiler.find('.content'); 
  
  var checkbox_wrapper = $('<div>').addClass('checkbox_wrapper');

  // Checkbox_all
  var checkbox_all = $('<div>').addClass('custom-checkbox custom-checkbox--all');
  var checkbox_all_input = $('<input>', {
    type: 'checkbox'
  });
  var checkmark_all = $('<span>').addClass('checkmark');
  var checkbox_all_content = $('<div>').addClass('checkbox_content');
  var checkbox_all_text = $('<p>').addClass('checkbox__text').text('Все');

  // Combining a checkbox all
  checkbox_all_content.append(checkbox_all_text);
  checkbox_all.append(checkbox_all_input, checkmark_all, checkbox_all_content);
  checkbox_wrapper.append(checkbox_all);

  // Just checkbox
  $.each(filters.filter_elements, function(index, value) {
    var checkbox = $('<label>').addClass('custom-checkbox');

    var checkbox_input = $('<input>', {
      type: 'checkbox'
    }).attr('data-' + filters.filter_id, value.data_id);

    var checkmark = $('<span>').addClass('checkmark');
    var checkbox_count = $('<span>').addClass('checkbox__count_prod').text(value.element_count);
    var checkbox_content = $('<div>').addClass('checkbox_content');
    var checkbox_text = $('<p>').addClass('checkbox__text').text(value.element_name);

    // Combining
    checkbox_content.append(checkbox_text, checkbox_count);
    checkbox.append(checkbox_input, checkmark, checkbox_content);
    checkbox_wrapper.append(checkbox);
  });

  var show_all = $('<p>').addClass('show_all').text('Показать всё');
  checkbox_wrapper.append(show_all);

  parent.append(checkbox_wrapper);

  return spoiler;
};


// Render range
function render_range(filters) {
  var spoiler = render_spoiler(filters.filter_id, filters.filter_name);
  var parent = spoiler.find('.content');

  var range_wrapper = $('<div>').addClass('range');
  var price_wrapper = $('<div>').addClass('fast_price_filter__fields_wrapper');
  var input_wrapper_1 = $('<div>').addClass('range-input_wrapper');
  var label_1 = $('<label>', {
    for: 'from',
    class: 'fast_price_filter__label',
  }).text('От');
  var input_1 = $('<input>', {
    class: 'fast_price_filter__input',
    id: 'from',
    placeholder: '50',
  });

  var input_wrapper_2 = $('<div>').addClass('range-input_wrapper');
  var label_2 = $('<label>', {
    for: 'to',
    class: 'fast_price_filter__label',
  }).text('До');
  var input_2 = $('<input>', {
    class: 'fast_price_filter__input',
    id: 'to',
    placeholder: '40000',
  });

  // Combining
  input_wrapper_1.append(label_1, input_1);
  input_wrapper_2.append(label_2, input_2);

  price_wrapper.append(input_wrapper_1, input_wrapper_2);
  range_wrapper.append(price_wrapper);
  parent.append(range_wrapper);

  return spoiler;
};


// Render color
function render_color(filters) {
  var spoiler = render_spoiler(filters.filter_id, filters.filter_name);
  var parent = spoiler.find('.content'); 
  
  var color = $('<div>').addClass('color');

  $.each(filters.filter_elements, function(index, value) {
    var color_item = $('<div>', {
      class: 'color__item',
      id: value,
    });

    color.append(color_item);
  });

  parent.append(color);

  return spoiler;
};


// Render radio
function render_radio(filters) {
  var spoiler = render_spoiler(filters.filter_id, filters.filter_name);
  var parent = spoiler.find('.content'); 
  var radio_wrapper = $('<div>').addClass('radio_wrapper');
  
  var largestIndex = 0;

  $('[id^="radio"]').each(function() {
    var id = parseInt($(this).attr('id').replace('radio', ''), 10);
    if (id > largestIndex) {
      largestIndex = id;
    }
  });

  $.each(filters.filter_elements, function(index, value) {
    largestIndex++;

    var custom_radio = $('<div>').addClass('custom-radio');
    var radio_input = $('<input>', {
      type: 'radio',
      id: 'radio' + largestIndex,
      name: 'radio-group-' + filters.filter_id,
      value: value.element_value,
    });
    var radio_label = $('<label>', {
      for: 'radio' + largestIndex,
    });
    var radio_text = $('<p>').addClass('radio_text').text(value.element_name);

    // Combining
    custom_radio.append(radio_input, radio_label, radio_text);
    radio_wrapper.append(custom_radio);
  });

  parent.append(radio_wrapper);

  return spoiler;
}


// Render spoiler
function render_spoiler(filter_id, filter_name) {
  var spoiler = $('<div>', {
    class: 'spoiler',
    id: 'filter_' + filter_id,
  });

  var spoiler_header = $('<div>', {
    class: 'spoiler-header'
  });

  var header_text = $('<p>', {
    class: 'spoiler-header__text'
  }).text(filter_name);

  var header_ico = $('<img>', {
    src: 'icons/dest/subcategory/filter_arrow.svg',
    class: 'spoiler-header__ico',
  });

  var content = $('<div>', {
    class: 'content',
  });

  // Combining
  spoiler_header.append(header_text, header_ico);
  spoiler.append(spoiler_header, content);

  return spoiler;
};


// Finding max index in radio buttons
function find_max_index() {
  var largestIndex = 0;

  $('[id^="radio"]').each(function() {
    var id = parseInt($(this).attr('id').replace('radio', ''), 10);
    if (id > largestIndex) {
      largestIndex = id;
    }
  });

  return largestIndex + 1;
};  


// Send filters values
function send_filters(filters) {
  filter_values = [];

  $.each(filters, function(index, value) {
    if (value.type_filter == 'checkbox') {
      var checkbox_ids = get_checkbox_value(value);
      filter_values.push({ [value.filter_id]: checkbox_ids });
    }

    else if (value.type_filter == 'range') {
      var range_values = get_range_value(value);
      filter_values.push({ [value.filter_id]: range_values });
    }

    else if (value.type_filter == 'color') {
      var color_values = get_color_value(value);
      filter_values.push({ [value.filter_id]: color_values });
    }

    else if (value.type_filter == 'radio') {
      var radio_values = get_radio_value(value);
      filter_values.push({ [value.filter_id]: radio_values });
    }
  });

  // Define type sort and send to server
  var text_sort = $('.sort-btn__text').text();
  console.log(text_sort);
  var type_sort = 'rating'

  if (text_sort === 'По рейтингу') {
    type_sort = 'rating';
  }

  else if (text_sort === 'По цене') {
    type_sort = 'price';
  }

  else if (text_sort === 'По продажам') {
    type_sort = 'sale';
  };

  // Add type sort
  filter_values.push({ 'sort': type_sort });

  // Add type category
  var type_subcategory = $('.subcategory').attr('id').replace('category_', '');
  filter_values.push({ 'type_subcategory': type_subcategory });

  // Send to server
  console.log(filter_values);

  // Get data from the server and render products
  render_prod(1);
};


// Get checkbox value
function get_checkbox_value(value) {
  var checkbox_ids = [];
  var selected_checkbox = $('.checkbox--selected');

  selected_checkbox.each(function() {
    var checkbox_id = $(this).attr('data-' + value.filter_id);
    if (typeof checkbox_id !== 'undefined') {
      checkbox_ids.push(checkbox_id);
    }
  });
  
  return checkbox_ids;
};


// Get range value
function get_range_value(value) {
  var from = $('#filter_' + value.filter_id).find('#from').val();
  var to = $('#filter_' + value.filter_id).find('#to').val();

  return {'from': from, 'to': to};
};


// Get color value
function get_color_value(value) {
  var color_wrapper = $('#filter_' + value.filter_id);
  var selected_colors = color_wrapper.find('.color__item--selected');
  var colors = [];

  $.each(selected_colors, function(index, color_item) {
    colors.push($(color_item).attr('id'));
  })

  return colors;
};


// Get radio value
function get_radio_value(value) {
  var radio_wrapper = $('#filter_' + value.filter_id);
  var selected_radio = radio_wrapper.find('input[type="radio"]:checked')

  if (typeof selected_radio.val() !== 'undefined') {
    return selected_radio.val();
  }
};



