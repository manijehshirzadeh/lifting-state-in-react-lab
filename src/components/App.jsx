// src/App.jsx

import "../App.css";
import IngredientList from "./IngredientList";
import BurgerStack from "./BurgerStack";
import { useState } from "react";

const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stack, setStack] = useState([]);

  const handelAddToBurger = (name, color) => {
    setStack((prev) => [...prev, { name, color }]);
  };

  const handleRemoveFromBurger = (name) => {
    setStack((prev) => [...prev].filter((item) => item.name !== name));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          availableIngredients={availableIngredients}
          onAddToBurger={handelAddToBurger}
        />
        <BurgerStack
          stack={stack}
          onRemoveFromBurger={handleRemoveFromBurger}
        />
      </section>
    </main>
  );
};

export default App;
