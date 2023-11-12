import './Beverage.css';
import React, { useState } from "react";
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddCoctail from '../AddCoctail/AddCoctail';

function Beverage({beverage, priceColor, onDelete, onEdit, setLastAdded,changePrices}){
    const[editForm,setEditForm]=useState(false);
    return(
      <Card className="myOwnCard" style={{ width: '18rem' }}>
        <Card.Body> 
          <div className="cardBody">
            <Card.Title>{beverage.title}</Card.Title>       
            <Card.Text className="text">{beverage.ingrs}</Card.Text>
            <Card.Text className={priceColor(beverage.id)}>
              {beverage.price+'$'}
            </Card.Text>
          </div>
          <div className="coctail">
            {editForm===true && <AddCoctail coctail={beverage} onAdd={onEdit} buttonText={"Edit"} divForm={"div-form-edit"}/>}
          </div>
          <div className="buttons">
            <Button className="buttonBuy" onClick={()=>{
              changePrices(beverage.id)
              setLastAdded(beverage.id)}}>Buy</Button>
            <div className="deleteEditIcons">
              <IoCloseCircleSharp onClick={()=>onDelete(beverage.id)} className="delete-icon"/>
              <IoHammerSharp onClick={()=>{
                setEditForm(!editForm)}} className="edit-icon"/>
            </div>
          </div>
        </Card.Body>
      </Card>
    )
  }

  export default Beverage