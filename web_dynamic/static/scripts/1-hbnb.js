//returns if box is checked

let checked = {};
$(document).ready(function () {
    $('input:checkbox').change(function () {
	if ($(this).is(':checked')) {
	    checked[$(this).data('id')] = $(this).data('name');
	} else {
	    delete checked[$(this).data('id')];
	}
	$('div.amenities h4').html(function () {
	    let amenities = [];
	    Object.keys(checked).forEach(function (key) {
		amenities.push(checked[key]);
	    });
	    if (amenities.length === 0) {
		return ('&nbsp');
	    }
	    return (amenities.join(', '));
	});
    });
});
