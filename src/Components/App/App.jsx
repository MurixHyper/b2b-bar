import React from "react";
import BarCard from "../BarCard/BarCard";
import AddCoctail from "../AddCoctail/AddCoctail";
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props)
      this.state={
        coctails:[
          {
            id: 1,
            title: "Gin Tonic",
            ingrs: "Gin, tonic, lime",
            price: 5
          },
          {
            id: 2,
            title: "Rom Cola",
            ingrs: "Rom, cola",
            price: 5
          },
          {
            id: 3,
            title: "Life happened",
            ingrs: "Mezcal, maraschino liquer, liauer dry orange de kuyper, grapefruit beater, lime juice",
            price: 5
          }
        ]
        // shots:[
        //   {
        //     id: 1,
        //     title: "B-52",
        //     ingrs: "Coffee liqueur, irish cream liqueur, triple sec",
        //     price: 3
        //   }
        // ]
      }
      this.addCoctail=this.addCoctail.bind(this)
      this.deleteCoctail=this.deleteCoctail.bind(this)
      this.changePrices=this.changePrices.bind(this)
    }
    render(){
      return(
        <div className="container">
          <div className="main-div">
            <main>
              <BarCard coctails={this.state.coctails} onDelete={this.deleteCoctail} changePrices={this.changePrices}/>
            </main>
            <aside>
              <AddCoctail onAdd={this.addCoctail}/>
            </aside>
          </div>
        </div>
      )
    }
    addCoctail(coctail){
      const id=this.state.coctails.length+1
      this.setState({coctails:[...this.state.coctails,{id,...coctail}]})
    }
    deleteCoctail(id){
      this.setState({
        coctails: this.state.coctails.filter((el)=>el.id!==id)
      })
    }
    changePrices(id){
      const updatedCoctails = this.state.coctails.map((el) => {
        if (id === el.id) {
          return {...el,price: el.price +2};
        }
        else {
          return {...el,price:el.price -1};
        }
      });
      this.setState({
        coctails: updatedCoctails
      })
    }
  }

  export default App;