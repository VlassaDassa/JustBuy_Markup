// General dictionary for show subcategories with their fields
var category_fields = [
    {
        'name_category': 'books',
        'label_name': 'Книги',
        'color_field': false,
        'size_field': false,
        'status_subcategory': true,
        'subcategories': [
            {
                'label_name': 'Беллетристика',
                'name': 'fiction',
                'selected_status': true,
                'fields': [
                    {
                        'label_name': 'Вид бумаги',
                        'id': 'type_papper',
                    },

                    {
                        'label_name': 'Наименование книги',
                        'id': 'book_name',
                    },

                    {
                        'label_name': 'Редакция',
                        'id': 'redaction',
                    },

                    {
                        'label_name': 'Обложка',
                        'id': 'cover',
                    },

                    {
                        'label_name': 'Жанры/тематика',
                        'id': 'genre',
                    },

                    {
                        'label_name': 'Автор',
                        'id': 'author',
                    },

                    {
                        'label_name': 'Количество страниц',
                        'id': 'count_pages',
                    },

                    {
                        'label_name': 'Возрастной рейтинг',
                        'id': 'age_rating',
                    },

                    {
                        'label_name': 'Высота упаковки',
                        'id': 'packing_height',
                    },

                    {
                        'label_name': 'Длина упаковки',
                        'id': 'packing_width',
                    },

                ]
            },

            {
                'label_name': 'Комиксы и манга',
                'name': 'comics',
                'selected_status': false,
                'fields': [
                    {
                        'label_name': 'Вид бумаги',
                        'id': 'type_papper',
                    },

                    {
                        'label_name': 'Наименование книги',
                        'id': 'book_name',
                    },

                    {
                        'label_name': 'Редакция',
                        'id': 'redaction',
                    },

                    {
                        'label_name': 'Обложка',
                        'id': 'cover',
                    },

                    {
                        'label_name': 'Жанры/тематика',
                        'id': 'genre',
                    },

                    {
                        'label_name': 'Автор',
                        'id': 'author',
                    },

                    {
                        'label_name': 'Количество страниц',
                        'id': 'count_pages',
                    },

                    {
                        'label_name': 'Возрастной рейтинг',
                        'id': 'age_rating',
                    },

                    {
                        'label_name': 'Высота упаковки',
                        'id': 'packing_height',
                    },

                    {
                        'label_name': 'Длина упаковки',
                        'id': 'packing_width',
                    },

                ]
            },

            {
                'label_name': 'Философия',
                'name': 'philosophy',
                'selected_status': false,
                'fields': [
                    {
                        'label_name': 'Вид бумаги',
                        'id': 'type_papper',
                    },

                    {
                        'label_name': 'Наименование книги',
                        'id': 'book_name',
                    },

                    {
                        'label_name': 'Редакция',
                        'id': 'redaction',
                    },

                    {
                        'label_name': 'Обложка',
                        'id': 'cover',
                    },

                    {
                        'label_name': 'Жанры/тематика',
                        'id': 'genre',
                    },

                    {
                        'label_name': 'Автор',
                        'id': 'author',
                    },

                    {
                        'label_name': 'Количество страниц',
                        'id': 'count_pages',
                    },

                    {
                        'label_name': 'Возрастной рейтинг',
                        'id': 'age_rating',
                    },

                    {
                        'label_name': 'Высота упаковки',
                        'id': 'packing_height',
                    },

                    {
                        'label_name': 'Длина упаковки',
                        'id': 'packing_width',
                    },

                ]
            },
        ],

    },

    {
        'name_category': 'cloths',
        'label_name': 'Одежда',
        'color_field': true,
        'size_field': true,
        'status_subcategory': true,
        'subcategories': [
            {
                'label_name': 'Блузки и рубашки',
                'name': 'shirt',
                'selected_status': true,
                'fields': [
                    {
                        'label_name': 'Тип рубашки',
                        'id': 'type_shirt',
                    },

                    {
                        'label_name': 'Тип карманов',
                        'id': 'type_pockets',
                    },

                    {
                        'label_name': 'Страна производства',
                        'id': 'country',
                    },

                    {
                        'label_name': 'Уход за вещами',
                        'id': 'care_things',
                    },

                    {
                        'label_name': 'Тип ростовки',
                        'id': 'type_height',
                    },

                    {
                        'label_name': 'Коллекции',
                        'id': 'collections',
                    },

                    {
                        'label_name': 'Рисунок',
                        'id': 'picture',
                    },

                    {
                        'label_name': 'Тип рукава',
                        'id': 'type_sleeve',
                    },

                    {
                        'label_name': 'Размеры модели',
                        'id': 'model_size',
                    },

                    {
                        'label_name': 'Декоративные элементы',
                        'id': 'decorative_elements',
                    },

                ]
            },

            {
                'label_name': 'Брюки',
                'name': 'trousers',
                'selected_status': false,
                'fields': [
                    {
                        'label_name': 'Рисунок',
                        'id': 'picture',
                    },

                    {
                        'label_name': 'Наименование',
                        'id': 'name_trousers',
                    },

                    {
                        'label_name': 'Тип посадки',
                        'id': 'type_landing',
                    },

                    {
                        'label_name': 'Тип карманов',
                        'id': 'type_pockets',
                    },

                    {
                        'label_name': 'Уход за вещами',
                        'id': 'type_things',
                    },

                    {
                        'label_name': 'Декоративные элементы',
                        'id': 'decorative_elements',
                    },

                    {
                        'label_name': 'Фактура материала',
                        'id': 'material_texture',
                    },

                    {
                        'label_name': 'Страна производства',
                        'id': 'country',
                    },

                    {
                        'label_name': 'Вид застёжки',
                        'id': 'type_fastener',
                    },

                    {
                        'label_name': 'Коллекция',
                        'id': 'collections',
                    },

                ]
            },

            {
                'label_name': 'Обувь',
                'name': 'boots',
                'selected_status': false,
                'fields': [
                    {
                        'label_name': 'Материал подошвы',
                        'id': 'sole_material',
                    },

                    {
                        'label_name': 'Полнота обуви',
                        'id': 'completeness_shoes',
                    },

                    {
                        'label_name': 'Вес товара с упаковкой',
                        'id': 'weigth_with_pack',
                    },

                    {
                        'label_name': 'Модель',
                        'id': 'model',
                    },

                    {
                        'label_name': 'Вес',
                        'id': 'weight',
                    },

                    {
                        'label_name': 'Коллекция',
                        'id': 'collections',
                    },

                    {
                        'label_name': 'Особенности модели',
                        'id': 'model_features',
                    },

                    {
                        'label_name': 'Тип покрытия',
                        'id': 'type_coverage',
                    },

                    {
                        'label_name': 'Декоративные элементы',
                        'id': 'decorative_elements',
                    },

                    {
                        'label_name': 'Пол',
                        'id': 'gender',
                    },

                ]
            },

            
        ],

    },

    {
        'name_category': 'electronics',
        'label_name': 'Электроника',
        'color_field': true,
        'size_field': false,
        'status_subcategory': true,
        'subcategories': [
            {
                'label_name': 'Принтеры',
                'name': 'printer',
                'selected_status': true,
                'fields': [
                    {
                        'label_name': 'Гарантийный срок',
                        'id': 'warranty_period',
                    },

                    {
                        'label_name': 'Тип принтера',
                        'id': 'type_printer',
                    },

                    {
                        'label_name': 'Модель',
                        'id': 'model',
                    },

                    {
                        'label_name': 'Максимальное разрешение печати',
                        'id': 'max_resolution',
                    },

                    {
                        'label_name': 'Технология печати',
                        'id': 'printing_technology',
                    },

                    {
                        'label_name': 'Цветность печати',
                        'id': 'color_print',
                    },

                    {
                        'label_name': 'Масимальное разрешение экрана',
                        'id': 'max_resolution_2',
                    },

                    {
                        'label_name': 'Формат печати',
                        'id': 'print_format',
                    },

                    {
                        'label_name': 'Интерфейс',
                        'id': 'interface',
                    },

                    {
                        'label_name': 'Длина упаковки',
                        'id': 'pack_size',
                    },

                ]
            },

            {
                'label_name': 'Ноутбуки',
                'name': 'laptop',
                'selected_status': false,
                'fields': [
                    {
                        'label_name': 'Версия операционной системы',
                        'id': 'os_version',
                    },

                    {
                        'label_name': 'Модель',
                        'id': 'model',
                    },

                    {
                        'label_name': 'Операционная система',
                        'id': 'os',
                    },

                    {
                        'label_name': 'Гарантийный срок',
                        'id': 'warranty_period',
                    },

                    {
                        'label_name': 'Тип видеокарты',
                        'id': 'type_videocard',
                    },

                    {
                        'label_name': 'Видеоадаптер',
                        'id': 'video_adapter',
                    },

                    {
                        'label_name': 'Объём памяти видеоадаптера',
                        'id': 'count_memory_videoapater',
                    },

                    {
                        'label_name': 'Разрешение экрана',
                        'id': 'resolution_screen',
                    },

                    {
                        'label_name': 'Поверхность экрана',
                        'id': 'type_surface',
                    },

                    {
                        'label_name': 'Диагональ экрана',
                        'id': 'screen_diagonal',
                    },

                ]
            },

            {
                'label_name': 'Компьютеры',
                'name': 'computers',
                'selected_status': false,
                'fields': [
                    {
                        'label_name': 'Процессор',
                        'id': 'processor',
                    },

                    {
                        'label_name': 'Тактовая частота процессора',
                        'id': 'clock_frequency',
                    },

                    {
                        'label_name': 'Количество ядер процессора',
                        'id': 'count_cores',
                    },

                    {
                        'label_name': 'Тип оперативной памяти',
                        'id': 'type_ram',
                    },

                    {
                        'label_name': 'Частота оперативной памяти',
                        'id': 'frequency_ram',
                    },

                    {
                        'label_name': 'Объём оперативной памяти',
                        'id': 'amount_ram',
                    },

                    {
                        'label_name': 'Объём накопителя',
                        'id': 'amount_storage',
                    },

                    {
                        'label_name': 'Тип накопителя',
                        'id': 'type_storage',
                    },

                    {
                        'label_name': 'Операционная система',
                        'id': 'os',
                    },

                    {
                        'label_name': 'Вид разъёма',
                        'id': 'connector_type',
                    },

                ]
            },

            
        ],

    },

    {
        'name_category': 'shoes',
        'label_name': 'Туфли',
        'color_field': true,
        'size_field': true,
        'status_subcategory': false,
        'fields': [
            {
                'label_name': 'Гарантийный срок',
                'id': 'warranty_period',
            },

            {
                'label_name': 'Поверхность',
                'id': 'surface',
            },

            {
                'label_name': 'Пол',
                'id': 'gender',
            },

            {
                'label_name': 'Тип ростовки',
                'id': 'type_height',
            },

            {
                'label_name': 'Коллекция',
                'id': 'collections',
            },

            {
                'label_name': 'Рисунок',
                'id': 'picture',
            },

            {
                'label_name': 'Тип рукава',
                'id': 'type_sleeve',
            },

            {
                'label_name': 'Размеры модели',
                'id': 'model_size',
            },

            {
                'label_name': 'Декоративные элементы',
                'id': 'decorative_elements',
            },

            {
                'label_name': 'Размер упаковки',
                'id': 'pack_size',
            },
        ] 

    },

]


