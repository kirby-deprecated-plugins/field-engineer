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
var EgrCount = (function () {
	var fn = {};

	fn.trigger = function(obj, this_obj) {
		var row = this_obj.closest('.egr-row');
		var fieldsets = row.children('.egr-fieldsets');
		var fieldset = fieldsets.children('.egr-fieldset');
		var count = fieldset.length;
		row.attr('data-count', count);
	};

	return fn;
})();
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
var EgrOutline = (function () {
	var fn = {};

	fn.set = function(obj) {
		var outline = obj.find('.egr-outline');
		var name = obj.attr('data-name');
		
		$('.mainbar').children('.section').prepend('<div class="egr-outline" data-id="' + name + '">' + outline.html() + "</div>");
		outline.remove();
	};

	return fn;
})();
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

					if(fieldset.attr('data-fieldset-name') != undefined) {
						out += tab + "-\n";
						out += fn.setFieldsetName(tab, field, fieldset);
					}
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
						if(element.hasClass('images')) {
							output += fn.textarea(element, field_name, tab);
						} else {
							if(is_single) {
								output += fn.input(element, field_name, is_single, tab);
							} else {
								if(field_name == 'datetime') {
									output += fn.input(element, field_name);
								} else {
									output += fn.inputs(element, field_name, tab);
								}
							}
						}
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

	fn.inputs = function(element, field_name, tab) {
		var value = '';
		var indent = tab + ' ';

		element.each(function( index ) {
			var val = $(this).val();
			val = val.replace(/"/g, '\\"');
			value += indent + '- "' + val + '"' + "\n";

		});

		value = value.slice(0, -1);
		return field_name + ": \n" + value + "\n";
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

			field.on('click', '.egr-delete-apply', function() {
				EgrDelete.deleteAction(field, $(this));
			});

			field.on('click', '.egr-delete-cancel', function() {
				EgrDelete.deleteCancel(field, $(this));
			});

			field.on('click', '.egr-clone', function() {
				EgrClone.clone(field, $(this));
			});

			field.on('click', '.egr-fieldset', function(e) {
				if(!$(e.target).closest('.egr-fieldset').not(this).length){
					EgrToggleActive.toggle(field, $(this));
				}
			});

			field.on('click', '.egr-delete', function() {
				EgrDelete.deleteMessage(field, $(this));
			});

			$(document).on('click', function(e) {
				if(!$(e.target).closest('.egr-add-button').not(this).length) {
					$(document).find('.egr-dropdown-active').removeClass('egr-dropdown-active');
				}
				if(!$(e.target).closest('.egr-fieldset').not(this).length) {
					EgrToggleActive.remove(field, $(this));
				}
			});

			field.on('click', '.egr-sort-up', function(e) {
				EgrSort.sortUp(field, $(this));
			});

			field.on('click', '.egr-sort-down', function(e) {
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
var EgrSort = (function () {
	var fn = {};

	fn.sort = function(obj) {
		var items  = obj.find('.egr');
		var firstSort = true;
		items.sortable({
			items: '.egr-sorted-fieldset',
			handle: '.egr-sort',
			start: function(e, ui) {
				if(firstSort) {
					items.sortable('refreshPositions');
					firstSort = false;
				}
			},
			update: function( event, ui ) {
				EgrRender.render(obj);
			}
		});
	};

	fn.removeClasses = function(obj, this_obj) {
		obj.find('.egr-sorted-row').removeClass('egr-sorted-row');
		obj.find('.egr-sorted-fieldsets').removeClass('egr-sorted-fieldsets');
		obj.find('.egr-sorted-fieldset').removeClass('egr-sorted-fieldset');
	};

	fn.toggle = function(obj, this_obj) {
		var row = this_obj.closest('.egr-row');
		var fieldsets = row.children('.egr-fieldsets');
		var fieldset = fieldsets.children('.egr-fieldset');
		fn.removeClasses(obj, this_obj);
		row.addClass('egr-sorted-row');
		fieldsets.addClass('egr-sorted-fieldsets');
		fieldset.addClass('egr-sorted-fieldset');
		EgrSort.sort(obj);
	};

	fn.sortUp = function(obj, this_obj) {
		var current = this_obj.closest('.egr-fieldset');
		var prev = current.prev();
		var cloned = prev.clone(true);
		current.after(cloned);
		prev.remove();
		EgrRender.render(obj);
	};

	fn.sortDown = function(obj, this_obj) {
		var current = this_obj.closest('.egr-fieldset');
		var next = current.next();
		var cloned = next.clone(true);
		current.before(cloned);
		next.remove();
		EgrRender.render(obj);
	};

	return fn;
})();
var EgrToggleActive = (function () {
	var fn = {};

	fn.toggle = function(obj, this_obj) {
		if(this_obj.hasClass('egr-delete-active')) return;
		
		obj.find('.egr-actions').hide();
		this_obj.children('.egr-actions').css('display', 'flex');
		EgrSort.toggle(obj, this_obj);
	};

	fn.remove = function(obj, this_obj) {
		obj.find('.egr-actions').hide();
	};

	return fn;
})();
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