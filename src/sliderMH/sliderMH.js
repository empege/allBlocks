const sliderMH = {
  selectors: {
    slider: 'js-slider',
    slide: 'js-slide',
    sliderInner: 'js-slider-inner',
    arrowLeft: 'js-arrow-left',
    arrowRight: 'js-arrow-right',
    currentSlide: 'js-current-slide',
    previousSlide: 'js-previous-slide',
    nextSlide: 'js-next-slide',
  },
  selectorsBEM: {
    slider: 'slider',
    slide: 'slider__slide',
    sliderInner: 'slider__inner',
    currentSlide: 'slider__slide--current',
  }
}

// Elements
const sliderInner = document.querySelector(`.${sliderMH.selectors.sliderInner}`);
const slides = document.querySelectorAll(`.${sliderMH.selectors.slide}`);
const slide = document.querySelector(`.${sliderMH.selectors.slide}`)
const arrowLeft = document.querySelector(`.${sliderMH.selectors.arrowLeft}`)
const arrowRight = document.querySelector(`.${sliderMH.selectors.arrowRight}`)

// Event Listeners
arrowLeft.addEventListener('click', () => slideLeft());
arrowRight.addEventListener('click', () => slideRight());
sliderInner.addEventListener('transitionend', () => expandCurrentSlide());
sliderInner.addEventListener('transitionend', () => checkSlideIndex());
slides.forEach(slide => slide.addEventListener('click', (e) => checkClickedSlide(e)))

// Width of slide element
const slideWidth = slide.offsetWidth;

// As there are copies of all slides to the left and right, we divide number of all by 3, and the middle ones are the ones we are going to see. We get startIndex as below:
const startIndex = slides.length / 3;
const lastIndex = startIndex + startIndex - 1;
let index = startIndex;
let isSliding = false;

// Set slider to be at the startIndex slide, transition: none so it's not visible to user.
const loadSlides = () => {
  sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
}
loadSlides();

// Slide left and right - show slider based on current index
const slideFoo = () => {
  sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
  sliderInner.style.transition = '0.4s all'
  slides.forEach(slide => slide.classList.remove(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide))
}

// Check slider index - rearange translateX if index is below start or above last
const checkSlideIndex = () => {
  // console.log('checked slides');
  if (index < startIndex) {
    sliderInner.style.transition = 'none';
    index = lastIndex;
    sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
  } else if (index > lastIndex) {
    sliderInner.style.transition = 'none';
    index = startIndex;
    sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
  }
  // isSliding = false;
}

// Expand current slide after the transitions have ended
const expandCurrentSlide = () => {
  // console.log('expanded slide');
  if (index < startIndex) {
    slides[lastIndex].classList.add(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide)
  } else if (index > lastIndex) {
    slides[startIndex].classList.add(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide)
  } else {
    slides[index].classList.add(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide)
  }
  isSliding = false;
}

const slideRight = () => {
  if (!isSliding) {
    isSliding = true;
    index++;
    slideFoo();
  }
}
const slideLeft = () => {
  if (!isSliding) {
    isSliding = true;
    index--;
    slideFoo();
  }
}

// Check which slide is clicked: If current then go to link, if prev or next image clicked, then do next / prev button.
const checkClickedSlide = (e) => {
  const clickedWrapper = e.currentTarget;
  const clickedElement = e.target;
  if (clickedWrapper.className.includes(sliderMH.selectors.currentSlide)) {
    return true;
  }
  e.preventDefault();
  if (clickedElement.tagName === 'IMG') {
    if (clickedWrapper.previousElementSibling.className.includes(sliderMH.selectors.currentSlide)) {
      slideRight();
    }
    if (clickedWrapper.nextElementSibling.className.includes(sliderMH.selectors.currentSlide)) {
      slideLeft();
    }
  }
}