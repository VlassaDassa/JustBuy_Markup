// Load products
$(document).ready(function() {
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
    
    var count_load_prod = 5;
    var current_prod = 0;
    var total_count_prod = data_products.count_prod;
  
  
    function create_element (i, parent) {
      // Creating a product item
      var product_item = $('<div>');
    
      product_item.attr({
        'class': 'products__item',
        'data-prod-id': data_products.products[i].product_id
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
       'src'  : data_products.products[i].product_image
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
      product_price.html(`${data_products.products[i].product_price} ₽`);
    
      // Creating a name
      var product_name = $('<p>').addClass('products__name');
      var product_name_link = $('<a>').attr({'href': 'product.html'});
      product_name_link.html(
        `${data_products.products[i].product_category}
        /
        ${data_products.products[i].product_name}
        `);
      product_name.append(product_name_link);
    
      
      // Creating a rating
      product_rating = $('<div>').addClass('products__rating');
      product__wrapper_star = $('<div>').addClass('products__wrapper_star');
      
      rating = data_products.products[i].rating;
    
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
      count_feedback.html(data_products.products[i].count_feedback);
    
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
      parent.append(product_item)
    };
    
  
    function load_product (parent) {
      if (current_prod <= total_count_prod-count_load_prod) {
        for (var i = current_prod; i <= current_prod+count_load_prod-1; i++) {
          prod_id = data_products.products[i].product_id;
          console.log(prod_id);
          create_element(i, parent)
        };
  
        current_prod += count_load_prod;
  
        if (current_prod == total_count_prod) {
          $('.products_button__btn').remove()
        };
      };
  
    };
  
    // On click
    $('.products_button__btn').on('click', function() {
      load_product($(this).closest('section').find('.products'));
    });
});


// Like, add to cart or remove prod
$('body').on('click', '.products__icon', function() {
    type_btn = $(this).attr('class');
    
    prod_id = $(this).closest('.products__item').data('prod-id');
    
    // Add to cart
    if (type_btn.includes('cart')) {
        newSrc = 'icons/dest/general/cart-fill.svg';
        originalSrc = 'icons/dest/general/cart.svg';

        // Change mobile cart button
        if ($('.products__mobile_btn').css('display') === 'none') {
          $(this).toggleClass('active');

          if ($(this).hasClass('active')) {
            $(this).fadeOut(200, function() {
                $(this).attr('src', newSrc).fadeIn(200);
            });
          } else {
            $(this).fadeOut(200, function() {
                $(this).attr('src', originalSrc).fadeIn(200);
            });
          }
        }
        // Change desktop cart button
        else {

          $(this).toggleClass('active');

          if ($(this).hasClass('active')) {
            $(this).fadeOut(200, function() {
              $(this).css({'background': 'rgba(245, 75, 100, 0.5)'}).fadeIn(200);
            });
          } else {
            $(this).fadeOut(200, function() {
              $(this).css({'background': 'rgba(245, 75, 100, 0.8)'}).fadeIn(200);
            });
          }
        };
    }

    // Remove
    else if (type_btn.includes('trash')) {
      prod_id = $(this).closest('.products__item').data('prod-id');
      console.log('Remove: ', prod_id);

      if ($('.my_products').length > 0) {
        var parentItem = $(this).closest('.category_item');
        var count_cur_prod = parentItem.find('.products').find('.products__item').length;
        if (count_cur_prod == 1) {
          parentItem.remove();
          $(`.item[data-prod-category="${parentItem.attr('data-prod-category')}"]`).remove();
        };
      };

      $(this).closest('.products__item').remove();

      var count_prod = $('.products__item').length;

      
      if (count_prod == 0) {
          var $noSection = $('<div>', {
            class: 'no_section like_no_prod',
            text: 'Нет понравившихся товаров'
          });
          
          $('.container').find('.like_prod__title').after($noSection);
      }
    }

    // Like
    else {
      var originalSrc = 'icons/dest/general/heart.svg';
      var newSrc = 'icons/dest/general/heart-small-fill.svg';

      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $(this).fadeOut(200, function() {
              $(this).attr('src', newSrc).fadeIn(200);
          });
      } else {
          $(this).fadeOut(200, function() {
              $(this).attr('src', originalSrc).fadeIn(200);
          });
      }
    }
});