var EgrId = (function () {
	var fn = {};

	fn.replace = function(fieldset) {
		var time = new Date().getTime();

		fn.replaceIds(fieldset, time);
		fn.replaceFors(fieldset, time);
		fn.replaceClasses(fieldset, time);
		fn.replaceNames(fieldset, time);
		fn.replacePrefixes(fieldset, time);

		fn.addFieldsetCount(fieldset);
	};

	fn.replaceIds = function(fieldset, time) {
		var matches = fieldset.find('[id^="form-field-"]');
		matches.each(function(index) {
			var element = $(this).attr('id').replace(/_egr__/g, '_' + time + '_egr__');
			$(this).attr('id', element);
		});
	};

	fn.replaceFors = function(fieldset, time) {
		var matches = fieldset.find('[for^="form-field-"]');
		matches.each(function(index) {
			var element = $(this).attr('for').replace(/_egr__/g, '_' + time + '_egr__');
			$(this).attr('for', element);
		});
	};

	fn.replaceClasses = function(fieldset, time) {
		var matches = fieldset.find('[data-field-name][class^="field "]');
		matches.each(function(index) {
			var element = $(this).attr('class').replace(/_egr__/g, '_' + time + '_egr__');
			$(this).attr('class', element);
		});
	};

	fn.replaceNames = function(fieldset, time) {
		var matches = fieldset.find('[name]');
		matches.each(function(index) {
			var element = $(this).attr('name').replace(/_egr__/g, '_' + time + '_egr__');
			$(this).attr('name', element);
		});
	};

	fn.replacePrefixes = function(fieldset, time) {
		var matches = fieldset.find('[data-prefix]');
		matches.each(function(index) {
			var element = $(this).attr('data-prefix').replace(/_egr__/g, '_' + time + '_egr__');
			$(this).attr('data-prefix', element);
		});
	};

	fn.addFieldsetCount = function(fieldset) {
		var row = fieldset.closest('.egr-row');
		var fieldset_count = row.children('.egr-row-actions').find('.egr-add-select').length;
		fieldset_count = (fieldset_count == 0) ? 1 : fieldset_count;
		row.attr('data-fieldset-count', fieldset_count);
	};

	return fn;
})();