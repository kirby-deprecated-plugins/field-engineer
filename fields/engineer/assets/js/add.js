var EngineerTableAdd = (function () {
	var fn = {};

	fn.add = function(field) {
		var time = new Date().getTime();
		var hidden_html = field.find('.engineer-hidden-row').html();
		hidden_html = hidden_html.replace(/engineersuffix/g, time);
		field.find('.engineer-table').append('<tr data-engineer-row="' + time + '">' + hidden_html + '</tr>');
		EngineerTableRender.render(field);

		$('[data-field="urlfield"]').removeData('urlfield').off('click').urlfield();
		$('[data-field="date"]').removeData('date').off('change').date();
		$('[data-field="imagefield"]').removeData('imagefield').off('click').imagefield();
	};

	return fn;
})();