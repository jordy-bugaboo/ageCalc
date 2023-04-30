import { LitElement, html, unsafeCSS } from "lit";
import { inputStyles } from "../style/css";
import style from "../style/css-comp.scss?inline";

export class AgeResult extends LitElement {
  static properties = {
    version: {},
  };

  static styles = [inputStyles, unsafeCSS(style)];

  constructor() {
    super();
    this.version = "STARTING";
  }

  render() {
    return html`
      <div class="c-date-result">
        <div class="">
      <ul>
        <li>
          <span>- -</span> 
          <span>years</span>
        </li>
        <li>
          <span>- - </span>
          <span>months<span>
        </li>
        <li>
          <span>- -</span>
          <span> days</span>
        </li>
      </ul>
        </div>
      </div>
    `;
  }
}
customElements.define("age-result", AgeResult);
