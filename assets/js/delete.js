var EgrDelete = (function () {
	var fn = {};

	fn.delete = function(obj, this_obj) {
		var fieldsets = this_obj.closest('.egr-fieldsets');
		this_obj.closest('.egr-fieldset').remove();
		EgrSort.sort(obj);
		EgrCount.trigger(obj, fieldsets);
		EgrRender.render(obj);
	};

	return fn;
})();