var EgrTrigger = (function () {
	var fn = {};

	fn.trigger = function(row) {
		fn.triggerFields(row);
		fn.triggerPlugins(row);

		/*row.find('.egr-row').each(function( index ) {
			fn.triggerFields($(this));
			fn.triggerPlugins($(this));
		});*/

		fn.checkDuplicates(row);
	};

	fn.triggerFields = function(row) {
		row.find('[data-field="urlfield"]').removeData('urlfield').off('click').urlfield();
		row.find('[data-field="date"]').removeData('date').off('change').date();
		row.find('[data-field="imagefield"]').removeData('imagefield').imagefield();
		row.find('[data-field="autocomplete"]').removeData('autocomplete').off('keydown keyup').autocomplete();
		row.find('[data-field="editor"]').removeData('editor').off('keydown click').editor();
		//row.find('.tag-input').tags();
		row.find('[data-field="counter"]').removeData('counter').counter();
	};

	fn.triggerPlugins = function(row) {
		row.find('[data-field="images"]').removeData('images').images();
	};

	fn.checkDuplicates = function(row) {
		var i = 0;
		var values = [];
		row.closest('.egr').find('.field').each(function( index ) {
			var classes = $(this).attr('class').split(" ");

			$.each(classes, function( index, value ) {
				if(value.endsWith("_egr__")) {
					values[i] = value;
					i++;
				}
			});
		});
		if(fn.hasDuplicates(values)) {
			console.log('Error: There are duplicates!');
		}
	};

	fn.hasDuplicates = function(array) {
		return (new Set(array)).size !== array.length;
	}

	return fn;
})();