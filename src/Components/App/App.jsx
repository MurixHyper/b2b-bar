import React, { useState} from "react";
import BarCard from "../BarCard/BarCard";
import AddCoctail from "../AddCoctail/AddCoctail";
import './App.css';

const App = () => {
  const [coctails, setCoctails] = useState([
    {
      id: 1,
      title: "Gin Tonic",
      ingrs: "Gin, tonic, lime",
      price: 5,
      category: "Coctail"
    },
    {
      id: 2,
      title: "Rom Cola",
      ingrs: "Rom, cola",
      price: 5,
      category: "Coctail"
    },
    {
      id: 3,
      title: "Life happened",
      ingrs: "Mezcal, maraschino liquer, liauer dry orange de kuyper, grapefruit beater, lime juice",
      price: 5,
      category: "Coctail"
    },
    {
      id: 4,
      title: "B-52",
      ingrs: "Coffee liqueur, irish cream liqueur, triple sec",
      price: 3,
      category: "Shot"
    }
  ]);

  const addCoctail = (coctail) => {
    const id = coctails.length + 1;
    setCoctails([...coctails, { id, ...coctail }]);
  };

  const deleteCoctail = (id) => {
    setCoctails(coctails.filter((el) => el.id !== id));
  };

  const changePrices = (id) => {
    const updatedCoctails = coctails.map((el) => {
      if (id === el.id) {
        return { ...el, price: el.price + 2 };
      } else {
        return { ...el, price: el.price - 1 };
      }
    });
    setCoctails(updatedCoctails);
  };

  return (
    <div className="container">
      <header>Menu</header>
      <div className="main-div">
        <main>
          <BarCard coctails={coctails.filter(coctail => coctail.category === "Coctail")} onDelete={deleteCoctail} changePrices={changePrices} nameOfCategory={"Coctails"} />
          <BarCard coctails={coctails.filter(coctail => coctail.category === "Shot")} onDelete={deleteCoctail} changePrices={changePrices} nameOfCategory={"Shots"} />
        </main>
        <aside>
          <AddCoctail onAdd={addCoctail} />
        </aside>
      </div>
    </div>
  );
};

  export default App;