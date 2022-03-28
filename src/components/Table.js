import React from "react";
import Patient from './Patient'

const Table = ({data}) => {
    console.log(data)
    return (
      <div>
        table
            {
                data.map(d => {
                    return(
                        <ul>
                            <li>환자 id : {d.personID}</li>
                            <li>성별 : {d.gender}</li>
                            <li>생년월일 : {d.birthDatetime}</li>
                            <li>나이 : {d.age}</li>
                            <li>인종 : {d.race}</li>
                            <li>민족 : {d.ethnicity}</li>
                            <li>사망여부 : {d.isDeath ? "yes" : "no"}</li>
                        </ul>
                    )
                })
            }
        <Patient />
      </div>
    );
  }
  
  export default Table;