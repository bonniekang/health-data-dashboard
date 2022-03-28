import React from "react";
import Patient from './Patient'

const Table = ({data}) => {
    return (
      <div>
            {
                data.map(d => {
                    return(
                        <div>
                            <Patient id={d.personID} gender={d.gender} birthDatetime={d.birthDatetime} age={d.age} race={d.race} ethnicity={d.ethnicity} isDeath={d.isDeath}/>
                        </div>
                    )
                })
            }
      </div>
    );
  }
  
  export default Table;