$(document).ready(function() {

	$('#search-term').submit(function(event) {
		$('#search-results').html('');
		var query = $('#query').val();
		getRequest(query);
		event.preventDefault();
	});

	function getRequest(searchTerm) {
		$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + searchTerm + '&key=AIzaSyDqKHNsExc8g5ttufklcS3o9oqcyZE5Oso', function(data) {
			showResults(data.items);
			console.log(data);
		})
	};

	function showResults(results) {
		for (var i = 0; i < results.length; i++) {
		var myData = results[i].snippet.thumbnails.medium.url;
		$('#search-results').append('<img src="' + myData + '">');
		}

	};
	
});