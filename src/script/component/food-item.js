class FoodItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set food(food) {
        this._food = food;
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

                :host {
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                    cursor : pointer;
                    background-color: white;
                }

                .food-image {
                    display: inline-block;
                    width: 100%;
                    height: 300px;
                    object-position: center;
                }

                .food-image:hover {
                    display: inline-block;
                    width: 100%;
                    height: 300px;
                    object-position: center;
                    opacity:50%;
                }

                .food-info {
                    padding: 24px;
                }

                .food-info > h2 {
                    text-align: center;
                    font-weight: lighter;
                }

                .food-info > h4 {
                    text-align: center;
                    font-weight: lighter;
                }

                .food-info > p {
                    margin-top: 10px;
                    margin-bottom: 20px;
                    overflow: hidden;
                    text-align: justify;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 15;
                }

                a {
                  color: #1e0fbe;
                }

                a:hover {
                  color: #3b5998;
                }

            </style>
            <img class="food-image" src="${this._food.strMealThumb}" alt="./assets/image/codeart.png">
            <div class="food-info">
                <h2>${this._food.strMeal}</h2>
                <h4>${this._food.strArea}</h4>
                <p>${this._food.strInstructions}</p>
                <a href="${this._food.strYoutube}">Link Tutorial</a>
            </div>`;
    }
}

customElements.define("food-item", FoodItem);
