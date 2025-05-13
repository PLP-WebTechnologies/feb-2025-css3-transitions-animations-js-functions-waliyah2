document.addEventListener('DOMContentLoaded', () => {
    const animatedButton = document.getElementById('animatedButton');
    const animatedImage = document.getElementById('animatedImage');
    const animationKey = 'imageAnimated';

    // Function to store user preference in localStorage
    function storeAnimationPreference(animated) {
        localStorage.setItem(animationKey, animated);
    }

    // Function to retrieve user preference from localStorage
    function getAnimationPreference() {
        return localStorage.getItem(animationKey) === 'true';
    }

    // Function to trigger the image animation
    function triggerImageAnimation() {
        animatedImage.classList.add('animate-image');
        // Remove the class after the animation duration to allow it to trigger again
        setTimeout(() => {
            animatedImage.classList.remove('animate-image');
        }, 500); // Matches the transition duration in CSS
        storeAnimationPreference(true); // Store that the animation has been triggered
    }

    // Initially check if the animation preference was previously set
    if (getAnimationPreference()) {
        animatedImage.classList.add('animate-image');
    }

    // Event listener for the button click
    animatedButton.addEventListener('click', triggerImageAnimation);
});
