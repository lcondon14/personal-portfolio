/**
 * Title: Footer.js
 * Author: Laurel Condon
 * Date: 11 Nov 2023
 * Description: footer component for portfolio page
 */

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div id="footer">
            <p>
                Copyright &copy; 2023 <a href="https://www.bellevue.edu">Bellevue University</a>
            </p>
        </div>
       ` ;
    }
}

customElements.define("footer-pres-component", Footer);