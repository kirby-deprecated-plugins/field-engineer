var EgrClone = (function () {
	var fn = {};

	fn.clone = function(obj, this_obj) {
		var fieldset = this_obj.closest('.egr-fieldset');
		var cloned = fn.duplicate(fieldset);

		fn.setSelects(cloned, fn.getSelects(fieldset));
		EgrId.replace(cloned);
		EgrCount.trigger(obj, this_obj);
		EgrTrigger.trigger(this_obj.closest('.egr-row'));
		EgrRender.render(obj);
	};

	fn.duplicate = function(fieldset) {
		var cloned = fieldset.clone(true);
		fieldset.after(cloned);
		return fieldset.next();
	};	

	fn.getSelects = function(fieldset) {
		var array = [];
		var i = 0;
		fieldset.find('select').each(function(index) {
			$(this).val();
			array[i] = $(this).val();
			i++;
		});
		return array;
	};

	fn.setSelects = function(next, select_values) {
		var i = 0;
		next.find('select').each(function(index) {
			$(this).val(select_values[i]);
			i++;
		});
	};

	return fn;
})();