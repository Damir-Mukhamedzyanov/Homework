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
})()