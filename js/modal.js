document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('[data-modal]');
    const openModalButton = document.getElementById('open-modal');
    const closeModalButton = document.querySelector('[data-modal-close]');
    const body = document.body;

    openModalButton.addEventListener('click', () => {
        modal.classList.remove('is-hidden');
        body.classList.add('modal-open');
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('is-hidden');
        body.classList.remove('modal-open');
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.add('is-hidden');
            body.classList.remove('modal-open');
        }
    });
});
