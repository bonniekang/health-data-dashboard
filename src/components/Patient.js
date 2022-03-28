import React, {useEffect, useState} from "react";
import PatientDetail from './PatientDetail'

const Patient = ({ id, gender, birthDatetime, age, race, ethnicity, isDeath}) => {
    const [toggle, setToggle] = useState(false)
    console.log(toggle)

    return (
      <div onClick={() => setToggle(!toggle)}>
        <li>환자 id : {id}</li>
        <li>성별 : {gender}</li>
        <li>생년월일 : {birthDatetime}</li>
        <li>나이 : {age}</li>
        <li>인종 : {race}</li>
        <li>민족 : {ethnicity}</li>
        <li>사망여부 : {isDeath ? "yes" : "no"}</li>
        {toggle && <PatientDetail id={id}/> }
        <br />
      </div>
    );
  }
  
  export default Patient;