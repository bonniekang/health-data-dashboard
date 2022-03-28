import React, {useState, useEffect} from "react";
import axios from 'axios';
import Filter from './Filter'

const FilterBar = ({gender, setGender, race, setRace, ethnicity, setEthnicity, ageMin, setAgeMin,ageMax, setAgeMax, isDeath, setIsDeath}) => {
    const [genderList, setGenderList] = useState([])
    const [raceList, setRaceList] = useState([])
    const [ethnicityList, setEthnicityList] = useState([])
    const isDeathList = [true, false]

    useEffect(() => {
        async function getGender(){
            const response = await axios.get('http://49.50.167.136:9871/api/gender/list')
            setGenderList(response.data.genderList)
        }
        getGender();
    },[])
    console.log(genderList)
    useEffect(() => {
        async function getRace(){
            const response = await axios.get('http://49.50.167.136:9871/api/race/list')
            setRaceList(response.data.raceList)
        }
        getRace();
    },[])

    useEffect(() => {
        async function getEthnicity(){
            const response = await axios.get('http://49.50.167.136:9871/api/ethnicity/list')
            setEthnicityList(response.data.ethnicityList)
        }
        getEthnicity();
    },[])
    console.log(genderList, raceList, ethnicityList)

    return (
      <div>
        <Filter value={gender} settingData={setGender} list={genderList}/>
        <Filter value={race} settingData={setRace} list={raceList}/>
        <Filter value={ethnicity} settingData={setEthnicity} list={ethnicityList}/>
        <Filter value={isDeath} settingData={setIsDeath} list={isDeathList}/>
        <div>
            <form onSubmit={setAgeMin(ageMin)}>
                <input value={ageMin} onChange={e=>setAgeMin(e.target.value)}/>
            </form>
            <form onSubmit={setAgeMax(ageMax)}>
                <input value={ageMax} onChange={e=>setAgeMax(e.target.value)}/>
            </form>
        </div>
      </div>
    );
  }
  
  export default FilterBar;