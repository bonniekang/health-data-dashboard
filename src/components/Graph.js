import React, {useState, useEffect} from "react";
import axios from 'axios'

const PieChart = require("react-chartjs").Pie;



const Graph = ({gender, race, ethnicity}) => {
    const [stats, setStats] = useState([])
    const [genderStats, setGenderStats] = useState([])
    const [raceStats, setRaceStats] = useState([])
    const [ethnicityStats, setEthnicityStats] = useState([])
    const [genderWithRace, setGenderWithRace] = useState([])
    const [genderWithEthnicity, setGenderWithEthnicity] = useState([])

    useEffect(() => {
        async function getStat(){
            const response = await axios.get('http://49.50.167.136:9871/api/patient/stats')
            setStats(response.data.stats)
        }
        getStat();
    }, [])

    useEffect(() => {
        let sum1 = 0;
        let sum2 = 0;
        stats.forEach(s => {
            s.gender === 'F' ? sum1 += s.count : sum2 += s.count
        })
        if(gender === 'M') sum2 = 0
        if(gender === 'F') sum1 = 0
        let female = {value : sum1, color:"#F7464A",
        highlight: "#FF5A5E",
        label: "여성"}
        let male = {value : sum2, color:"#FDB45C",
        highlight: "#FFC870",
        label: "남성"}
        setGenderStats([female, male])
    }, [gender])

    useEffect(() => {
        let sum1 = 0;
        let sum2 = 0;
        let sum3 = 0;
        let sum4 = 0;
        let sum5 = 0;
        stats.forEach(s => {
            if(s.race === 'other') sum1 += s.count
            if(s.race === 'native') sum2 += s.count
            if(s.race === 'black') sum3 += s.count
            if(s.race === 'white') sum4 += s.count
            if(s.race === 'asian') sum5 += s.count
        })

        if(race === 'other') {
            sum2=0
            sum3=0
            sum4=0
            sum5=0
        }
        if(race === 'native') {
            sum1=0
            sum3=0
            sum4=0
            sum5=0
        }
        if(race === 'black') {
            sum1=0
            sum2=0
            sum4=0
            sum5=0
        }
        if(race === 'white') {
            sum1=0
            sum2=0
            sum3=0
            sum5=0
        }
        if(race === 'asian') {
            sum1=0
            sum2=0
            sum3=0
            sum4=0
        }
        
        let other = {value : sum1, color:"#F7464A",
        highlight: "#FF5A5E",
        label: "other"}
        let native = {value : sum2, color:"#FDB45C",
        highlight: "#FFC870",
        label: "native"}
        let black = {value : sum3, color:"#46BFBD",
        highlight: "#5AD3D1",
        label: "black"}
        let white = {value : sum4, color:"#949FB1",
        highlight: "#A8B3C5",
        label: "white"}
        let asian = {value : sum5, color:"#4D5360",
        highlight: "#616774",
        label: "asian"}
        setRaceStats([other, native, black, white, asian])
    }, [race])

    useEffect(() => {
        let sum1 = 0;
        let sum2 = 0;
        stats.forEach(s => {
            s.ethnicity === 'hispanic' ? sum1 += s.count : sum2 += s.count
        })

        if(ethnicity === 'hispanic') sum2 = 0
        if(ethnicity === 'nonhispanic') sum1 = 0

        let hispanic = {value : sum1, color:"#F7464A",
        highlight: "#FF5A5E",
        label: "hispanic"}
        let non = {value : sum2, color:"#FDB45C",
        highlight: "#FFC870",
        label: "nonhispanic"}
        setEthnicityStats([hispanic, non])
    }, [ethnicity])


    
    return (
      <div>
          <div>
            <p>성별 환자 수</p>
            <PieChart data={genderStats} />
          </div>
          <div>
            <p>민족별 환자 수</p>
            <PieChart data={ethnicityStats} />
          </div>
          <div>
            <p>인종별 환자 수</p>
            <PieChart data={raceStats} />
          </div>
      </div>
    );
  }
  
  export default Graph;