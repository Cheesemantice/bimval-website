// Bimval Landing Page Interactive JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // 1. Update current year automatically
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Info Modal Handlers
    const modal = document.getElementById('info-modal');
    const openModalBtn = document.getElementById('info-modal-btn');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const okModalBtn = document.getElementById('modal-ok-btn');

    function openModal() {
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent body scrolling
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (openModalBtn) openModalBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (okModalBtn) okModalBtn.addEventListener('click', closeModal);

    // Close modal on click outside content
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal on Escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // 3. Notification Form Handler
    const notifyForm = document.getElementById('notify-form');
    const emailInput = document.getElementById('email-input');
    const formMessage = document.getElementById('form-message');

    if (notifyForm) {
        notifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput.value.trim();

            if (!email) {
                showFormMessage('Kérjük, adja meg e-mail címét!', 'error');
                return;
            }

            // Simple Email Regex check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Kérjük, érvényes e-mail címet adjon meg!', 'error');
                return;
            }

            // Save email locally for demo & show success message
            try {
                let savedEmails = JSON.parse(localStorage.getItem('bimval_subscribers') || '[]');
                if (!savedEmails.includes(email)) {
                    savedEmails.push(email);
                    localStorage.setItem('bimval_subscribers', JSON.stringify(savedEmails));
                }
            } catch (err) {
                console.warn('LocalStorage not available', err);
            }

            showFormMessage('Köszönjük! Értesítjük, amint a weboldal elindul.', 'success');
            emailInput.value = '';
        });
    }

    function showFormMessage(text, type) {
        if (!formMessage) return;
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;
        
        setTimeout(() => {
            if (type === 'error') {
                formMessage.style.display = 'none';
            }
        }, 5000);
    }
});
