import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResidentInfo = ({locations}) => {

  const [showResident, setShowResident] = useState({});

  useEffect(() => {
    axios.get(`${locations}`)
      .then(res => setShowResident(res.data))
  },[])

  console.log(showResident)
  return (
    <div className='residentInfo'>
      <div className=''>
      <ul style={{color: 'white'}}>
              <img src={showResident.image} alt="" />
              <li>{showResident?.name}</li>
              <li>{showResident?.status}</li>
              <li>{showResident?.origin?.name}</li>
              <li>{showResident?.episode?.length}</li>
        </ul>
      </div>

    </div>
  );
};

export default ResidentInfo;