import React, { useState,useEffect } from "react";
import Beverage from "../Beverage/Beverage";
import './BarCard.css';

function BarCard({coctails,onDelete, onEdit,changePrices,nameOfCategory}) 
{
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
  if(coctails.length > 0)
  return ( 
  <div className="barCard">
    <div className="title">{nameOfCategory}<hr/></div>
      <div className="cards">  
      {coctails.map((el) => (
        <Beverage 
        key={el.id} 
        beverage={el} 
        priceColor={lastAdded===-1?"beveragePrice":lastAdded===el.id?"beveragePrice beveragePriceUp":"beveragePrice beveragePriceDown"}
        onDelete={onDelete}
        onEdit={onEdit}
        changePrices={changePrices}
        setLastAdded={setLastAdded}
        />))}  
    </div>
  </div>
  );
  else return(
    <div className="barCard">
      <h3 className="title">No beverages<hr/></h3>
    </div>
    )
}

export default BarCard