$(document).ready(function() {
    // Add photo
    $('.wrapper_photo--plus').click(function() {
        $('.add_photo').click()
    })


    // Image validating
    $('.add_photo').change(function(event) {
        var file = event.target.files[0];

        // Type validating
        if (file.type.match('image.*')) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            
            reader.onload = function(event) {
                var image = new Image();

                image.onload = function() {
                    var width = this.width;
                    var height = this.height;

                    if (width < 516 || height < 688) {
                        $('.add_photo').val('')
                        showWarning('Минимальный размер 516x688')
                    }
                    
                    else {
                        var count_photo = $('.wrapper_photo:not(.wrapper_photo--plus)').length
                        
                        if (count_photo < 5) {
                            create_photo(event.target.result)

                            var count_photo = $('.wrapper_photo:not(.wrapper_photo--plus)').length
                            if (count_photo == 5) {
                                $('.wrapper_photo--plus').addClass('hidden')
                            }
                        }
                    }
                };
                image.src = event.target.result;
            };
        }

        else {
            $('.add_photo').val('')
            showWarning('Неверный тип файла')
        }
    });


    // Delete image
    $('.photos').on('click', '.wrapper_photo__icon', function() {
        $(this).parent().remove();
        var count_photo = $('.wrapper_photo:not(.wrapper_photo--plus)').length;
        if (count_photo == 4) {
            $('.wrapper_photo--plus').removeClass('hidden');
        }
    });


    // Add fileds 'size' or 'color'
    $('.small_column').on('click', '.circle', function() {
        var small_column = $(this).parent().parent();
        var row = $(this).parent();

        var clone_row = row.clone();
        clone_row.find('.general_characteristics__label').remove();
        clone_row.find('input').val('');
        small_column.append(clone_row);

        var trash = $('<img>', {
            src: 'icons/dest/general/trash.svg',
            class: 'icon add_product__trash'
            });

        row.append(trash);

        $(this).remove();

        var count_row = row.parent().find('.small_column__row').length;
        if (count_row > 2) {
            var first_field = row.parent().find('.small_column__row').first()
            first_field.find('.add_product__trash').remove()
        }
        
    });


    // Remove filed
    $('.small_column').on('click', '.add_product__trash', function() {
        var count_rows = $(this).parent().parent().find('.small_column__row').length;
        
        if (count_rows == 2) {
            $(this).parent().parent().find('.small_column__row').last().remove();

            var first_field = $(this).parent().parent().find('.small_column__row').first();
            first_field.find('.add_product__trash').remove();

            var circle = $('<div>').addClass('icon add_product__color circle');
            var plus = $('<div>').addClass('add_product__color plus');
            circle.append(plus);

            first_field.append(circle);
        }

        else if (count_rows == 3) {
            var trash = $('<img>', {
                src: 'icons/dest/general/trash.svg',
                class: 'icon add_product__trash'
            });

            $(this).parent().parent().find('.small_column__row').first().append(trash)
            $(this).parent().remove();
        }
        else {
            $(this).parent().remove();
        };

    });


    // Replace fields on select subcategory
    $('.general_characteristics__item_wrapper').on('change', '#subcategory', function() {
        var selected_value = $(this).val();
        var main_category = $('#category').val();

        // Show new fields
        find_need_fields(main_category, selected_value);
    });


    // Replace subcategory field
    $('.general_characteristics__item_wrapper').on('change', '#category', function() {
        var selected_value = $(this).val();
        var sub_category = $('#subcategory').val();

        // Show subcategory 'select' field
        show_subcategory_field(selected_value);

        var selected_value = $(this).val();
        var sub_category = $('#subcategory').val();

        // Show new fields
        find_need_fields(selected_value, sub_category);
    })


    // Start show fields
    show_fields(category_fields[0]['subcategories'][0]['fields']);


    // Validating on submit
    $(document).on('submit', '.add_prod_form__form', function(event) {
        event.preventDefault();

        

        // Check images
        var count_image = $('.wrapper_photo:not(.wrapper_photo--plus)').length
        if (count_image == 0) {
            showWarning('Недостаточно фотографий')
        }
        else{
            // Check fields
            var fields = $('.general_characteristics__input:not(#hidden)');
            var send_form = true;
            fields.each(function() {
                var fieldValue = $(this).val();
                if ($(this).attr('id') != 'price' && $(this).attr('id') != 'count') {
                    $(this).removeClass('error');
                };

                $('.small_column--size--hidden .general_characteristics__input').removeClass('error');

                if (fieldValue == '' && $(this).closest('.small_column--size--hidden').length == 0) {
                    send_form = false
                    $(this).addClass('error')
                }
            });

            if (send_form) {
                var errors = $('.error')

                if (errors.length > 0) {
                    showWarning('Неверное заполнены поля')
                } 
                else {
                    $('.add_prod_form__form').off('submit').get(0).submit();
                }
            }
            else {
                showWarning('Неверное заполнены поля')
            }
        }
    });


    // Validating in realtime
    $('.general_characteristics').on('input', '#price, #count, #description', function(event) {
        var value = $(this).val();
        var id = $(this).attr('id')
        if (id == 'price') {
            price_validating(value, $(this));
        }
        else if (id == 'count'){
            count_validating(value, $(this))
        }
        else if (id == 'description') {
            description_validating(value, $(this))
        }

    });
});


