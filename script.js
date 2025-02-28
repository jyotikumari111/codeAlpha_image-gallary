const images = [...document.querySelectorAll('.image')]; 
console.log("Images loaded:", images); // Debugging: Check if images are loaded correctly

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');  // Fixed typo
const largeImage = document.querySelector('.large-image');  // Fixed typo
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.classList.remove('active');
    }
});


// Open popup and update image when clicking on a gallery image
images.forEach((item, i) => {
    console.log("Image clicked, index:", i); // Debugging: Check if image click event is triggered

    item.addEventListener('click', () => {
        index = i; // Update index
        updateImage(index); // Call updateImage inside event listener
console.log("Popup activated, current index:", index); // Debugging: Check if popup is activated
popup.classList.add('active'); // Use add instead of toggle to avoid unintended closing

    });
});

const updateImage = (i) => {
    let path = images[i].src;  // Get the correct image source dynamically
    largeImage.src = path;
    imageName.innerHTML = path.split('/').pop(); // Extract only filename
    imageIndex.innerHTML = `0${i + 1}`;
};

// Close popup when clicking close button
closeBtn.addEventListener('click', () => {
    popup.classList.remove('active'); // Use remove instead of toggle
});

leftArrow.addEventListener('click', () => { 
    console.log("Left arrow clicked, current index:", index); // Debugging: Check if left arrow is clicked


    console.log("Left arrow clicked, current index:", index); // Debugging: Check if left arrow is clicked

    console.log("Left arrow clicked, current index:", index); // Debugging: Check if left arrow is clicked

    if (index > 0) {
        index--; // Decrement index
        updateImage(index);
    }
});

rightArrow.addEventListener('click', () => { 
    console.log("Right arrow clicked, current index:", index); // Debugging: Check if right arrow is clicked


    console.log("Right arrow clicked, current index:", index); // Debugging: Check if right arrow is clicked

    console.log("Right arrow clicked, current index:", index); // Debugging: Check if right arrow is clicked

    if (index < images.length - 1) {
        index++; // Increment index
        updateImage(index);
    }
});

// Keyboard navigation for left/right arrows
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        if (index > 0) {
            index--; // Decrement index
            updateImage(index);
        }
    } else if (event.key === 'ArrowRight') {
        if (index < images.length - 1) {
            index++; // Increment index
            updateImage(index);
        }
    } else if (event.key === 'Escape') {
        popup.classList.remove('active'); // Close popup with Escape key
    }
});
