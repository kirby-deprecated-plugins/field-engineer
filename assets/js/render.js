EgrRender = (function () {
	var fn = {};
	var level = 1;

	fn.render = function(obj) {
		var output = '';
		var fields = obj.find('.egr-presentation').children();
		var out = '';
		var textarea = obj.find('.egr-output').find('textarea');
		out = fn.renderLoop(fields, out, level, true);
		textarea.val(out);
		textarea.blur();
	};

	fn.renderLoop = function(fields, out, root_field) {
		fields.each(function(field_index) {
			var field = $(this);
			var field_name = field.attr('data-field-name');
			var depth = field.parents('.egr-row').length;
			var tab = '  '.repeat(depth);
			
			if(field.hasClass('egr-row')) {
				if(!root_field) {
					out += tab + field_name + ":\n";
				}
				var fieldsets = $(this).children('.egr-fieldsets').children();
				if(depth > 0) tab += ' ';
				fieldsets.each(function(fieldset_index) {
					var fieldset = $(this);
					var subfields = fieldset.children('.egr-fields').children();

					
					out += tab + "-\n";
					out += fn.setFieldsetName(tab, field, fieldset);
					out = fn.renderLoop(subfields, out, false);
				});
			} else {
				var fieldset = field.parent().parent();
				var selector = fn.getSelector(field_name, field);
				var element = fn.findFormElement(selector, field);
				var content = fn.getElement(element, field_name, tab);

				if(content) {
					out += tab + content;
				}
			}
		});
		return out;
	};

	fn.getSelector = function(field_name, field) {
		var selector = field_name + field.attr('data-prefix');
		return selector;
	};

	fn.findFormElement = function(selector, field) {
		var single = '[name="' + selector + '"]:not(label)';
		var multiple = '[name^="' + selector + '["]:not(label)';
		var element = field.find(single + ',' + multiple);
		return element;
	};

	fn.getElement = function(element, field_name, tab) {
		var elementType = element.prop('nodeName');
		var is_single = (element.length < 2) ? true : false;
		var output = '';

		switch(elementType) {
			case 'TEXTAREA':
				output += fn.textarea(element, field_name, tab);
				break;
			case 'INPUT':
				switch(element.attr('type')) {
					case 'radio':
						output += fn.radio(element, field_name, tab);
						break;
					case 'checkbox':
						if(is_single) {
							output += fn.checkbox(element, field_name, tab);
						} else {
							output += fn.checkboxes(element, field_name, tab);
						}
						break;
					default:
						output += fn.input(element, field_name, is_single, tab);
				}
				break;
			case 'SELECT':
				output += fn.select(element, field_name, tab);
				break;
		}
		return output;
	};

	fn.setFieldsetName = function(tab, field, fieldset) {
		var fieldset_name = fieldset.attr('data-fieldset-name');
		var fieldset_count = field.attr('data-fieldset-count');
		if(fieldset_count == 1 && fieldset_name == 'default') {
			return '';
		}
		return tab + "  _fieldset: " + fieldset_name + "\n";
	};

	/* Input */
	fn.input = function(element, field_name) {
		var value = '';

		element.each(function( index ) {
			value += $(this).val() + ' ';
		});
		value = value.slice(0, -1);
		value = value.replace(/"/g, '\\"');
		return field_name + ': "' + value + '"' + "\n";
	};

	/* Textarea */
	fn.textarea = function(element, field_name, tab) {
		var value = element.val();
		var match = value.indexOf("\n");
		var indent = tab + '  ';

		if(match > -1) {
			value = value.replace(/(?:\r\n|\r|\n)/g, "\n" + indent);
			if(value != '') {
				return field_name + ": |\n" + indent + value + "\n";
			} else {
				return '';
			}
		}
		return fn.input(element, field_name);
	};

	/* Select */
	fn.select = function(element, field_name) {
		var value = element.val();
		value = value.replace(/"/g, '\\"');
		return field_name + ': "' + value + '"' + "\n";
	};

	/* Radio */
	fn.radio = function(element, field_name) {
		out = '';
		element.each(function(index) {
			if($(this).is(':checked')) {
				var value = $(this).val();
				if(value == 'true' || value == 'false') {
					value = "'" + value + "'";
				}
				out += field_name + ": " + value + "\n";
			}
		});
		return out;
	};

	/* Checkbox */
	fn.checkbox = function(element, field_name) {
		out = '';
		element.each(function(index) {
			if($(this).is(':checked')) {
				var value = $(this).val();
				if(value == 'on') {
					value = 'true';
				}
				out += field_name + ': ' + value + "\n";
			} else {
				out += field_name + ": false\n";
			}
		});
		return out;
	};

	/* Checkboxes */
	fn.checkboxes = function(element, field_name, tab) {
		out = '';
		element.each(function(index) {
			if($(this).is(':checked')) {
				out += tab + ' - ' + $(this).val() + "\n";
			}
		});
		if(out != '') {
			out = field_name + ":\n" + out;
		}
		return out;
	}

	return fn;
})();