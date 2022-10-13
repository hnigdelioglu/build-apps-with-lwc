import { api, LightningElement } from 'lwc';

export default class Button extends LightningElement {
    @api label;
    @api icon;
    handleButton(event) {
      this.dispatchEvent(new CustomEvent('buttonclick',{
        bubbles: true
    //To allow the event (buttonclick) to bubble up to the lightning-layout-item, we add bubbles: true in the CustomEvent.
      }));
    }
}