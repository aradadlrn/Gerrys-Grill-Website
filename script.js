// script.js

// Initialize the slide index to start with the first slide
let slideIndex = 0;

// Display the initial slide
showSlides(slideIndex);

/**
 * Handles click events on the slideshow container.
 * Determines whether the user clicked the left or right side.
 * @param {MouseEvent} event - The click event.
 */
function handleClick(event) {
  const containerWidth = event.currentTarget.offsetWidth; // Width of the slideshow container
  const clickPosition = event.clientX; // X-coordinate of the click within the viewport
  const containerLeft = event.currentTarget.getBoundingClientRect().left; // Left edge of the slideshow container

  const relativeClickPosition = clickPosition - containerLeft; // Click position relative to the container

  // Determine which side was clicked
  if (relativeClickPosition > containerWidth / 2) {
    changeSlide(1); // Go to the next slide
  } else {
    changeSlide(-1); // Go to the previous slide
  }
}

/**
 * Changes the slide by the given increment.
 * @param {number} n - The slide increment (1 for next, -1 for previous).
 */
function changeSlide(n) {
  showSlides(slideIndex += n);
}

/**
 * Displays the current slide based on the slide index.
 */
function showSlides() {
  const slides = document.getElementsByClassName("slide"); // Get all slides

  // Loop through and hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Loop back to the first slide if at the end, or the last slide if before the start
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Display the current slide
  slides[slideIndex].style.display = "block";
}
