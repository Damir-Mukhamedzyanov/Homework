(function () {

    const burger = document.querySelector('.burger-icon'),
        nav = document.querySelector('.nav__list');

    burger.addEventListener('click', (e) => { document.body.classList.toggle('body--opened-menu') });

    nav.addEventListener('click', (e) => {
        if (document.documentElement.clientWidth > 900) {
            return
        }
        if (e.target.classList.contains('nav__link')) {
            document.body.classList.remove('body--opened-menu')
        }
    })
    // ==============================================================

    const modal = document.querySelector('.modal'),
        modalOpenedBtn = document.querySelector('.about__img-button');

    modalOpenedBtn.addEventListener('click', (e) => {
        document.body.classList.toggle('body--modal-opened');
    })

    modal.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('modal') || e.target.closest('.modal__cancel')) {
            document.body.classList.remove('body--modal-opened');
        }
    })
})()