// Display photo from input
function create_photo(src) {
    var wrapper_photo = $('<div>').addClass('wrapper_photo');

    var image = $('<img>').addClass('wrapper_photo__photo').attr('src', src);
    wrapper_photo.append(image);

    var icon = $('<img>').addClass('wrapper_photo__icon icon').attr('src', 'icons/dest/general/trash.svg');
    wrapper_photo.append(icon);

    $('.wrapper_photo--plus').before(wrapper_photo);
};


// Show warning
function showWarning(message) {
    var warning = document.createElement('div');
    warning.classList.add('warning');
    warning.textContent = message;

    document.body.appendChild(warning);

    setTimeout(function() {
      warning.classList.add('show');
    }, 100);

    setTimeout(function() {
      warning.classList.remove('show');
      setTimeout(function() {
        warning.remove();
      }, 300);
    }, 3000);
};


// Show fields
function show_fields(fields) {
    var count_column = parseInt(fields.length / 2);
    var parent = $('.column_wrapper');
    var left_column = $('<div>').addClass('left_column');
    var right_column = $('<div>').addClass('right_column');

    parent.empty();
    

    if (fields.length % 2 === 0) {
        var pairing = false
    }
    else {
        var pairing = true
    };

    if (pairing) {
        count_column += 1
    };

    $.each(fields, function(index, value) {
        var item_wrapper = $('<div>').addClass('general_characteristics__item_wrapper');

        var label = $('<label>').addClass('general_characteristics__label');
        label.attr('for', value['id']);
        label.html(value['label_name']);

        var field = $('<input>').addClass('general_characteristics__input');
        field.attr('id', value['id']);

        item_wrapper.append(label, field);


        if (index+1 <= count_column) {
            left_column.append(item_wrapper)
        }
        else {
            right_column.append(item_wrapper)
        }
    });

    parent.append(left_column, right_column)
};


