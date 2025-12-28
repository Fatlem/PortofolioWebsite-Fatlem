// ======================================
// CERTIFICATE MODAL FUNCTIONALITY
// Paste di paling bawah file js/animations.js
// ======================================

(function() {
    'use strict';
    
    // Create modal HTML structure
    function createModal() {
        const modalHTML = `
            <div id="certificateModal" class="certificate-modal">
                <span class="modal-close">&times;</span>
                <img class="modal-content" id="modalImage" alt="Certificate Detail">
                <div class="modal-caption"></div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }
    
    // Initialize modal functionality
    function initCertificateModal() {
        // Create modal if it doesn't exist
        if (!document.getElementById('certificateModal')) {
            createModal();
        }
        
        const modal = document.getElementById('certificateModal');
        const modalImg = document.getElementById('modalImage');
        const modalCaption = document.querySelector('.modal-caption');
        const closeBtn = document.querySelector('.modal-close');
        
        if (!modal || !modalImg || !modalCaption || !closeBtn) {
            console.warn('Certificate modal elements not found');
            return;
        }
        
        // Get all certificate images
        const certificateSection = document.getElementById('certificate');
        if (certificateSection) {
            const certImages = certificateSection.querySelectorAll('.project-image img');
            
            // Add click event to each certificate image
            certImages.forEach((img) => {
                img.addEventListener('click', function(e) {
                    e.preventDefault();
                    openModal(this);
                });
                
                // Add keyboard accessibility
                img.setAttribute('tabindex', '0');
                img.setAttribute('role', 'button');
                img.setAttribute('aria-label', 'Click to view certificate in full size');
                
                img.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(this);
                    }
                });
            });
        }
        
        // Function to open modal
        function openModal(imgElement) {
            modal.style.display = 'block';
            modalImg.classList.add('loading');
            
            // Set image source
            modalImg.src = imgElement.src;
            modalImg.alt = imgElement.alt || 'Certificate';
            
            // Get certificate title from the card
            const projectCard = imgElement.closest('.project-card');
            const title = projectCard ? projectCard.querySelector('.project-info h3')?.textContent : 'Certificate';
            modalCaption.textContent = title;
            
            // Remove loading class when image loads
            modalImg.onload = function() {
                modalImg.classList.remove('loading');
            };
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
            
            // Set focus to close button for accessibility
            setTimeout(() => {
                closeBtn.focus();
            }, 100);
        }
        
        // Function to close modal
        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            modalImg.src = '';
            modalCaption.textContent = '';
        }
        
        // Close modal when clicking the X button
        closeBtn.addEventListener('click', closeModal);
        
        // Close modal when clicking outside the image
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
        
        // Add swipe support for mobile
        if ('ontouchstart' in window) {
            let touchStartY = 0;
            let touchEndY = 0;
            
            modal.addEventListener('touchstart', function(e) {
                touchStartY = e.changedTouches[0].screenY;
            }, false);
            
            modal.addEventListener('touchend', function(e) {
                touchEndY = e.changedTouches[0].screenY;
                handleSwipe();
            }, false);
            
            function handleSwipe() {
                const swipeThreshold = 50;
                if (touchStartY - touchEndY > swipeThreshold || touchEndY - touchStartY > swipeThreshold) {
                    closeModal();
                }
            }
        }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCertificateModal);
    } else {
        initCertificateModal();
    }
    
    // Re-initialize if new certificates are added dynamically
    window.reinitCertificateModal = initCertificateModal;
    
})();
