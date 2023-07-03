document.addEventListener('DOMContentLoaded', () => {
    //new WOW().init();
    //app.burger.init();
    //app.tab.init();
    //app.accordion.init();
    //app.select.init();
    //app.slider.init();
    //app.popup.init();

    /* new Swiper('.about-slider', {
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 1,
        spaceBetween: 24,
        speed: 1000,
    }); */

    /* document.querySelectorAll('[data-section]').forEach((link) => {
        link.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector(`#${link.getAttribute('data-section')}`).offsetTop,
                behavior: "smooth"
            });
        });
    }); */

    /* const animatedItems = document.querySelectorAll('.animated');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    const options = {
        // root: по умолчанию window, но можно задать любой элемент-контейнер
        rootMargin: '0px 0px 75px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    animatedItems.forEach((item) => observer.observe(item)); */

    /* const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('.search-form__input');
    const searchBtn = document.querySelector('.header__search-btn');
    searchBtn.addEventListener('click', function () {
        searchForm.classList.add('search-form--active');
    });
    
    document.addEventListener('mouseup', (e) => {
        if (searchForm != e.target && searchInput != e.target) {
            searchForm.classList.remove('search-form--active');
        }
    }); */
});