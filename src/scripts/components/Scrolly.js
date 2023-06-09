export default class Scrolly {
    constructor(element) {
        // le rootmargin sert a appliquer une limite à la grandeur de la page et on va se servir de ça pour créer la zone d'apparition
        this.element = element;
      this.options = {
          rootMargin: '0px 0px 0px 0px'
      };  

      this.init();
    }

    init() {
        
        this.observer = new IntersectionObserver(this.watch.bind(this), this.options);
        // chercher tous les selecteurs ayant '[data-scrolly]'  
        const items = this.element.querySelectorAll('[data-scrolly]');
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            this.observer.observe(item);
        }
    }

    watch(entries) {
        // ceci sert a appliquer la classe 'is-active' lorsque le 'target' est dans la zone a intersecter
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            const target = entry.target;
            // si la marge est intersecté, ajoute une classe 'is-active'
            if (entry.isIntersecting) {
                target.classList.add('is-active');
                this.observer.unobserve(target);
            } else {
                target.classList.remove('is-active');
            }
            
        }
    }
}