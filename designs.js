// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()




var color, rows,columns;


$('#sizePicker'). on('submit', function (event){
  event.preventDefault();
   // declare the rows and columns
  var rows=$('#inputHeight').val();
  var columns=$('#inputWeight').val();
  var color=$('#colorPicker').val();
  makeGrid(rows, columns);
});

function makeGrid(x,y){

  $('tr').remove();

// for loop to set the  no of rows and columns grid to appear after submit button is clicked
  for (var i = 1; i <= x; i++) {
    $('#pixelCanvas').append('<tr></tr>');

    for (var j = 1; j <= y; j++) {
      $('#pixelCanvas').filter(':last').append('<td></td>');

    }
  }


  $('td').click(function(event){
    var color=$('#colorPicker').val();
    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    }
     else {
          $(event.target).css('background-color',color);
    }

  });

};
