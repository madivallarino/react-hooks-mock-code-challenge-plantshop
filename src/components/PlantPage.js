import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, plantSetter, handlePlantForm }) {
  const [searchPlant, setSearchPlant] = useState("")
  const visiblePlants = plants.filter((plant) => searchPlant === "" || plant.name.toLowerCase().includes(searchPlant.toLowerCase()))


  return (
    
    <main>
      <NewPlantForm submitPlantForm={handlePlantForm}/>
      <Search search={searchPlant} searchSetter={setSearchPlant}/>
      <PlantList plants={visiblePlants} plantSetter={plantSetter}/>
    </main>
  );
}

export default PlantPage;
