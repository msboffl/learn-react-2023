import React from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Order food online for home delivery in Bangalore. Experience fastest
            food delivery service with no minimum order & GPS tracking.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                name={pizza.name}
                key={pizza.name}
                ingredients={pizza.ingredients}
                photoName={pizza.photoName}
                price={pizza.price}
                soldOut={pizza.soldOut}
              />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're Currently Working on Menu. Please come back later :)</p>
      )}
      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={20}
      />
      <Pizza
        name="Pizza Salamino"
        photoName="pizzas/salamino.jpg"
        ingredients="Tomato, mozarella, and pepperoni"
        price={15}
      /> */}
    </main>
  );
}

function Pizza({ name, photoName, ingredients, price, soldOut }) {
  // console.log(props.soldOut);
  // if (soldOut) return null;
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div className="">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

function OrderOpen({ closedHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 to {closedHour}:00. Come visit us order
        online.{" "}
      </p>
      <button className="btn">Oder</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();

  const openHour = 12;
  const closedHour = 22;

  const isOpen = hour >= openHour && hour <= closedHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <OrderOpen closedHour={closedHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome between {openHour}:00 and {closedHour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're Currently Open");
}

export default App;
