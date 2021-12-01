
// $(document).ready(function(){
//     $('.carousel__inner').slick(
//         {
//             speed: 1200,
//             // adaptiveHeight: true,
//             prevArrow: '<button type="button" class="slick-prev"><img src="./icons/chevron left solid.png"></button>',
//             nextArrow: '<button type="button" class="slick-next"><img src="./icons/chevron-right-solid.png"></button>',
//             responsive:[
//                 {
//                   breakpoint: 1024,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: true
//                   }
//                 },
//                 {
//                   breakpoint: 990,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                   }
//                 },
//                 {
//                   breakpoint: 480,
//                   settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                   }
//                 }

//               ]
//           }
//     );
//   });
 
'use strick';

$(document).ready(function () {

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    navCurrent: false,
    nav: false,
    responsive: {
        991: {
            nav: false,
        },
        320: {
            nav: true,
        },
        575: {
            nav: true,
        },
        776: {
            nav: true,
            
        },
 
  
      }
 


  });



  document.querySelector('.prev').addEventListener('click', function ()  {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function ()  {
    slider.goTo('next');
  });


  //tabs

  const tabsDiv = document.querySelectorAll('.catalog__tab_div');
  const tabs = document.querySelectorAll('.catalog__tab');
//   const tabsParent = document.querySelector('.catalog__tabs');
  const tabContent = document.querySelectorAll('.catalog__content');


  function tabHideContent() {
      tabs.forEach(item => {
          item.classList.remove('catalog__tab_active');

        tabContent.forEach(item => {
            item.classList.remove('catalog__content_active', 'fade');
        })

      })
  }

  function tabShowContent(i = 0) {
    tabs[i].classList.add('catalog__tab_active');
    tabContent[i].classList.add('catalog__content_active', 'fade');
}

tabHideContent();
tabShowContent();



    // tabsParent.addEventListener('click', (event) => {
            
    //     const target = event.target;

    //     if (target && target.classList.contains('catalog__tab_div')) {
    //         tabs.forEach((item, i) => {
    //             if (target == item) {

    //                 tabHideContent();
    //                 tabShowContent(i);
            
    //             }
    //         });
    //     }

    // });



tabsDiv.forEach(item => {
    item.addEventListener('click', (event) => {

        
        tabsDiv.forEach((item, i) => {
            if (event.target == item) {

           
                tabHideContent();
                tabShowContent(i);
            
            }
            
        });
    });
});


    const linksBtn = document.querySelectorAll('.catalog-item__link');
    const backBtn = document.querySelectorAll('.catalog-item__block__back');
    const parentLinksDiv = document.querySelectorAll('.catalog-item__content');
    const parentBackDiv = document.querySelectorAll('.catalog-item__block');





    function toggleSlide(i) {
        parentLinksDiv[i].classList.toggle('catalog-item__content_active');
        parentBackDiv[i].classList.toggle('catalog-item__block_active');

        
    } 
 
    function toggleSlides(buttons) {
        buttons.forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                buttons.forEach((item, i) => {
                    if(event.target == item) {
                        toggleSlide(i);
                    }
                })
            });
        });
    }

    toggleSlides(linksBtn);
    toggleSlides(backBtn);


    //modal

    const modal = document.querySelector('.overlay'),
          modalConsultation = document.querySelector('#consultation'),
          modalOrder = document.querySelector('#order'),
          modalThanks = document.querySelector('#thanks'),
          triggerConsultation = document.querySelectorAll('[data-modal=consultation]'),
          triggerOrder = document.querySelectorAll('.catalog-item'),
          subHeaderModal = document.querySelectorAll('.catalog-item__subtitle'),
          triggerClose = document.querySelectorAll('.modal__close');
          let modalDescr = document.querySelector('#descr');



    function openModalCons (item) {
        if (item === modalOrder) {
            item.classList.add('show');
            modal.classList.add('show');
            item.classList.remove('hide');
            modal.classList.remove('hide');
            modalConsultation.classList.add('hide');
        }   
        if (item === modalConsultation)
        {
            item.classList.add('show');
            modal.classList.add('show');
            item.classList.remove('hide');
            modal.classList.remove('hide');
            modalOrder.classList.add('hide');

        }
       
        document.body.style.overflow = 'hidden';
    }


    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        modalOrder.classList.add('hide');
        modalOrder.classList.remove('show');
        modalConsultation.classList.add('hide');
        modalConsultation.classList.remove('show');

        document.body.style.overflow = '';
    
      }

    triggerConsultation.forEach(item => {
        item.addEventListener('click', () => openModalCons(modalConsultation));
        console.log(subHeaderModal[1].innerHTML);
    });


 

    triggerOrder.forEach((item,i) => {

        item.addEventListener('click', (event) => {
            

            if (event.target && event.target.classList.contains('button_mini')) {

                console.log(triggerOrder[i]);
                
                
                openModalCons(modalOrder);
                modalDescr.textContent = subHeaderModal[i].innerHTML;

            }

        });
            
        });
    
    
    triggerClose.forEach(item => {
        item.addEventListener('click', closeModal);
    });
    

    //validate form jquery


    
    function valideForms(form) {
        
        $(form).validate({
            rules: {
                 name: {
                   required: true,
                   minlength: 2
                 },
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
   
            },
               messages: {
                   name: {
                       required: "Пожалуйста, введите свое имя",
                       minlength: jQuery.validator.format("Введите минимум {0} символа!")
                     },
                   phone: "Пожалуйста, введите свой номер телефона",
                   email: {
                     required: "Пожалуйста, введите свою почту",
                     email: "Неправильно введен адрес почты"
                   }
            }
       });

    }

    valideForms('#consultation-form');
    valideForms('#consultation form');
    valideForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-9999"); 


    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('#thanks').fadeIn('slow');
            
 
            $('form').trigger('reset');
        });
        return false;
    });

    //smoth scroll and page up

    $(window).scroll(function() {

        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        }
        else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href^='#']").on('click', function(event) {

       
        if (this.hash !== "") {
          
          event.preventDefault();
    
          
          var hash = this.hash;
    
          
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 400, function(){
    
       
            window.location.hash = hash;
          });
        } 
      });

      new WOW().init();
}); 