
$(document).ready(function () {
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


const counters = document.querySelectorAll('.percent');
const lines = document.querySelectorAll('.use__rating-overline');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});


// $('.contacts__form').validate({
//     debug: true
// });
function valideForms() {
  
    $('form').validate({
      
        rules: {
             name: {
               required: true,
               minlength: 2
             },
            phone: 'required',
            email: {
                required: true,
                email: true
            },
            mess: {
                required: true,
                minlength: 10
            },
            checkbox: {
                required: true
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
               },
               mess: {
                required: "Пожалуйста, введите ваше сообщение",
                minlength: jQuery.validator.format("Введите минимум {0} символов!")
               },
               checkbox: {
                required: "Поле обязательно для заполнения"
               }

        }
   });

   
$('form').submit(function(e) {
    e.preventDefault();
    if ($(this).valid()) {

   
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        

        $('form').trigger('reset');
    });
}
    return false;

});



}

valideForms();


const triggerSubmit = document.querySelector('.contacts__form');
triggerSubmit.addEventListener('submit', () => {

    const modalThanks = document.querySelector('.pageclip-form__success__message');
    
    modalThanks.innerHTML = 'Спасибо, в ближайшее время я свяжусь с вами.';
});





});



// $('input[name=phone]').mask("+7 (999) 999-9999"); 
