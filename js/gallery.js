window.onload = function() {

	var bigImage = $("#image_container img");
	var images = [];
	var currentIndex = 0;

	$("#sculpture.art_elem a").click(function(ev) {
		currentIndex = 0;
		images = $("#gsculpture.album img");
		images.show();

		var image = images[currentIndex];
		bigImage.attr("src", $(image).attr("data-full"));

		images.click(function(ev) {
			currentIndex = images.index(this);	
			var imgSrc = $(this).attr("data-full");	
			bigImage.fadeOut(400, function() {
				bigImage.attr("src", imgSrc);
				bigImage.fadeIn();
				return false;
			});
			return false;
		});

		$("#gallery").fadeIn(1000);
		return false;
	});

	$("#wpaint.art_elem a").click(function(ev) {
		currentIndex = 0;
		images = $("#gwpaint.album img");
		images.show();

		var image = images[currentIndex];
		bigImage.attr("src", $(image).attr("data-full"));
		images.click(function(ev) {
			currentIndex = images.index(this);	
			var imgSrc = $(this).attr("data-full");	
			bigImage.fadeOut(400, function() {
				bigImage.attr("src", imgSrc);
				bigImage.fadeIn();
				return false;
			});
			return false;
		});

		$("#gallery").fadeIn(1000);
		return false;
	});

	$("#gallery").click(function(ev) {
		images.hide();
		$("#gallery").hide();	
		return false;
	});


	bigImage.click(function(ev) {
		currentIndex += 1;
		if (currentIndex >= images.length) {
			currentIndex = 0;
		}
		var currentImg = images[currentIndex];
		if (currentImg != undefined) {
			var imgSrc = $(currentImg).attr("data-full");
			bigImage.fadeOut(400, function() {
				bigImage.attr("src", imgSrc);
				bigImage.fadeIn();
				return false;
			});
		}
		return false;
	});
}
