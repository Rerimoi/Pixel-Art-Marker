// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('#sizePicker').submit (function makeGrid(grid) {
   // declare the rows and columns
  var n=$('#inputHeight').value();
  var m=$('#inputWeight').value();
// for loop to set the  no of rows and columns grid to appear after submit button is clicked
  for (var i = 1; i <= n; i++) {
    $('table').append('<tr></tr>');

    for (var j = 1; i < m; j++) {
      $('tr:last').append('<td></td>');
    }
  }



})
