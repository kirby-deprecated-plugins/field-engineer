var EgrToggleActive = (function () {
	var fn = {};

	fn.toggle = function(obj, this_obj) {
		obj.find('.egr-actions').hide();
		this_obj.children('.egr-actions').show();
		EgrSort.toggle(obj, this_obj);
	};

	return fn;
})();