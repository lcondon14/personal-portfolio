/**
 * Title: header-pres.js
 * Author: Laurel Condon
 * Date: 12 Nov 2023
 * Description: Header component page
 */

class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="nav-header">
            <img src="../imgs/portfolio-header.png">
            </div>
        <nav id="navBar">
            <ul class="navList>
                <li><a href="../bucket.html">about</a></li>
                <li><a href="../about.html">home</a><li>
                <li><a href="../projects.html">projects</a></li>
                <li><a href="../api-testing.html">api testing</a></li>
                <li><a href="../data-diagrams.html">database diagrams</a></li>
                <li><a href="../resume.html">resume</a></li>
        
            </ul>
            </nav>
      ` ;
    }
}

customElements.define("nav-pres-component", Nav);