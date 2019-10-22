document.addEventListener('DOMContentLoaded', function () {

    // Karuzela

   var arrowLeft = document.getElementById('arrowLeft');
   var arrowRight = document.getElementById('arrowRight');
   var slides = document.querySelectorAll('.carousel .slide');
   var idSlide = 0;

   slides[idSlide].style.display = 'block';

   arrowLeft.addEventListener('click', prevP);
   arrowRight.addEventListener('click', nextP);

   function prevP(event) {
       slides[idSlide].style.transitionDuration = '1.5s';
       slides[idSlide].style.transform = 'translateX(300px)';
       slides[idSlide].style.opacity = '0';

       var time = setTimeout(function () {
           slides[idSlide].style.display = 'none';
           slides[idSlide].style.transform = '';
           slides[idSlide].style.opacity = '';
           idSlide--;
           if (idSlide < 0) {
               idSlide = slides.length - 1;
               slides[idSlide].style.display = 'block';
           }
           slides[idSlide].style.display = 'block';
       }, 1500);
   }

   function nextP(event) {
       slides[idSlide].style.transitionDuration = '1.5s';
       slides[idSlide].style.transform = 'translateX(-300px)';
       slides[idSlide].style.opacity = '0';

       var time = setTimeout(function () {
           slides[idSlide].style.display = 'none';
           slides[idSlide].style.transform = '';
           slides[idSlide].style.opacity = '';
           idSlide++;
           if (idSlide >= slides.length) {
               idSlide = 0;
               slides[idSlide].style.display = 'block';
           }
           slides[idSlide].style.display = 'block';
       }, 1500)
   }

   //


});