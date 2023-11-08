var video = document.querySelector("video");

// step 1 -- page load, no autoplay or looping
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false
	video.loop = false 

});

// step 2 -- play button
 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%"
	console.log('The vide volume is ' + video.volume)
 });

// step 3 -- pause button
 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
   video.pause();
});

// step 4 -- slow down
document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slowed down speed is " + video.playbackRate);
	video.playbackRate *= .9;

});

// step 5 -- speed up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .9;
	console.log("Sped up speed is " + video.playbackRate);
	
});

// step 6 -- skip 10 seconds 
document.querySelector("#skip").addEventListener("click", function() {
    	video.currentTime += 10;
		console.log('10 seconds forward, current time is ' + video.currentTime)
		if (video.currentTime >= video.duration) {
			video.currentTime = 0
		}
	
});

// step 7 -- mute (FIX)
document.querySelector("#mute").addEventListener("click", function() {
	console.log("Video Muted");
	if (video.muted == true) {
		video.muted = false
		document.querySelector('#mute').innerHTML = 'Mute'
	}
	else {
		video.muted = true
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

// step 8 -- volume slider 
document.querySelector("#slider").addEventListener("input", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

});
// step 9 -- FIX
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School!");
	video.classList.add("oldSchool")

});

// step 10 -- FIX
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original!");
	video.classList.remove("oldSchool")
});

