const slideshowContainer = document.querySelector(".slideshow-container");
const photoFolder = "photos/"; // Folder containing the images
const photoCount = 16; // Number of images in the folder
const photoFormat = ".jpg"; // Format of the images (e.g., .jpg, .png)

// Dynamically create slides
for (let i = 1; i <= photoCount; i++) {
    const slide = document.createElement("div");
    slide.className = "slide fade";
    const img = document.createElement("img");
    img.src = `${photoFolder}image${i}${photoFormat}`;
    img.alt = `Project ${i}`;
    slide.appendChild(img);
    slideshowContainer.appendChild(slide);
}

// Add navigation arrows
const prevArrow = document.createElement("a");
prevArrow.className = "prev";
prevArrow.innerHTML = "&#10094;";
prevArrow.onclick = () => changeSlide(-1);
slideshowContainer.appendChild(prevArrow);

const nextArrow = document.createElement("a");
nextArrow.className = "next";
nextArrow.innerHTML = "&#10095;";
nextArrow.onclick = () => changeSlide(1);
slideshowContainer.appendChild(nextArrow);

let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

// Auto-slide functionality (optional)
setInterval(() => changeSlide(1), 10000); // Change slide every 10 seconds





