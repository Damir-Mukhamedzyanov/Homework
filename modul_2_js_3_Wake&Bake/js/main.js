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
        e.preventDefault()
        document.body.classList.toggle('body--modal-opened');
    })

    modal.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('modal') || e.target.closest('.modal__cancel')) {
            document.body.classList.remove('body--modal-opened');
        }
    })
    // =================================================================

    const tabControls = document.querySelector('.tabs-controls');

    tabControls.addEventListener('click', taggleTab);

    function taggleTab(e) {

        const tabControl = e.target.closest('.tab-control__link');

        if (!tabControl) return;

        e.preventDefault()

        if (tabControl.classList.contains("tab-control__link--active")) return;

        const tabContentID = e.target.getAttribute('href');
        const tabContent = document.querySelector(tabContentID);
        const activeContent = document.querySelector(".tab-content--show");
        const activeControl = document.querySelector(".tab-control__link--active");

        if (activeContent) {
            activeContent.classList.remove("tab-content--show");
        }

        if (activeControl) {
            activeControl.classList.remove("tab-control__link--active");
        }

        tabContent.classList.add("tab-content--show");
        tabControl.classList.add("tab-control__link--active");
    }

    // ===============================================

    const accordionList = document.querySelectorAll('.accordion-list');

    accordionList.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget;
            const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
            const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return;
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion-list__item--opened');
                accordionOpenedContent.style.maxHeight = null;
            }

            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        })
    })

    // Слайдер галерея
    new Swiper('.gallery__slider', {
        spaceBetween: 15,
        slidesPerView: 1.5,

        pagination: {
            el: '.gallery__pagination',
            type: 'fraction'
        },

        navigation: {
            nextEl: '.gallery__next ',
            prevEl: '.gallery__prev',
        },

        breakpoints: {
            601: {
                slidesPerView: 3
            },
            801: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1101: {
                slidesPerView: 4
            }
        }
    });

    // Слайдер студенты

    new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,


        navigation: {
            nextEl: '.testimonials__next ',
            prevEl: '.testimonials__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true

        },
        breakpoints: {
            901: { slidesPerView: 1.5 },
            1201: { slidesPerView: 2.05 },
        }
    });

    // Инпуты телефоны

    const telInputs = document.querySelectorAll('input[type="tel"]'),
        im = new Inputmask("+7 (999) 999-99-99");

    im.mask(telInputs)

})()
