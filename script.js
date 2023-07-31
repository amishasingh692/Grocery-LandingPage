function slideshow() {
    const images = ["./image/slide.png", "./image/slide3.jpg"]; // Add more image URLs if needed
    let currentIndex = 0;
    const imgElement = document.querySelector(".slide-image");
  
    function showImage() {
      imgElement.src = images[currentIndex];
      currentIndex = (currentIndex + 1) % images.length;
    //   console.log ("image",currentIndex)
    }
  
    // Change image every 3 seconds (adjust the duration as needed)
    setInterval(showImage, 3000);
  }
  
  // Call the slideshow function after the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    slideshow();
  });