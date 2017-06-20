var EgrAdd = (function () {
	var fn = {};

	fn.add = function(obj, this_obj) {
		var fieldset_name = fn.name(this_obj);
		var row = fn.row(this_obj);
		var fieldsets = fn.fieldsets(row);

		fieldsets.append(fn.matchFieldset(row, fieldset_name, obj).clone());
		EgrId.replace(fieldsets.children('.egr-fieldset').last());

		EgrSort.sort(this_obj);
		EgrCount.trigger(obj, this_obj);
		EgrTrigger.trigger(row);
		EgrRender.render(obj);
	};

	fn.name = function(this_obj) {
		return this_obj.attr('data-add');
	};

	fn.row = function(this_obj) {
		return this_obj.closest('.egr-row');
	};

	fn.id = function(row) {
		return row.attr('data-id');
	};

	fn.fieldsets = function(row) {
		return row.children('.egr-fieldsets');
	};

	fn.matchRow = function(row, obj) {
		var id = fn.id(row);
		return $('.egr-outline[data-id="' + obj.attr('data-name') + '"] .egr-row[data-id="' + id + '"]');
	};

	fn.matchFieldsets = function(row, obj) {
		var match_row = fn.matchRow(row, obj);
		return match_row.children('.egr-fieldsets');
	};

	fn.matchFieldset = function(row, fieldset_name, obj) {
		var match_fieldsets = fn.matchFieldsets(row, obj);
		return match_fieldsets.children('[data-fieldset-name="' + fieldset_name + '"]');
	};

	return fn;
})();