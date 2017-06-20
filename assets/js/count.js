var EgrCount = (function () {
	var fn = {};

	fn.trigger = function(obj, this_obj) {
		var row = this_obj.closest('.egr-row');
		var fieldsets = row.children('.egr-fieldsets');
		var fieldset = fieldsets.children('.egr-fieldset');
		var count = fieldset.length;
		row.attr('data-count', count);
	};

	return fn;
})();