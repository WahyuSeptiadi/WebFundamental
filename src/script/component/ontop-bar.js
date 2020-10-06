class OnTopBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#btnTop").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
          .ontop button {
            display: block;
            position: fixed;
            bottom: 20px;
            right: 30px;
            z-index: 100;
            font-size: 14px;
            border: 2px solid white;
            background-color: red;
            outline: none;
            color: white;
            cursor: pointer;
            padding: 15px;
            border-radius: 50px;
            }

          .ontop button:hover {
            background-color: white;
            color: red;
            border: 2px solid red;
          }
        </style>

        <div class="ontop">
          <button id="btnTop" title="Go to top">UP</button>
        </div>`;

        this.shadowDOM.querySelector("#btnTop").addEventListener("click", this._clickEvent);
    }
}

customElements.define("ontop-bar", OnTopBar);
