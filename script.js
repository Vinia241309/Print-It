const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const banner = document.getElementById('#banner');
const arrowleft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImage = document.querySelector('#banner > img');
const bannerText = document.querySelector('#banner > p');

const numberOfSlide = slides.length;
let i = 0;

function turnSlide() {
	console.log(bannerImage.src)
	bannerImage.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerText.innerHTML = slides[i].tagLine;
}
arrowleft.addEventListener("click", function () {
	if (i == 0) {
		i = numberOfSlide - 1;
	}
	else {
		i--;
	}turnSlide();
});

arrowRight.addEventListener("click", function () {
	if (i == numberOfSlide - 1) {
		i = 0;
	} else {
			i++;
	}turnSlide();
});

