/* 
  Selection products for sorting happen this way:  
  sent request to server with command ("the best selling", "the most successfull"),
  server generates a list with data for products and send to client.
*/


// Data for sorting
var success_prod = {
  count_prod: 10,
  products: [
    {
      product_id: '123',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '124',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '125',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '126',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '127',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '128',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '129',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '130',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '131',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '132',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '133',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    }
  ]
};

var best_selling_prod = {
  count_prod: 10,
  products: [
    {
      product_id: '123',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '124',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '125',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '126',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '127',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '128',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '129',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '130',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '131',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '132',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '133',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    }
  ]
};


// Data for button "Show more"
var data_products = {
  count_prod: 10,
  products: [
    {
      product_id: '11',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '11',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '12',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '13',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '14',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '15',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '16',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '17',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '18',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '19',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    },

    {
      product_id: '20',
      product_category: 'Книга',
      product_name: 'Рыбак судачит',
      product_price: '1333',
      product_image: 'images/dest/index/book_4.jpg',
      rating: 4,
      count_feedback: 5,
    }
  ]
};


// Dropdown
$(document).ready(function() {
    $('.dropdown-btn, .dropdown-btn__ico').click(function() {
      var dropdownMenu = $('.dropdown-menu');
      var dropdown = $('.dropdown');
      var dropdown_btn = $('.dropdown-btn');
      var dropdown_img = $('.dropdown-btn__img');
  
      dropdownMenu.toggleClass('show');
      dropdown.toggleClass('dropdown--selected');
      dropdown_btn.toggleClass('dropdown-btn--selected');
  
      if (dropdownMenu.hasClass('show')) {
        dropdown_img.attr('src', 'icons/dest/general/dropdown_arrow-active.svg');
      } else {
        dropdown_img.attr('src', 'icons/dest/general/dropdown_arrow.svg');
      }
    });
});
  

// Creating a products
function create_element (i, parent='none') {
  // Creating a product item
  var product_item = $('<div>');

  product_item.attr({
    'class': 'products__item',
    'data-prod-id': success_prod['products'][i].product_id
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
   'src'  : success_prod['products'][i].product_image
  });

  photo_wrapper.append(link_to_photo.append(photo));


  /* Creating a description */

  // Creating a icons
  product_description = $('<div>').addClass('products__description');
  product_icons = $('<div>').addClass('products__icons');

  /* For seller */
  // icon_1 = $('<img>').attr({
  //   'class': 'products__icon products__icon-trash',
  //   'src': 'icons/dest/general/trash.svg',
  // });
  // product_icons.append(icon_1);

  /* For buyer */
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
  product_price.html(`${success_prod['products'][i].product_price} ₽`);

  // Creating a name
  var product_name = $('<p>').addClass('products__name');
  var product_name_link = $('<a>').attr({'href': 'product.html'});
  product_name_link.html(
    `${success_prod['products'][i].product_category}
    /
    ${success_prod['products'][i].product_name}
    `);
  product_name.append(product_name_link);

  
  // Creating a rating
  product_rating = $('<div>').addClass('products__rating');
  product__wrapper_star = $('<div>').addClass('products__wrapper_star');
  
  rating = success_prod['products'][i].rating;

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
  count_feedback.html(success_prod['products'][i].count_feedback);

  product_rating.append(product__wrapper_star, count_feedback);

  
  // Creating a mobile icons
  /* For buyer */
  // prod_mobile_btn = $('<div>').addClass('products__mobile_btn')
  // mobile_btn = $('<button>').addClass('products__icon products__trash').html('Удалить')
  // prod_mobile_btn.append(mobile_btn)

  /* For seller */
  prod_mobile_btn = $('<div>').addClass('products__mobile_btn')
  mobile_btn = $('<button>').addClass('products__icon products__add_to_cart').html('В корзину')
  icon_3 = $('<img>').attr({
    'class': 'products__icon products__icon-small products__icon-like',
    'src': 'icons/dest/general/heart.svg',
  });
  prod_mobile_btn.append(mobile_btn, icon_3)
  

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
  if ($('.sort_success').length > 0) {
    $('.sort_success').find('.products').append(product_item);
  }
  else if ($('.sort_best_selling').length > 0) {
    $('.sort_best_selling').find('.products').append(product_item);
  }
  else {
    parent.append(product_item);
  }

};


