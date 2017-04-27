var EngineerSort = (function () {
	var fn = {};

	fn.init = function(field) {
		var rows  = field.find('.engineer-table tbody');
		var firstSort = true;
		rows.sortable({
			helper: function(e, ui) {
				ui.children().each(function() {
					$(this).width($(this).width());
				});
				return ui.addClass('engineer-sortable-helper');
			},
			items: 'tr:not(.engineer-hidden-row)',
			handle: '.engineer-sort-handle',
			update: function() {
				EngineerTableRender.render(field);
			},
			start: function(e, ui) {
				if(firstSort) {
					items.sortable('refreshPositions');
					firstSort = false;
				}
			}
		});

		var items  = field.find('.engineer-items');
		var firstSort = true;
		items.sortable({
			items: '.engineer-row:not(.engineer-hidden-row)',
			handle: '.engineer-sort-handle',
			update: function() {
				EngineerTableRender.render(field);
			},
			start: function(e, ui) {
				if(firstSort) {
					items.sortable('refreshPositions');
					firstSort = false;
				}
			}
		});
	};

	return fn;
})();