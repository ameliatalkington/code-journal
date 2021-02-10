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
var $entries = document.querySelector('.row.entries');

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

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    $entries.appendChild(newEntry(data.entries[i]));
  }
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

  $imgTag.setAttribute('src', entry.imageUrl);
  $h3.textContent = entry.title;
  $p.textContent = entry.notes;

  return ($ul);
}
