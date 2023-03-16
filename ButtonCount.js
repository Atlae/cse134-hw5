// All of the code to make button-count work must be written inside of a class titled ButtonCount inside a file titled ButtonCount.js
// The element button-count must be defined in the custom elements registry (this should be a single line of code underneath your class)
// button-count must be an autonomous custom element, meaning it should extend HTMLElement, not any other element
// All of the markup inside of button-count must be inside of the Shadow DOM (i.e. attached to a shadow root)
// As long as the above is requirements are met, the exact implementation of how it works is up to you.

class ButtonCount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #4CAF50;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    cursor: pointer;
                }
            </style>
            <button>Times Clicked: 0</button>
        `;
        const button = this.shadowRoot.querySelector('button');
        console.log(button.innerText);
        button.addEventListener('click', () => {
            button.innerText = `Times Clicked: ${parseInt(button.innerText.split(': ')[1]) + 1}`;
        });
    }
}

customElements.define('button-count', ButtonCount)
