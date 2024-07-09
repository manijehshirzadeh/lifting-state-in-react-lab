const BurgerStack = ({ stack, onRemoveFromBurger }) => {
  return (
    <ul>
      {stack.map((item) => {
        return (
          <li
            key={"BurgerStack" + item.name}
            style={{ backgroundColor: item.color }}
          >
            {item.name}
            <button onClick={() => onRemoveFromBurger(item.name)}>x</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
