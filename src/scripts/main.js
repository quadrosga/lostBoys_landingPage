document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    const heroSection = document.querySelector('.hero');
    const heroHeight = heroSection.clientHeight;

    window.addEventListener('scroll', function(){
        const currentPosition = window.scrollY;

        if(currentPosition < heroHeight) {
            hideHeaderElements();
        }
        else {
            showHeaderElements();
        }
    })

    // Seção de abas, ativação por clique     
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const targetTab = button.target.dataset.tabButton;
            const Tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            hideAllTabs();
            Tab.classList.add('castcrew__list--is-active');
            removeActiveButton();
            button.target.classList.add('castcrew__tabs__button--is-active');
        })
    }
})

function hideHeaderElements() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function showHeaderElements() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function removeActiveButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for( let i = 0; i <buttons.length; i++) {
        buttons[i].classList.remove('castcrew__tabs__button--is-active');
    }
}

function hideAllTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('castcrew__list--is-active');
    }
}