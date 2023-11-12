import React from "react";
import Beverage from "../Beverage/Beverage";
import './BarCard.css';

function BarCard({coctails,onDelete, onEdit,changePrices,nameOfCategory, priceColor, setLastAdded}) 
{
  if(coctails.length > 0)
  return ( 
  <div className="barCard">
    <div className="title">{nameOfCategory}<hr/></div>
      <div className="cards">  
      {coctails.map((el) => (
        <Beverage 
        key={el.id} 
        beverage={el} 
        priceColor={priceColor}
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