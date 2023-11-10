import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useRef } from "react";
import './AddCoctail.css';

const AddCoctail = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingrs: "",
    price: 1,
    category: ""
  });

  const myFormRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const handleCategoryChange = (selectedCategory) => {
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory
    }));
  };

  const handleAdd = () => {
    onAdd({
      title: formData.title,
      ingrs: formData.ingrs,
      price: formData.price,
      category: formData.category
    });

    myFormRef.current.reset();
  };

  return (
    <Form ref={myFormRef}>
      <Form.Group className="mb-3" controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="Enter title"
          onChange={handleChange}
          value={formData.title}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicRecipe">
        <Form.Label>Recipe</Form.Label>
        <Form.Control
          type="text"
          name="ingrs"
          placeholder="Enter recipe"
          onChange={handleChange}
          value={formData.ingrs}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          value={formData.price}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCategory">
        <Form.Label>Category</Form.Label>
        <Dropdown onSelect={(eventKey) => handleCategoryChange(eventKey)}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {formData.category}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="Coctail">Coctail</Dropdown.Item>
            <Dropdown.Item eventKey="Shot">Shot</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleAdd}>
        Add
      </Button>
    </Form>
  );
};

export default AddCoctail;