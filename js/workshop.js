$(document).ready(function() {

	var currentImageIndex = 0;
	var imageCount = 6;

	var visibleImage = $(".workshop_image.visible");
	var invisibleImage = $(".workshop_image.hidden");

	var changePhoto = function() {
		var nextImageIndex = (currentImageIndex + 1) % imageCount;
		visibleImage.attr('src', "img/workshop/" + currentImageIndex + ".png");
		invisibleImage.attr('src', "img/workshop/" + nextImageIndex + ".png");

		invisibleImage.hide();
		invisibleImage.fadeIn(3000);

		currentImageIndex = nextImageIndex;
	};

	setInterval(changePhoto, 4000);
});
