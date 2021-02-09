/* global data */
/* exported data */
var $photoURL = document.querySelector('#image-url');
var $displayedImage = document.querySelector('.displayed-image');
var $form = document.querySelector('#form');
var $title = document.querySelector('#title');
var $notes = document.querySelector('#notes');
var $entries = document.querySelector('.container');

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

function newEntry(entry) {
  var $ul = document.createElement('ul');
  var $divRow = $ul.appendChild(document.createElement('div'));
  $divRow.setAttribute('class', 'row');
  var $divColHalf1 = $divRow.appendChild(document.createElement('div'));
  $divColHalf1.setAttribute('class', 'column-half');
  var $divColHalf2 = $divRow.appendChild(document.createElement('div'));
  $divColHalf2.setAttribute('class', 'column-half');
  var $imgTag = $divColHalf1.appendChild(document.createElement('img'));
  var $h3 = $divColHalf2.appendChild(document.createElement('h3'));
  var $p = $divColHalf2.appendChild(document.createElement('p'));

  return($ul);
}
