$(document).ready( function (){
  
$('.regular').slick({
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  accessibility: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        accessibility: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: false,
        infinite: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        accessibility: false,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});
  $('.next').click(function(){
    $('.regular').slick('slickNext');
  })
  $('.prev').click(function(){
    $('.regular').slick('slickPrev');
  })
  setInterval(function(){
    $('.regular').slick('slickNext');
    },5000);
  // ------------------------------------------------------------------------------------------------
    $('.regular2').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            accessibility: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            accessibility: false,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            accessibility: false,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });
      $('.next2').click(function(){
        $('.regular2').slick('slickNext');
      })
      $('.prev2').click(function(){
        $('.regular2').slick('slickPrev');
      })
      // ------------------------------------------------------------------------------------------------         
        $('.regular_f').slick({
        infinite: true,
        initialSlide: .5,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: .5,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              initialSlide: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              initialSlide: 1,
            }
          }
        ]
        });
        
        // ------------------------------------------------------------------------------------------------         
      
      });