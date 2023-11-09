import './Beverage.css';
import React, { useState } from "react";
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AddCoctail from '../AddCoctail/AddCoctail';

function Beverage({beverage, priceColor, onDelete, setLastAdded,changePrices}){
    const[editForm,setEditForm]=useState(false);
    return(
      <Card className="myOwnCard" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{beverage.title}</Card.Title>       
            <Card.Text>{beverage.ingrs}</Card.Text>
            <Card.Text className={priceColor}>
              {beverage.price+'$'}
            </Card.Text>
            <Button onClick={()=>{
              changePrices(beverage.id)
              setLastAdded(beverage.id)}}>Buy</Button>
            <IoCloseCircleSharp onClick={()=>onDelete(beverage.id)} className="delete-icon"/>
            <IoHammerSharp onClick={()=>{
              setEditForm(!editForm)}} className="edit-icon"/>
              {editForm===true && <AddCoctail/>}
        </Card.Body>
      </Card>
    )
  }

  export default Beverage