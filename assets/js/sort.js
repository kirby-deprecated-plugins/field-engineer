var EgrSort = (function () {
	var fn = {};

	fn.sort = function(obj) {
		var items  = obj.find('.egr');
		var firstSort = true;
		items.sortable({
			items: '.egr-sorted-fieldset',
			handle: '.egr-sort',
			start: function(e, ui) {
				if(firstSort) {
					items.sortable('refreshPositions');
					firstSort = false;
				}
			},
			update: function( event, ui ) {
				EgrRender.render(obj);
			}
		});
	};

	fn.removeClasses = function(obj, this_obj) {
		obj.find('.egr-sorted-row').removeClass('egr-sorted-row');
		obj.find('.egr-sorted-fieldsets').removeClass('egr-sorted-fieldsets');
		obj.find('.egr-sorted-fieldset').removeClass('egr-sorted-fieldset');
	};

	fn.toggle = function(obj, this_obj) {
		var row = this_obj.closest('.egr-row');
		var fieldsets = row.children('.egr-fieldsets');
		var fieldset = fieldsets.children('.egr-fieldset');
		fn.removeClasses(obj, this_obj);
		row.addClass('egr-sorted-row');
		fieldsets.addClass('egr-sorted-fieldsets');
		fieldset.addClass('egr-sorted-fieldset');
		EgrSort.sort(obj);
	};

	fn.sortUp = function(obj, this_obj) {
		var current = this_obj.closest('.egr-fieldset');
		var prev = current.prev();
		var cloned = prev.clone(true);
		current.after(cloned);
		prev.remove();
		EgrRender.render(obj);
	};

	fn.sortDown = function(obj, this_obj) {
		var current = this_obj.closest('.egr-fieldset');
		var next = current.next();
		var cloned = next.clone(true);
		current.before(cloned);
		next.remove();
		EgrRender.render(obj);
	};

	return fn;
})();