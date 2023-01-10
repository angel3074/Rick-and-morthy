import axios from "axios";
import React, { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo";

const RickAndMorthy = () => {
  const [locations, setLocations] = useState({});
  const [searchId, setSearchId] = useState('');

  // useEffect(() => {
  //   const randomLocation = Math.floor(Math.random() * 126) + 1;
  //   axios
  //     .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
  //     .then((res) => setLocations(res.data));
  // }, []);
 
  const searchLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
    .then((res) => setLocations(res.data));
  }

  console.log(locations);
  return (
    <div className="backgroundGeneral">
      <div className="workingSpace">
      <div className="inputBar">
        <form>
            <input 
            type="text" 
            value={searchId}
            onChange={e => setSearchId(e.target.value)}
            placeholder="Type your id"
            /> 
        </form>
        <button onClick={searchLocation}><i style={{fontSize: 14}} className="fa-solid fa-magnifying-glass"></i></button>
      </div>
      
      <div className="planetInfo">

      <div className="doPlanetInfo" style={{color: 'white'}}>
        <h1>{locations.name}</h1> <br /> 
        <li> <b>Type:</b>  {locations.type}</li> 
        <li> <b>Dimension:</b> {locations.dimension}</li>
        <li> <b>Population:</b> {locations.residents?.length}</li>

      </div>
 
      </div>

        <ul>
          {
            
            locations.residents?.map(location => (
              <ResidentInfo 
              locations={location}
              key={location}
              />
            ))
            
          }
        </ul>
      </div>
    
    </div>
  );
};

export default RickAndMorthy;
