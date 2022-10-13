import { LightningElement } from 'lwc';

export default class Augmentor extends LightningElement {
    startCounter = 0;
    handleStartChange(event) {
      this.startCounter = parseInt(event.target.value);
    }
/*In the parent (augmentor), the new button triggers the handleMaximizeCounter handler, 
which calls the child component (numerator) and triggers its public maximizeCounter function.
*/
    handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
        //This function finds the c-numerator tag in augmentor.html and calls the public maximizeCounter function.
      }
}