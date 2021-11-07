import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import SensorList from './SensorList';
import axios from "axios";
const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [sensorListDefault, setSensorListDefault] = useState();
  const [sensorList, setSensorList] = useState();

  const fetchData = async () => {
    return await axios.get("./testsensor.json")
      .then(response => {setSensorList(response.data) 
        setSensorListDefault(response.data)
      })
    //   .then(data => {
    //      setSensorList(data) 
    //      setSensorListDefault(data)
    //    })
       .catch(err=>console.log(err));}

  const updateInput = async (input) => {
      console.log("TEST");
     const filtered = sensorListDefault.filter(sensor => {
      return sensor.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setSensorList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Sensor List</h1>
      <SearchBar 
       keyword={input} 
       setKeyword={() => updateInput()}
      />
      <SensorList sensorList={sensorList}/>
    </>
   );
}


export default SearchPage