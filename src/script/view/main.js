import "../component/header-bar.js";
import "../component/foodmenu-list.js";
import "../component/ontop-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
  const searchElement = document.querySelector("header-bar");
  const foodListElement = document.querySelector("foodmenu-list");
  const topElement = document.querySelector("ontop-bar");

  // BUTTON SEARCH
  const onButtonSearchClicked = async () => {
    try {
      if (searchElement.value.length == 0) {
        alert("Please Entry Keyword !");
      } else {
        const result = await DataSource.searchFood(searchElement.value);
        renderResult(result);
      }
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = meals => {
    foodListElement.foods = meals;
  };

  const fallbackResult = message => {
    foodListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

  // BUTTON TOP
  const onButtonTopCLicked = async () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  topElement.clickEvent = onButtonTopCLicked;
};

export default main;
