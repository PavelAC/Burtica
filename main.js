        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        document.getElementById('totalSlides').textContent = totalSlides;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
            
            document.getElementById('currentSlide').textContent = index + 1;
            
            // Update navigation buttons
            document.getElementById('prevBtn').disabled = index === 0;
            document.getElementById('nextBtn').disabled = index === totalSlides - 1;
        }

        function changeSlide(direction) {
            const newIndex = currentSlideIndex + direction;
            if (newIndex >= 0 && newIndex < totalSlides) {
                currentSlideIndex = newIndex;
                showSlide(currentSlideIndex);
            }
        }

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') changeSlide(-1);
            if (e.key === 'ArrowRight') changeSlide(1);
        });

        // Initialize
        showSlide(0);

// Image popup functionality
function showImagePopup(imageSrc, title) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.classList.add('image-popup-overlay');
    
    // Create popup container
    const popup = document.createElement('div');
    popup.classList.add('image-popup');
    
    // Create title
    const popupTitle = document.createElement('h3');
    popupTitle.textContent = title;
    
    // Create image
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = title;
    
    // Create close button
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('popup-close-btn');
    closeBtn.textContent = '×';
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(overlay);
    });
    
    // Assemble popup
    popup.appendChild(closeBtn);
    popup.appendChild(popupTitle);
    popup.appendChild(image);
    overlay.appendChild(popup);
    
    // Add to document
    document.body.appendChild(overlay);
    
    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
        }
    });
}