const sliderMH = {
  selectors: {
    slider: 'js-slider',
    slide: 'js-slide',
    sliderInner: 'js-slider-inner',
    sliderArrow: 'js-slide-arrow',
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
    sliderContent: 'slider__content'
  }
}

// Elements
const slider = document.querySelector(`.${sliderMH.selectors.slider}`);
const sliderInner = document.querySelector(`.${sliderMH.selectors.sliderInner}`);
const slides = document.querySelectorAll(`.${sliderMH.selectors.slide}`);
const slide = document.querySelector(`.${sliderMH.selectors.slide}`)
const sliderContent = document.querySelectorAll(`.${sliderMH.selectors.sliderContent}`)
const arrowLeft = document.querySelector(`.${sliderMH.selectors.arrowLeft}`)
const arrowRight = document.querySelector(`.${sliderMH.selectors.arrowRight}`)

// Event Listeners
arrowLeft.addEventListener('click', () => slideLeft());
arrowRight.addEventListener('click', () => slideRight());
sliderInner.addEventListener('transitionend', (e) => expandCurrentSlide(e));
sliderInner.addEventListener('transitionend', (e) => checkSlideIndex(e));
slides.forEach(slide => slide.addEventListener('click', (e) => checkClickedSlide(e)))

slider.addEventListener('mousedown', (e) => sliderMouseDown(e));
slider.addEventListener('mousemove', (e) => sliderMouseMove(e));
slider.addEventListener('mouseleave', (e) => sliderMouseLeaveOrUp())
document.addEventListener('mouseup', (e) => sliderMouseLeaveOrUp())


// Width of slide element
const slideWidth = slide.offsetWidth;

// As there are copies of all slides to the left and right, we divide number of all by 3, and the middle ones are the ones we are going to see. We get startIndex as below:
const startIndex = slides.length / 3;
const lastIndex = startIndex + startIndex - 1;
let index = startIndex;
let isSliding = false;

let isMoving = false;
let mouseLastPosition = 0;
let diffx;

const sliderMouseDown = (e) => {
  if (!e.target.className.includes(sliderMH.selectors.sliderArrow)) {
    isMoving = true;
    mouseLastPosition = e.pageX;
  }
}

const sliderMouseMove = (e) => {
  if (isMoving) {
    diffx = e.pageX - mouseLastPosition;
    console.log('diffx: ', diffx);
    // Transition je samo zezao brzinu pokreta misa kad dragujes...
    sliderInner.style.transition = 'none';
    sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2 + diffx}px)`;
  }
}

const sliderMouseLeaveOrUp = () => {
  isMoving = false;
  if (diffx >= slideWidth / 2) {
    isMoving = false;
    slideLeft();
  }
  if (diffx <= - (slideWidth / 2)) {
    isMoving = false;
    slideRight();
  }
  if (diffx > - (slideWidth / 2) && diffx < slideWidth / 2) {
    slideFoo();
  }
  diffx = 0;
}

// Set slider to be at the startIndex slide, transition: none so it's not visible to user.
const loadSlides = () => {
  sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
}
loadSlides();

// Slide left and right - show slider based on current index
const slideFoo = () => {
  sliderInner.style.transition = '.4s all'
  sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
  slides.forEach(slide => slide.classList.remove(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide))
}

// Check slider index - rearange translateX if index is below start or above last
const checkSlideIndex = (e) => {
  // OVO JE BITNO KAO BOG - GLEDAJ POSLE KOG TRANSITIONA ZELIS F-JU, JER IH IMA DOSTA, SVE STO SE DESI UNUTAR ELEMENTA AKTIVIRA OVU ISTU FUNKCIJU!!!
  if (e.propertyName !== 'transform') {
    return;
  }
  if (e.srcElement.className.includes(sliderMH.selectors.sliderInner)) {
    if (index < startIndex) {
      sliderInner.style.transition = 'none';
      index = lastIndex;
      sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
    } else if (index > lastIndex) {
      sliderInner.style.transition = 'none';
      index = startIndex;
      sliderInner.style.transform = `translateX(${-slideWidth * index + slideWidth / 2}px)`;
    }
    isSliding = false;
    //Ne treba dole nego ovde, kad se uradi expand current slide, tek onda proveri ovo... kako znas da je gotovo expand current slide? Kad je transitionend na contentu?
  }
}

// Expand current slide after the transitions have ended
const expandCurrentSlide = (e) => {
  if (e.propertyName !== 'transform') {
    return;
  }
  if (e.srcElement.className.includes(sliderMH.selectors.sliderInner)) {
    if (index < startIndex) {
      slides[lastIndex].classList.add(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide)
    } else if (index > lastIndex) {
      slides[startIndex].classList.add(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide)
    } else {
      slides[index].classList.add(sliderMH.selectors.currentSlide, sliderMH.selectorsBEM.currentSlide)
    }
  }
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
  // if (isSliding === false) {
  const clickedWrapper = e.currentTarget;
  const clickedElement = e.target;
  // if (clickedWrapper.className.includes(sliderMH.selectors.currentSlide)) {
  //   return true;
  // }
  // console.log(clickedWrapper.getBoundingClientRect().left);
  e.preventDefault();
  if (clickedElement.tagName === 'IMG') {
    if (clickedWrapper.previousElementSibling.className.includes(sliderMH.selectors.currentSlide)) {
      slideRight();
    }
    if (clickedWrapper.nextElementSibling.className.includes(sliderMH.selectors.currentSlide)) {
      slideLeft();
    }
  }
  // }
}