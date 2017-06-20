var EgrOutline = (function () {
	var fn = {};

	fn.set = function(obj) {
		var outline = obj.find('.egr-outline');
		var name = obj.attr('data-name');
		
		$('.mainbar').children('.section').prepend('<div class="egr-outline" data-id="' + name + '">' + outline.html() + "</div>");
		outline.remove();
	};

	return fn;
})();