// Data from backend
var subcategory_items = {
    '1': {
        'name_category': 'Книги',
        'items': [
            {
                'subcategory_name': 'Художественная литература',
                'subcategory_id': 1
            },
            {
                'subcategory_name': 'Детективы',
                'subcategory_id': 2
            },
            {
                'subcategory_name': 'Ужасы',
                'subcategory_id': 3
            },
            {
                'subcategory_name': 'Исторические романы',
                'subcategory_id': 4
            },
            {
                'subcategory_name': 'Фэнтези',
                'subcategory_id': 5
            },
            {
                'subcategory_name': 'Книги для саморазвития',
                'subcategory_id': 6
            },
            {
                'subcategory_name': 'Роман',
                'subcategory_id': 7
            },
            {
                'subcategory_name': 'Фантастика',
                'subcategory_id': 8
            },
            {
                'subcategory_name': 'Триллер',
                'subcategory_id': 9
            },
            {
                'subcategory_name': 'Мистика',
                'subcategory_id': 10
            },
            {
                'subcategory_name': 'Религиозный роман',
                'subcategory_id': 11
            },
            {
                'subcategory_name': 'Любовный роман',
                'subcategory_id': 12
            },
            {
                'subcategory_name': 'Драма',
                'subcategory_id': 13
            },
            {
                'subcategory_name': 'Психологический роман',
                'subcategory_id': 14
            },
            {
                'subcategory_name': 'Сатира',
                'subcategory_id': 15
            },
            {
                'subcategory_name': 'Вестерн',
                'subcategory_id': 16
            },

        ]
    },

    '2': {
        'name_category': 'Электроника',
        'items': [
            {
                'subcategory_name': 'Цифровые пианино',
                'subcategory_id': 7
            },
            {
                'subcategory_name': 'Видеорегистраторы',
                'subcategory_id': 8
            },
            {
                'subcategory_name': 'Электрогитары',
                'subcategory_id': 9
            },
            {
                'subcategory_name': 'Наушники',
                'subcategory_id': 10
            },
        ]
    }
};


// Data about main menu from backend 
var main_category_items = [
    {'name': 'Книги', 'data-menu-id': 1},
    {'name': 'Электроника', 'data-menu-id': 2},
    {'name': 'ПК, ноутбуки, перифирия', 'data-menu-id': 3},
    {'name': 'Комплектующие для ПК', 'data-menu-id': 4},
    {'name': 'Офис и мебель', 'data-menu-id': 5},
    {'name': 'Сетевое оборужование', 'data-menu-id': 6},
    {'name': 'Одежда', 'data-menu-id': 7},
    {'name': 'Красота и здоровье', 'data-menu-id': 8}
]


// Delete gradiend, if cursor hover on the item
function delete_gradient () {
    const hoveredElements = document.querySelectorAll('.menu__main-category-item');
    const removeActiveElement = document.querySelector('.menu__main-category-item-selected');

    hoveredElements.forEach((hoveredElement) => {
    hoveredElement.addEventListener('mouseover', () => {
        removeActiveElement.classList.remove('menu__main-category-item-selected');
    });
    });
}


// Open mobile searchbar
function open_mobile_searchbar() {
    loup = document.querySelector('.header__icons-loup')
    mobile_searchbar = document.querySelector('.mobile_searchbar')

    loup.addEventListener('click', () => {
        mobile_searchbar.classList.remove('mobile_searchbar-hidden');
        $('body').css('overflow', 'hidden');
    })
}


// Close mobile searchbar or mobile menu
function close_mobile() {
    cancel_btn = document.querySelectorAll('.mobile__btn')
    mobile_searchbar = document.querySelector('.mobile_searchbar')
    mobile_menu = document.querySelector('.mobile_menu')

    cancel_btn.forEach(function(button) { // перебираем все кнопки и добавляем на каждую обработчик события
        button.addEventListener('click', function() {
            mobile_searchbar.classList.add('mobile_searchbar-hidden')
            mobile_menu.classList.add('mobile_menu-hidden')
            $('body').css('overflow', 'auto');
        });
    });
}


// Open mobile menu
function open_mobile_menu() {
    burger = document.querySelector('.header__icons-burger')
    mobile_menu = document.querySelector('.mobile_menu')

    burger.addEventListener('click', () => {
        mobile_menu.classList.remove('mobile_menu-hidden')
        $('body').css('overflow', 'hidden');
    })
}

