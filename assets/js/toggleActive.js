var EgrToggleActive = (function () {
	var fn = {};

	fn.toggle = function(obj, this_obj) {
		if(this_obj.hasClass('egr-delete-active')) return;
		
		obj.find('.egr-actions').hide();
		this_obj.children('.egr-actions').css('display', 'flex');
		EgrSort.toggle(obj, this_obj);
	};

	fn.remove = function(obj, this_obj) {
		obj.find('.egr-actions').hide();
	};

	return fn;
})();