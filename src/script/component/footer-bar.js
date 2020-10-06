class FooterBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          p {
            text-align: center;
            display: block;
            font-family: 'Satisfy', cursive;
            background-color: #03A9F4;
            padding: 12px;
            color: white;
            margin-top: 810px;
          }

          a {
            color: blue;
          }

          a:hover {
            color: white;
          }
        </style>

        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">

        <p>&copy; Copyright 2020 | built by <a href="https://github.com/WahyuSeptiadi">Wahyu Septiadi</a></p>`;
    }
}

customElements.define("footer-bar", FooterBar);
