/* global data */
/* exported data */
var $photoURL = document.querySelector('#image-url');
var $displayedImage = document.querySelector('.displayed-image');
var $form = document.querySelector('#form');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
var $entriesButton = document.querySelector('.entries-button');
var $newButton = document.querySelector('.new-button');
var $containerElements = document.querySelectorAll('.container');

$photoURL.addEventListener('input', function (event) {
  $displayedImage.setAttribute('src', event.target.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObject = {
    imageUrl: $displayedImage.getAttribute('src'),
    title: $title.value,
    notes: $notes.value,
    entryId: data.nextEntryId
  };
  data.entries.unshift(newObject);
  data.nextEntryId++;
  $form.reset();
});

$newButton.addEventListener('click', function (event) {
  $containerElements[0].className = 'container';
  $containerElements[1].className = 'container hidden';
});

$entriesButton.addEventListener('click', function (event) {
  $containerElements[0].className = 'container hidden';
  $containerElements[1].className = 'container';
});
