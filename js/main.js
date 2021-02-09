/* global data */
/* exported data */
var $photoURL = document.querySelector('#image-url');
var $displayedImage = document.querySelector('.displayed-image');
$photoURL.addEventListener('input', function (event) {
  $displayedImage.setAttribute('src', event.target.value);
});
