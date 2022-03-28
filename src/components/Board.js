import React, {useState, useEffect} from "react";
import axios from 'axios';
import Table from './Table';
import Graph from './Graph';
import FilterBar from "./FilterBar";

function Board() {
    const [data, setData] = useState([]);
    const [gender, setGender] = useState('');
    const [ageMin, setAgeMin] = useState(0);
    const [ageMax, setAgeMax] = useState(0);
    const [race, setRace] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [isDeath, setIsDeath] = useState('');
    console.log(isDeath)


    useEffect(() => {
        async function getData(){
            const response = await axios.get('http://49.50.167.136:9871/api/patient/list', { params: {
                page: 1, 
                length: 0, 
                order_desc: false, 
                ...(gender && {gender: gender}),
                ...(ageMin && {age_min: ageMin}),
                ...(ageMax && {age_max: ageMax}),
                ...(race && {race:  race}),
                ...(ethnicity && {ethnicity: ethnicity}),
                ...(isDeath && {death : isDeath})
            } })
            setData(response.data.patient.list)
        }
        getData();
    },[gender, race, ethnicity, isDeath, ageMin, ageMax])

    console.log(data)
    return (
      <div>
        Board
        <FilterBar gender={gender} setGender={setGender} race={race} setRace={setRace} ethnicity={ethnicity} setEthnicity={setEthnicity} ageMax={ageMax} setAgeMax={setAgeMax} ageMin={ageMin} setAgeMin={setAgeMin} isDeath={isDeath} setIsDeath={setIsDeath} />
        <Graph gender={gender} ethnicity={ethnicity} race={race}/>
        <Table data={data}/>
      </div>
    );
  }
  
  export default Board;