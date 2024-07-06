const IngredientList = (props) => {
  const availableIngredients = props.availableIngredients;
  return (
    <ul>
      {availableIngredients.map((ingredient) => {
        return (
          <li key={ingredient.name}>
            {ingredient.name}
            <button>*</button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
