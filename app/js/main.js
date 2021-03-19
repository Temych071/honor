
$(function(){

  $('.header-menu__menu-btn, .menu a').on('click', function(){
    $('.header-menu__items').toggleClass('header-menu__items--active');
  });

  $('.slider-main').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev slider-main__slick-prev"><img class="slider-main__prev-arrow" src="images/arrow-left.png" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next slider-main__slick-next"><img class="slider-main__nexr-arrow" src="images/arrow-right.png" alt="arrow-right"></button>',
  });

  $('.volunteers__items').slick({
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev volunteers__slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next volunteers__slick-next"></button>',
  });

  $('.what-news__slider').slick({
    arrows: false,
    dots: true,
  });

  $('.updates__slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  $('.testimonials__slider').slick({
    arrows: false,
    dots: true,
  });

  function timer1(eventDate, settings){
    var config = {
        endDate: '2021-04-09 09:00',
        timeZone: 'America/Toronto',
        hours: $('#hours'),
        minutes: $('#minutes'),
        seconds: $('#seconds'),
        newSubMessage: 'and should be back online in a few minutes...'
    };

    function prependZero(number){
        return number < 10 ? '0' + number : number;
    }
    $.extend(true, config, settings || {});
    var currentTime = moment();
    var endDate = moment.tz(eventDate, config.timeZone);
    var diffTime = endDate.valueOf() - currentTime.valueOf();
    var duration = moment.duration(diffTime, 'milliseconds');
    var days = duration.days();
    var interval = 1000;
    var subMessage = $('.sub-message');
    var clock = $('.clock');
    if(diffTime < 0){
        endEvent(subMessage, config.newSubMessage, clock);
        return;
    }
    if(days > 0){
        $('#days').text(prependZero(days));
        $('.days').css('display', 'inline-block');
    }
    var intervalID = setInterval(function(){
        duration = moment.duration(duration - interval, 'milliseconds');
        var hours = duration.hours(),
            minutes = duration.minutes(),
            seconds = duration.seconds();
        days = duration.days();
        if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
            clearInterval(intervalID);
            endEvent(subMessage, config.newSubMessage, clock);
            window.location.reload();
        }
        if(days === 0){
            $('.days').hide();
        }
        $('#days').text(prependZero(days));
        config.hours.text(prependZero(hours));
        config.minutes.text(prependZero(minutes));
        config.seconds.text(prependZero(seconds));
    }, interval);
}
function endEvent($el, newText, hideEl){
    $el.text(newText);
    hideEl.hide();
}

  let timer4 = timer1('2021-04-09 09:00');
  let timer2 = timer1('2021-04-22 09:00');
  let timer3 = timer1('2021-04-15 09:00');

});