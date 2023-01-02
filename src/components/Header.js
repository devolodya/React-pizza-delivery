import "../scss/Header.scss";

const Header = () => {
  return (
    <header>
      <div id="headerItems">
        <div>
          <img
            src="https://www.svgrepo.com/show/202539/pizza.svg"
            alt="pizza"
          />
          Pizzaball
        </div>

        <button>Кошик порожній</button>
      </div>
    </header>
  );
};

export default Header;
