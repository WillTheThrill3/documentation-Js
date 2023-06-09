import Utils from '../utils/Utils';

export default class Modal {
      constructor(element) {
        this.element = element;
        this.modalId = this.element.dataset.modalId;
        this.init();
    }

    init() {
        this.element.addEventListener('click', this.open.bind(this));

        this.close = this.close.bind(this);
    }

    updateContent() {
        if (this.modalId == 'tpl-modal-tool') {
            
            this.modalElement.innerHTML = Utils.parseTemplate(
                this.modalElement.innerHTML,
                 { title: this.element.dataset.modalTitle });
        }
    }

    open(event) {
        event.preventDefault();

        this.appendModal();
    }

    close(event) {
        document.documentElement.classList.remove('modal-is-active');
        this.closebutton.removeEventListener('click', this.close);

        setTimeout(this.destroy.bind(this), 1000); 
        
        // j'ai essayé, il faut cliquer sur le bouton X pour fermer le modale pour la première fois, ensuite on peut cliquez sur 'Escape'
        // mais le problème c'est que ça ne détruit pas <div class="modal">...</div> lorsque j'appui sur 'Escape'
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape'||event.key === 'click') {
                document.documentElement.classList.remove('modal-is-active');
                this.closebutton.removeEventListener('keydown', this.close);
                setTimeout(this.destroy.bind(this), 1000); 
            }
        })


    }

    destroy() {
        this.modalElement.parentElement.removeChild(this.modalElement);
    }

    appendModal() {
      const template = document.querySelector(`#${this.modalId}`);

      if (template) {
        this.modalElement = template.content.firstElementChild.cloneNode(true);


        this.updateContent();

        document.body.appendChild(this.modalElement);

        this.element.getBoundingClientRect();
        document.documentElement.classList.add('modal-is-active');

        this.closebutton = this.modalElement.querySelector('.js-close');
        this.closebutton.addEventListener('click', this.close);
      } 
      else {
         
      }
    }
}