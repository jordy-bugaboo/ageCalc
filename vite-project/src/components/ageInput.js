
import { LitElement, html } from "lit";
import { inputStyles } from "../style/css";

export class AgeInput extends LitElement {
    static properties = {
      version: {},
    };

    static styles = [
      inputStyles, 
    ];
   
    
  
    constructor() {
      super();
      this.version = 'STARTING';
    }
  
    render() {
      return html`
        <div class="c-date-input u-flex u-flex-center u-flex-spacing">
          <div class="date-input u-flex-column">
            <label for="inputDay">DAY</label>
            <input type="text" id="inputDay" placeholder="DD">
          </div>
          <div class="date-input u-flex-column">
            <label for="inputMonth">MONTH</label>
            <input type="text" id="inputMonth" placeholder="MM">
          </div>
          <div class="date-input u-flex-column">
            <label for="inputYear">YEAR</label>
            <input type="text" id="inputYear" placeholder="YYYY">
          </div>
        </div>

        <div class="u-flex u-flex-middle">
          <hr class="o-divider u-hidden--xs u-hidden--sm" area-hidden="true">
          <div class="c-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
          </div>
        </div>
      `;
    }
  }
  customElements.define('age-input', AgeInput);
  