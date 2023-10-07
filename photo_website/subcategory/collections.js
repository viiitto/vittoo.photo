var images = document.getElementsByClassName('square');
var replace = [
	//mare//
	['../images/europe/4FD4E7F0-1DDB-4FF6-A30E-20DA8ACCC20E_1_105_c.jpg', 
		'../images/asia/DSC_0135.jpg', 
		'../images/asia/DSC_0018.jpg'
		], 
	//colours//
	['../images/asia/0BB6B032-9E73-4503-9355-A45A21D0F4D8-2.jpg', 
		'../images/asia/AFE1BEED-99FF-459E-A0FF-5AFF049383F1_1_105_c.jpg', 
		'../images/asia/DSC_0036.jpg'
		], 
	//fauna//
	['../images/asia/DSC_0109-2.jpg', 
		'../images/asia/DSC_0195.jpg', 
		'../images/asia/DSC_0163.jpg'
		], 
	//flora//
	['../images/europe/_DSC0504.JPG',
		'../images/europe/_DSC0514.jpg',
		'../images/europe/_DSC0505.JPG'
		], 
	//street//
	['../images/asia/ADCE01F0-46EB-4EF6-A80B-E6567DC4C4C2.JPG', 
		'../images/asia/DSC_0098.JPEG', 
		'../images/asia/DSC_0015.jpg'
		], 
	//people//
	['../images/asia/DSC_0005.jpg', 
		'../images/asia/DSC_0036.jpg', 
		'../images/asia/DSC_0014-2.jpg'
		], 
	//architecture//
	['../images/europe/5D922272-E2A9-4252-9766-521A82AE43F0_1_105_c.jpg', 
		'../images/europe/698CCD19-0C2E-4C40-81A1-BE6CA65A998A_1_105_c.jpg', 
		'../images/asia/IMG_2782.jpeg'
		], 
	//landscapes//
	['../images/asia/DSC_0018.jpg', 
		'../images/asia/DSC_0158.jpg', 
		'../images/asia/DSC_0243.jpg'
		]];
var imageContainers = document.getElementsByClassName('collection');
var imageIndex = 0;
var intervalIds = [];

function changeImage(index, containerIndex) {
  if (imageIndex >= replace[index].length) {
    imageIndex = 0;
  }
  images[containerIndex].src = replace[index][imageIndex];
  imageIndex++;
}

for (var i = 0; i < imageContainers.length; i++) {
  (function (containerIndex) {
    imageContainers[containerIndex].addEventListener('mouseover', function () {
      intervalIds[containerIndex] = setInterval(function () {
        changeImage(containerIndex, containerIndex);
      }, 500);
    });

    imageContainers[containerIndex].addEventListener('mouseout', function () {
      clearInterval(intervalIds[containerIndex]);
    });

    images[containerIndex].src = replace[containerIndex][0];
  })(i); 
}