// Validating for price
function price_validating(value, input) {
    var isPositiveIntegerGreaterThan100 = /^[1-9]\d*$/.test(value) && parseInt(value) >= 100 && parseInt(value) <= 1000000;
    input.removeClass('error')

    if (isPositiveIntegerGreaterThan100) {
        return
    }
    else {
        input.addClass('error')
    }
};


// Validating for count
function count_validating(value, input) {
    var isPositiveIntegerGreaterThan100 = /^[1-9]\d*$/.test(value) && parseInt(value) >= 5 && parseInt(value) <= 100000;
    input.removeClass('error')

    if (isPositiveIntegerGreaterThan100) {
        return
    }
    else {
        input.addClass('error')
    }
};


// Validating for description
function description_validating(value, input) {
    var isPositiveIntegerGreaterThan100 = value.length >= 100 && value.length <= 500;
    input.removeClass('error')

    if (isPositiveIntegerGreaterThan100) {
        return
    }
    else {
        input.addClass('error')
    }
};


// Show subcategory option in "select field" 
function show_subcategory_field(category_name) {
    var subcategory_field = $('#subcategory');
    subcategory_field.parent().removeClass('general_characteristics__item_wrapper--hidden--subcategory')

    var old_options = subcategory_field.find('option');
    old_options.each(function(index, value) {
        $(value).remove()
    })

    $.each(category_fields, function(index, value) {
        if (value['name_category'] == category_name) {
            var subcategories = value['subcategories']

            if (value['status_subcategory']) {
                $.each(subcategories, function(index_1, value_1) {
                    // Add new options
                    var option = $('<option>');
                    option.attr('value', value_1['name']);

                    // Status selected
                    option.attr('selected', value_1['selected_status']);

                    option.html(value_1['label_name'])
                    subcategory_field.append(option);

                    // Remove or add "Size/color" fields
                    toggle_size_color_field(value['color_field'], value['size_field']);
                })

                return
            }
            else {
                subcategory_field.parent().addClass('general_characteristics__item_wrapper--hidden--subcategory')
                
                // Remove or add "Size/color" fields
                toggle_size_color_field(value['color_field'], value['size_field']);

                // Just adding a fields without adding subcategory "select"
                show_fields(value['fields']);
                return
            };

        };
    })
};


// Add or remove 'size' field or 'color' field
function toggle_size_color_field(color_status, size_status) {
    var color_field = $('.small_column--color');
    var size_field = $('.small_column--size');


    // Reset
    color_field.addClass('small_column--color--hidden');
    size_field.addClass('small_column--size--hidden');

    if (color_status) {
        color_field.removeClass('small_column--color--hidden');
    }

    if (size_status) {
        size_field.removeClass('small_column--size--hidden');
    }
    
};


// Find needed fields
function find_need_fields(main_category, selected_value) {
    $.each(category_fields, function(index, value) {
        if (value['name_category'] == main_category) {
            $.each(value['subcategories'], function(index_1, value_2) {
                if (value_2['name'] == selected_value) {
                    show_fields(value_2['fields']);
                    return;
                };
            });
            return;
        };
    });
};


