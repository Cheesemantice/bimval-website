// BIMVal Landing Page Interactive JavaScript

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

    // 3. Contact & Order Form Handler
    const notifyForm = document.getElementById('notify-form');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const formMessage = document.getElementById('form-message');

    if (notifyForm) {
        notifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';

            if (!email) {
                showFormMessage('Kérjük, adja meg e-mail címét!', 'error');
                if (emailInput) emailInput.focus();
                return;
            }

            // Simple Email Regex check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Kérjük, érvényes e-mail címet adjon meg!', 'error');
                if (emailInput) emailInput.focus();
                return;
            }

            // Save submissions locally for demo & show success message
            try {
                let submissions = JSON.parse(localStorage.getItem('bimval_contact_requests') || '[]');
                submissions.push({
                    email: email,
                    message: message,
                    date: new Date().toISOString()
                });
                localStorage.setItem('bimval_contact_requests', JSON.stringify(submissions));
            } catch (err) {
                console.warn('LocalStorage not available', err);
            }

            showFormMessage('Köszönjük! Üzenetét rögzítettük, hamarosan felvesszük Önnel a kapcsolatot.', 'success');
            if (emailInput) emailInput.value = '';
            if (messageInput) messageInput.value = '';
        });
    }

    function showFormMessage(text, type) {
        if (!formMessage) return;
        formMessage.style.display = 'block';
        formMessage.textContent = text;
        formMessage.className = `form-message ${type}`;

        setTimeout(() => {
            if (type === 'error') {
                formMessage.style.display = 'none';
            }
        }, 5000);
    }
});
