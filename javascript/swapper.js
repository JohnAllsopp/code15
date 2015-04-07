//swaps the details for the speaker

var swapper = {
	lastImage: 0, //which image did we display last?
	speakers: [{name: "John Allsopp", imageUrl: "speaker_j-allsopp.jpg"}, {name: "Ethan Marcotte", imageUrl: "speaker_e-marcotte.jpg"}, {name: "Jason Grigsby", imageUrl: "speaker_j-grigsby.jpg"}], //details for the speakers
	
	rotateImages: function() {
		//start rotating the images
		
		window.setInterval(swapper.swapImage, 1000)
	},
	
	swapImage: function(){
		if (swapper.lastImage = 2 ) {
			swapper.lastImage = 0
		}
		
		else {
			swapper.lastImage++
		}
	
		var imgElement = document.querySelector("#feb5 img");
		imgElement.src = "images/" + swapper.speakers[swapper.lastImage].imageUrl;
		
		var captionElement = document.querySelector("#feb5 figcaption");
		captionElement.innerHTML = swapper.speakers[swapper.lastImage].name;
	
	}
	
}