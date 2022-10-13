import { api, LightningElement } from 'lwc';

export default class Numerator extends LightningElement {

   // @api counter = 0;

/* For the additional functionality, we implement the counter property as a getter and setter (get and set,
     also known as an accessor property). Then every time the counter is set, 
we store the current counter value (_currentCount) in the priorCount variable before setting the new counter value.
We updated the numerator component to use a getter and setter to update the new priorCount property.
 The parent component (augmentor) still sends information (startCounter) to the child component (numerator). But now, 
the numerator uses a getter and setter to get the _currentCount property and set the _currentCount and priorCount properties.
*/
   _currentCount = 0;
   priorCount = 0;
   @api
   get counter() {
     return this._currentCount;
   }
   set counter(value) {
     this.priorCount = this._currentCount;
     this._currentCount = value;
   }

    handleIncrement() {
        this.counter++;
    }

    handleDecrement() {
        this.counter--;
    }

    //Here the handleMultiply function gets the onmultiply event passed in 
    //and uses its data (event.detail) to update the count (counter).
    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
      }

      @api
      maximizeCounter() {
        this.counter += 1000000;
      }
}