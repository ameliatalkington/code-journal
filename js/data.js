/* exported data */
var previousDataJSON = localStorage.getItem('code-journal-local-storage');
var $entries = document.querySelector('.row.entries');

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('code-journal-local-storage', dataJSON);
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
