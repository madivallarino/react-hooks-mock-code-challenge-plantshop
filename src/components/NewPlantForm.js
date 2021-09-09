import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewPlantForm({submitPlantForm}) {
  const [name, setPlantName] = useState("")
  const [image, setPlantImage] = useState("")
  const [price, setPlantPrice] = useState("")
  
  function handleSubmit(event){
    event.preventDefault()
    const newPlant = {
      id: uuid(),
      name,
      image,
      price,
    }
  fetch('http://localhost:6001/plants', {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    }, body:JSON.stringify(newPlant)
  }).then((r)=> r.json())
  .then(submitPlantForm(newPlant))
  setPlantName("");
  setPlantImage("");
  setPlantPrice("");
  debugger;
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setPlantName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e)=> setPlantImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPlantPrice(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
