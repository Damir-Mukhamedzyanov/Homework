'use strict'

const btnOpenModal = document.querySelector('.btn-open'),
    Modal = document.querySelector('.modal'),
    closeModal = document.querySelector('.modal__close-btn');

function closeModalFun() {
    Modal.classList.add('modal--close');
}

function openModal() {
    Modal.classList.remove('modal--close')
}

btnOpenModal.addEventListener('click', openModal);

Modal.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains('modal') || e.target.classList.contains('modal__close-btn')) {
        closeModalFun()
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
        closeModalFun()
    }
});
