(function(){
	"use strict";

    const images = ['images/asia/DSC_0163.jpg', 'images/asia/DSC_0018.jpg', 'images/asia/DSC_0079.jpg', 'images/asia/DSC_0283.jpg', 'images/asia/DSC_0109-2.jpg', 'images/asia/DSC_0036.jpg', 'images/asia/DSC_0014-2.jpg', 'images/asia/DSC_0005.jpg', 'images/asia/0BB6B032-9E73-4503-9355-A45A21D0F4D8-2.jpg', 'images/asia/050A0836-E704-4B82-9528-E165635711A5_1_100_o-2.jpg', 'images/asia/DSC_0195.jpg', 'images/asia/0DB8914E-566E-422E-850F-C5EE06AB7467.jpg', 'images/asia/DSC_0015.jpg', 'images/asia/DSC_0102.jpg'];

    const slideshowBox = document.querySelector('#slideshow');
    let currentImage = 0;

    setInterval(changeImage, 5000);

    function changeImage(){
    	console.log(currentImage)
        if (currentImage===images.length){
            currentImage = 0;
            const removeSlide = document.querySelector('img');
        	slideshowBox.removeChild(removeSlide);
        }

        const newSlide = document.createElement('img');
        newSlide.src = images[currentImage];
        newSlide.className = 'fadeinImg myImage';
        slideshowBox.appendChild(newSlide);

        if (currentImage>=1){
        	const removeSlide = document.querySelector('img');
        	slideshowBox.removeChild(removeSlide);
        }
        currentImage++;

    }
}());

