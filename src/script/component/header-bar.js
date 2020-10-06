class HeaderBar extends HTMLElement {

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
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          nav {
            display: flex;
            background-color: #03A9F4; /* Warna navbar */
            color: #b5fbff;
            justify-content: space-around;
            height: 50px;
            align-items: center;
            position: sticky;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }

          nav .logo {
            font-family: 'Satisfy', cursive;
            letter-spacing: 2px;
            cursor: pointer;
          }

          h4:hover {
            color: white;
          }

          .search-container {
            float: right;
          }

          input[type=text] {
            padding: 6px;
            font-size: 15px;
            border: solid 0.2px #b5fbff;
          }

          .search-container button {
            float: right;
            padding: 6px;
            margin-right: 16px;
            background: #ddd;
            font-size: 15px;
            color: white;
            background: #03A9F4;
            border: solid 0.2px #b5fbff;
            cursor: pointer;
          }

          .search-container button:hover {
            background: white;
            color: black;
          }

          /* Responsive breakpoint */
          @media screen and (min-width:200px) and (max-width:500px) {
            .search-container button {
              float: right;
              padding: 6px;
              margin-right: 2px;
              background: #ddd;
              font-size: 15px;
              color: white;
              background: #03A9F4;
              border: solid 0.2px #b5fbff;
              cursor: pointer;
            }

            input[type=text] {
              padding-left: 16px;
              font-size: 15px;
              width:140px;
              right:0;
              border: solid 0.2px #b5fbff;
            }
          }

          @media screen and (min-width:0px) and (max-width:380px) {
            .search-container button {
              display: none;
            }

            input[type=text] {
              display: none;
            }
          }
        </style>

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Satisfy&display=swap" rel="stylesheet">

        <nav>
          <div class="logo">
            <h4>Food Recipes Finder</h4>
          </div>
          <div class="search-container">
            <input id="searchElement" type="text" placeholder="Search Food .." autocomplete="off">
            <button id="searchButtonElement" type="submit">Search</button>
          </div>
        </nav>`;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("header-bar", HeaderBar);
