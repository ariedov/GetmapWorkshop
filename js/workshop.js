$(document).ready(function() {

	var currentImageIndex = 0;
	var imageCount = 6;

	var visibleImage = $(".workshop_image.visible");
	var invisibleImage = $(".workshop_image.hidden");

	var changePhoto = function() {
		currentImageIndex += 1;
		if (currentImageIndex == imageCount) {
			currentImageIndex = 0;
		}

		visibleImage.fadeOut(500);
		invisibleImage.fadeIn(500);

		var tmp = visibleImage;
		visibleImage = invisibleImage;
		invisibleImage = tmp;

		var imageUrl = "img/workshop/" + currentImageIndex + ".png";
		visibleImage.attr('src', imageUrl);

		setTimeout(changePhoto, 4000);	
	};

	setTimeout(changePhoto, 4000);
});
