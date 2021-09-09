import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
const [plantData, setPlantData] = useState([])
const [actionRequest, setActionRequest] = useState(false)
  

// function updatePlantCard(){
//   fetch(`http://localhost:6001/plants/${id}`, {
//     method:"PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body.JSON.stringify({
//         "price": number
//     }).then(
//       setActionRequest(!actionRequest)
//     )
//   })
// }



function handlePlantForm(newPlant){
setPlantData([...plantData, newPlant])
}

function loadPlants(){
  fetch(' http://localhost:6001/plants')
  .then(resp => resp.json())
  .then(data => setPlantData(data))
}

useEffect(()=> {
  loadPlants()
},[setPlantData,setActionRequest])

  return (
    <div className="app">
      <Header />
      <PlantPage handlePlantForm={handlePlantForm}plants={plantData} plantSetter={setPlantData}/>
    </div>
  );
}

export default App;
