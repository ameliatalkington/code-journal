/* global data */
/* exported data */
var $photoURL = document.querySelector('#image-url');
var $displayedImage = document.querySelector('.displayed-image');
var $form = document.querySelector('#form');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
var previousEntriesJSON = localStorage.getItem('code-journal-local-storage');

$photoURL.addEventListener('input', function (event) {
  $displayedImage.setAttribute('src', event.target.value);
});

if (previousEntriesJSON !== null) {
  data.entries = JSON.parse(previousEntriesJSON);
}

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var newObject = {
    imageUrl: $displayedImage.getAttribute('src'),
    title: $title.value,
    notes: $notes.value,
    nextEntryId: data.nextEntryId
  };
  data.entries.unshift(newObject);
  var entriesJSON = JSON.stringify(data.entries);
  localStorage.setItem('code-journal-local-storage', entriesJSON);
  data.nextEntryId = data.nextEntryId + 1;
  $form.reset();
});
