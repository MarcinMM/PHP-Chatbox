$(window).load(function() {

$('#submitter').click(function() {
	send();
	$('#text').val('');
});

$("#text").keyup(function(e) {
if(e.keyCode == 13) {
send();
$('#text').val('');
}
});

function send() {
$.ajax({
   type: "POST",
   url: "ajax.php",
   data: {
        author: $('#author').val(),
        text: $('#text').val()
   },
   dataType: "json",
   success: function(data){
        var chatContent = '';
        for (var i in data) {
          chatContent += "<b>" + data[i].author + ": </b> [" + data[i].timestamp + "] " + data[i].text + "<br>";
        }
        $('#chatResults').html(chatContent);
        //$('#text').val('').focus();
   }
 });
}

function reload() {
$.ajax({
   type: "POST",
   url: "ajax.php",
   dataType: "json",
   success: function(data){
        var chatContent = '';
        for (var i in data) {
          chatContent += "<b>" + data[i].author + ": </b> [" + data[i].timestamp + "] " + data[i].text + "<br>";
        }
        $('#chatResults').html(chatContent);
        //$('#text').val('').focus();
   }
 });
}

var int = setInterval(function()
{
	reload();
}
, 2000);

});
