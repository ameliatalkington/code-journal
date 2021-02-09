/* exported data */
var previousDataJSON = localStorage.getItem('code-journal-local-storage');

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
