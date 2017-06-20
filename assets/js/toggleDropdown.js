var EgrToggleDropdown = (function () {
	var fn = {};

	fn.toggle = function(obj, this_obj) {
		if(fn.count(this_obj) > 1) {
			if(this_obj.parent().hasClass('egr-dropdown-active')) {
				this_obj.parent().removeClass('egr-dropdown-active');
			} else {
				obj.find('.egr-dropdown-active').removeClass('egr-dropdown-active');
				this_obj.parent().addClass('egr-dropdown-active');
			}
		}
	};

	fn.count = function(this_obj) {
		return this_obj.find('.egr-add-select').length;
	};

	return fn;
})();