/* global data */
/* exported data */
var $photoURL = document.querySelector('#image-url');
var $displayedImage = document.querySelector('.displayed-image');
var $form = document.querySelector('#form');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');

$photoURL.addEventListener('input', function (event) {
  $displayedImage.setAttribute('src', event.target.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObject = {
    imageUrl: $displayedImage.getAttribute('src'),
    title: $title.value,
    notes: $notes.value,
    EntryId: data.nextEntryId
  };
  data.entries.unshift(newObject);
  data.nextEntryId++;
  $form.reset();
});
