// Selecting all products
$(document).ready(function() {
    $('.cart__checkbox_all input[type="checkbox"]').on('click', function() {
        var isChecked = $(this).prop('checked');
        $('.cart__checkbox input[type="checkbox"]').prop('checked', isChecked);

        var ids = []
        $('.products__item').each(function () {
            var id = $(this).attr('data-prod-id')
            ids.push(id)
        })

        console.log(ids)
    });


    // Print id selected product
    $('.cart__checkbox_item input[type="checkbox"]').on('click', function() {
        var id = $(this).closest('.products__item').attr('data-prod-id');

        var all_checkboxes = $('.cart__checkbox').not('.cart__checkbox_all').find('input[type="checkbox"]');

        var all_checked = all_checkboxes.toArray().every(function(checkbox) {
            return $(checkbox).prop('checked');
        });

        if (all_checked) {
            $('.cart__checkbox_all').find('input[type="checkbox"]').prop('checked', true);
        }

        else {
            $('.cart__checkbox_all').find('input[type="checkbox"]').prop('checked', false);
        }


        console.log(id)
    });


    // Outputing a the number of product
    $('.products__count-plus').on('click', function() {
        prod = $(this).closest('.products__item');
        prod_id = prod.attr('data-prod-id');
        count_prod = prod.find('.products__count_text');

        count_prod.html(parseInt(count_prod.html()) + 1);

        console.log('ID: ', prod_id);
        console.log('Action: plus');
        console.log('Count prod: ', count_prod.html());
    });

    $('.products__count-minus').on('click', function() {
        prod = $(this).closest('.products__item');
        prod_id = prod.attr('data-prod-id');
        count_prod = prod.find('.products__count_text');

        if (parseInt(count_prod.html()) != 0) {
            count_prod.html(parseInt(count_prod.html()) - 1);
        };

        console.log('ID: ', prod_id);
        console.log('Action: minus')
        console.log('Count prod: ', count_prod.html());
    });


    // Remove product
    $('.products__count-ico, .products__mobile_trash').on('click', function() {
        prod = $(this).closest('.products__item');
        prod_id = prod.attr('data-prod-id');

        console.log('Remove: ', prod_id);
        
        prod.remove()
    });


    // Calculating a count products and total price for one product
    $('.cart_info__btn-buy').on('click', function() {
        console.log('Buy');
        var selected_prod = $('.products__item').find('input[type="checkbox"]:checked').closest('.products__item');
        
        buy_prod = {
            'prod': [],
        }

        selected_prod.each(function() {
            // General
            total_price += parseInt($(this).find('.products__count_text').html()) * parseInt($(this).find('.products__price').html())
            count_prod += parseInt($(this).find('.products__count_text').html());

            // One prod

            if (parseInt($(this).find('.products__count_text').html()) != 0) {
                buy_prod['prod'].push({
                    'id': $(this).data('prod-id'),
                    'total_price': parseInt($(this).find('.products__count_text').html()) * parseInt($(this).find('.products__price').html()),
                    'price': parseInt($(this).find('.products__price').html()),
                    'count': parseInt($(this).find('.products__count_text').html()),
                });
            }
        });

        console.log('Info for one prodcuts: ', buy_prod);
    });


    // Calculating a count products and total price for all products
    $(document).on('click', '.cart__checkbox_all input[type="checkbox"], .cart__checkbox_item input[type="checkbox"], .products__count-minus, .products__count-plus, .products__count-ico, .products__mobile_trash', function() {
        var selected_prod = $('.products__item').find('input[type="checkbox"]:checked').closest('.products__item');
        
        total_price = 0;
        count_prod = 0;
        ids = [];

        selected_prod.each(function() {
            ids.push($(this).data('prod-id'));

            // General
            total_price += parseInt($(this).find('.products__count_text').html()) * parseInt($(this).find('.products__price').html())
            count_prod += parseInt($(this).find('.products__count_text').html());
        });

        $('.cart_info_price__count').html(`${count_prod} шт`);
        $('.cart_info_price__price').html(`${numberWithSpaces(total_price)} ₽`);
    });

});




// Division of a number by digit
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

