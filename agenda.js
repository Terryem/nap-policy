$(function () {
	var timeFormatter = new Intl.DateTimeFormat('en-GB', {
		timeZone: 'Africa/Lagos',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
		hourCycle: 'h23'
	});

	function updateAgenda() {
		var parts = timeFormatter.format(new Date()).split(':');
		var currentMinutes = Number(parts[0]) * 60 + Number(parts[1]);

		$('#live-clock').text(parts.join(':') + ' WAT');

		$('.agenda-row').each(function () {
			var startParts = $(this).data('start').split(':');
			var endParts = $(this).data('end').split(':');
			var startMinutes = Number(startParts[0]) * 60 + Number(startParts[1]);
			var endMinutes = Number(endParts[0]) * 60 + Number(endParts[1]);
			var isCurrent = currentMinutes >= startMinutes && currentMinutes < endMinutes;

			$(this).toggleClass('is-current', isCurrent);
		});
	}

	updateAgenda();
	window.setInterval(updateAgenda, 1000);
});