// Jump to subcategory from main category in mobile menu
function jump_to_subcategory() {
    main_category = document.querySelectorAll('.mobile_menu__item')

    $(document).on('click', '.mobile_menu__item', function() {
        menu_id = $(this).data('menu-id')

            parent = document.querySelector('.mobile_menu').querySelector('.container')
            old_menu= document.querySelector('.mobile_menu__list')

            // Title for subcategory
            const title = document.createElement('div')
            title.classList.add('mobile_menu__title')
            title.innerHTML = `<img class="mobile_menu__img" src="icons/dest/general/arrow_left.svg"> 
                                <h1>${subcategory_items[menu_id]['name_category']}</h1>`
                                

            // Subcategory items
            const menu_list = document.createElement('ul')
            menu_list.classList.add('mobile_menu__list')

            subcategory_items[menu_id]['items'].forEach(function(item){
                menu_list.innerHTML += `<li data-subcategory-id="${item["subcategory_id"]}" class="mobile_menu__item">
                                            <a href="subcategory.html">${item['subcategory_name']}</a>
                                            <img class="mobile_menu__img-decorate" src="icons/dest/general/arrow.svg">
                                        </li>`
            })
            
            // Remove elements old menu
            parent.removeChild(old_menu)


            // Insert data in parent
            parent.appendChild(title)
            parent.appendChild(menu_list)
      });
}


// Remove subcategory elements and insert main category elements in mobile menu
function back_to_main() {
    main_category = document.createElement('ul')
    main_category.classList.add('mobile_menu__list')
    
    // Filling the main menu with elements 
    main_category_items.forEach(function(item) {
        main_category.innerHTML += 
        `
            <li data-menu-id="${item["data-menu-id"]}" class="mobile_menu__item">
                <span>${item["name"]}</span><img class="mobile_menu__img-decorate" src="icons/dest/general/arrow.svg">
            </li>
        `
    })

    $(document).on('click', '.mobile_menu__img', function() {
        parent = document.querySelector('.mobile_menu').querySelector('.container')
        subcategory_title = document.querySelector('.mobile_menu__title')
        subcategory_list = document.querySelector('.mobile_menu__list')

        parent.removeChild(subcategory_title)
        parent.removeChild(subcategory_list)

        parent.appendChild(main_category)
      });

}


// Show subcategory, when hover to main category 0.5s in desktop menu
function show_subcategory() {
    let timeoutId;
    let parent = $('.menu__subcategory')

    // If hover 0.5s, then show subcategory
    $('.menu__main-category-item').mouseenter(function() {
        let $this = $(this);
        timeoutId = setTimeout(function() {
            category_id = $this.data('menu-id')
            
            // Split into columns if needed
            count_elements = subcategory_items[category_id]["items"].length
            subcategory_elements = subcategory_items[category_id]["items"]

            if (count_elements > 15) {
                const column_1 = $('<div>', {'class': 'menu__subcategory-column'})
                    .append($('<ul>', {'class': 'menu__subcategory-column-list'}))
                
                const column_2 = $('<div>', {'class': 'menu__subcategory-column'})
                    .append($('<ul>', {'class': 'menu__subcategory-column-list'}))

                    
                $.each(subcategory_elements, function(index, value){
                    if (index+1 >= 30) {return False}

                    if (index+1 <= 15) {

                        new_li = $(document.createElement('li')).attr({
                            'class': 'menu__subcategory-column-item',
                            'data-subcategory-id': value['subcategory_id']
                          }).html('<a href="subcategory.html">' + value['subcategory_name'] + '</a>');

                        column_1.find('ul').append(new_li)
                        
                }

                    else{
                        new_li = $(document.createElement('li')).attr({
                            'class': 'menu__subcategory-column-item',
                            'data-subcategory-id': value['subcategory_id']
                          }).html(value['subcategory_name']);

                        column_2.find('ul').append(new_li)
                    }
                })

                // Remove old elements subcategory from menu
                parent.find('.menu__subcategory-column').remove()

                // Insert new elements subcategory in menu
                parent.append(column_1)
                parent.append(column_2)

                // Change align
                parent.css('justify-content', 'left')
            }

            else {
                const column_1 = $('<div>', {'class': 'menu__subcategory-column'})
                    .append($('<ul>', {'class': 'menu__subcategory-column-list'}))
                
                $.each(subcategory_elements, function(index, value){
                    if (index+1 <= 15) {
                        new_li = $(document.createElement('li')).attr({
                            'class': 'menu__subcategory-column-item',
                            'data-subcategory-id': value['subcategory_id']
                          }).html(value['subcategory_name']);

                        column_1.find('ul').append(new_li)
                    }
                })

                // Remove old elements subcategory from menu
                parent.find('.menu__subcategory-column').remove()

                // Insert new elements subcategory in menu
                parent.append(column_1)

                // Change align
                parent.css('justify-content', 'left')

            }
        }, 500);
    }).mouseleave(function() {
        clearTimeout(timeoutId);
    });
}


$('.header__menu_btn').click(function() {
    $('.menu').toggleClass('menu-hidden');
});

// Start functions
delete_gradient()
open_mobile_searchbar()
open_mobile_menu()
close_mobile()
jump_to_subcategory()
back_to_main()
show_subcategory()