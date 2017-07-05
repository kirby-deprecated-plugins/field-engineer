var EgrDelete = (function () {
	var fn = {};

	fn.deleteMessage = function(obj, this_obj) {
		var delete_message = $(document).find('.egr-outline .egr-element-delete').first();
		fn.deleteCancel(obj, this_obj);
		obj.find('.egr-actions').hide();
		this_obj.closest('.egr-fieldset').addClass('egr-delete-active');
		this_obj.closest('.egr-fieldset').append(delete_message.clone());
	};

	fn.deleteAction = function(obj, this_obj) {
		var fieldsets = this_obj.closest('.egr-fieldsets');
		this_obj.closest('.egr-fieldset').remove();
		EgrSort.sort(obj);
		EgrCount.trigger(obj, fieldsets);
		EgrRender.render(obj);
	};

	fn.deleteCancel = function(obj, this_obj) {
		obj.find('.egr-element-delete').remove();
		obj.find('.egr-delete-active').removeClass('egr-delete-active');
	};

	return fn;
})();