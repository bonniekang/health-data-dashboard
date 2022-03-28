import React, {useState, useEffect} from "react";
import axios from 'axios'

const PatientDetail = ({id}) =>{
    const [conditions, setConditions] = useState([])
    const [visitNum, setVisitNum] = useState('')

    useEffect(() => {
        async function getDetail(){
            const response = await axios.get(`http://49.50.167.136:9871/api/patient/brief/${id}`)
            setConditions(response.data.conditionList)
            setVisitNum(response.data.visitCount)
        }
        getDetail();
    },[])
    console.log(conditions, visitNum)
    return(
        <div>
            <h3>환자{id} 상세정보</h3>
            <div>
                <h5>진단 정보</h5>
                {conditions.map(c => {
                    return(
                        <p>{c}</p>
                    )
                })}
            </div>
            <div>
                <h5>전체 방문 수 : {visitNum}</h5>
            </div>
        </div>
    )
}

export default PatientDetail;