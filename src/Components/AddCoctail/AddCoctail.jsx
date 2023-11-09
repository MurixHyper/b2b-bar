import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";
import './AddCoctail.css';


class AddCoctail extends React.Component {
    constructor(props){
      super(props)
      this.state={
        title: "",
        ingrs: "",
        price: 1
      }
    }
    render(){
    return (
      <Form ref={(el) => this.myForm = el}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={(e)=>this.setState({title: e.target.value})}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRecipe">
          <Form.Label>Recipe</Form.Label>
          <Form.Control type="text" placeholder="Enter recipe" onChange={(e)=>this.setState({ingrs: e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Price" onChange={(e)=>this.setState({price: Number(e.target.value)})}/>
        </Form.Group>
        <Button variant="primary" type="button" onClick={()=>{
          this.myForm.reset();
          this.props.onAdd({
          title: this.state.title,
          ingrs: this.state.ingrs,
          price: this.state.price})}}>
          Add
        </Button>
      </Form>
    );}
  }

  export default AddCoctail;