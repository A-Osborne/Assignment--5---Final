$.fn.lightbox = function() {
	
	$(this).click(function(e) {
	
		// Prevents default functionallity of opening a new page
		e.preventDefault();

		var image_href = $(this).attr('src');
		var text = $(this).attr('data-title');

		var lightbox = 
			'<div id="lightbox">' +
				'<div id="content">' +
					'<img class="active" src="'+ image_href +'"/>' +
					'<p id="title">' + text + '</p>' +
				'</div>' +
			'</div>';

		$(lightbox).hide().appendTo('body').fadeIn(200);

		var lightBg = $('#lightbox');

		// On click, closes lightbox
		lightBg.click(function() {
			$(this).fadeOut(300, function() {
				$(this).remove();
			});
		});

		// On pressing ESC Key, closes lightbox
		$(document).keyup(function(e) {
			// KEYCODE #27 is ESC Key
			if (e.keyCode == 27) {
				lightBg.fadeOut(300, function() {
					lightBg.remove();
				});
			}
		});
	});

}

