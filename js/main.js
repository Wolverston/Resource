    window.onload = function(){
	
      function slide(){
        var images1 = Math.round(Math.random()*6); // 1 .. 4, для выбора количества картинок
        var imagesToRevert = [];
		if (images1 >= 5) {
			do {
				for (var i = 0; i < 2; i++) {
					imagesToRevert[i] = Math.floor(Math.random()*4);
				}
			} while (imagesToRevert[0] == imagesToRevert[1])
		} else {
			imagesToRevert[0] = Math.floor(Math.random()*4);
		}

		var timeout = (Math.round(Math.random()*2)+1)*1750; // для рандомного таймаута
        //Находим в ДОМ элементы для слайдера
        var slider = document.querySelectorAll('.b-main-page__sliderbar__slider__item');
		sliderArray = [];
		//Исключаем первый и последний элементы, у них неподходящий для обмена вид
		for (var i=1; i < slider.length-1; i++) {
		sliderArray.push(slider[i]);
		}

        for (var i = 0; i < imagesToRevert.length; i++) {
			var imageToPick = Math.floor(Math.random()*sliderImages.length); // выбираем случайную картинку из массива
			var imageToRevert = imagesToRevert[i];
			revertImage(imageToPick, imageToRevert);//запустили функцию
		}		
		
		function revertImage(imageToPick, imageToRevert) {
					var item = sliderArray[imageToRevert];
			//найдем элемент, являющийся обратной стороной выбранного			
			if (item.classList.contains('flipped')) {
			//Если картинка для смены совпадает с текущей - меняем ее
				if (('' + sliderArray[imageToRevert].querySelector('.back').innerHTML) == ('<img src="' + sliderImages[imageToPick] + '" alt="">')) {
					if (imageToPick = sliderArray.length-1) {
						imageToPick = 0;
					} else {
						imageToPick +=1;
					}
				}
				// и применяем				
				sliderArray[imageToRevert] .querySelector('.front').innerHTML = '<img src="' + sliderImages[imageToPick] + '" alt="">';
				backSlide();	
				item.classList.toggle('flipped');
			} else {
				//Если картинка для смены совпадает с текущей - меняем ее
				if (('' + sliderArray[imageToRevert].querySelector('.front').innerHTML) == ('<img src="' + sliderImages[imageToPick] + '" alt="">')) {
					if (imageToPick = sliderArray.length-1) {
						imageToPick = 0;
					} else {
						imageToPick +=1;
					}
				}
				// и применяем
				sliderArray[imageToRevert].querySelector('.back').innerHTML = '<img src="' + sliderImages[imageToPick] + '" alt="">';
				frontSlide();
				item.classList.toggle('flipped');
			}
		}
		
		function frontSlide(){	
			var back = ('' + sliderArray[imageToRevert].querySelector('.back').style.transform);
			var front = ('' + sliderArray[imageToRevert].querySelector('.front').style.transform);
			if (back != '') {
				var backDeg = parseInt(back.substr(8, 5)) + 180;
				var frontDeg = parseInt(front.substr(8, 5)) + 180;
				sliderArray[imageToRevert].querySelector('.front').style.transform = 'rotateX('+frontDeg+'deg)';
				sliderArray[imageToRevert].querySelector('.back').style.transform = 'rotateX('+backDeg+'deg)';
			} else {
				sliderArray[imageToRevert].querySelector('.front').style.transform = 'rotateX(180deg)';      
				sliderArray[imageToRevert].querySelector('.back').style.transform = 'rotateX(0deg)';
			}
		}

		function backSlide(){
			var back = ('' + sliderArray[imageToRevert].querySelector('.back').style.transform);
			var front = ('' + sliderArray[imageToRevert].querySelector('.front').style.transform);
			if (back != '') {
				var backDeg = parseInt(back.substr(8, 5)) + 180;
				var frontDeg = parseInt(front.substr(8, 5)) + 180;
				sliderArray[imageToRevert].querySelector('.front').style.transform = 'rotateX('+frontDeg+'deg)';
				sliderArray[imageToRevert].querySelector('.back').style.transform = 'rotateX('+backDeg+'deg)';
			} else {
				sliderArray[imageToRevert].querySelector('.front').style.transform = 'rotateX(0deg)';      
				sliderArray[imageToRevert].querySelector('.back').style.transform = 'rotateX(-180deg)';
			}
		}
		
        setTimeout(slide, timeout);
      }
	if (window.outerWidth > 320) {
	
	setTimeout(slide, 1000);
	}
	
      //Список картинок массивом
    var images = [
		'img/body-slide-1.png',
        'img/body-slide-2.png',
        'img/slider-1.png',
        'img/slider-2.png',
        'img/slider-3.png'
    ]
	var sliderImages = [
        'img/slider-2.png',
        'img/slider-3.png',
		'img/slider-4.png',
		'img/slider-5.png'
	]

      function upArrow(elemNumber){
        var sliders = [document.getElementsByClassName('item-' + elemNumber + '-front')[0],
                       document.getElementsByClassName('item-' + elemNumber + '-back')[0]];

        if (sliders[0].classList.length == 2) {
          upArrowChanger(0, 1, sliders, elemNumber);
        } else {
          upArrowChanger(1, 0, sliders, elemNumber);
        }
      }

      function upArrowChanger(frontNumber, backNumber, sliders, elemNumber) {
        for (var i = 0; i < images.length; i++) {
          if (sliders[frontNumber].innerHTML.lastIndexOf('' + images[i]) != '-1') {
            if (i == 0) {
              imageToPick = images.length - 1;
            } else {
              imageToPick = i-1;
            }
            break;
          }
        }
        sliders[backNumber].innerHTML = '<img src="' + images[imageToPick] + '">';
        sliders[0].classList.toggle('item-' + elemNumber + '-front__active');
        sliders[1].classList.toggle('item-' + elemNumber + '-back__active');
      }

      function downArrow(elemNumber){
        var sliders = [document.getElementsByClassName('item-' + elemNumber + '-front')[0],
                       document.getElementsByClassName('item-' + elemNumber + '-back')[0]];
					   //console.log(sliders);
        if (sliders[0].classList.length == 2) {
          downArrowChanger(0, 1, sliders, elemNumber);
        } else {
          downArrowChanger(1, 0, sliders, elemNumber);
        }
      }

      function downArrowChanger(frontNumber, backNumber, sliders, elemNumber) {
        for (var i = 0; i < images.length; i++) {
		
          if (sliders[frontNumber].innerHTML.lastIndexOf('' + images[i]) != '-1') {
            if (i == images.length-1) {
              imageToPick = 0;
            } else {
              imageToPick = i+1;
            }
            break;
          }
        }
		
        sliders[backNumber].innerHTML = '<img src="' + images[imageToPick] + '">';
		sliders[0].classList.toggle('item-' + elemNumber + '-front__active');
        sliders[1].classList.toggle('item-' + elemNumber + '-back__active');
      }
	  
	  
      var upArrow1 = document.getElementsByClassName('up-arrow-1')[0];
      var upArrow2 = document.getElementsByClassName('up-arrow-2')[0];
      var downArrow1 = document.getElementsByClassName('down-arrow-1')[0];
      var downArrow2 = document.getElementsByClassName('down-arrow-2')[0];
	  
      upArrow1.addEventListener('click', function(){
          upArrow(1);
      }, false);

      downArrow1.addEventListener('click', function(){
          downArrow(1)
      }, false);

      upArrow2.addEventListener('click', function(){
          upArrow(2);
      }, false);

      downArrow2.addEventListener('click', function(){
          downArrow(2)
      }, false);
    }