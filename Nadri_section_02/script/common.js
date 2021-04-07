new Swiper('.swiper1', {
                // loop:true,
                // spaceBetween: 30,
                   slidesPerView: 4,
                   direction: getDirection(),
                   navigation: {
                   nextEl: '.head_right_btn',
                   prevEl: '.head_left_btn',
                  },
                  on: {
                    resize: function () {
                      swiper.changeDirection(getDirection());
                    }
                  }
                });
function getDirection() {
                  var windowWidth = window.innerWidth;
                  var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

                  return direction;
                };

                

    
    
new Swiper('.swiper2', {
                    slidesPerView: 3,
                    //spaceBetween: 30,
//                    slidesPerGroup: 4,
                    loop: true,
                         loopFillGroupWithBlank: true,
                         pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                          },
                         navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                          },
                        });

    

 new Swiper('.swiper3', {
                          direction: 'vertical',
                          mousewheelControl: true,
                          slidesPerView: 2,
                        //   freeMode: true,
                        //   freeModeSticky: true
                            navigation: {
                                nextEl: '.up_btn',
                                prevEl: '.down_btn',
                             },
                        });



