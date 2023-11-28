import React, { useState, useEffect} from "react";
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

  const[lastAdded,setLastAdded]=useState(-1);
  useEffect(() => {
    if(lastAdded !== -1)
    {
      const timeoutId = setTimeout(() =>
      {
        setLastAdded(-1);
      },2000);
      return() => clearTimeout(timeoutId);
    }
  }, [lastAdded])

  const addCoctail = (coctail) => {
    const id = coctails.length + 1;
    setCoctails([...coctails, { id, ...coctail }]);
  };

  const editCoctail = (coctail) => {
  setCoctails((prevCoctails) => {
    const updatedCoctails = [...prevCoctails];
    updatedCoctails[coctail.id - 1] = coctail;
    return updatedCoctails;
  }); 
};

  const deleteCoctail = (id) => {
    setCoctails(coctails.filter((el) => el.id !== id));
  };

  const changePrices = (id) => {
    const updatedCoctails = coctails.map((el) => {
      if (id === el.id) {
        return { ...el, price: parseFloat((el.price + 0.1).toFixed(2)) };
      } else {
        return { ...el, price: (0<el.price && el.price<=0.1)? 0.1: parseFloat((el.price - 0.09).toFixed(2)) };
      }
    });
    setCoctails(updatedCoctails);
  };

  const priceColor = (id) => {
    return lastAdded===-1?"beveragePrice":lastAdded===id?"beveragePrice beveragePriceUp":"beveragePrice beveragePriceDown"
  }

  return (
    <div className="container">
      <header>Menu<hr/></header>
      <div className="main-div">
        <main>
          <BarCard 
          coctails={coctails.filter(coctail => coctail.category === "Coctail")} 
          onDelete={deleteCoctail}
          onEdit={editCoctail} 
          priceColor={priceColor}
          setLastAdded={setLastAdded}
          changePrices={changePrices} 
          nameOfCategory={"Coctails"} />
          <BarCard 
          coctails={coctails.filter(coctail => coctail.category === "Shot")} 
          onDelete={deleteCoctail}
          onEdit={editCoctail} 
          priceColor={priceColor}
          setLastAdded={setLastAdded}
          changePrices={changePrices} 
          nameOfCategory={"Shots"} />
        </main>
        <aside>
          <AddCoctail onAdd={addCoctail} buttonText={"Add"} divForm={"div-form-add"}/>
        </aside>
      </div>
    </div>
  );
};

  export default App;