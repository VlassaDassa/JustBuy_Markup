// Show/hide all text
$('.about_us__btn').click(function() {
    var $text = $('.abot_us__text');
    var height = $text.height();
    
    if (height == 200) {
      $text.animate({
        height: $text.get(0).scrollHeight
      }, 500);

      $text.addClass('no-bg-after');
      $('.about_us__btn').html('Скрыть текст');
    } 
    
    else {
      $text.animate({
        height: 200
      }, 500);

      $text.removeClass('no-bg-after');
      $('.about_us__btn').html('Показать весь текст');
    }
});


// Slider
$(document).ready(function() {
  var interval;

  $('.preview__pagination-item').click(function() {
    var index = $(this).index();
    $('.preview__wrapper img').hide().eq(index).fadeIn('slow');
    $(this).addClass('preview__pagination-item-current').siblings().removeClass('preview__pagination-item-current');
    clearTimeout(interval); 
    interval = setTimeout(startSlider, 3000); 
  });

  interval = setTimeout(startSlider, 3000); 

  function startSlider() {
    var currentImage = $('.preview__wrapper img:visible');
    currentImage.hide();
    var currentIndex = currentImage.index();
    var nextIndex = currentIndex + 1;
    if (nextIndex === $('.preview__wrapper img').length) {
      nextIndex = 0;
    }
    $('.preview__wrapper img').eq(nextIndex).fadeIn('slow');
    $('.preview__pagination-item').eq(nextIndex).addClass('preview__pagination-item-current').siblings().removeClass('preview__pagination-item-current');

    interval = setTimeout(startSlider, 3000); 
  }
});



// Change photo, when resize window
$(document).ready(function() {
  var screenWidth = $(window).width(); 
  function updateImages() {
    var $previewWrapper = $('.preview__wrapper');
    
    $previewWrapper.find('.preview__photo-big, .preview__photo-medium, .preview__photo-small').remove();
    
    if (screenWidth <= 768) {
      $previewWrapper.append('<img src="images/dest/index/preview__photo-small_1.png" class="preview__photo-small">');
      $previewWrapper.append('<img src="images/dest/index/preview__photo-small_2.png" class="preview__photo-small">');
      $previewWrapper.append('<img src="images/dest/index/preview__photo-small_3.png" class="preview__photo-small">');
    } else if (screenWidth > 768 && screenWidth <= 1024) {
      $previewWrapper.append('<img src="images/dest/index/preview__photo-medium_1.png" class="preview__photo-medium">');
      $previewWrapper.append('<img src="images/dest/index/preview__photo-medium_2.png" class="preview__photo-medium">');
      $previewWrapper.append('<img src="images/dest/index/preview__photo-medium_3.png" class="preview__photo-medium">');
    } else {
      $previewWrapper.append('<img src="images/dest/index/preview__photo-big_1.png" class="preview__photo-big">');
      $previewWrapper.append('<img src="images/dest/index/preview__photo-big_2.png" class="preview__photo-big">');
      $previewWrapper.append('<img src="images/dest/index/preview__photo-big_3.png" class="preview__photo-big">');
    }

    // Показать первую фотографию, остальные скрыть
    $('.preview__wrapper img').hide();
    $('.preview__wrapper img:first').show();
  }

  updateImages();

  $(window).resize(function() {
    screenWidth = $(window).width();
    updateImages();
  });
});








