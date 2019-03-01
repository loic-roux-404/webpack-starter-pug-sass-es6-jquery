$(document).ready(function() {

	var container = $('#container').isotope({
		filter : '*',
		getSortData : {
			price : '.prix parseInt'
		},
		sortBy : [ '.prix', '.name','.ranking' ],
	});

	$('#filters').on('click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		container.isotope({
			filter : filterValue
		});
	});

	$('#sorts').on('click', 'button', function() {
		var sortValue = $(this).attr('data-sort-value');
		sortValue = sortValue.split(',');
		container.isotope({
			sortBy : sortValue
		});
	});
});

