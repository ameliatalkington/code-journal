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
var $h2 = document.querySelector('h2');

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
  if (data.editing !== null) {
    for (var k = 0; k < data.entries.length; k++) {
      if (data.entries[k].entryId === data.editing.entryId) {
        data.entries[k] = newObject;
        $h2.textContent = 'New Entry';
        resetForm();
        data.editing = null;
        return;
      }
    }
  }
  data.entries.unshift(newObject);
  var newEntryElement = newEntry(newObject);
  $entries.prepend(newEntryElement);
  data.nextEntryId++;
  $h2.textContent = 'New Entry';
  resetForm();
});

$newButton.addEventListener('click', function (event) {
  $containerElements[0].className = 'container';
  $containerElements[1].className = 'container hidden';
});

$entriesButton.addEventListener('click', function (event) {
  $containerElements[0].className = 'container hidden';
  $containerElements[1].className = 'container';
  data.editing = null;
  resetForm();
});

window.addEventListener('DOMContentLoaded', function (event) {
  for (var i = 0; i < data.entries.length; i++) {
    if (data.editing === null) {
      $entries.appendChild(newEntry(data.entries[i]));
    } else if (!(data.entries[i].entryId === data.editing.entryId)) {
      $entries.appendChild(newEntry(data.entries[i]));
    }
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

  var $h3EditDiv = $divColHalf2.appendChild(document.createElement('div'));
  $h3EditDiv.setAttribute('class', 'h3-and-edit-div');
  var $h3 = $h3EditDiv.appendChild(document.createElement('h3'));
  var $editButton = $h3EditDiv.appendChild(document.createElement('i'));

  var $p = $divColHalf2.appendChild(document.createElement('p'));

  $imgTag.setAttribute('src', entry.imageUrl);
  $h3.textContent = entry.title;
  $editButton.setAttribute('class', 'far fa-edit');
  $p.textContent = entry.notes;

  return ($ul);
}

$entries.addEventListener('click', function (event) {
  if (event.target.className === 'far fa-edit') {
    var $editNodes = $entries.querySelectorAll('.far.fa-edit');
    for (var j = 0; j < $editNodes.length; j++) {
      if (event.target === $editNodes[j]) {
        data.editing = data.entries[j];
      }
    }
    $containerElements[0].className = 'container';
    $containerElements[1].className = 'container hidden';
    $h2.textContent = 'Edit Entry';
    $photoURL.value = data.editing.imageUrl;
    $title.value = data.editing.title;
    $notes.value = data.editing.notes;
    $displayedImage.setAttribute('src', data.editing.imageUrl);
  }
});

function resetForm() {
  $form.reset();
  $displayedImage.setAttribute('src', 'images/placeholder-image-square.jpg');
}
