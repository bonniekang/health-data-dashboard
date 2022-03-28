import React, {useState, useEffect} from "react";
import axios from 'axios';
import Table from './Table';
import Graph from './Graph';

function Board() {
    const [gender, setGender] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getData(){
            const response = await axios.get('http://49.50.167.136:9871/api/patient/list', { params: {
                page: 1, 
                length: 0, 
                order_desc: false, 
                gender: gender} })
            setData(response.data.patient.list)
        }
        getData();
    },[gender])

    console.log(data)
    return (
      <div>
        Board
        <select value={gender} onChange={e=>setGender(e.target.value)}>
            <option value='M'>male</option>
            <option value='F'>female</option>
        </select>
        <Graph />
        <Table data={data}/>
      </div>
    );
  }
  
  export default Board;