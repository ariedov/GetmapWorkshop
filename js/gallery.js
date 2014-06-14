window.onload = function() {

	var bigImage = $("#image_container img");
	var images = $(".album a img");
	var currentIndex = 0;

	$("#sculpture.art_elem a").click(function(ev) {
		$("#gallery").fadeIn(1000);
		return false;
	});

	$("#gallery").click(function(ev) {
		$("#gallery").hide();	
		return false;
	});

	images.click(function(ev) {
		currentIndex = images.index(this);	
		var imgSrc = $(this).attr("src");	
		bigImage.fadeOut(400, function() {
			bigImage.attr("src", imgSrc);
			bigImage.fadeIn();
			return false;
		});

		return false;
	});

	bigImage.click(function(ev) {
		currentIndex += 1;
		var currentImg = images[currentIndex];
		if (currentImg != undefined) {
			var imgSrc = $(currentImg).attr("src");
			bigImage.fadeOut(400, function() {
				bigImage.attr("src", imgSrc);
				bigImage.fadeIn();
				return false;
			});
		}
		return false;
	});
}
