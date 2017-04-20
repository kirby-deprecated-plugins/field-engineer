var EngineerTableAdd = (function () {
	var fn = {};

	fn.add = function(field) {
		var time = new Date().getTime();
		var hidden_html = field.find('.engineer-hidden-row').html();
		hidden_html = hidden_html.replace(/engineersuffix/g, time);
		field.find('.engineer-table').append('<tr class="engineer-row" data-engineer-row="' + time + '">' + hidden_html + '</tr>');
		field.find('.engineer-items').append('<div class="engineer-row" data-engineer-row="' + time + '">' + hidden_html + '</div>');
		EngineerTableRender.render(field);

		var item = field.find('[data-engineer-row]').last();

		item.find('[data-field="urlfield"]').removeData('urlfield').off('click').urlfield();
		item.find('[data-field="date"]').removeData('date').off('change').date();
		item.find('[data-field="imagefield"]').removeData('imagefield').off('click').imagefield();
		item.find('[data-field="autocomplete"]').removeData('autocomplete').off('keydown keyup').autocomplete();

		engineerEmpty(field);
	};

	fn.addTags = function(field) {
		field.find('.engineer-row').last().find('.tag-input').tags();
	};

	return fn;
})();