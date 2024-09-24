let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    // Increment the slide index
    slideIndex++;
    
    // If slideIndex exceeds the number of slides, reset it to the first one
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
    
    // Change slide every 3 seconds (3000 milliseconds)
    setTimeout(showSlides, 3000);
}