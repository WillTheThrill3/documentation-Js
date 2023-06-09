import Icons from './utils/Icons';
import Carousel from './components/Carousel';
import Cursor from './components/Cursor';
import Header from './components/Header';
import Scrolly from './components/Scrolly';
import Modal from './components/Modal';

class Main {
  constructor() {
    this.init();
  }

  init() {
    // On ajoute une classe sur le html
    // pour qu'on puisse savoir si le JavaScript est
    // supporté dans notre css
    document.documentElement.classList.add('has-js');

    new Cursor(document.querySelector("[data-component='Cursor']"));

    const components = document.querySelectorAll('[data-component]');

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (componentName == 'Carousel') {
        new Carousel(element);
      } else if (componentName == 'Header') {
        new Header(element);
      } else if (componentName == 'Scrolly') {
        new Scrolly(element);
      } else if (componentName == 'Modal') {
        new Modal(element);
      } else {
        console.log(`La composante ${componentName} n'existe pas`);
      }
    }

    Icons.load();
  }
}
new Main();
