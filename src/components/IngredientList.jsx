const IngredientList = ({ availableIngredients, onAddToBurger }) => {
  return (
    <ul>
      {availableIngredients.map((ingredient, index) => {
        return (
          <li
            key={"IngredientList" + ingredient.name + index}
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button
              onClick={() => onAddToBurger(ingredient.name, ingredient.color)}
            >
              +
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
