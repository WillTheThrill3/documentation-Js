/** Composante Header de Timtools */
export default class Header {
    constructor(element) {
        // des variables globales qui seront utilisés dans différentes methodes selon le besoin
        this.element = element;
        this.scrollLimit = 0.1;
        this.scrollPosition = 0;
        this.lastScrollPosition = 0;
        this.html = document.documentElement;

        this.init();
        this.initNavMobile();
    }

    init() {

        // un EventListener de type scroll dans le navigateur 'window'
        window.addEventListener('scroll', this.onScroll.bind(this));
    }

    // une methode qui agit en fonction du 'scroll'
    onScroll(event) {
        
        this.lastScrollPosition = this.scrollPosition;
        this.scrollPosition = document.scrollingElement.scrollTop;

        this.setHeaderState();
        this.setDirectionState();
    }

    // une methode qui ajoute la classe 'header-is-hidden' lorsque la position du scroll est supérieur à la hauteur du site multiplié par 
    // la limite du scroll assigné dans le constructeur, à l'inverse, la classe sera retiré
    setHeaderState() {
        const scrollHeight = document.scrollingElement.scrollHeight;

        if (this.scrollPosition > scrollHeight * this.scrollLimit) {
            this.html.classList.add('header-is-hidden');
        } else {
            this.html.classList.remove('header-is-hidden');
        }
    }

    // une methode permettant de savoir si on 'scroll up' ou 'scroll down' et essentiellement faire apparaître le header lorsqu'on
    // 'scroll up', à l'inverse, le header disparait
    setDirectionState() {
        if (this.scrollPosition >= this.lastScrollPosition) {     
            this.html.classList.add('is-scrolling-down');
            this.html.classList.remove('is-scrolling-up');
        } else {
            this.html.classList.remove('is-scrolling-down');
            this.html.classList.add('is-scrolling-up');
        }
    }

    // une methode dédié à la version mobile permettant de faire un 'toggle' pour le selecteur '.js-toggle'
    initNavMobile() {
        const toggle = this.element.querySelector('.js-toggle');

        toggle.addEventListener('click', this.onToggleNav.bind(this));
    }

    // une methode qui toggle la classe 'nav-is-active'
    onToggleNav() {
        this.html.classList.toggle('nav-is-active');
    }
}