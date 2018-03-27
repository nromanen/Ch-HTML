$(document).ready(function(){
	
	$('#exampleModal').on('show.bs.modal', function (event) {
	  console.log('go');

	  var button = $(event.relatedTarget) // Button that triggered the modal
	  var parentElement = button.parent();
	  var content = $('.modalContent', parentElement).html();
	  console.log(content);
	  var modal = $(this)
	  modal.find('#modalContent').html(content);
	});
});
