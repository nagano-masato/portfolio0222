'use strict';

{


    // モーダル

    const open = document.getElementById('open');
    const modal = document.getElementById('modal');
    const close = document.getElementById('close');
    const mask = document.getElementById('mask');
    
    function scrollToTop(){
        scrollTo(0, 0);
    }

    open.addEventListener('click', () => {
        modal.classList.remove('hidden');
        mask.classList.remove('hidden');
        scrollToTop();
    });

    close.addEventListener('click', () => {
        modal.classList.add('hidden');
        mask.classList.add('hidden');
        open.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    });

    mask.addEventListener('click', () => {
        close.click();
    });

    // ハンバーガーメニュー

    const navOpen = document.getElementById('navOpen');
    const overlay = document.querySelector('.overlay');
    const navClose = document.getElementById('navClose');
    const menuItems = document.querySelectorAll('.navMenu__listItem');
  
    navOpen.addEventListener('click', () => {
      overlay.classList.add('show');
      navOpen.classList.add('hide');
    });
  
    navClose.addEventListener('click', () => {
      overlay.classList.remove('show');
      navOpen.classList.remove('hide');
    });

    menuItems.forEach((menuItem) => {
        menuItem.addEventListener('click', () =>{
            overlay.classList.remove('show');
            navOpen.classList.remove('hide');           
        });
    });

    // スムーススクロール

    const smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
    smoothScrollTriggers.forEach((smoothScrollTrigger) => {
        smoothScrollTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            let href = smoothScrollTrigger.getAttribute('href');
            let targetElement = document.getElementById(href.replace('#', ''));
            const rect = targetElement.getBoundingClientRect().top;
            const offset = window.pageYOffset;
            const target = rect + offset - 60;
            window.scrollTo({
              top: target,
              behavior: 'smooth',
            });
        });
    })
    
}