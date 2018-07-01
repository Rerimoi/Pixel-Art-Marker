// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()




$(document).ready(function()){

var color, rows,columns;


$('#sizePicker').submit (function makeGrid(grid) {
   // declare the rows and columns
  var rows=$('#inputHeight').val();
  var columns=$('#inputWeight').val();
  var color=$('#colorPicker').val();
  makeGrid(rows, columns);


  $('tr').remove();

// for loop to set the  no of rows and columns grid to appear after submit button is clicked
  for (var i = 1; i <= rows; i++) {
    $('#pixelCanvas').append('<tr></tr>');

    for (var j = 1; i < columns; j++) {
      $('#pixelCanvas').filter(':last').append('<td></td>');

    }
  }
  grid.preventDefault();

  $('td').click(function(event){
    var color=$('#colorPicker').val();
    $(event.target).css('background-color',color);
  });

});
});