// Select sort
$(document).ready(function() {
    $('.dropdown_item').click(function() {
      $('.dropdown_item').removeClass('dropdown_item--selected');
      
      $(this).addClass('dropdown_item--selected');
      $('.dropdown-btn__text').html($(this).html());

      // Hide all sections
      $('.category_item').hide();
      $('.categories').hide();

      // Hide old sorting
      if ($('.sort_success').length > 0) {
        $('.sort_success').remove();
      }

      if ($('.sort_best_selling').length > 0) {
        $('.sort_best_selling').remove();
      };

      // Define type sorting
      var type_sorting = $(this).attr('data-sort-type');

      // Define data for products wrapper
      if (type_sorting == 'successful') {
        var header_name = 'Успешные товары'
        var sect_class = 'sort_success';
      }

      else if (type_sorting == 'best_selling') {
        var header_name = 'Продаваемые товары'
        var sect_class = 'sort_best_selling';
      }

      // Creating a products wrapper
      var section = $('<section>').addClass(`${sect_class} category_item`).attr('data-prod-category', type_sorting);
      var prod_wrapper = $('<div>').addClass('products');
      var title = $('<h1>').addClass('sect__title').text(header_name);
      title.addClass('sect__title--independent')
      
      section.append(title, prod_wrapper);
      $('.my_products').find('.container').append(section)


      if (type_sorting == 'all') {
        // Show default elements
        if ($(window).width() >= 768) {
          $('.categories').show();
        }
        $('.category_item').show();
      }

      else if (type_sorting == 'successful') {
        console.log('Print successful');
        for (var i = 0; i <= success_prod['products'].length-1; i++) {
          create_element(i)
        };
      }

      else if (type_sorting == 'best_selling') {
        console.log('Print best selling')
        for (var i = 0; i <= best_selling_prod['products'].length-1; i++) {
          create_element(i)
        };
      }


    });
});


// Select categories
$(document).ready(function() {
  var allVisible = false;
  
  $('.item').on('click', function() {
    var itemIco = $(this).find('.item__ico');
    var category = $(this).attr('data-prod-category');
    var sections = $('section[data-prod-category="' + category + '"]');
    var all_sections = $('.category_item');
    
    itemIco.toggle();
    
    if ($(this).hasClass('item--select_all')) {
      $('.item__ico').toggle(allVisible);
      allVisible = !allVisible;
      
      if (allVisible) {
        all_sections.slideUp(300);
      } else {
        all_sections.slideDown(300);
      }
      
    } else {
      var count_visible = $('.item__ico:visible').length;
      var count_ico = $('.item__ico').length;

      if (count_ico - 1 == count_visible) {
        $('.item--select_all').find('.item__ico').toggle();
      }

      sections.slideToggle(300);
    }
  });
});


// Mobile spoiler
$(document).ready(function() {
  $('.sect__header_wrapper').on('click', function() {
    if ($(window).width() <= 768) {
      var products = $(this).parent().find('.prod_wrapper');
      var ico = $(this).find('.sect__ico');
      
      if (products.is(':visible')) {
        products.animate({ opacity: 0 }, 300, function() {
          $(this).slideUp(300);
        });
        ico.addClass('rotate180');
      } else {
        products.slideDown(300, function() {
          $(this).animate({ opacity: 1 }, 300);
        });
        ico.removeClass('rotate180');
      }
    }
  });
});


// Show more
$(document).ready(function() {
  var count_load_prod = 5;
    var current_prod = 0;
    var total_count_prod = data_products.count_prod;
  
    function load_product (parent, this_btn) {
      if (current_prod <= total_count_prod-count_load_prod) {
        for (var i = current_prod; i <= current_prod+count_load_prod-1; i++) {
          prod_id = data_products.products[i].product_id;
          create_element(i, parent)
        };
  
        current_prod += count_load_prod;
  
        if (current_prod == total_count_prod) {
          this_btn.remove();
        };
      };
  
    };
  
    // On click
    $('.show_more__btn').on('click', function() {
      var parent = $(this).closest('section').find('.products');
      load_product(parent, $(this));
    });
})

