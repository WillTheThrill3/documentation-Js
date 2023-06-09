/** Composante Cursor de Timtools */
export default  class Cursor {
    constructor(element) {
      this.element = element;
        // ajouter une classe nommé 'custom-cursor'
      document.documentElement.classList.add('custom-cursor');
  
      this.init();
    }
    init() {
      this.initCursorActions()
      this.initHoverAnimation();
    }
    // une methode pour appeler les EventListener des action de souris
    initCursorActions() {
      document.addEventListener('mousemove', this.followCursor.bind(this));
      document.addEventListener('mousedown', this.onMouseDown.bind(this));
      document.addEventListener('mouseup', this.onMouseUp.bind(this));
    }
    // une methode qui agit lorsque la souris est en hover sur tous les selecteurs ayant la balise 'a, button, details'
    initHoverAnimation() {
      const links = document.querySelectorAll('a, button, details');
  
      for (let i = 0; i < links.length; i++) {
       const link = links[i];
        
       // lorsque la souris entre ou sort d'un selecteur demandé
       link.addEventListener('mouseenter',this.onLinkHover.bind(this));
       link.addEventListener('mouseleave',this.onLinkOut.bind(this));
  
  
      }
    }
    // une methode permettant de suivre le curseur
    followCursor(evt) {
      const mouseX = evt.pageX;
      const mouseY = evt.pageY;
  
      this.element.style.left = `${mouseX}px`;
      this.element.style.top = `${mouseY}px`;
    }
    // ajouter ou retirer une classe 'hover' et 'down' lorsque celui-ci est appelé ou pas
    onLinkHover(){
      this.element.classList.add('hover');
    }
    onLinkOut(){
      this.element.classList.remove('hover');
    }
    onMouseDown(){
      this.element.classList.add('down');
    }
    onMouseUp(){
      this.element.classList.remove('down');
    }
  }
  