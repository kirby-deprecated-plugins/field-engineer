var EngineerTableRender = (function () {
	var fn = {};
	var field;

	fn.render = function(field) {
		var output = '';
		var instance_name = field.attr('data-name');

		field.find('[data-engineer-row]').each(function(index) {
			var row_index = $(this).attr('data-engineer-row');
			output += "-\n";

			$(this).find('td').each(function(item_index) {
				var name = $(this).attr('data-name');
				var selector_key = 'engineer_' + instance_name + '_' + row_index + '_' + name;
				var selector_single = '[name="' + selector_key + '"]:not(label)';
				var selector_multi = '[name^="' + selector_key + '["]:not(label)';
				var subfield = $(this).find(selector_single + ',' + selector_multi);
				var is_single = (subfield.length < 2) ? true : false;

				var elementType = subfield.prop('nodeName');

				switch(elementType) {
					case 'TEXTAREA':
						output += fn.textarea(subfield, name);
						break;
					case 'INPUT':
						switch(subfield.attr('type')) {
							case 'radio':
								output += fn.radio(subfield, name);
								break;
							case 'checkbox':
								if(is_single) {
									output += fn.checkbox(subfield, name);
								} else {
									output += fn.checkboxes(subfield, name);
								}
								break;
							default:
								output += fn.input(subfield, name);
						}
						break;
					case 'SELECT':
						output += fn.input(subfield, name);
						break;
				}
			});
		});
		field.find('.engineer-output').val(output);
	};

	fn.textarea = function(subfield, name) {
		var value = subfield.val();
		var match = value.indexOf("\n");

		if(match > -1) {
			value = value.replace(/(?:\r\n|\r|\n)/g, "\n    ");
			if(value != '') {
				return '  ' + name + ": |\n    " + value + "\n";
			} else {
				return '';
			}
		}
		return fn.input(subfield, name);
	};

	fn.input = function(subfield, name) {
		var value = subfield.val();
		value = value.replace(/"/g, '\\"');
		return '  ' + name + ': "' + value + '"' + "\n";
	};

	fn.radio = function(subfield, name) {
		out = '';
		subfield.each(function(index) {
			if($(this).is(':checked')) {
				out += '  ' + name + ": " + $(this).val() + "\n";
			}
		});
		return out;
	};

	fn.checkbox = function(subfield, name) {
		out = '';
		subfield.each(function(index) {
			if($(this).is(':checked')) {
				var value = $(this).val();
				if(value == 'on') {
					value = 'true';
				}
				if(value == '') {
					value = 'false';
				}
				out += '  ' + name + ": " + value + "\n";
			}
		});
		return out;
	};

	fn.checkboxes = function(subfield, name) {
		out = '';
		subfield.each(function(index) {
			if($(this).is(':checked')) {
				out += '    - ' + $(this).val() + "\n";
			}
		});
		if(out != '') {
			out = '  ' + name + ":\n" + out;
		}
		return out;
	}

	return fn;
})();