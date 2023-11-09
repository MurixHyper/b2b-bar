import React, { useState,useEffect } from "react";
import {IoCloseCircleSharp, IoHammerSharp} from 'react-icons/io5';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BarCard.css';

function BarCard(props) 
{
    const[lastAdded,setLastAdded]=useState(-1);
    useEffect(()=>{
      if(lastAdded!==-1)
        {
          const timeoutId=setTimeout(()=>
          {
            setLastAdded(-1);
          },2000);
          return()=>clearTimeout(timeoutId);
        }
    },[lastAdded])
    if(props.coctails.length>0)
    return ( 
        <div className="cards">
        {props.coctails.map((el) => (
        <Card className="myOwnCard" style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{el.title}</Card.Title>       
            <Card.Text>{el.ingrs}</Card.Text>
            <Card.Text className={lastAdded===-1?"beveragePrice":lastAdded===el.id?"beveragePrice beveragePriceUp":"beveragePrice beveragePriceDown"}>
                {el.price+'$'}
            </Card.Text>
            <Button onClick={()=>{
                   props.changePrices(el.id)
                   setLastAdded(el.id)
                   }}>Buy</Button>
                   <IoCloseCircleSharp onClick={()=>props.onDelete(el.id)} className="delete-icon"/>
                  <IoHammerSharp className="edit-icon"/>
      </Card.Body>
      </Card>
      ))}  </div>
    );
    else return(
        <div className="barCard">
          <h3>No beverages</h3>
        </div>)
}
export default BarCard