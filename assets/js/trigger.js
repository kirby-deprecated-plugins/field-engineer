var EgrTrigger = (function () {
	var fn = {};

	fn.trigger = function(row) {
		fn.triggerFields(row);
		fn.triggerPlugins(row);

		fn.checkDuplicates(row);
	};

	fn.triggerFields = function(row) {
		row.find('[data-field="urlfield"]').removeData('urlfield').off('click').urlfield();
		row.find('[data-field="date"]').removeData('date').off('change').date();
		row.find('[data-field="imagefield"]').removeData('imagefield').imagefield();
		row.find('[data-field="autocomplete"]').removeData('autocomplete').off('keydown keyup').autocomplete();
		row.find('[data-field="editor"]').removeData('editor').off('keydown click').editor();
		row.find('[data-field="counter"]').removeData('counter').counter();
	};

	fn.triggerPlugins = function(row) {
		if ( row.find('[data-field="images"]').length ) {
			row.find('[data-field="images"]').removeData('images').images();
		}
		if ( row.find('[data-field="hero"]').length ) {
			row.find('[data-field="hero"]').removeData('hero').hero();
		}
		if ( row.find('[data-field="quickselect"]').length ) {
			row.find('[data-field="quickselect"]').removeData('quickselect').quickselect();
		}
		if ( row.find('[data-field="list"]').length ) {
			row.find('[data-field="list"]').removeData('list').list();
		}
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