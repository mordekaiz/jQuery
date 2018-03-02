


$(document).ready(function() {
var text =" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

 $('.btn').click(function(){
  console.log($(this).attr('id'));
 });
  $('#button1').click(function(){
    $('#p').css('color','green');
     $('#p').append('<p class="green">' + text + '</p>');

  });
  $('#button2').click(function () {
      $('#p').css('color','red');
      $('#p').append('<p class="red">' + text + '</p>');

  })
  $('#button3').click(function(){
    $('#p').css('color','yellow');
    $('#p').append('<p class="yellow">' + text + '</p>');
  });
  $('#button4').click(function() {
  $('#p').show('color','green');
  })
  $('#button5').click(function(){
    $('#p').append('')
  });
  $('#button6').click(function () {
    $('#p').append('color','yellow')
  })
  $('#button7').click(function(){
    $('#p').hide();
  });
  $('#button8').click(function () {
   $('#p').hide();
  })
  $('#button9').click(function(){
    $('#p').hide();
  });
});
