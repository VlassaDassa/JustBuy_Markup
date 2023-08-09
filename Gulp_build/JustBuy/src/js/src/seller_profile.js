// Slider feedbacks
$(document).ready(function() {
    var wrapper = $('.feedbacks__wrapper');
    var itemGroup = $('.feedback__item-group');
    var itemGroupWidth = itemGroup.outerWidth(true);
    var wrapperWidth = wrapper.width();
    var totalItems = itemGroup.length;
    var visibleItems = Math.floor(wrapperWidth / itemGroupWidth);
    var currentPosition = 0;
    var isAnimating = false;
  
    function moveItems(direction) {
      if (isAnimating) {
        return;
      }
  
      var newPosition = currentPosition;
  
      if (direction === 'next') {
        newPosition++;
        if (newPosition > totalItems - visibleItems) {
          newPosition = totalItems - visibleItems;
        }
      } else if (direction === 'previous') {
        newPosition--;
        if (newPosition < 0) {
          newPosition = 0;
        }
      }
  
      var translateX = -newPosition * itemGroupWidth;
  
      itemGroup.css('transform', 'translateX(' + translateX + 'px)');
      currentPosition = newPosition;
      isAnimating = true;
  
      setTimeout(function() {
        isAnimating = false;
      }, 500);
    }
  
    $('.feedbacks_next').on('click', function() {
      moveItems('next');
    });
  
    $('.feedbacks_previous').on('click', function() {
      moveItems('previous');
    });
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
      feedback_item.className = 'feedbacks_item';
      feedback_header.className = 'feedbacks_item__header';
      header_name.className = 'feedbacks_item__name';
      header_date.className = 'feedbacks_item__date';
      feedback_score.className = 'feedbacks_item__score';
      feedback_content.className = 'feedbacks_item__content';

      // Filling with content
      header_name.innerHTML = item_data['name'];
      header_date.innerHTML = item_data['date'];
      feedback_content.innerHTML = item_data['content'];

      // Make rating
      for (let i = 1; i <= 5; i++) {
          const score_ico = document.createElement('img');
          score_ico.className = 'feedbacks_item__score_ico';
          
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
var showMoreButton = document.querySelector('.mobile_feedbacks__btn');
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

  var parent = document.querySelector('.mobile_feedbacks__wrapper');

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