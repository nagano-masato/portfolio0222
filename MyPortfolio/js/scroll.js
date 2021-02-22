'use strict'

{

    //スクロールイン

    const targets = document.querySelectorAll('.fadeIn');

    window.addEventListener('scroll', () => {
        targets.forEach((target) => {
            const rect = target.getBoundingClientRect().top;
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            const offset = rect + scroll;
            const height = window.innerHeight; 
            if (scroll > offset - height + 150) {
              target.classList.add('scrollIn');
            }
        });
    });
}