var EngineerSort = (function () {
	var fn = {};

	fn.init = function(field) {
		var rows  = field.find('.engineer-table tbody');
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
			}
		});

		var items  = field.find('.engineer-items');
		items.sortable({
			items: '.engineer-row:not(.engineer-hidden-row)',
			handle: '.engineer-sort-handle',
			update: function() {
				EngineerTableRender.render(field);
			}
		});
	};

	return fn;
})();