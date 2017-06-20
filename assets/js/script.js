(function($) {
	$.fn.engineer = function() {
		return this.each(function() {
			var field = $(this);
			var fieldname = 'engineer';

			if(field.data( fieldname )) {
				return true;
			} else {
				field.data( fieldname, true );
			}

			EgrOutline.set(field);

			field.on('click', '.egr [data-add]', function() {
				EgrAdd.add(field, $(this));
			});

			field.on('click', '.egr-delete', function() {
				EgrDelete.delete(field, $(this));
			});

			field.on('click', '.egr-clone', function() {
				EgrClone.clone(field, $(this));
			});

			field.on('click', '.egr-fieldset', function(e) {
				if(!$(e.target).closest('.egr-fieldset').not(this).length){
					EgrToggleActive.toggle(field, $(this));
				}
			});

			$(document).on('click', function(e) {
				if (!$(e.target).closest('.egr-add-button').not(this).length) {
					$(document).find('.egr-dropdown-active').removeClass('egr-dropdown-active');
				}
			});

			field.on('click', '.egr-arrow-up', function(e) {
				EgrSort.sortUp(field, $(this));
			});

			field.on('click', '.egr-arrow-down', function(e) {
				EgrSort.sortDown(field, $(this));
			});

			field.on('click', '.egr-add-button', function(e) {
				if(!$(e.target).closest('.egr-add-button').not(this).length){
					EgrToggleDropdown.toggle(field, $(this));
				}
			});

			EgrSort.sort(field);

			field.find('.egr-presentation').on('input click change', 'input, select, textarea', function() {
				EgrRender.render(field, $(this));
			});
		});
	};
})(jQuery);