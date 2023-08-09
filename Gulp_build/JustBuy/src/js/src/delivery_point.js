// Photo slide
$(document).ready(function() {
    $('.location__photo_pgn_item').on('click', function() {
      $('.location__photo_pgn_item').removeClass('location__photo_pgn_item-selected');
      $(this).addClass('location__photo_pgn_item-selected');
  
      var selectedSrc = $(this).attr('src');
  
      $('.location__photo').each(function() {
        var photoSrc = $(this).attr('src');
  
        if (photoSrc === selectedSrc) {
          $('.location__photo').removeClass('location__photo-selected');
          $(this).fadeIn().addClass('location__photo-selected');
        } else {
          $(this).fadeOut();
        }
      });
    });
});


// Zoom
var photoWrapper = document.querySelector('.location__photo_wrapper');
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



// Show more
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
var showMoreButton = document.querySelector('.delivery_point_feedback__btn');
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
showMoreButton.addEventListener('click', show_more);


// Mobile slider
$(document).ready(function() {
    var photoWrapper = $('.location__photo_wrapper');
    var photos = photoWrapper.find('.location__photo');
    var currentIndex = photos.index($('.location__photo-selected'));
    var totalPhotos = photos.length;
  
    var startX;
    var endX;
  
    photoWrapper.on('touchstart', function(event) {
      startX = event.originalEvent.touches[0].clientX;
    });
  
    photoWrapper.on('touchend', function(event) {
      endX = event.originalEvent.changedTouches[0].clientX;
      handleSwipe();
    });
  
    function handleSwipe() {
      var threshold = 50; // Минимальное смещение для определения свайпа
  
      if (endX < startX - threshold) {
        currentIndex++;
        if (currentIndex >= totalPhotos) {
          currentIndex = 0;
        }
      } else if (endX > startX + threshold) {
        currentIndex--;
        if (currentIndex < 0) {
          currentIndex = totalPhotos - 1;
        }
      }
  
      updateSelectedPhoto();
    }
  
    function updateSelectedPhoto() {
      photos.removeClass('location__photo-selected');
      $(photos[currentIndex]).addClass('location__photo-selected');
    }
});



// Map
var myMap;
ymaps.ready(initMap); 
      
// Init map
function initMap() {
    // Creating a dark map
    const DARK_MAP = 'custom#dark';
    ymaps.layer.storage.add(DARK_MAP, function DarkLayer() {
        return new ymaps.Layer(
            'https://core-renderer-tiles.maps.yandex.net/tiles?l=map&theme=dark&%c&%l&scale={{ scale }}',
        );
    });

    ymaps.mapType.storage.add(DARK_MAP, new ymaps.MapType('Dark Map', [DARK_MAP]));

    myMap = new ymaps.Map("map", {
        center: [56.714043833899694, 36.775234726846115],
        zoom: 16,
        controls: [],
        type: DARK_MAP 
    });

    // List marks
    var markers = [
        {
            coordinates: [56.714043833899694, 36.775234726846115],
            id: '1',
            schedule: '8:00 - 21:00'
        }
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
            iconLayout: 'default#image',
            iconImageHref: 'data:image/svg+xml;utf-8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><circle cx="10" cy="10" r="10" fill="#FF3194"/></svg>'),
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -20]
        });

        circlePlacemark.events.add('click', function(e) {
            var target = e.get('target');
            var id = target.properties.get('iden');

            // Get address using geocoding
            ymaps.geocode(target.geometry.getCoordinates()).then(function(result) {
                var address = result.geoObjects.get(0).getAddressLine();

                // Display information window with address and working hours
                var infoContent = '<div style="padding: 10px;"><strong>Адрес:</strong> ' + address + '</br><strong>График работы:</strong> ' + marker.schedule + '</div>';
                target.properties.set('balloonContentBody', infoContent);
                target.balloon.open();
            });
        });

        myMap.geoObjects.add(circlePlacemark);
    });
}


// Show/hide mobile map
$(document).ready(function() {
    $('.delivery_point_info__btn').on('click', function() {
        $(this).hide();
        $('.map').css('display', 'flex');
        initMap(); 
    });

    $('.map__btn_close').on('click', function() {
        $('.map').hide();
        $('.delivery_point_info__btn').css('display', 'block');
    });
});

// Initialize the map on page load
$(document).ready(function() {
    initMap();
});


// Show/hide map om resize
var isScrolling = false;
$(window).on('scroll', function() {
  isScrolling = true;
});

$(window).on('resize', function() {
  if (!isScrolling) {
    var windowWidth = $(window).width();
    var deliveryPointInfoBtn = $('.delivery_point_info__btn');
    var map = $('.map');

    if (windowWidth > 768 && map.is(':hidden')) {
      deliveryPointInfoBtn.hide();
      map.css('display', 'flex');
      initMap();
    } else if (windowWidth <= 768 && map.is(':visible')) {
      deliveryPointInfoBtn.show();
      map.hide();
    }
  }

  isScrolling = false; 
});
