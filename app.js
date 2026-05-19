document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn, .back-btn');
    const overlay = document.getElementById('transition-overlay');
    
    let isAnimating = false;

    menuButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isAnimating) return;
            
            const targetPageId = btn.getAttribute('data-target');
            const targetPage = document.getElementById(targetPageId);
            const currentPage = document.querySelector('.page.active');
            
            if (!targetPage || currentPage === targetPage) return;

            isAnimating = true;

            // Trigger Transition In
            overlay.classList.remove('out');
            overlay.classList.add('active');
            
            // Switch pages when the dark base covers the center
            setTimeout(() => {
                currentPage.classList.remove('active');
                targetPage.classList.add('active');
            }, 400); // Wait for the final blue wipe to cover the screen

            // Trigger Transition Out
            setTimeout(() => {
                overlay.classList.remove('active');
                overlay.classList.add('out');
                
                setTimeout(() => {
                    overlay.classList.remove('out'); // Reset for next time (hidden)
                    isAnimating = false;
                }, 600); // Wait for all layers to exit
            }, 700); // Hold the covered state briefly
        });
    });
});
