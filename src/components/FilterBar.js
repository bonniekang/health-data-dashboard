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
      <div className="filter-box">
        <span>성별</span>
            <Filter value={gender} settingData={setGender} list={genderList}/>
        <span>인종</span>
            <Filter value={race} settingData={setRace} list={raceList}/>
        <span>민족</span> 
            <Filter value={ethnicity} settingData={setEthnicity} list={ethnicityList}/>
        <span>사망 여부</span>
            <Filter value={isDeath} settingData={setIsDeath} list={isDeathList}/>
        <div className="filter-box">
            <form onSubmit={setAgeMin(ageMin)}>
                <span>나이 최소값</span>
                <input className="filter" value={ageMin} onChange={e=>setAgeMin(e.target.value)}/>
            </form>
            <form onSubmit={setAgeMax(ageMax)}>
                <span>나이 최소값</span>  
                <input  className="filter" value={ageMax} onChange={e=>setAgeMax(e.target.value)}/>
            </form>
        </div>
      </div>
    );
  }
  
  export default FilterBar;